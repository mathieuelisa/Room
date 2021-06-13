var navbar = document.querySelectorAll(".navbar-items");

for (let i = 0; i < navbar.length; i++) {
  navbar[i].addEventListener("mouseenter", function () {
    this.classList.add("borderLine");
  });

  navbar[i].addEventListener("mouseleave", function () {
    this.classList.remove("borderLine");
  });
}

// Characters Remaining

let myTextArea = document.querySelector("textarea");
let maxChars = document.querySelector(".charsRemaining");
let maxLength = 150;

myTextArea.addEventListener("keyup", function () {
  let textlength = maxLength - myTextArea.value.length;

  maxChars.innerHTML = textlength + " characters remaining"

  if (textlength < 50) {
    maxChars.style.color = "red";
  }
  
});


