import { useCallback, useEffect, useMemo, useState } from "react";
import { DesktopWindow } from "./DesktopWindow.js?v=20261007-rebuild-v1";
import { desktopWindows } from "./windowData.js?v=20261007-rebuild-v1";
import { html } from "./ui.js?v=20261007-rebuild-v1";

const MOBILE_QUERY = "(max-width: 980px)";
const DEFAULT_WINDOW = "about";

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

export function App() {
  useEffect(() => {
    window.dispatchEvent(new Event('site-desktop-ready'));
  }, []);
  const isMobile = useMobileLayout();
  const initialZ = useMemo(
    () => Object.fromEntries(desktopWindows.map((item) => [item.id, item.initialZIndex])),
    []
  );
  const [zIndices, setZIndices] = useState(initialZ);
  const [activeId, setActiveId] = useState(() => isMobile ? null : DEFAULT_WINDOW);
  const [expandedId, setExpandedId] = useState(null);

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

  return html`
    <div className="portfolio-desktop">
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
      </main>
    </div>
  `;
}
