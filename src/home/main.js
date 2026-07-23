import { createRoot } from "react-dom/client";
import { App } from "./App.js?v=20260723-home-v6";
import { html } from "./ui.js?v=20260723-home-v6";

const root = createRoot(document.getElementById("root"));
root.render(html`<${App} />`);
