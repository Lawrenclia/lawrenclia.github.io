(() => {
  const body = document.body;
  const toggle = document.querySelector(".toc-toggle");
  const panel = document.querySelector(".toc-panel");
  const backdrop = document.querySelector(".toc-backdrop");

  function setOpen(open) {
    body.classList.toggle("toc-open", open);
    toggle?.setAttribute("aria-expanded", String(open));
    if (backdrop) backdrop.hidden = !open;
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
})();
