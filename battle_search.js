/**
 * Strategy for battle/search, just pick one player and go battle
 **/
var clickFirstFoundPlayer = function() {
  var playerClickable = $("table")
      .slice(1)
      .find("td:nth-child(3)")
      .find("a")[0];
  simulateClick(playerClickable);
}

clickFirstFoundPlayer();
