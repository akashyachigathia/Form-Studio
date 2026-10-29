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















  
  gsap.registerPlugin(ScrollTrigger);

async function setupSocialStrip() {
  const strip = document.querySelector(".social-strip");

  if (!strip) return;

  await document.fonts.ready;

  const viewport = strip.querySelector(".social-strip__window");
  const track = strip.querySelector(".social-strip__track");
  const original = track.querySelector("span");

  const travel = 400; // Increase this for more movement

  function fillStrip() {
    // Add enough text to prevent an empty space at the right.
    while (track.scrollWidth < viewport.clientWidth + travel + 100) {
      const copy = original.cloneNode(true);
      copy.setAttribute("aria-hidden", "true");
      track.appendChild(copy);
    }
  }

  fillStrip();

  gsap.matchMedia().add(
    "(prefers-reduced-motion: no-preference)",
    () => {
      gsap.fromTo(
        track,
        { x: 0 },
        {
          x: -travel,
          ease: "none",
          scrollTrigger: {
            trigger: strip,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            onRefreshInit: fillStrip,
          },
        }
      );
    }
  );
}

setupSocialStrip();