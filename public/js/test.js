gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

const scrollBarHome = document.querySelector(".scroll-bar-home");
const scrollBarAbout = document.querySelector(".scroll-bar-about");
const scrollBarProjects = document.querySelector(".scroll-bar-projects");
const scrollBarContact = document.querySelector(".scroll-bar-contact");

const app = {
  buttonScrollTop: document.querySelector(".buttonScroll"),
  buttonScrollTop2: document.querySelector(".topButtonScroll"),
  rootElement: document.documentElement,
  cursor: document.querySelector(".cursor"),
  cursorCenter: document.querySelector(".cursorCenter"),
  textCursor: document.querySelector(".textCursor"),
  hoverAnims: document.querySelectorAll(".hoverAnim"), // J'ai ajouter la classe 'hoverAnim' à tout tes éléments qui animent ton curseur (dans le HTML)
  deltaY: 0, // Ici on initialise le delta qui est dans l'event de locomotive
  locomotiveScroll: null, // On crée une variable qui contiendra l'instance de locomotive pour pouvoir intéragir avec dans le code

  backToTheTop: () => {
    app.buttonScrollTop.addEventListener("click", () => {
      app.locomotiveScroll.scrollTo(0); // Ici on utilise la méthode 'scrollTo' de locomotive
    });
  },
  gsapAnimation: () => {
    const firstName = document.querySelector(".myName");
    const mainTitle = document.querySelector(".title-first-container");
    const mainText = document.querySelector(".text-first-container");
    const firstBlock = document.querySelector(".bloc-container2-general");

    CustomEase.create(
      "myEase",
      "M0,0 C0,0 -0.003,1.093 0.302,1.048 0.704,0.988 1,1 1,1 "
    );
    gsap.fromTo(
      firstBlock,
      1.5,
      { opacity: 0, x: 800 },
      { opacity: 1, x: 0, ease: "myEase" }
    );

    gsap.fromTo(
      firstName,
      3,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, delay: 2 }
    );
    gsap.fromTo(
      mainTitle,
      3,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, delay: 1.5 }
    );
    gsap.fromTo(
      mainText,
      3,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, delay: 1.5 }
    );
  },
  mouseCursor: (active = true) => {
    if (active) {
      document.addEventListener("mousemove", (event) => {
        const x = event.pageX;
        const y = event.pageY;
        // On ajoute le 'deltaY' de locomotive se qui résout le problème de la souris quand on scroll
        app.cursor.setAttribute(
          "style",
          `top: ${y - 15 + app.deltaY}px; left: ${x - 15}px;`
        );
        app.cursorCenter.setAttribute(
          "style",
          `top: ${y - 3 + app.deltaY}px; left: ${x - 3}px;`
        );
        app.textCursor.setAttribute(
          "style",
          `top: ${y - 75 + app.deltaY}px; left: ${x - 5}px;`
        );
      });
    }
  },
  animMouse: () => {
    // On ajoute les event de la souris sur tout les éléments qui ont la classe 'hoverAnim'
    Array.from(app.hoverAnims).forEach((element) => {
      element.addEventListener("mouseenter", (e) => {
        app.cursor.classList.toggle("cursorMail");
        // Ici pour les projets on ajoute une classe particulière
        if (element.classList.contains("link-project")) {
          app.textCursor.className = "cursorExplore";
        }
      });
      element.addEventListener("mouseleave", () => {
        app.cursor.classList.toggle("cursorMail");
        if (element.classList.contains("link-project")) {
          app.textCursor.className = "textCursor";
        }
      });
    });
  },
  effectsOnCursor: () => {
    document.addEventListener("click", () => {
      app.cursor.classList.add("expand");

      setTimeout(() => {
        app.cursor.classList.remove("expand");
      }, 500);
    });
  },
  onScroll: (event) => {
    // On met tout le code concernant le scroll dans cette méthode
    if (event.delta) app.deltaY = event.delta.y;
    const result = app.rootElement.scrollHeight - app.rootElement.clientHeight;

    if (app.rootElement.scrollTop / result > 0.82) {
      app.buttonScrollTop.classList.add("showBtn");
      app.buttonScrollTop2.classList.add("showBtn");
    } else {
      app.buttonScrollTop.classList.remove("showBtn");
      app.buttonScrollTop2.classList.remove("showBtn");
    }
    const result2 = app.rootElement.scrollHeight - app.rootElement.clientHeight;
    const finalResult = app.rootElement.scrollTop / result2 + 1;

    // J'ai simplifié ton code ce qui évite de se répéter
    scrollBarHome.style.display = "none";
    scrollBarAbout.style.display = "none";
    scrollBarProjects.style.display = "none";
    scrollBarContact.style.display = "none";
    if (finalResult >= 1 && finalResult <= 1.05) {
      scrollBarHome.style.display = "block";
    } else if (finalResult >= 1.051 && finalResult <= 1.15) {
      scrollBarAbout.style.display = "block";
    } else if (finalResult >= 1.151 && finalResult <= 1.89) {
      scrollBarProjects.style.display = "block";
    } else if (finalResult >= 1.891) {
      scrollBarContact.style.display = "block";
    }
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  initScroll: () => {
    // On crée l'instance de locomotive
    app.locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      multiplier: 1,
    });

    // On écoute le scroll et on appelle 'app.onScroll'
    app.locomotiveScroll.on("scroll", app.onScroll);
    // document.addEventListener('scroll', app.onScroll);
  },

  init: function () {
    // Initialisation de scrollBarHome sinon rien est affiché au chargement de la page
    scrollBarHome.style.display = "block";
    app.gsapAnimation();
    app.initScroll();
    app.animMouse();
    app.backToTheTop();
    app.mouseCursor();
    app.effectsOnCursor();
  },
};

document.addEventListener("DOMContentLoaded", app.init);

// J'ai supprimé les autres méthodes ainsi que celle de GSAP
