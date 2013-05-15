chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    chrome.tabs.update(
      sender.tab.id,
      {url: "http://pf.gree.net/59291"});
  });
