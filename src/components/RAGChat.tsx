import { useState, useRef, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Send, Bot, User, Sparkles, BookOpen, Loader2, Filter, ArrowLeft, Plus, Trash2, MessageSquare, History, X } from 'lucide-react';
import { Separator } from './ui/separator';
import MathJax from "react-mathjax-next";


interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: Array<{
    title: string;
    subject: string;
    difficulty: string;
    level?: string;
  }>;
}

interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  timestamp: Date;
}

interface RAGChatProps {
  course: string;
  level: string;
  allChapters: Array<{
    id: string;
    title: string;
    description: string;
    keyPoints: string[];
    example: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    formula?: string;
    subjectName?: string;
    level?: string;
  }>;
  onClose?: () => void;
  userEmail?: string;
}

export function RAGChat({ course, level, allChapters, onClose, userEmail }: RAGChatProps) {
  // Extract unique levels from chapters for the level filter
  // This allows admins to filter by specific levels when they have access to multiple levels
  const availableLevels = Array.from(new Set(allChapters.map(ch => ch.level).filter(Boolean))) as string[];
  const hasMultipleLevels = availableLevels.length > 1;
  
  // Level filter state - 'all' means search across all available levels
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<string>('all');
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Load chat history on mount
  useEffect(() => {
    if (userEmail) {
      const storedSessions = localStorage.getItem(`chat_history_${userEmail}`);
      if (storedSessions) {
        const sessions = JSON.parse(storedSessions);
        // Convert timestamp strings back to Date objects
        const parsedSessions = sessions.map((s: any) => ({
          ...s,
          timestamp: new Date(s.timestamp)
        }));
        setChatSessions(parsedSessions);
        
        // Load the most recent session or create a new one
        if (parsedSessions.length > 0) {
          const mostRecent = parsedSessions[0];
          setCurrentSessionId(mostRecent.id);
          setMessages(mostRecent.messages);
        } else {
          createNewChat();
        }
      } else {
        createNewChat();
      }
    } else {
      // No user email, just create a new chat without persistence
      createNewChat();
    }
  }, [userEmail]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Save current session to localStorage whenever messages change
  useEffect(() => {
    if (userEmail && currentSessionId && messages.length > 0) {
      saveChatSession();
    }
  }, [messages]);

  // Save chat session to localStorage
  const saveChatSession = () => {
    if (!userEmail || !currentSessionId) return;

    const sessionExists = chatSessions.find((s: ChatSession) => s.id === currentSessionId);
    
    let updatedSessions: ChatSession[];
    
    if (sessionExists) {
      updatedSessions = chatSessions.map((session: ChatSession) => 
        session.id === currentSessionId 
          ? { ...session, messages, timestamp: new Date() }
          : session
      );
    } else {
      const newSession: ChatSession = {
        id: currentSessionId,
        title: generateChatTitle(messages),
        messages,
        timestamp: new Date()
      };
      updatedSessions = [newSession, ...chatSessions];
    }

    setChatSessions(updatedSessions);
    localStorage.setItem(`chat_history_${userEmail}`, JSON.stringify(updatedSessions));
  };

  // Generate chat title from first user message
  const generateChatTitle = (msgs: Message[]): string => {
    const firstUserMsg = msgs.find(m => m.role === 'user');
    if (firstUserMsg) {
      const content = firstUserMsg.content.substring(0, 50);
      return content.length < firstUserMsg.content.length ? content + '...' : content;
    }
    return `Chat ${new Date().toLocaleDateString()}`;
  };

  // Create a new chat session
  const createNewChat = () => {
    const newId = Date.now().toString();
    const welcomeMessage: Message = {
      id: '1',
      role: 'assistant',
      content: `Hello! I'm your AI study assistant for ${course} - ${level}. I can help you understand concepts, explain topics, and answer questions based on your course content. What would you like to learn about today?`
    };
    
    setCurrentSessionId(newId);
    setMessages([welcomeMessage]);
    setShowHistory(false);
  };

  // Switch to a different chat session
  const switchToChat = (sessionId: string) => {
    const session = chatSessions.find(s => s.id === sessionId);
    if (session) {
      setCurrentSessionId(session.id);
      setMessages(session.messages);
      setShowHistory(false);
    }
  };

  // Delete a chat session
  const deleteChat = (sessionId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    const updatedSessions = chatSessions.filter(s => s.id !== sessionId);
    setChatSessions(updatedSessions);
    
    if (userEmail) {
      localStorage.setItem(`chat_history_${userEmail}`, JSON.stringify(updatedSessions));
    }

    // If we deleted the current chat, switch to another or create new
    if (sessionId === currentSessionId) {
      if (updatedSessions.length > 0) {
        switchToChat(updatedSessions[0].id);
      } else {
        createNewChat();
      }
    }
  };

  // Format timestamp for display
  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - timestamp.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return timestamp.toLocaleDateString();
  };

  // Simple keyword-based retrieval with level filtering
  const retrieveRelevantChapters = (query: string) => {
    const queryLower = query.toLowerCase();
    const keywords = queryLower.split(' ').filter(word => word.length > 3);
    
    // Filter chapters by selected level
    const filteredChapters = selectedLevelFilter === 'all' 
      ? allChapters 
      : allChapters.filter(ch => ch.level === selectedLevelFilter);
    
    const scoredChapters = filteredChapters.map(chapter => {
      let score = 0;
      const searchableText = `${chapter.title} ${chapter.description} ${chapter.keyPoints.join(' ')} ${chapter.example}`.toLowerCase();
      
      // Score based on keyword matches
      keywords.forEach(keyword => {
        const matches = (searchableText.match(new RegExp(keyword, 'g')) || []).length;
        score += matches;
        
        // Boost score if keyword is in title
        if (chapter.title.toLowerCase().includes(keyword)) {
          score += 5;
        }
      });
      
      return { chapter, score };
    });

    // Return top 3 relevant chapters
    return scoredChapters
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(item => item.chapter);
  };

  // Generate response based on retrieved chapters
  const generateResponse = (query: string, relevantChapters: typeof allChapters) => {
    if (relevantChapters.length === 0) {
      return {
        content: "I couldn't find specific information about that in your current course materials. Could you rephrase your question or ask about topics covered in your syllabus?",
        sources: []
      };
    }

    const primaryChapter = relevantChapters[0];
    
    // Build contextual response
    let response = `Based on your course content, here's what I found:\n\n`;
    response += `**${primaryChapter.title}**\n\n`;
    response += `${primaryChapter.description}\n\n`;
    
    if (primaryChapter.formula) {
      response += `**Formula:**\n${primaryChapter.formula}\n\n`;
    }
    
    response += `**Key Points:**\n`;
    primaryChapter.keyPoints.slice(0, 4).forEach((point, idx) => {
      response += `${idx + 1}. ${point}\n`;
    });
    
    response += `\n**Example:**\n${primaryChapter.example}\n\n`;
    
    if (relevantChapters.length > 1) {
      response += `**Related Topics:**\n`;
      relevantChapters.slice(1).forEach(chapter => {
        response += `• ${chapter.title}\n`;
      });
    }

    return {
      content: response,
      sources: relevantChapters.map(ch => ({
        title: ch.title,
        subject: ch.subjectName || 'Course Content',
        difficulty: ch.difficulty,
        level: ch.level
      }))
    };
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    
    try {
      const res = await fetch('https://arthadokai.onrender.com/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      })

      const data = await res.json()
      const assistantMessage: Message = { 
        id: (Date.now() + 1).toString(),
        role: 'assistant', 
        content: data.answer 
      }
      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      const errMessage: Message = { 
        id: (Date.now() + 1).toString(),
        role: 'assistant', 
        content: 'Error: ' + (err instanceof Error ? err.message : String(err))
      }
      setMessages(prev => [...prev, errMessage]);
    } finally {
      setIsLoading(false)
    }
    
    // Simulate processing delay for better UX
    // setTimeout(() => {
    //   const relevantChapters = retrieveRelevantChapters(input);
    //   const { content, sources } = generateResponse(input, relevantChapters);

    //   const assistantMessage: Message = {
    //     id: (Date.now() + 1).toString(),
    //     role: 'assistant',
    //     content,
    //     sources
    //   };

    //   setMessages(prev => [...prev, assistantMessage]);
    //   setIsLoading(false);
    // }, 800);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300';
      case 'advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div className="flex h-full">
      {/* Chat History Sidebar */}
      {showHistory && (
        <div className="w-80 border-r dark:border-gray-700 flex flex-col bg-white dark:bg-gray-900">
          <div className="p-4 border-b dark:border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <History className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-gray-900 dark:text-gray-100">Chat History</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowHistory(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <Button
              onClick={createNewChat}
              className="w-full gap-2 bg-indigo-600 hover:bg-indigo-700"
              size="sm"
            >
              <Plus className="w-4 h-4" />
              New Chat
            </Button>
          </div>
          
          <ScrollArea className="flex-1">
            <div className="p-2 space-y-1">
              {chatSessions.length === 0 ? (
                <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                  <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p className="text-sm">No chat history yet</p>
                </div>
              ) : (
                chatSessions.map((session) => (
                  <div
                    key={session.id}
                    onClick={() => switchToChat(session.id)}
                    className={`p-3 rounded-lg cursor-pointer transition-colors group ${
                      session.id === currentSessionId
                        ? 'bg-indigo-100 dark:bg-indigo-900/50 border border-indigo-300 dark:border-indigo-700'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900 dark:text-gray-100 truncate mb-1">
                          {session.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {formatTimestamp(session.timestamp)}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e: React.MouseEvent) => deleteChat(session.id, e)}
                        className="opacity-0 group-hover:opacity-100 h-6 w-6 p-0"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </ScrollArea>
        </div>
      )}

      {/* Main Chat Area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <div className="border-b dark:border-gray-700 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {onClose && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowHistory(!showHistory)}
                className="gap-2"
                title="Toggle Chat History"
              >
                <History className="w-4 h-4" />
                <span className="hidden md:inline">History</span>
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <div className="bg-indigo-600 dark:bg-indigo-700 p-2 rounded-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-indigo-900 dark:text-indigo-300">Arthadok AI</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Ask questions about {course} - {level}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={createNewChat}
                className="gap-2"
                title="Start New Chat"
              >
                <Plus className="w-4 h-4" />
                <span className="hidden lg:inline">New</span>
              </Button>
              
              {/* Level Filter - only show if there are multiple levels */}
              {hasMultipleLevels && (
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <Select value={selectedLevelFilter} onValueChange={setSelectedLevelFilter}>
                    <SelectTrigger className="w-[180px] h-9 bg-white dark:bg-gray-800">
                      <SelectValue placeholder="Filter by level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Levels</SelectItem>
                      {availableLevels.map(lvl => (
                        <SelectItem key={lvl} value={lvl}>{lvl}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          </div>
        </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4 overflow-hidden">
        <div className="space-y-4" ref={scrollRef}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.role === 'assistant' && (
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>
              )}

              <div
                className={`flex-1 max-w-[80%] ${
                  message.role === 'user' ? 'text-right' : ''
                }`}
              >
                <Card
                  className={`p-4 ${
                    message.role === 'user'
                      ? 'bg-indigo-600 dark:bg-indigo-700 text-white border-indigo-600 dark:border-indigo-700'
                      : 'bg-white dark:bg-gray-800'
                  }`}
                >
                  <div className="whitespace-pre-wrap text-sm">
                    {message.content}
                  </div>

                  {message.sources && message.sources.length > 0 && (
                    <div className="mt-4 pt-4 border-t dark:border-gray-700 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <BookOpen className="w-3 h-3" />
                        <span>Sources:</span>
                      </div>
                      {message.sources.map((source, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs flex-wrap"
                        >
                          <Badge
                            variant="secondary"
                            className={getDifficultyColor(source.difficulty)}
                          >
                            {source.difficulty}
                          </Badge>
                          {source.level && (
                            <Badge variant="outline" className="text-xs bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                              {source.level}
                            </Badge>
                          )}
                          <span className="text-gray-700 dark:text-gray-300">
                            {source.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              </div>

              {message.role === 'user' && (
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
              <Card className="p-4 bg-white dark:bg-gray-800">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Thinking...</span>
                </div>
              </Card>
            </div>
          )}
        </div>
      </ScrollArea>

        {/* Input */}
        <div className="border-t dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question about your course..."
              className="flex-1 bg-white dark:bg-gray-800"
              disabled={isLoading}
            />
            <Button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="gap-2"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Ask about concepts, formulas, examples, or any topic from your syllabus
            </p>
            {hasMultipleLevels && selectedLevelFilter !== 'all' && (
              <Badge variant="secondary" className="text-xs bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                Filtering: {selectedLevelFilter}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
