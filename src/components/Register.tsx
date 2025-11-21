import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Eye, EyeOff } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';
import logo from 'figma:asset/d0bcdcf7e5d6d4ece294c5ea9ed0d55f2f696f76.png';

interface RegisterProps {
  onRegister: (userData: UserData) => void;
  onSwitchToLogin: () => void;
}

export interface UserData {
  name: string;
  userType: 'student' | 'admin';
  level: string;
  email: string;
  mobile: string;
  registrationNumber: string;
  password: string;
}

const levels = [
  'CA Foundation',
  'CA Inter',
  'CA Final',
  'CMA Foundation',
  'CMA Inter',
  'CMA Final',
  'CS Foundation',
  'CS Executive',
  'CS Professional'
];

export function Register({ onRegister, onSwitchToLogin }: RegisterProps) {
  const [formData, setFormData] = useState({
    name: '',
    userType: 'student' as 'student' | 'admin',
    level: '',
    email: '',
    mobile: '',
    registrationNumber: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.userType) {
      newErrors.userType = 'Please select user type';
    }

    // Level is only required for students
    if (formData.userType === 'student' && !formData.level) {
      newErrors.level = 'Please select your level';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    // Registration number only required for students
    if (formData.userType === 'student' && !formData.registrationNumber) {
      newErrors.registrationNumber = 'Registration number is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      const userData: UserData = {
        name: formData.name,
        userType: formData.userType,
        level: formData.level,
        email: formData.email,
        mobile: formData.mobile,
        registrationNumber: formData.registrationNumber,
        password: formData.password
      };
      onRegister(userData);
    }
  };

  const getRegistrationLabel = () => {
    if (formData.level.startsWith('CA')) return 'CA Registration Number';
    if (formData.level.startsWith('CMA')) return 'CMA Registration Number';
    if (formData.level.startsWith('CS')) return 'CS Registration Number';
    return 'Registration Number';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Arthadok" className="h-16 w-auto" />
          </div>
          <h2 className="text-gray-900 mb-2">Create Your Account</h2>
          <p className="text-gray-600">Transforming Aspirations into Achievements</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
          </div>

          {/* User Type Selection */}
          <div>
            <Label htmlFor="userType">User Type *</Label>
            <Select
              value={formData.userType}
              onValueChange={(value: 'student' | 'admin') => setFormData({ ...formData, userType: value })}
            >
              <SelectTrigger className={errors.userType ? 'border-red-500' : ''}>
                <SelectValue placeholder="Select user type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
            {errors.userType && <p className="text-sm text-red-600 mt-1">{errors.userType}</p>}
            {formData.userType === 'admin' && (
              <p className="text-xs text-blue-600 mt-1">
                Admin has full access to all courses and levels
              </p>
            )}
          </div>

          {/* Level Selection - Only for Students */}
          {formData.userType === 'student' && (
            <div>
              <Label htmlFor="level">Select Your Level *</Label>
              <Select
                value={formData.level}
                onValueChange={(value) => setFormData({ ...formData, level: value })}
              >
                <SelectTrigger className={errors.level ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Choose your current level" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.level && <p className="text-sm text-red-600 mt-1">{errors.level}</p>}
            </div>
          )}

          {/* Email */}
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>

          {/* Mobile Number */}
          <div>
            <Label htmlFor="mobile">Mobile Number *</Label>
            <Input
              id="mobile"
              type="tel"
              placeholder="10-digit mobile number"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              className={errors.mobile ? 'border-red-500' : ''}
              maxLength={10}
            />
            {errors.mobile && <p className="text-sm text-red-600 mt-1">{errors.mobile}</p>}
          </div>

          {/* Registration Number - Only for Students */}
          {formData.userType === 'student' && (
            <div>
              <Label htmlFor="registrationNumber">{getRegistrationLabel()} *</Label>
              <Input
                id="registrationNumber"
                type="text"
                placeholder="Enter your registration number"
                value={formData.registrationNumber}
                onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
                className={errors.registrationNumber ? 'border-red-500' : ''}
              />
              {errors.registrationNumber && (
                <p className="text-sm text-red-600 mt-1">{errors.registrationNumber}</p>
              )}
            </div>
          )}

          {/* Password */}
          <div>
            <Label htmlFor="password">Create Password *</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Minimum 6 characters"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className={errors.password ? 'border-red-500' : ''}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <Label htmlFor="confirmPassword">Confirm Password *</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className={errors.confirmPassword ? 'border-red-500' : ''}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-sm text-red-600 mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <button
              onClick={onSwitchToLogin}
              className="text-indigo-600 hover:text-indigo-700"
            >
              Login here
            </button>
          </p>
        </div>
      </Card>
    </div>
  );
}