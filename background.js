console.log('Pog Protector Background function activated');
var pogEnabledVar = '';
chrome.tabs.onActivated.addListener((tab) => {
  chrome.tabs.get(tab.tabId, (current_tab_info) => {
    if (/^https:\/\/www\.twitch/.test(current_tab_info.url)) {
      override();
    }
  });
});
chrome.runtime.onMessage.addListener((message, sender, reply) => {
  override();
});
// chrome.storage.onChanged.addListener(override());
const override =()=> {
  chrome.storage.sync.get(
    {
      pogEnabled: true,
    },
    (items)=> {
      if (items.pogEnabled !== true) {
        chrome.tabs.insertCSS(null, { file: './override.css' });
      } else {
        chrome.tabs.removeCSS(null, { file: './override.css' });
      }
    }
  );
}
