(() => {
  const body = document.body;
  const toggle = document.querySelector(".toc-toggle");
  const panel = document.querySelector(".toc-panel");
  const backdrop = document.querySelector(".toc-backdrop");
  const mobile = window.matchMedia("(max-width: 860px)");

  function setOpen(open) {
    body.classList.toggle("toc-open", open);
    toggle?.setAttribute("aria-expanded", String(open));
    toggle?.setAttribute("aria-label", open ? "关闭目录" : "打开目录");
    if (backdrop) backdrop.hidden = !open;
    if (panel) {
      if (!open && panel.contains(document.activeElement)) toggle?.focus();
      panel.inert = mobile.matches && !open;
    }
  }

  toggle?.addEventListener("click", () => setOpen(!body.classList.contains("toc-open")));
  backdrop?.addEventListener("click", () => setOpen(false));
  panel?.addEventListener("click", (event) => {
    if (event.target.closest("a") && window.matchMedia("(max-width: 860px)").matches) {
      setOpen(false);
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
  mobile.addEventListener("change", () => setOpen(false));
  setOpen(false);
})();
