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
import { html } from "./ui.js?v=20261007-rebuild-v1";
import { WindowContent } from "./WindowContent.js?v=20261031-a11y-layout";

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

  const activateTitlebar = (event) => {
    event.stopPropagation();
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
      aria-label=${`${windowInfo.title} 窗口`}
      onClick=${activate}
    >
      <button
        type="button"
        className="window-titlebar"
        aria-label=${`${active ? "打开" : "选择"} ${windowInfo.title} 窗口`}
        aria-controls=${isMobile ? `window-content-${windowInfo.id}` : undefined}
        aria-expanded=${isMobile ? expanded : undefined}
        onClick=${activateTitlebar}
      >
        <span className="traffic-lights" aria-hidden="true">
          <span className="traffic-light traffic-red"></span>
          <span className="traffic-light traffic-yellow"></span>
          <span className="traffic-light traffic-green"></span>
        </span>
        <span className="window-title">
          <${Icon} size=${15} strokeWidth=${1.9} aria-hidden="true" />
          ${windowInfo.title}
        </span>
        <span className="window-open-hint" aria-hidden="true">
          ${active ? "打开 ↗" : "选择"}
        </span>
      </button>

      <div
        id=${`window-content-${windowInfo.id}`}
        className="window-content"
        aria-hidden=${isMobile ? !expanded : undefined}
        inert=${isMobile && !expanded ? "" : undefined}
      >
        <${WindowContent} windowInfo=${windowInfo} />
      </div>
    </article>
  `;
}
