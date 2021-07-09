const app = {
  buttonScrollTop: document.querySelector(".buttonScroll"),
  shop: document.querySelector(".shop"),
  arrow: document.querySelector(".arrow"),
  loader: document.querySelector(".loader"),
  loaderGif: document.querySelector(".loader__gif"),
  rootElement: document.documentElement,
  deltaY: 0, // Ici on initialise le delta qui est dans l'event de locomotive
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
      app.locomotiveScroll.scrollTo(0); // Ici on utilise la méthode 'scrollTo' de locomotive
    });
  },

  onScroll: (event) => {
    // On met tout le code concernant le scroll dans cette méthode
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
      smooth: true,
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

// LOADING PAGE WITH SETTIMEOUT

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
