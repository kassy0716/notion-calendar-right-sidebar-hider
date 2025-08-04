const CLS='nc-sidebar-hidden';
const SID='nc-sidebar-style';
const DEF='268px';
const CSS=`.${CLS} div[class^="sc-1448fr8-0"]{display:none!important;}
.${CLS} div[class^="sc-27l728-2"]{
  display:grid!important;
  grid-template-columns:var(--sidebar-width,260px) 1fr!important;
}`;

function exec(tabId){
  chrome.scripting.executeScript({
    target:{tabId},world:'MAIN',
    func:(CLS,SID,DEF,CSS)=>{
      const root=document.documentElement;
      let st=document.getElementById(SID);
      if(!st){st=document.createElement('style');st.id=SID;st.textContent=CSS;document.head.appendChild(st);}
      const hide=root.classList.toggle(CLS);
      root.style.setProperty('--context-panel-width',hide?'0px':DEF);
      window.dispatchEvent(new Event('resize'));
      return hide;
    },
    args:[CLS,SID,DEF,CSS]
  });
}

function toggle(tab){
  const id=tab?.id;
  if(id) exec(id);
  else chrome.tabs.query({active:true,currentWindow:true},t=>t[0]&&exec(t[0].id));
}

chrome.action.onClicked.addListener(toggle);
chrome.commands.onCommand.addListener((c,t)=>c==='toggle-right-pane'&&toggle(t));
