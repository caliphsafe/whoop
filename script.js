const revealItems = document.querySelectorAll(
  ".section, .journey-strip, .phone-ui, .email-reader, .social-feed, .ad-detail, .launch-art, .launch-notes, .audit-card, .system-card"
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
  { threshold: 0.12 }
);

revealItems.forEach((item) => observer.observe(item));

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

const emails = [
  {
    step: "Email 01 / Welcome",
    subject: "Your body has a dashboard.",
    kicker: "Baseline Insight",
    headline: "Start reading the signals your body already gives you.",
    body: "Your sleep, recovery, and strain create a daily performance profile. The goal is not more data. The goal is better decisions.",
    metricLabel: "Today’s Readiness",
    metric: "82%",
    metricCopy: "Your body is ready for higher output today.",
    cta: "See Your First Insight",
    why: "The inbox preview creates curiosity, the opened email teaches the product value quickly, and the CTA moves the user into the app experience."
  },
  {
    step: "Email 02 / Education",
    subject: "Recovery is readiness.",
    kicker: "Recovery Education",
    headline: "Recovery is not rest. It is readiness.",
    body: "This email turns a complex biometric idea into a simple decision-making framework: push, maintain, or recover.",
    metricLabel: "Recovery Trend",
    metric: "+14%",
    metricCopy: "Your recovery has improved across the last 7 days.",
    cta: "View Recovery Trends",
    why: "This teaches value before asking for conversion. It helps the user understand why the product matters in daily life."
  },
  {
    step: "Email 03 / Conversion",
    subject: "Build your rhythm.",
    kicker: "Membership Value",
    headline: "Build a rhythm your body can sustain.",
    body: "The third email connects insights to habit formation and positions the membership as an ongoing performance system.",
    metricLabel: "Insights Unlocked",
    metric: "3",
    metricCopy: "Sleep debt, strain balance, and recovery trend are ready.",
    cta: "Unlock Your Plan",
    why: "By email three, the user has context. The conversion CTA now feels like a continuation, not a cold sales push."
  }
];

document.querySelectorAll(".inbox-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".inbox-item").forEach((btn) => btn.classList.remove("active"));
    item.classList.add("active");

    const email = emails[Number(item.dataset.email)];

    document.getElementById("emailStep").textContent = email.step;
    document.getElementById("emailSubject").textContent = email.subject;
    document.getElementById("emailKicker").textContent = email.kicker;
    document.getElementById("emailHeadline").textContent = email.headline;
    document.getElementById("emailBody").textContent = email.body;
    document.getElementById("emailMetricLabel").textContent = email.metricLabel;
    document.getElementById("emailMetric").textContent = email.metric;
    document.getElementById("emailMetricCopy").textContent = email.metricCopy;
    document.getElementById("emailCta").textContent = email.cta;
    document.getElementById("emailWhy").textContent = email.why;
  });
});

const ads = [
  {
    type: "Variant A / Emotion-led",
    headline: "Your body has been trying to tell you something.",
    body: "This direction creates emotional curiosity and frames the product as a way to understand what the body is already signaling.",
    landingHeadline: "Listen earlier. Recover smarter.",
    landingCopy: "A focused landing hero that continues the same message from the ad click.",
    cta: "Learn More",
    why: "This angle may perform well with users who feel stress, fatigue, or inconsistency but do not yet think in performance metrics."
  },
  {
    type: "Variant B / Benefit-led",
    headline: "Train harder when your body is ready.",
    body: "This direction speaks to active users who want a clear training advantage and care about improving output.",
    landingHeadline: "Turn recovery into better training decisions.",
    landingCopy: "The landing page continues the promise with a clear benefit and action path.",
    cta: "Start Tracking",
    why: "This angle may perform well with fitness-focused audiences who already understand training consistency and recovery."
  },
  {
    type: "Variant C / Data-led",
    headline: "HRV down 18%? Adjust before burnout.",
    body: "This direction uses a specific metric to create proof, urgency, and product credibility.",
    landingHeadline: "Your trends are telling a story.",
    landingCopy: "The landing page expands the metric into a product education moment.",
    cta: "See Your Trends",
    why: "This angle may perform well with data-curious users who trust numbers and want actionable insights."
  }
];

document.querySelectorAll(".feed-ad").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".feed-ad").forEach((btn) => btn.classList.remove("active"));
    item.classList.add("active");

    const ad = ads[Number(item.dataset.ad)];

    document.getElementById("adType").textContent = ad.type;
    document.getElementById("adHeadline").textContent = ad.headline;
    document.getElementById("adBody").textContent = ad.body;
    document.getElementById("landingHeadline").textContent = ad.landingHeadline;
    document.getElementById("landingCopy").textContent = ad.landingCopy;
    document.getElementById("landingCta").textContent = ad.cta;
    document.getElementById("adWhy").textContent = ad.why;
  });
});

const launchChannels = {
  email: {
    channel: "Email Header",
    headline: "Know your readiness before the day starts.",
    body: "Launch concept for a recovery intelligence feature that turns daily biometric data into a simple action plan.",
    cta: "See Today’s Readiness",
    why: "The email version gives more context because the user has already opted into the relationship. It can educate before pushing the CTA."
  },
  social: {
    channel: "Paid Social",
    headline: "Your body’s green light.",
    body: "A short, direct social concept made for fast feed scanning and a simple performance promise.",
    cta: "Start Tracking",
    why: "The social version strips the idea down to a hook, benefit, and action because attention is shorter in-feed."
  },
  display: {
    channel: "Display Ad",
    headline: "Ready is measurable.",
    body: "A compact banner message built for awareness and quick comprehension.",
    cta: "Try It",
    why: "The display version prioritizes fast readability because users are not actively looking for the brand in that moment."
  },
  landing: {
    channel: "Landing Page Hero",
    headline: "Turn recovery into a daily performance plan.",
    body: "A larger landing concept that expands the value proposition and connects product features to outcomes.",
    cta: "Explore the System",
    why: "The landing page has room to educate, support objections, and turn interest into conversion."
  },
  mobile: {
    channel: "Mobile Module",
    headline: "Today’s recommendation: build.",
    body: "A compact mobile-first module that makes the next action feel immediate and personal.",
    cta: "View Plan",
    why: "The mobile version uses short copy and a visible CTA because the user is likely scanning quickly."
  }
};

document.querySelectorAll(".launch-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".launch-tab").forEach((btn) => btn.classList.remove("active"));
    tab.classList.add("active");

    const item = launchChannels[tab.dataset.channel];

    document.getElementById("launchChannel").textContent = item.channel;
    document.getElementById("launchHeadline").textContent = item.headline;
    document.getElementById("launchBody").textContent = item.body;
    document.getElementById("launchCta").textContent = item.cta;
    document.getElementById("launchWhy").textContent = item.why;
  });
});
