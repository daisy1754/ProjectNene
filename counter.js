var resetCount = function(key) {
  localStorage.setItem(key, 0);
}

var getCount = function(key) {
  return parseInt(localStorage.getItem(key));
}

var incrementCount = function(key) {
  localStorage.setItem(key, getCount(key) + 1);
}
