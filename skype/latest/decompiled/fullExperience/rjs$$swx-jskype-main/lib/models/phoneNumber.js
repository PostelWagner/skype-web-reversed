(function (e) {
  if (typeof module == "object" && typeof module.exports == "object") {
    var t = e(require, exports);
    t !== undefined && (module.exports = t);
  } else
    typeof define == "function" && define.amd && define("swx-jskype-main/lib/models/phoneNumber", [
      "require",
      "exports",
      "jcafe-property-model"
    ], e);
}(function (e, t) {
  var n = e("jcafe-property-model"), r = function () {
      function e() {
        this.type = n.property({ readOnly: !0 });
        this.telUri = n.property({ readOnly: !0 });
        this.displayString = n.property({ readOnly: !0 });
        this.fromProfile = n.property({ readOnly: !0 });
      }
      return e;
    }();
  t.__esModule = !0;
  t["default"] = r;
}));
