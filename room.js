var LEAST_ACTION_POINT = 50;
var LEAST_DECK_COST = 65;

var getCurrentInfo = function(info) {
  var actionCostInfo = $("table:first").find("td");
  if (info === 'action') {
    return parseInt($(actionCostInfo[0]).text().match(/(\d+)\//)[1]);
  } else if (info === 'battle') {
    return parseInt($(actionCostInfo[1]).text().match(/(\d+)\//)[1]);
  }
}

var getCurrentActionPoint = function() {
  return getCurrentInfo('action');
}

var getCurrentBattlePoint = function() {
  return getCurrentInfo('battle');
}

var hasMaxNumOfCards = function() {
  var numOfCards = 
      $("table:eq(3)")
          .find("tr:eq(1)")
          .find("td:eq(1)")
          .text()
          .match(/ｶｰﾄﾞ数:(\d+)\/(\d+)/);
  return (parseInt(numOfCards[1]) / parseInt(numOfCards[2])) === 1.0;
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

var mainStrategy = function() {
  if (getCurrentActionPoint() > LEAST_ACTION_POINT && !hasMaxNumOfCards()) {
    gotoQuestPage();
  } else if (getCurrentBattlePoint() > LEAST_DECK_COST) {
    gotoBattlePage();
  } else {
    // re-run after an hour
    setTimeout(mainStrategy, 1000 * 60 * 60);
  }
}

mainStrategy();
