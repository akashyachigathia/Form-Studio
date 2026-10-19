  gsap.registerPlugin(ScrollTrigger);

  gsap.matchMedia().add(
    "(prefers-reduced-motion: no-preference)",
    () => {
      gsap.utils.toArray(".parallax").forEach((box) => {
        const image = box.querySelector("img");

        gsap.fromTo(
          image,
          {
            y: () => -box.clientHeight * 0.25
          },
          {
            y: () => box.clientHeight * 0.25,
            ease: "none",

            scrollTrigger: {
              trigger: box,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true
            }
          }
        );
      });
    }
  );

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });