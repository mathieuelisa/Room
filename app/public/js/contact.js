const app = {
  myTextArea: document.querySelector("textarea"),
  maxChars: document.querySelector(".charsRemaining"),
  maxLength: 150,

  writeInForm: () => {
    app.myTextArea.addEventListener("keyup", function () {
      let textlength = app.maxLength - app.myTextArea.value.length;

      app.maxChars.innerHTML = textlength + " characters remaining";
      if (textlength < 50) {
        maxChars.style.color = "red";
      }
    });
  },

  init: function () {
    app.writeInForm();
  },
};

document.addEventListener("DOMContentLoaded", app.init);

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});
