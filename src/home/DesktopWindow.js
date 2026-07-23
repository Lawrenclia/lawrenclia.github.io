import {
  AtSign,
  FolderCode,
  Github,
  Milestone,
  Play,
  Send,
  Telescope,
  UserRound
} from "lucide-react";
import { html } from "./ui.js?v=20260723-home-v6";
import { WindowContent } from "./WindowContent.js?v=20260723-home-v6";

const iconMap = {
  AtSign,
  FolderCode,
  Github,
  Milestone,
  Play,
  Send,
  Telescope,
  UserRound
};

const interactiveSelector =
  "a, button, input, select, textarea, summary, [data-interactive='true']";

export function getWindowIcon(name) {
  return iconMap[name] || UserRound;
}

export function DesktopWindow({
  windowInfo,
  active,
  expanded,
  isMobile,
  zIndex,
  onActivate
}) {
  const Icon = getWindowIcon(windowInfo.icon);
  const style = {
    "--window-left": windowInfo.position.left,
    "--window-top": windowInfo.position.top,
    "--window-width": windowInfo.size.width,
    "--window-height": windowInfo.size.height,
    zIndex
  };

  const activate = (event) => {
    if (event.target.closest(interactiveSelector)) return;
    onActivate(windowInfo.id);
  };

  const handleKeyDown = (event) => {
    if (event.target !== event.currentTarget) return;
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    onActivate(windowInfo.id);
  };

  return html`
    <article
      className=${[
        "desktop-window",
        `window-${windowInfo.id}`,
        `accent-${windowInfo.accent}`,
        active ? "is-active" : "",
        expanded ? "is-expanded" : ""
      ].filter(Boolean).join(" ")}
      style=${style}
      role="button"
      tabIndex="0"
      aria-label=${`${windowInfo.title} 窗口`}
      aria-pressed=${active}
      aria-expanded=${isMobile ? expanded : undefined}
      onClick=${activate}
      onKeyDown=${handleKeyDown}
    >
      <header className="window-titlebar">
        <span className="traffic-lights" aria-hidden="true">
          <span className="traffic-light traffic-red"></span>
          <span className="traffic-light traffic-yellow"></span>
          <span className="traffic-light traffic-green"></span>
        </span>
        <span className="window-title">
          <${Icon} size=${15} strokeWidth=${1.9} aria-hidden="true" />
          ${windowInfo.title}
        </span>
        <span aria-hidden="true"></span>
      </header>

      <div
        className="window-content"
        aria-hidden=${isMobile ? !expanded : undefined}
      >
        <${WindowContent} windowInfo=${windowInfo} />
      </div>
    </article>
  `;
}
