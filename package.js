// navbar-scroll.js

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-zinc-500/70", "backdrop-blur-md", "shadow-md");
    } else {
      navbar.classList.remove("bg-zinc-500/70", "backdrop-blur-md", "shadow-md");
    }
  });
});


// scroll.js

function smoothScrollTo(targetElement, duration = 800, offset = -80) {
  const start = window.pageYOffset;
  const targetY = targetElement.getBoundingClientRect().top + start + offset;
  const distance = targetY - start;

  let requestId = null;
  let startTime = null;

  function easeInOutQuart(t) {
    return t < 0.5
      ? 8 * t * t * t * t
      : 1 - Math.pow(-2 * t + 2, 4) / 2;
  }

  function step(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutQuart(progress);

    window.scrollTo(0, start + distance * ease);

    if (progress < 1) {
      requestId = requestAnimationFrame(step);
    } else {
      cancelAnimationFrame(requestId);
    }
  }

  requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".scroll-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Force-disable native smooth scroll to prevent conflict
        document.documentElement.style.scrollBehavior = "auto";
        document.body.style.scrollBehavior = "auto";

        smoothScrollTo(targetElement, 800, -80);
      }
    });
  });
});