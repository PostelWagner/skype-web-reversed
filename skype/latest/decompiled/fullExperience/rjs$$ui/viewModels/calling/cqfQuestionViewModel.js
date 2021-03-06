define("ui/viewModels/calling/cqfQuestionViewModel", [], function () {
  function e(e) {
    var t = this;
    t.text = e.question.text;
    t.checked = e.question.checked;
    t.comment = e.question.comment;
    t.editlength = e.question.editlength;
    t.isWithTextarea = !!e.question.editlength;
    t.category = e.question.category;
    t.isAudio = function () {
      return t.category !== "vq" && t.category !== "vqe";
    };
    t.clickAction = function () {
      t.isWithTextarea || t.checked(!t.checked());
    };
    t.checkCommentLength = function () {
      t.comment() && t.comment().length > t.editlength && t.comment(t.comment().substring(0, t.editlength));
    };
  }
  return {
    build: function (t) {
      return new e(t);
    }
  };
});
