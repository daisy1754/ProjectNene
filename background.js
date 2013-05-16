chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.command === "reload") {
      chrome.tabs.reload(sender.tab.id);
    }
  });
