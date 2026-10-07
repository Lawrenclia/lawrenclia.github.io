// Keep the static navigation usable if a remote module cannot be loaded.
const status = document.getElementById('boot-status');
const timer = window.setTimeout(() => {
  if (status?.isConnected) status.textContent = '载入需要一点时间，你也可以直接访问下面的页面。';
}, 8000);
try {
  await import('./main.js?v=20261007-rebuild-v1');
} catch (error) {
  if (status?.isConnected) status.textContent = '暂时无法打开桌面，请刷新重试，或直接访问下面的页面。';
  console.error('Unable to load the desktop:', error);
} finally {
  window.clearTimeout(timer);
}
