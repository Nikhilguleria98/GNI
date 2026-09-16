import { useEffect } from "react";

const GniScrollEffect = () => {
  useEffect(() => {
    const styleId = "gni-3d-premium-system";

    if (document.getElementById(styleId)) {
      return;
    }

    const style = document.createElement("style");
    style.id = styleId;

    style.innerHTML = `
      /* =========================================================
         GNI 3D PREMIUM MOTION
         ========================================================= */

      @property --gni-angle {
        syntax: "<angle>";
        initial-value: 0deg;
        inherits: false;
      }

      /* =========================================================
         SCROLL PROGRESS
         ========================================================= */

      .gni-scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        z-index: 99999;
        pointer-events: none;
        transform-origin: left center;
        transform: scaleX(0);

        background:
          linear-gradient(
            90deg,
            #f4510b,
            #ff9b69,
            #f4510b
          );

        box-shadow:
          0 0 8px rgba(244, 81, 11, 0.25);
      }

      /* =========================================================
         PAGE TRANSITION
         ========================================================= */

      .gni-page-transition {
        position: fixed;
        inset: 0;
        z-index: 99998;
        pointer-events: none;
        opacity: 0;

        background:
          radial-gradient(
            circle at 50% 50%,
            rgba(244, 81, 11, 0.045),
            transparent 55%
          );

        transition:
          opacity 0.3s ease;
      }

      .gni-page-transition.gni-transition-active {
        opacity: 1;
      }

      /* =========================================================
         SECTION 3D SPACE
         ========================================================= */

      .gni-scroll-section {
        position: relative;
        perspective: 1400px;
        opacity: 0;

        transform:
          translate3d(0, 34px, 0)
          scale(0.99);

        filter: blur(2px);

        transition:
          opacity 0.8s ease,
          transform 0.95s cubic-bezier(0.22, 1, 0.36, 1),
          filter 0.8s ease;
      }

      .gni-scroll-section.gni-visible {
        opacity: 1;

        transform:
          translate3d(0, 0, 0)
          scale(1);

        filter: blur(0);
      }

      /* =========================================================
         SECTION LIGHT SWEEP
         ========================================================= */

      .gni-scroll-section::after {
        content: "";

        position: absolute;
        top: 0;
        left: -25%;

        width: 15%;
        height: 100%;

        pointer-events: none;
        opacity: 0;

        background:
          linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.12),
            transparent
          );

        transform:
          skewX(-14deg);
      }

      .gni-scroll-section.gni-visible::after {
        animation:
          gni-section-sweep 1.3s ease-out 0.1s
          forwards;
      }

      @keyframes gni-section-sweep {
        0% {
          left: -25%;
          opacity: 0;
        }

        20% {
          opacity: 1;
        }

        100% {
          left: 125%;
          opacity: 0;
        }
      }

      /* =========================================================
         HEADING REVEAL
         ========================================================= */

      .gni-scroll-heading {
        opacity: 0;

        transform:
          translate3d(0, 18px, 0);

        clip-path:
          inset(0 0 100% 0);

        transition:
          opacity 0.65s ease 0.08s,
          transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) 0.08s,
          clip-path 0.75s cubic-bezier(0.22, 1, 0.36, 1) 0.08s;
      }

      .gni-visible .gni-scroll-heading {
        opacity: 1;

        transform:
          translate3d(0, 0, 0);

        clip-path:
          inset(0 0 0 0);
      }

      /* =========================================================
         IMAGE DEPTH
         ========================================================= */

      .gni-scroll-image {
        transform:
          translate3d(0, 10px, 0)
          scale(1.02);

        transition:
          transform 1s cubic-bezier(0.22, 1, 0.36, 1);

        will-change: transform;
      }

      .gni-visible .gni-scroll-image {
        transform:
          translate3d(0, 0, 0)
          scale(1);
      }

      /* =========================================================
         3D CARD
         ========================================================= */

      .gni-scroll-card {
        position: relative;
        isolation: isolate;

        transform-style: preserve-3d;

        transform:
          perspective(1100px)
          rotateX(var(--gni-rx, 0deg))
          rotateY(var(--gni-ry, 0deg))
          translateZ(var(--gni-tz, 0px));

        transition:
          transform 0.18s ease-out,
          box-shadow 0.4s ease;

        will-change:
          transform;

        box-shadow:
          0 8px 25px rgba(24, 35, 59, 0.06);
      }

      /* =========================================================
         FLOATING EFFECT
         ========================================================= */

      .gni-scroll-card:hover {
        --gni-tz: 10px;

        box-shadow:
          0 20px 45px rgba(24, 35, 59, 0.13),
          0 5px 12px rgba(24, 35, 59, 0.06);
      }

      /* =========================================================
         CARD DEPTH LAYERS
         ========================================================= */

      .gni-scroll-card > * {
        position: relative;
        z-index: 3;

        transform:
          translateZ(12px);
      }

      .gni-scroll-card img {
        transform:
          translateZ(18px)
          scale(1);

        transition:
          transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
      }

      .gni-scroll-card:hover img {
        transform:
          translateZ(25px)
          scale(1.025);
      }

      /* =========================================================
         SOFT INNER DEPTH
         ========================================================= */

      .gni-scroll-card {
        background-clip:
          padding-box;
      }

      .gni-scroll-card::before {
        content: "";

        position: absolute;
        inset: 0;

        border-radius: inherit;

        pointer-events: none;
        z-index: 1;

        background:
          radial-gradient(
            circle at var(--gni-light-x, 50%)
            var(--gni-light-y, 50%),
            rgba(255, 255, 255, 0.16),
            transparent 34%
          );

        opacity: 0;

        transition:
          opacity 0.35s ease;
      }

      .gni-scroll-card:hover::before {
        opacity: 1;
      }

      /* =========================================================
         BUTTON DEPTH
         ========================================================= */

      .gni-scroll-card a,
      .gni-scroll-card button {
        transition:
          transform 0.3s ease,
          box-shadow 0.3s ease;
      }

      .gni-scroll-card a:hover,
      .gni-scroll-card button:hover {
        transform:
          translateZ(17px)
          translateY(-2px);
      }

      /* =========================================================
         MOBILE
         ========================================================= */

      @media (max-width: 768px) {
        .gni-scroll-section {
          perspective: none;

          transform:
            translate3d(0, 22px, 0)
            scale(0.997);
        }

        .gni-scroll-card {
          transform:
            translateZ(0);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .gni-scroll-card:hover {
          transform:
            translateY(-2px);
        }

        .gni-scroll-card > * {
          transform:
            none;
        }

        .gni-scroll-card img {
          transform:
            none;
        }

        .gni-scroll-card:hover img {
          transform:
            scale(1.02);
        }
      }

      /* =========================================================
         REDUCED MOTION
         ========================================================= */

      @media (prefers-reduced-motion: reduce) {
        html {
          scroll-behavior: auto;
        }

        .gni-scroll-section {
          opacity: 1;
          transform: none;
          filter: none;
          transition: none;
        }

        .gni-scroll-heading {
          opacity: 1;
          transform: none;
          clip-path: none;
          transition: none;
        }

        .gni-scroll-image {
          transform: none;
          transition: none;
        }

        .gni-scroll-card,
        .gni-scroll-card > *,
        .gni-scroll-card img {
          transform: none;
          transition: none;
        }
      }
    `;

    document.head.appendChild(style);

    /* =========================================================
       SCROLL PROGRESS
       ========================================================= */

    const progress =
      document.createElement("div");

    progress.className =
      "gni-scroll-progress";

    document.body.appendChild(progress);

    let progressFrame = null;

    const updateProgress = () => {
      const scrollTop =
        window.scrollY ||
        window.pageYOffset;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percentage =
        documentHeight > 0
          ? scrollTop / documentHeight
          : 0;

      progress.style.transform =
        `scaleX(${Math.min(
          Math.max(percentage, 0),
          1
        )})`;

      progressFrame = null;
    };

    const handleScroll = () => {
      if (!progressFrame) {
        progressFrame =
          requestAnimationFrame(
            updateProgress
          );
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    updateProgress();

    /* =========================================================
       FIND SECTIONS
       ========================================================= */

    const getSections = () => {
      return Array.from(
        document.querySelectorAll(
          "main section, section"
        )
      ).filter((section) => {
        return (
          !section.closest("nav") &&
          !section.closest("footer")
        );
      });
    };

    /* =========================================================
       PREPARE ELEMENTS
       ========================================================= */

    const prepareElements = () => {
      const sections =
        getSections();

      sections.forEach((section) => {
        section.classList.add(
          "gni-scroll-section"
        );

        const heading =
          section.querySelector(
            "h1, h2, h3"
          );

        if (heading) {
          heading.classList.add(
            "gni-scroll-heading"
          );
        }

        const images =
          section.querySelectorAll("img");

        images.forEach((image) => {
          image.classList.add(
            "gni-scroll-image"
          );
        });

        const cards =
          section.querySelectorAll(
            ".rounded-xl, .rounded-2xl, .rounded-lg"
          );

        cards.forEach((card) => {
          if (
            card.tagName !== "BUTTON" &&
            card.tagName !== "A"
          ) {
            card.classList.add(
              "gni-scroll-card"
            );
          }
        });
      });

      return sections;
    };

    let sections =
      prepareElements();

    /* =========================================================
       MOUSE 3D TILT
       ========================================================= */

    const cardHandlers =
      new Map();

    const setupCardTilt = () => {
      if (
        window.matchMedia(
          "(max-width: 768px)"
        ).matches
      ) {
        return;
      }

      const cards =
        document.querySelectorAll(
          ".gni-scroll-card"
        );

      cards.forEach((card) => {
        if (cardHandlers.has(card)) {
          return;
        }

        const handleMove = (event) => {
          const rect =
            card.getBoundingClientRect();

          const x =
            event.clientX -
            rect.left;

          const y =
            event.clientY -
            rect.top;

          const centerX =
            rect.width / 2;

          const centerY =
            rect.height / 2;

          const rotateY =
            ((x - centerX) /
              centerX) *
            3.2;

          const rotateX =
            ((centerY - y) /
              centerY) *
            3.2;

          const lightX =
            (x / rect.width) *
            100;

          const lightY =
            (y / rect.height) *
            100;

          card.style.setProperty(
            "--gni-rx",
            `${rotateX}deg`
          );

          card.style.setProperty(
            "--gni-ry",
            `${rotateY}deg`
          );

          card.style.setProperty(
            "--gni-tz",
            "10px"
          );

          card.style.setProperty(
            "--gni-light-x",
            `${lightX}%`
          );

          card.style.setProperty(
            "--gni-light-y",
            `${lightY}%`
          );
        };

        const handleLeave = () => {
          card.style.setProperty(
            "--gni-rx",
            "0deg"
          );

          card.style.setProperty(
            "--gni-ry",
            "0deg"
          );

          card.style.setProperty(
            "--gni-tz",
            "0px"
          );

          card.style.setProperty(
            "--gni-light-x",
            "50%"
          );

          card.style.setProperty(
            "--gni-light-y",
            "50%"
          );
        };

        card.addEventListener(
          "mousemove",
          handleMove
        );

        card.addEventListener(
          "mouseleave",
          handleLeave
        );

        cardHandlers.set(card, {
          handleMove,
          handleLeave,
        });
      });
    };

    setupCardTilt();

    /* =========================================================
       INTERSECTION OBSERVER
       ========================================================= */

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(
                "gni-visible"
              );
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin:
            "0px 0px -8% 0px",
        }
      );

    sections.forEach((section) => {
      observer.observe(section);
    });

    /* =========================================================
       DYNAMIC ROUTE SUPPORT
       ========================================================= */

    let refreshTimer = null;

    const refreshAnimations = () => {
      clearTimeout(refreshTimer);

      refreshTimer =
        setTimeout(() => {
          const updatedSections =
            prepareElements();

          updatedSections.forEach(
            (section) => {
              observer.observe(section);
            }
          );

          setupCardTilt();

          sections =
            updatedSections;

          updateProgress();
        }, 80);
    };

    const mutationObserver =
      new MutationObserver(() => {
        refreshAnimations();
      });

    mutationObserver.observe(
      document.body,
      {
        childList: true,
        subtree: true,
      }
    );

    /* =========================================================
       ROUTE TRANSITION
       ========================================================= */

    const pageTransition =
      document.createElement("div");

    pageTransition.className =
      "gni-page-transition";

    document.body.appendChild(
      pageTransition
    );

    let currentPath =
      window.location.pathname;

    const routeTimer =
      setInterval(() => {
        if (
          window.location.pathname !==
          currentPath
        ) {
          currentPath =
            window.location.pathname;

          pageTransition.classList.add(
            "gni-transition-active"
          );

          setTimeout(() => {
            pageTransition.classList.remove(
              "gni-transition-active"
            );
          }, 300);

          setTimeout(() => {
            refreshAnimations();
          }, 100);
        }
      }, 100);

    /* =========================================================
       CLEANUP
       ========================================================= */

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      if (progressFrame) {
        cancelAnimationFrame(
          progressFrame
        );
      }

      clearInterval(routeTimer);
      clearTimeout(refreshTimer);

      observer.disconnect();
      mutationObserver.disconnect();

      cardHandlers.forEach(
        (handlers, card) => {
          card.removeEventListener(
            "mousemove",
            handlers.handleMove
          );

          card.removeEventListener(
            "mouseleave",
            handlers.handleLeave
          );
        }
      );

      progress.remove();
      pageTransition.remove();
      style.remove();
    };
  }, []);

  return null;
};

export default GniScrollEffect;