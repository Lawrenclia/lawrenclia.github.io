import { createRoot } from "react-dom/client";
import { App } from "./App.js?v=20261023-refined-v2";
import { html } from "./ui.js?v=20261007-rebuild-v1";

const root = createRoot(document.getElementById("root"));
root.render(html`<${App} />`);
