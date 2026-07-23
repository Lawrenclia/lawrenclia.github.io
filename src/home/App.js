import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  BookOpen,
  Folder,
  Moon,
  Sun,
  UserRound
} from "lucide-react";
import { DesktopWindow } from "./DesktopWindow.js?v=20260723-home-v6";
import { desktopWindows } from "./windowData.js?v=20260723-home-v6";
import { html } from "./ui.js?v=20260723-home-v6";

const MOBILE_QUERY = "(max-width: 980px)";
const DEFAULT_WINDOW = "about";

function getInitialTheme() {
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function useMobileLayout() {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(MOBILE_QUERY).matches);

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    const update = (event) => setIsMobile(event.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isMobile;
}

function MenuBar({ theme, onToggleTheme }) {
  const date = useMemo(
    () => new Intl.DateTimeFormat("zh-CN", {
      month: "short",
      day: "numeric",
      weekday: "short"
    }).format(new Date()),
    []
  );

  return html`
    <header className="desktop-menubar">
      <div className="menubar-brand">
        <span className="brand-mark">L</span>
        <strong>Lawrenclia</strong>
      </div>
      <nav className="menubar-nav" aria-label="快捷导航">
        <a href="projects.html"><${Folder} size=${15} aria-hidden="true" /><span>项目</span></a>
        <a href="notes.html"><${BookOpen} size=${15} aria-hidden="true" /><span>笔记</span></a>
        <a href="about.html"><${UserRound} size=${15} aria-hidden="true" /><span>关于</span></a>
      </nav>
      <div className="menubar-status">
        <span>${date}</span>
        <button
          type="button"
          className="theme-button"
          aria-label=${theme === "dark" ? "切换到浅色模式" : "切换到深色模式"}
          title=${theme === "dark" ? "浅色模式" : "深色模式"}
          onClick=${onToggleTheme}
        >
          ${theme === "dark"
            ? html`<${Sun} size=${16} aria-hidden="true" />`
            : html`<${Moon} size=${16} aria-hidden="true" />`}
        </button>
      </div>
    </header>
  `;
}

function DesktopDock({ theme, onToggleTheme }) {
  return html`
    <nav className="desktop-dock" aria-label="页面导航">
      <a className="dock-home-link" href="index.html" aria-label="主页" title="主页">
        <span className="dock-home-mark">L</span>
      </a>

      <span className="dock-divider" aria-hidden="true"></span>

      <div className="dock-page-group" aria-label="页面导航">
        <a className="dock-page-link" href="projects.html">
          <${Folder} size=${17} aria-hidden="true" /><span>项目</span>
        </a>
        <a className="dock-page-link" href="notes.html">
          <${BookOpen} size=${17} aria-hidden="true" /><span>笔记</span>
        </a>
        <a className="dock-page-link" href="about.html">
          <${UserRound} size=${17} aria-hidden="true" /><span>关于</span>
        </a>
        <button
          type="button"
          className="theme-button dock-theme-button"
          aria-label=${theme === "dark" ? "切换到浅色模式" : "切换到深色模式"}
          title=${theme === "dark" ? "浅色模式" : "深色模式"}
          onClick=${onToggleTheme}
        >
          ${theme === "dark"
            ? html`<${Sun} size=${17} aria-hidden="true" />`
            : html`<${Moon} size=${17} aria-hidden="true" />`}
        </button>
      </div>
    </nav>
  `;
}

export function App() {
  const isMobile = useMobileLayout();
  const initialZ = useMemo(
    () => Object.fromEntries(desktopWindows.map((item) => [item.id, item.initialZIndex])),
    []
  );
  const [zIndices, setZIndices] = useState(initialZ);
  const [activeId, setActiveId] = useState(() => isMobile ? null : DEFAULT_WINDOW);
  const [expandedId, setExpandedId] = useState(null);
  const [theme, setTheme] = useState(getInitialTheme);
  const themeSwitching = useRef(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (isMobile) {
      setActiveId(null);
      setExpandedId(null);
      return;
    }
    setActiveId(DEFAULT_WINDOW);
    setExpandedId(null);
    setZIndices(initialZ);
  }, [initialZ, isMobile]);

  const activateWindow = useCallback((id) => {
    const target = desktopWindows.find((item) => item.id === id);
    if (!target) return;

    if (isMobile) {
      if (activeId === id && expandedId === id) {
        window.location.assign(target.route);
        return;
      }
      setActiveId(id);
      setExpandedId(id);
      return;
    }

    const maxZ = Math.max(...Object.values(zIndices));
    const isTopmost = activeId === id && zIndices[id] === maxZ;
    if (isTopmost) {
      window.location.assign(target.route);
      return;
    }

    setZIndices((current) => ({
      ...current,
      [id]: Math.max(...Object.values(current)) + 1
    }));
    setActiveId(id);
  }, [activeId, expandedId, isMobile, zIndices]);

  const toggleTheme = useCallback(async (event) => {
    if (themeSwitching.current) return;

    const button = event.currentTarget;
    const root = document.documentElement;
    const nextTheme = theme === "dark" ? "light" : "dark";
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const applyTheme = () => {
      root.dataset.theme = nextTheme;
      localStorage.setItem("theme", nextTheme);
      setTheme(nextTheme);
    };

    button.classList.add("is-animating");

    if (reducedMotion) {
      applyTheme();
      window.setTimeout(() => button.classList.remove("is-animating"), 360);
      return;
    }

    themeSwitching.current = true;
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    if (!document.startViewTransition) {
      const overlay = document.createElement("div");
      overlay.className = "theme-reveal-overlay";
      overlay.style.background = nextTheme === "dark"
        ? "linear-gradient(132deg, #202829, #303737 48%, #252b33)"
        : "linear-gradient(132deg, #d9e0df, #f0f1ee 48%, #d8dde5)";
      overlay.style.clipPath = `circle(0 at ${x}px ${y}px)`;
      overlay.style.transition = "clip-path 440ms cubic-bezier(0.22, 1, 0.36, 1)";
      document.body.append(overlay);

      try {
        overlay.getBoundingClientRect();
        await new Promise((resolve) => requestAnimationFrame(resolve));
        overlay.style.clipPath = `circle(${radius}px at ${x}px ${y}px)`;
        await new Promise((resolve) => window.setTimeout(resolve, 450));
        applyTheme();
        overlay.style.transition = "opacity 170ms ease-out";
        overlay.style.opacity = "0";
        await new Promise((resolve) => window.setTimeout(resolve, 180));
      } catch (_) {
        applyTheme();
      } finally {
        overlay.remove();
        button.classList.remove("is-animating");
        themeSwitching.current = false;
      }
      return;
    }

    root.classList.add("theme-transitioning");
    const transition = document.startViewTransition(applyTheme);

    try {
      await transition.ready;
      await root.animate(
        {
          clipPath: [
            `circle(0 at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`
          ]
        },
        {
          duration: 560,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          pseudoElement: "::view-transition-new(root)"
        }
      ).finished;
    } catch (_) {
      // The theme is already applied if the visual transition is interrupted.
    } finally {
      root.classList.remove("theme-transitioning");
      button.classList.remove("is-animating");
      themeSwitching.current = false;
    }
  }, [theme]);

  return html`
    <div className="portfolio-desktop">
      <${MenuBar}
        theme=${theme}
        onToggleTheme=${toggleTheme}
      />

      <main className="desktop-stage" aria-label="Lawrenclia 的个人主页窗口">
        <div className="wallpaper-grid" aria-hidden="true"></div>

        <section className="window-layer" aria-label="个人主页板块">
          ${desktopWindows.map((windowInfo) => html`
            <${DesktopWindow}
              key=${windowInfo.id}
              windowInfo=${windowInfo}
              active=${activeId === windowInfo.id}
              expanded=${expandedId === windowInfo.id}
              isMobile=${isMobile}
              zIndex=${zIndices[windowInfo.id]}
              onActivate=${activateWindow}
            />
          `)}
        </section>

        <${DesktopDock}
          theme=${theme}
          onToggleTheme=${toggleTheme}
        />
      </main>
    </div>
  `;
}
