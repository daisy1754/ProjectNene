/**
 * Strategy for battle-index page. Finding weak enemy and do battle
 **/
var findStudentsWhoseLevelIsLessThan = function(threathold) {
  var students = $("table").slice(1).find("td:nth-child(3)");
  var weakStudents = students.filter(function() {
    var level = $(this).text().match(/Lv\s(\d+)/)[1];
    return level < threathold;
  });
  return weakStudents;
}

var gotoBattleCheckPageOrNextStudents = function() {
  var weakStudents = findStudentsWhoseLevelIsLessThan(100);
  if (weakStudents.length !== 0) {
    simulateClick($(weakStudents[0]).find("a")[0]);
    return;
  }
  clickLinkWithText("ﾘｽﾄを更新");
}
