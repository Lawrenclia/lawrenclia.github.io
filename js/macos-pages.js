(() => {
  const root = document.documentElement;
  const button = document.querySelector("[data-theme-toggle]");
  const themeIcon = button?.querySelector("[data-theme-icon]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let isSwitching = false;

  function preferredTheme() {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function updateTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    if (!button) return;
    const isDark = theme === "dark";
    button.setAttribute("aria-label", isDark ? "切换到浅色模式" : "切换到深色模式");
    button.setAttribute("title", isDark ? "浅色模式" : "深色模式");
    if (themeIcon) {
      themeIcon.setAttribute("data-lucide", isDark ? "sun" : "moon");
      window.lucide?.createIcons();
    }
  }

  updateTheme(preferredTheme());

  document.querySelectorAll("[data-current-date]").forEach((element) => {
    element.textContent = new Intl.DateTimeFormat("zh-CN", {
      month: "short",
      day: "numeric",
      weekday: "short"
    }).format(new Date());
  });

  window.addEventListener("DOMContentLoaded", () => window.lucide?.createIcons());

  button?.addEventListener("click", async () => {
    if (isSwitching) return;
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    button.classList.add("is-animating");

    if (reducedMotion.matches) {
      updateTheme(nextTheme);
      window.setTimeout(() => button.classList.remove("is-animating"), 360);
      return;
    }

    isSwitching = true;
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
        updateTheme(nextTheme);
        overlay.style.transition = "opacity 170ms ease-out";
        overlay.style.opacity = "0";
        await new Promise((resolve) => window.setTimeout(resolve, 180));
      } finally {
        overlay.remove();
        button.classList.remove("is-animating");
        isSwitching = false;
      }
      return;
    }

    root.classList.add("theme-transitioning");
    const transition = document.startViewTransition(() => updateTheme(nextTheme));

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
    } finally {
      root.classList.remove("theme-transitioning");
      button.classList.remove("is-animating");
      isSwitching = false;
    }
  });
})();
