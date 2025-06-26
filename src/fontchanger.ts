export function setupFontChanger(buttonId = "font-switcher") {
  const fonts = [
    '"0xProto-Regular", monospace',
    '"Atkinson", sans-serif'
  ];
  let current = 0;
  const btn = document.getElementById(buttonId);
  if (btn) {
    btn.addEventListener('click', () => {
      current = (current + 1) % fonts.length;
      document.body.style.fontFamily = fonts[current];
      btn.textContent = `Switch Font (${fonts[current].replace(/["']/g, '').split(',')[0]})`;
    });
    btn.textContent = `Switch Font (${fonts[current].replace(/["']/g, '').split(',')[0]})`;
  }
}