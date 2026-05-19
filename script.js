const revealItems = document.querySelectorAll(
  ".section, .metric-card, .system-card, .email-card, .ad-card, .display-banner, .launch-hero, .launch-tile, .audit-card, .desktop-frame, .phone-frame, .workflow-grid div, .about-grid div"
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
});

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
  }
);

revealItems.forEach((item) => observer.observe(item));

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const metricCards = document.querySelectorAll(".metric-card");

let activeMetricIndex = 0;

setInterval(() => {
  metricCards.forEach((card) => card.classList.remove("active"));

  activeMetricIndex = (activeMetricIndex + 1) % metricCards.length;

  metricCards[activeMetricIndex].classList.add("active");
}, 2200);

const adCards = document.querySelectorAll(".ad-card");

adCards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });
});
