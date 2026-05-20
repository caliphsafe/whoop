document.documentElement.classList.add("page-ready");

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

const emailViewButtons = document.querySelectorAll(".email-view-btn");
const emailViewPanels = document.querySelectorAll(".email-view-panel");

function setEmailView(view) {
  emailViewButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.emailView === view);
  });

  emailViewPanels.forEach((panel) => {
    panel.classList.remove("active");
  });

  const targetPanel = document.querySelector(`.email-${view}-view`);

  if (targetPanel) {
    targetPanel.classList.add("active");
  }
}

emailViewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setEmailView(button.dataset.emailView);
  });
});

const mobileQuery = window.matchMedia("(max-width: 850px)");

function setDefaultEmailView() {
  setEmailView(mobileQuery.matches ? "mobile" : "desktop");
}

setDefaultEmailView();

mobileQuery.addEventListener("change", setDefaultEmailView);

const emails = [
  {
    stage: "Acquisition",
    subject: "Your body has been trying to tell you something.",
    preview: "Turn recovery, sleep, and strain into a daily decision.",
    kicker: "Daily Readiness",
    headline: "Turn body signals into better decisions.",
    copy: "Your body is constantly responding to training, sleep, stress, illness, and daily habits. This campaign introduces WHOOP as the tool that turns those signals into a simple question: what are you ready for today?",
    supplement: false,
    image: "img/whoop_quantify.png",
    metricLabel: "Campaign Hook",
    metric: "82%",
    metricText: "Recovery becomes a clear readiness signal.",
    subhead: "Why this approach works",
    detail: "This is an acquisition email. The goal is to create curiosity without overwhelming the user with features. The email turns the product into a daily decision-making tool.",
    cta: "Open Plan Page",
    why: "This email is built to acquire users by making biometric tracking feel simple, useful, and personal."
  },
  {
    stage: "Education",
    subject: "Recovery is not rest. It is readiness.",
    preview: "Learn when to push, maintain, or back off.",
    kicker: "Recovery Education",
    headline: "Know when to push and when to recover.",
    copy: "Recovery is the clearest way to explain the value of body data. This email teaches the user that higher recovery signals readiness for more output, while lower recovery can be a cue to rest, adjust, or protect long-term progress.",
    supplement: true,
    image: "img/whoop_quantify.png",
    metricLabel: "Recovery Signal",
    metric: "High",
    metricText: "Ready for increased training load.",
    subhead: "Why this approach works",
    detail: "This is a product education email. The supporting visual helps explain the concept, but the main focus stays on the message, hierarchy, and CTA.",
    cta: "Compare Memberships",
    why: "This teaches the product value before asking for conversion, which supports trust and retention."
  },
  {
    stage: "Retention",
    subject: "Tonight decides tomorrow’s output.",
    preview: "A sleep plan designed around your body’s needs.",
    kicker: "Sleep Retention",
    headline: "Make sleep feel like a performance habit.",
    copy: "This email is designed for retention. It gives members a reason to check in before bed by connecting sleep timing, sleep stages, recovery, and tomorrow’s performance.",
    supplement: true,
    image: "img/whoop_sleep.png",
    metricLabel: "Tonight’s Sleep Need",
    metric: "7.8h",
    metricText: "Recommended for stronger recovery.",
    subhead: "Why this approach works",
    detail: "The email creates a repeatable habit loop: check your recommendation, follow the plan, see the recovery impact, repeat.",
    cta: "Set Sleep Plan",
    why: "This supports retention by giving the user a reason to return to the product at night."
  },
  {
    stage: "Upsell",
    subject: "Your daily habits are shaping your long-term health.",
    preview: "Healthspan turns longevity into something measurable.",
    kicker: "Healthspan Upsell",
    headline: "Extend your prime with long-term insight.",
    copy: "This email is built for upgrading. Instead of only talking about fitness, it frames WHOOP as a long-term lifestyle system that helps members understand how daily habits affect Healthspan and Pace of Aging.",
    supplement: false,
    image: "img/whoop_age.png",
    metricLabel: "Premium Feature",
    metric: "Peak",
    metricText: "Healthspan and Pace of Aging unlock higher-tier value.",
    subhead: "Why this approach works",
    detail: "This approach makes the upgrade emotional and aspirational. It is not just more data. It is a way to stay capable for longer.",
    cta: "Explore Peak",
    why: "This connects plan value to aspiration, making the upsell feel more meaningful."
  },
  {
    stage: "Conversion",
    subject: "Choose the insight level that fits your life.",
    preview: "One, Peak, or Life: different levels of guidance.",
    kicker: "Membership Conversion",
    headline: "Make the membership decision feel simple.",
    copy: "This email is for users who understand the value but need help choosing. The message organizes WHOOP around goals: foundational performance, longevity, or advanced health monitoring.",
    supplement: false,
    image: "img/whoop_4x3.mp4",
    metricLabel: "Starting At",
    metric: "$199",
    metricText: "Annual options built around different goals.",
    subhead: "Why this approach works",
    detail: "The goal is to reduce decision friction by making each plan feel connected to a clear user motivation.",
    cta: "Compare Plans",
    why: "This email converts pricing into goal-based choice, which makes the membership model easier to understand."
  }
];

const campaignList = document.getElementById("campaignList");
const mobileCampaignList = document.getElementById("mobileCampaignList");

function createCampaignButton(email, index, mobile = false) {
  const button = document.createElement("button");
  button.className = `${mobile ? "mobile-campaign" : "mail-campaign"} ${index === 0 ? "active" : ""}`;
  button.dataset.email = index;
  button.innerHTML = `
    <span>${email.stage}</span>
    <strong>${email.subject}</strong>
    <small>${email.preview}</small>
  `;
  return button;
}

emails.forEach((email, index) => {
  campaignList.appendChild(createCampaignButton(email, index));
  mobileCampaignList.appendChild(createCampaignButton(email, index, true));
});

function setEmail(index) {
  const email = emails[index];

  document.querySelectorAll(".mail-campaign, .mobile-campaign").forEach((item) => {
    item.classList.remove("active");
  });

  document.querySelectorAll(`[data-email="${index}"]`).forEach((item) => {
    item.classList.add("active");
  });

  document.getElementById("openedSubject").textContent = email.subject;
  document.getElementById("emailKicker").textContent = email.kicker;
  document.getElementById("emailHeadline").textContent = email.headline;
  document.getElementById("emailCopy").textContent = email.copy;
  document.getElementById("emailMetricLabel").textContent = email.metricLabel;
  document.getElementById("emailMetric").textContent = email.metric;
  document.getElementById("emailMetricText").textContent = email.metricText;
  document.getElementById("emailSubhead").textContent = email.subhead;
  document.getElementById("emailDetail").textContent = email.detail;
  document.getElementById("emailCta").textContent = email.cta;
  document.getElementById("emailWhy").textContent = email.why;

  document.getElementById("mobileEmailSubject").textContent = email.subject;
  document.getElementById("mobileEmailKicker").textContent = email.kicker;
  document.getElementById("mobileEmailHeadline").textContent = email.headline;
  document.getElementById("mobileEmailCopy").textContent = email.copy;
  document.getElementById("mobileMetricLabel").textContent = email.metricLabel;
  document.getElementById("mobileMetric").textContent = email.metric;
  document.getElementById("mobileMetricText").textContent = email.metricText;

  const supplement = document.getElementById("emailSupplement");
  const image = document.getElementById("emailImage");

  image.src = email.image;
  supplement.classList.toggle("active", email.supplement);

  const scrollBox = document.querySelector(".opened-email-scroll");
  if (scrollBox) scrollBox.scrollTop = 0;

  const mobileScroll = document.querySelector(".mobile-open-scroll");
  if (mobileScroll) mobileScroll.scrollTop = 0;
}

document.addEventListener("click", (event) => {
  const emailButton = event.target.closest(".mail-campaign, .mobile-campaign");
  if (emailButton) setEmail(Number(emailButton.dataset.email));
});

const ads = [
  {
    label: "Acquisition",
    title: "What is your body ready for today?",
    preview: "Simple question. Broad audience.",
    video: "img/whoop_9x16.mp4",
    mobileHeadline: "What is your body ready for today?",
    mobileCopy: "Turn recovery, sleep, and strain into a daily decision.",
    desktopHeadline: "Know when to push. Know when to recover.",
    desktopCopy: "A broad acquisition message that simplifies body data into one useful action.",
    cta: "Start Tracking",
    why: "This angle is built for broad acquisition because the question is easy to understand even without product knowledge."
  },
  {
    label: "Retention",
    title: "Tonight decides tomorrow’s output.",
    preview: "Habit loop around sleep.",
    video: "img/whoop_4x3.mp4",
    mobileHeadline: "Tonight decides tomorrow.",
    mobileCopy: "Use sleep guidance to improve tomorrow’s recovery.",
    desktopHeadline: "Sleep better. Recover stronger.",
    desktopCopy: "A retention-focused campaign that gives members a reason to check in every night.",
    cta: "Set Sleep Plan",
    why: "This approach supports retention because it creates a recurring daily behavior."
  },
  {
    label: "Upsell",
    title: "Extend your prime for years to come.",
    preview: "Peak membership angle.",
    video: "img/whoop_16x9_1.mp4",
    mobileHeadline: "Extend your prime.",
    mobileCopy: "Healthspan turns daily habits into long-term insight.",
    desktopHeadline: "Extend your prime for years to come.",
    desktopCopy: "A premium lifestyle message that connects Healthspan to higher-tier membership value.",
    cta: "Explore Peak",
    why: "This campaign can help move users toward Peak by connecting features to aspiration."
  },
  {
    label: "Performance",
    title: "Measure every step and rep.",
    preview: "Activity-focused users.",
    video: "img/whoop_16x9_2.mp4",
    mobileHeadline: "Every rep has a cost.",
    mobileCopy: "Strain shows how hard your body is working.",
    desktopHeadline: "Measure the impact of every step and rep.",
    desktopCopy: "A performance-focused campaign for users who care about training load.",
    cta: "Review Strain",
    why: "This speaks to active users who already care about effort, output, and training consistency."
  },
  {
    label: "Conversion",
    title: "Choose the insight level that fits your life.",
    preview: "Plan comparison campaign.",
    video: "img/whoop_9x16.mp4",
    mobileHeadline: "Fitness. Longevity. Advanced health.",
    mobileCopy: "Find the membership built around your goals.",
    desktopHeadline: "Choose the insight level that fits your life.",
    desktopCopy: "A conversion-focused plan campaign that reduces decision friction.",
    cta: "Compare Plans",
    why: "This turns pricing tiers into goal-based options, which makes the membership decision clearer."
  }
];

const adSelector = document.getElementById("adSelector");

ads.forEach((ad, index) => {
  const button = document.createElement("button");
  button.className = `ad-option ${index === 0 ? "active" : ""}`;
  button.dataset.ad = index;
  button.innerHTML = `
    <span>${ad.label}</span>
    <strong>${ad.title}</strong>
    <small>${ad.preview}</small>
  `;
  adSelector.appendChild(button);
});

function setAd(index) {
  const ad = ads[index];

  document.querySelectorAll(".ad-option").forEach((item) => item.classList.remove("active"));
  document.querySelector(`[data-ad="${index}"]`).classList.add("active");

  document.getElementById("adMobileVideo").src = ad.video;
  document.getElementById("adMobileHeadline").textContent = ad.mobileHeadline;
  document.getElementById("adMobileCopy").textContent = ad.mobileCopy;
  document.getElementById("adMobileCta").textContent = ad.cta;
  document.getElementById("adDesktopHeadline").textContent = ad.desktopHeadline;
  document.getElementById("adDesktopCopy").textContent = ad.desktopCopy;
  document.getElementById("adDesktopCta").textContent = ad.cta;
  document.getElementById("adWhy").textContent = ad.why;
}

document.querySelectorAll(".ad-option").forEach((item) => {
  item.addEventListener("click", () => setAd(Number(item.dataset.ad)));
});
