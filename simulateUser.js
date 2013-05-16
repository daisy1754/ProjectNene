/**
 * Functions that simulate user events.
 **/
var dispatchMouseEvent = function(target, var_args) {
  var e = document.createEvent("MouseEvents");
  e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
  target.dispatchEvent(e);
};

var simulateClick = function(element) {
  if (element) {
    dispatchMouseEvent(element, 'click', true, true);
  } else {
    // I may lost a connection, just reload top page.
    reloadTopPage();
  }
}

var clickLinkWithText = function(text) {
  simulateClick($("a").filter(
      function() {return $(this).text() === text;})[0]);
}

var reloadTopPage = function() {
  if (!localStorage['lastReload']
      || (new Date() - Date.parse(localStorage['lastReload'])) > 1000) {
    chrome.extension.sendMessage({command: 'reload'}, function(response) {
       console.log("reload request sent");
    });
    localStorage['lastUpdate'] = new Date();
    return true;
  } else {
    return false;
  }
}
