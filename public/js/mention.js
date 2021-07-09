/// BUTTON FOR SCROLL TOP

let buttonScrollTop = document.querySelector(".buttonScroll");
let rootElement = document.documentElement;

function scrollTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

buttonScrollTop.addEventListener("click", scrollTop);

//  BUTTON APPEAR FOR SCROLL AT 90%

function handleScroll() {
  let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.5) {
    // Show button
    buttonScrollTop.classList.add("showBtn");
  } else {
    // Hide button
    buttonScrollTop.classList.remove("showBtn");
  }
}

document.addEventListener("scroll", handleScroll);
