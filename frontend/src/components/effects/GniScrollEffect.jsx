import { useEffect } from "react";

const GniScrollEffect = () => {
  useEffect(() => {
    const style = document.createElement("style");

    style.innerHTML = `
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
        background: linear-gradient(90deg,#f4510b,#ff9b69,#f4510b);
      }

      .gni-scroll-section {
        position: relative;
        perspective: 1400px;
        opacity: 0;
        transform: translate3d(0,34px,0) scale(.99);
        filter: blur(2px);
        transition: all .8s ease;
      }

      .gni-scroll-section.visible {
        opacity: 1;
        transform: translate3d(0,0,0) scale(1);
        filter: blur(0);
      }

      .gni-scroll-card {
        position: relative;
        isolation: isolate;
        transform-style: preserve-3d;
        transform:
          perspective(1100px)
          rotateX(var(--rx,0deg))
          rotateY(var(--ry,0deg))
          translateZ(var(--tz,0px));
        transition: transform .18s ease-out, box-shadow .4s ease;
      }

      /* Same travelling line — only slower */
      .gni-scroll-card::after {
        content: "";
        position: absolute;
        inset: -1px;
        border-radius: inherit;
        padding: 1.5px;
        pointer-events: none;
        z-index: 2;

        background: linear-gradient(
          90deg,
          transparent 0%,
          transparent 35%,
          #ff5b00 50%,
          transparent 65%,
          transparent 100%
        );

        background-size: 200% 100%;

        -webkit-mask:
          linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;

        animation: gni-border-travel 6s linear infinite;
      }

      /* Recruiters par line nahi */
      .gni-recruiters-section .gni-scroll-card::after {
        display: none;
      }

      @keyframes gni-border-travel {
        from {
          background-position: 200% 0;
        }

        to {
          background-position: -200% 0;
        }
      }

      .gni-scroll-card:hover {
        --tz: 10px;
        box-shadow: 0 20px 45px rgba(24,35,59,.13);
      }

      .gni-scroll-card > * {
        position: relative;
        z-index: 3;
        transform: translateZ(12px);
      }

      .gni-scroll-card img {
        transform: translateZ(18px);
        transition: transform .5s ease;
      }

      .gni-scroll-card:hover img {
        transform: translateZ(25px) scale(1.025);
      }

      .gni-scroll-heading {
        opacity: 0;
        transform: translate3d(0,18px,0);
        transition: all .7s ease;
      }

      .visible .gni-scroll-heading {
        opacity: 1;
        transform: translate3d(0,0,0);
      }

      .gni-scroll-image {
        transform: translate3d(0,10px,0) scale(1.02);
        transition: transform 1s ease;
      }

      .visible .gni-scroll-image {
        transform: translate3d(0,0,0) scale(1);
      }

      @media (max-width:768px) {
        html,
        body {
          overflow-x: hidden;
          max-width: 100%;
        }

        .gni-scroll-section {
          perspective: none;
          transform: translateY(20px);
          overflow: hidden;
        }

        .gni-scroll-card {
          transform: none !important;
          max-width: 100%;
        }

        .gni-scroll-card:hover {
          transform: none !important;
        }

        .gni-scroll-card > *,
        .gni-scroll-card img {
          transform: none !important;
        }

        .gni-scroll-card::after {
          animation-duration: 7s;
        }
      }

      @media (prefers-reduced-motion:reduce) {
        .gni-scroll-section,
        .gni-scroll-heading,
        .gni-scroll-image,
        .gni-scroll-card {
          opacity: 1;
          transform: none;
          filter: none;
          transition: none;
        }

        .gni-scroll-card::after {
          animation: none;
        }
      }
    `;

    document.head.appendChild(style);

    const progress = document.createElement("div");
    progress.className = "gni-scroll-progress";
    document.body.appendChild(progress);

    const updateProgress = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;

      const value = max > 0 ? window.scrollY / max : 0;

      progress.style.transform = `scaleX(${Math.min(value, 1)})`;
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    const getSections = () =>
      [...document.querySelectorAll("main section, section")].filter(
        (section) =>
          !section.closest("nav") &&
          !section.closest("footer")
      );

    const prepare = () => {
      const sections = getSections();

      sections.forEach((section) => {
        section.classList.add("gni-scroll-section");

        const heading = section.querySelector("h1,h2,h3");
        if (heading) heading.classList.add("gni-scroll-heading");

        section.querySelectorAll("img").forEach((img) => {
          img.classList.add("gni-scroll-image");
        });

        section
          .querySelectorAll(".rounded-xl,.rounded-2xl,.rounded-lg")
          .forEach((card) => {
            if (
              card.tagName !== "BUTTON" &&
              card.tagName !== "A" &&
              !card.closest(".gni-recruiters-section")
            ) {
              card.classList.add("gni-scroll-card");
            }
          });
      });

      return sections;
    };

    let sections = prepare();

    const setupCards = () => {
      if (window.innerWidth <= 768) return;

      document.querySelectorAll(".gni-scroll-card").forEach((card) => {
        if (card.dataset.tilt) return;

        card.dataset.tilt = "true";

        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();

          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const ry =
            ((x - rect.width / 2) / (rect.width / 2)) * 3;

          const rx =
            ((rect.height / 2 - y) / (rect.height / 2)) * 3;

          card.style.setProperty("--rx", `${rx}deg`);
          card.style.setProperty("--ry", `${ry}deg`);
          card.style.setProperty("--tz", "10px");
        });

        card.addEventListener("mouseleave", () => {
          card.style.setProperty("--rx", "0deg");
          card.style.setProperty("--ry", "0deg");
          card.style.setProperty("--tz", "0px");
        });
      });
    };

    setupCards();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    const mutationObserver = new MutationObserver(() => {
      sections = prepare();

      sections.forEach((section) => observer.observe(section));

      setupCards();
      updateProgress();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const transition = document.createElement("div");
    transition.className = "gni-page-transition";
    document.body.appendChild(transition);

    let currentPath = window.location.pathname;

    const routeTimer = setInterval(() => {
      if (window.location.pathname !== currentPath) {
        currentPath = window.location.pathname;

        transition.classList.add("active");

        setTimeout(() => {
          transition.classList.remove("active");
        }, 300);
      }
    }, 100);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      clearInterval(routeTimer);

      observer.disconnect();
      mutationObserver.disconnect();

      progress.remove();
      transition.remove();
      style.remove();
    };
  }, []);

  return null;
};

export default GniScrollEffect;