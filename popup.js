chrome.runtime.getBackgroundPage((backgroundPage)=> {
  console = backgroundPage.console;
});

document.getElementById('toggle');
// const save_options =()=> {
//   console.log('Toggled');
// }
const save_options =()=> {
  chrome.runtime.sendMessage({ data: 'callRef' });
  var pogEnabled = document.getElementById('toggle').checked;
  chrome.storage.sync.set({
    pogEnabled: pogEnabled,
  });
}

const restore_options =()=> {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get(
    {
      pogEnabled: true,
    },
    (items)=> {
      document.getElementById('toggle').checked = items.pogEnabled;
    }
  );
}

document.querySelector('#toggle').addEventListener('click', save_options);
document.addEventListener('DOMContentLoaded', restore_options);
