/**
 * Strategy for battle-index page. Finding weak enemy and do battle
 **/
var LEVEL_THREATHOLD = 20;
var QUERY_THREATHOLD = 10;
var QUERY_NUM_KEY = "NUM_OF_QUERY_FRIENDS";

var findStudentsWhoseLevelIsLessThan = function(threathold) {
  var students = $("table").slice(1).find("td:nth-child(3)");
  var weakStudents = students.filter(function() {
    var level = $(this).text().match(/Lv\s(\d+)/)[1];
    return level < threathold;
  });
  return weakStudents;
}

var gotoBattleCheckPageOrNextStudents = function() {
  var weakStudents = findStudentsWhoseLevelIsLessThan(10);
  if (weakStudents.length !== 0) {
    resetCount(QUERY_NUM_KEY);
    simulateClick($(weakStudents[0]).find("a")[0]);
    return;
  }
  incrementCount(QUERY_NUM_KEY);
  if (getCount() > QUERY_THREATHOLD) {
    // TODO: currently I just give up, later I should fight with those who are same level as me.
  } else {
    setTimeout(
      function() {clickLinkWithText("ﾘｽﾄを更新");},
      300
    );
  }
}

gotoBattleCheckPageOrNextStudents();
