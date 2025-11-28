import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { StrictMode } from "react";
import "./index.css";
import { MathJaxContext } from "better-react-mathjax";

const config = {
  tex: {
    inlineMath: [["$", "$"], ["\\(", "\\)"]],
    displayMath: [["$$", "$$"], ["\\[", "\\]"]],
  },
};
createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <MathJaxContext config={config}>
      <App />
    </MathJaxContext>
  </StrictMode>
);
