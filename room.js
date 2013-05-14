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


