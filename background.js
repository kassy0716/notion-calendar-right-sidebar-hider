const STYLE_ID='nc-toggle-flag';
const DEFAULT='268px';
let hidden=false;

function toggle(tabId){
  chrome.scripting.executeScript({
    target:{tabId},
    world:'MAIN',
    func:(flag,def,id)=>{
      const root=document.documentElement;
      const cur=getComputedStyle(root).getPropertyValue('--context-panel-width').trim();
      if(flag||cur==='0px'){
        root.style.setProperty('--context-panel-width',def);
        flag=false;
      }else{
        root.style.setProperty('--context-panel-width','0px');
        flag=true;
      }
      /* ← ここで再レイアウトを強制 */
      window.dispatchEvent(new Event('resize'));
      return flag;
    },
    args:[hidden,DEFAULT,STYLE_ID]
  },([r])=>{hidden=r.result;});
}

chrome.action.onClicked.addListener(t=>toggle(t.id));
chrome.commands.onCommand.addListener((c,t)=>{
  if(c==='toggle-right-pane')toggle(t.id);
});