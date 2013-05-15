var SCORE_THRETHOLD = 10;

var doActionIfScoreIsEnough = function() {
  var currentScore = 
    parseInt(
        $("table:eq(1)").find("td:eq(0)").text()
            .match(/行動P:(\d+)\//)[1]);
  if (currentScore > SCORE_THRETHOLD) {
    if ($("a").filter(function(){return $(this).text()==="開始"}).length > 0) {
      clickLinkWithText("開始");
    } else if ($("a").filter(function(){return $(this).text()==="実行"}).length > 0) {
      clickLinkWithText("実行");
    }
  } else {
    reloadTopPage();
  }
}

setTimeout(doActionIfScoreIsEnough, 500 + Math.random() * 500);
