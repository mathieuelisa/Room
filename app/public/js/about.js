const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  multiplier: 1,
});

scroll.on("call", (t, e, n) => {
  if (t === "dynamicBackground") {
    if (e === "enter") {
    }
  }

  console.log("t => ", t);
  console.log("e => ", e);
  console.log("n => ", n);
});
