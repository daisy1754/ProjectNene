/**
 * Functions that simulate user events.
 **/
var dispatchMouseEvent = function(target, var_args) {
  var e = document.createEvent("MouseEvents");
  e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
  target.dispatchEvent(e);
};

var simulateClick = function(element) {
  dispatchMouseEvent(element, 'click', true, true);
}

