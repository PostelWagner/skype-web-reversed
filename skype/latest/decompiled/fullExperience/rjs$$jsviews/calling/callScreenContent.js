define("jsviews/calling/callScreenContent", [
  "require",
  "browser/window",
  "swx-constants"
], function (e) {
  function i(e) {
    var i;
    this.getContentWidth = function () {
      return e.querySelector(r).offsetWidth;
    };
    this.init = function (e) {
      i = e;
      t.addEventListener(n.events.browser.RESIZE, i);
    };
    this.dispose = function () {
      t.removeEventListener(n.events.browser.RESIZE, i);
    };
  }
  var t = e("browser/window"), n = e("swx-constants").COMMON, r = ".stage";
  return {
    build: function (e) {
      return new i(e);
    }
  };
});
