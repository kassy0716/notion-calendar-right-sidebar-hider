/* background.js — 右ペインを CSS でトグル */
const STYLE_ID = 'nc-hide-sidebar-style';
const HIDE_CSS = `
  div[class^="sc-1448fr8-0"]       { display:none!important; }
  div[class^="sc-27l728-2"]        { display:grid!important; grid-template-columns:1fr!important; }
  div[class^="sc-1448fr8-1"]       { width:100%!important; max-width:100%!important; flex:1 1 auto!important; }
`;

function toggleSidebar(tabId) {
  chrome.scripting.executeScript({
    target: { tabId },
    func: (STYLE_ID, HIDE_CSS) => {
      const s = document.getElementById(STYLE_ID);
      if (s) {                      // ← 既に隠れている → 表示
        s.remove();
      } else {                      // ← 非表示にする
        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = HIDE_CSS;
        document.head.appendChild(style);
      }
    },
    args: [STYLE_ID, HIDE_CSS]
  });
}

chrome.action.onClicked.addListener(tab => toggleSidebar(tab.id));
chrome.commands.onCommand.addListener((cmd, tab) => {
  if (cmd === 'toggle-right-pane') toggleSidebar(tab.id);
});