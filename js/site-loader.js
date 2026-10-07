/* One intro per tab session; page readiness and presentation progress are separate. */
(() => {
  const root = document.documentElement;
  const storageKey = 'lawrenclia:intro:v1';
  const mode = new URLSearchParams(location.search).get('intro');
  const preview = mode === 'preview';
  let seen = false;
  try { seen = sessionStorage.getItem(storageKey) === 'done'; } catch (_) { /* Optional storage. */ }
  if (seen && !preview && mode !== 'play') return;

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const host = document.createElement('section');
  host.id = 'site-loader';
  host.setAttribute('aria-label', '正在打开个人空间');
  host.innerHTML = `
    <div class="boot-window">
    <header class="boot-top">
      <span class="boot-lights" aria-hidden="true"><span></span><span></span><span></span></span>
      <div class="boot-brand"><svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 2 30 16 16 30 2 16Z" stroke="currentColor"/><path d="M12 9v14h10v-4h-6V9Z" fill="currentColor"/></svg><span>个人空间</span></div>
      <span class="boot-top-code" aria-hidden="true">LC / 01</span>
    </header>
    <div class="boot-core">
      <div class="boot-visual" aria-hidden="true"><svg viewBox="0 0 260 260" fill="none">
        <g class="boot-axis" stroke="currentColor" stroke-width="1"><path d="M130 12v236M12 130h236"/><circle cx="130" cy="130" r="110" stroke-dasharray="2 9"/></g>
        <g class="boot-orbit"><path d="M25 70a120 120 0 0 1 55-48m130 168a120 120 0 0 1-55 48" stroke="currentColor" stroke-width="2"/></g>
        <g class="boot-wire" stroke="currentColor" stroke-width="1"><path d="m130 50 70 40v80l-70 40-70-40V90Z"/><path d="m60 90 70 40 70-40m-70 40v80m0-160v80m-70 40 70-40 70 40"/></g>
        <path class="boot-highlight" d="m60 107V90l15-9m110 98 15-9v-17M115 58l15-8 15 8" stroke="currentColor" stroke-width="3"/>
        <rect class="boot-highlight" x="125" y="125" width="10" height="10" fill="currentColor"/>
      </svg></div>
      <div class="boot-code">[ SYSTEM INITIALIZATION ]</div>
      <h2 class="boot-wordmark">LAWRENCLIA</h2>
      <p class="boot-subtitle">个人空间 &nbsp; / &nbsp; PROJECTS · NOTES · PROFILE</p>
      <div class="boot-progress-head"><div><p class="boot-status" role="status">正在准备界面</p><p class="boot-status-code">01 / PREPARING INTERFACE</p></div><div class="boot-percentage" aria-hidden="true"><span>00</span><small>%</small></div></div>
      <div class="boot-progress" role="progressbar" aria-label="启动动画进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span class="boot-progress-fill"></span></div>
      <div class="boot-stages" aria-hidden="true"><span data-active><b>01</b>界面准备</span><span><b>02</b>内容载入</span><span><b>03</b>准备就绪</span></div>
    </div>
    <footer class="boot-bottom"><div class="boot-footer-code"><span class="boot-stripes" aria-hidden="true"></span><span>LC / PERSONAL ARCHIVE</span></div><button type="button">跳过动画 →</button></footer>
    </div>`;
  root.classList.add('site-loading');
  root.append(host);

  const status = host.querySelector('.boot-status');
  const code = host.querySelector('.boot-status-code');
  const percentage = host.querySelector('.boot-percentage span');
  const progress = host.querySelector('[role="progressbar"]');
  const fill = host.querySelector('.boot-progress-fill');
  const stages = [...host.querySelectorAll('.boot-stages span')];
  const button = host.querySelector('button');
  const start = performance.now();
  const duration = reducedMotion ? 0 : 1600;
  let ready = false, closing = false, ended = false, frame, exitTimer;
  let bodyBusy = null, lockedBody;
  let lockedElements = [];

  function unlock() {
    root.classList.remove('site-loading');
    if (lockedBody) {
      lockedElements.forEach(([element, inert]) => { element.inert = inert; });
      lockedElements = [];
      if (bodyBusy === null) lockedBody.removeAttribute('aria-busy');
      else lockedBody.setAttribute('aria-busy', bodyBusy);
      lockedBody = null;
    }
  }
  function dispose() {
    if (ended) return;
    ended = true;
    cancelAnimationFrame(frame);
    clearTimeout(exitTimer);
    clearTimeout(watchdog);
    document.removeEventListener('DOMContentLoaded', onDocumentReady);
    window.removeEventListener('site-desktop-ready', onReady);
    window.removeEventListener('pagehide', dispose);
    window.removeEventListener('pageshow', onRestore);
    unlock();
    host.remove();
  }
  function finish() {
    if (closing || ended) return;
    closing = true;
    try { sessionStorage.setItem(storageKey, 'done'); } catch (_) { /* Never block entry. */ }
    unlock();
    host.classList.add('is-leaving');
    button.disabled = true;
    exitTimer = setTimeout(dispose, reducedMotion ? 0 : 480);
  }
  function onReady() { ready = true; }
  function onDocumentReady() {
    if (closing || ended) return;
    lockedBody = document.body;
    lockedBody.append(host);
    lockedElements = [...lockedBody.children].filter(element => element !== host).map(element => [element, element.inert]);
    lockedElements.forEach(([element]) => { element.inert = true; });
    bodyBusy = lockedBody.getAttribute('aria-busy');
    lockedBody.setAttribute('aria-busy', 'true');
    if (!lockedBody.classList.contains('desktop-home') || lockedBody.querySelector('.desktop-window')) onReady();
  }
  function onRestore(event) { if (event.persisted) dispose(); }
  function tick(now) {
    if (closing || ended) return;
    const elapsed = now - start;
    const amount = duration ? Math.min(1, elapsed / duration) : 1;
    const value = ready ? Math.round(amount * 100) : Math.round(Math.min(92, amount * 85 + Math.max(0, elapsed - duration) / 1000));
    percentage.textContent = String(value).padStart(2, '0');
    progress.setAttribute('aria-valuenow', String(value));
    fill.style.width = `${value}%`;
    const phase = value === 100 ? 2 : value >= 30 ? 1 : 0;
    stages.forEach((stage, index) => stage.toggleAttribute('data-active', index <= phase));
    const labels = ['正在准备界面', '正在载入内容', '准备就绪'];
    const codes = ['01 / PREPARING INTERFACE', '02 / LOADING CONTENT', '03 / READY TO ENTER'];
    if (status.textContent !== labels[phase]) { status.textContent = labels[phase]; code.textContent = codes[phase]; }
    if (value === 100) {
      if (!preview) { exitTimer = setTimeout(finish, reducedMotion ? 0 : 160); return; }
      clearTimeout(watchdog);
      button.textContent = '进入个人空间 →';
      return;
    }
    frame = requestAnimationFrame(tick);
  }
  button.addEventListener('click', finish);
  window.addEventListener('site-desktop-ready', onReady);
  document.addEventListener('DOMContentLoaded', onDocumentReady, { once: true });
  window.addEventListener('pagehide', dispose, { once: true });
  window.addEventListener('pageshow', onRestore);
  // A failed external resource must never leave the site behind a permanent overlay.
  const watchdog = setTimeout(finish, 8000);
  frame = requestAnimationFrame(tick);
})();
