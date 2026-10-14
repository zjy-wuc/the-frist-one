import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// 4.1 那 8 个 CSS 原样搬过来——React 不管 CSS 内部细节。
// 顺序和 4.1 的 html <link> 一致。
import "./components/css/reset.css";
import "./components/css/variables.css";
import "./components/css/layout.css";
import "./components/css/hero.css";
import "./components/css/nav.css";
import "./components/css/cards.css";
import "./components/css/lab.css";
import "./components/css/responsive.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
