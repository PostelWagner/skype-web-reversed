define("ui/components/chat/pes/itemsPicker", [
  "require",
  "exports",
  "module",
  "ui/viewModels/chat/pes/itemsPicker",
  "utils/common/scroll",
  "browser/dom",
  "constants/components",
  "text!views/chat/pes/itemsPicker.html"
], function (e, t) {
  function s(e, t) {
    var s = t.element, o = r.build(i.getElement(".picker", s)), u = new n(e, o, s);
    return u.init(), u;
  }
  var n = e("ui/viewModels/chat/pes/itemsPicker"), r = e("utils/common/scroll"), i = e("browser/dom");
  t.name = e("constants/components").chat.EXPRESSION_ITEMS_PICKER;
  t.template = e("text!views/chat/pes/itemsPicker.html");
  t.viewModel = { createViewModel: s };
});
