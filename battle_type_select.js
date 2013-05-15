var PREFERRED_TYPE = 3;

var gotoBattlePageWithType = function(type) {
  var battleLinks = $("a").filter(
    function() {
      return this.href.indexOf("http://gree-th-www.app-amb.jp/battle/check") == 0;
    });
  simulateClick(battleLinks[type]);
}

gotoBattlePageWithType(PREFERRED_TYPE);
