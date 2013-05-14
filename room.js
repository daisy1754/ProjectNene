var getCurrentInfo = function(info) {
  var actionCostInfo = $("table:first").find("td");
  if (info === 'action') {
    return parseInt($(actionCostInfo[0]).text().match(/(\d+)\//)[1]);
  } else if (info === 'buttle') {
    return parseInt($(actionCostInfo[1]).text().match(/(\d+)\//)[1]);
  }
}

var getCurrentActionPoint = function() {
  return getCurrentInfo('action');
}

var getCurrentButtlePoint = function() {
  return getCurrentInfo('buttle');
}

var gotoPage = function(kind) {
  var battleElm = $("a").filter(
      function() {
       return this.href.indexOf("http://gree-th-www.app-amb.jp/" + kind + "/?P") == 0;
      })[0];
  simulateClick(battleElm);
}

var gotoBattlePage = function() {
  gotoPage('battle');
}

var gotoQuestPage = function() {
  gotoPage('quest');
}

