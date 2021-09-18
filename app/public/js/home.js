const app = {
  buttonScrollTop: document.querySelector(".buttonScroll"),
  shop: document.querySelector(".shop"),
  arrow: document.querySelector(".arrow"),
  loader: document.querySelector(".loader"),
  loaderGif: document.querySelector(".loader__gif"),
  rootElement: document.documentElement,
  deltaY: 0,
  locomotiveScroll: null,

  animArrow: () => {
    app.shop.addEventListener("mouseenter", function () {
      app.arrow.classList.add("arrow2");
    });

    app.shop.addEventListener("mouseleave", function () {
      app.arrow.classList.remove("arrow2");
    });
  },

  backToTheTop: () => {
    app.buttonScrollTop.addEventListener("click", () => {
      app.locomotiveScroll.scrollTo(0);
    });
  },

  onScroll: (event) => {
    if (event.delta) app.deltaY = event.delta.y;
    const result = app.rootElement.scrollHeight - app.rootElement.clientHeight;

    if (app.rootElement.scrollTop / result > 0.5) {
      app.buttonScrollTop.classList.add("showBtn");
    } else {
      app.buttonScrollTop.classList.remove("showBtn");
    }

    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },

  timeOut: () => {
    setTimeout(() => {
      app.loader.className += " hidden";
    }, 200);
  },

  initScroll: () => {
    app.locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: false,
      multiplier: 1,
    });
    app.locomotiveScroll.on("scroll", app.onScroll);
  },

  init: function () {
    app.initScroll();
    app.animArrow();
    app.backToTheTop();
    app.timeOut();
  },
};

document.addEventListener("DOMContentLoaded", app.init);

// CARROUSEL
$(document).ready(function () {
  $(".card").slick({
    dots: false,
    infinite: true,
    speed: 3000,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 6000,
    draggable: false,
  });
});
