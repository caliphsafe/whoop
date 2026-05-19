const revealItems = document.querySelectorAll(
  ".section, .journey-overview, .phone-shell, .email-reader, .ad-selector, .ad-stage, .membership-grid article, .launch-visual, .launch-copy, .before-card, .after-card"
);

revealItems.forEach((item) => item.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => observer.observe(item));

const emails = [
  {
    stage: "Email 01 / Recovery",
    subject: "Quantify how your body is feeling.",
    preview: "Higher recovery means you are ready for more.",
    image: "img/whoop_quantify.png",
    kicker: "Recovery Insight",
    headline: "Higher recovery means you are ready for more.",
    copy: "Understand how your body adapts to training, sleep deprivation, illness, or your cycle. When recovery is high, your body is signaling readiness. When it is low, the smarter move may be rest.",
    metricLabel: "Today’s Signal",
    metric: "82%",
    metricText: "Ready for higher output.",
    cta: "View Recovery",
    why: "This turns a technical recovery score into a simple daily decision. That makes the value easier to understand and increases the chance of a click."
  },
  {
    stage: "Email 02 / Healthspan",
    subject: "Extend your prime for years to come.",
    preview: "See how daily habits impact your Pace of Aging.",
    image: "img/whoop_age.png",
    kicker: "Healthspan",
    headline: "Your daily habits are shaping your long-term health.",
    copy: "Healthspan gives members a new way to understand how behavior affects long-term wellness. The creative goal is to connect daily actions to a bigger emotional promise: staying capable for longer.",
    metricLabel: "Pace of Aging",
    metric: "0.86x",
    metricText: "A lifestyle metric that makes longevity feel measurable.",
    cta: "Explore Healthspan",
    why: "This email connects a premium membership feature to a long-term lifestyle aspiration, which helps position WHOOP as more than a fitness tracker."
  },
  {
    stage: "Email 03 / Sleep",
    subject: "Optimize your sleep before tomorrow starts.",
    preview: "Bed and wake recommendations built around recovery.",
    image: "img/whoop_sleep.png",
    kicker: "Sleep Optimization",
    headline: "Better sleep starts with better timing.",
    copy: "WHOOP tracks sleep stages and recommends optimal bed and wake times. The design should make the user feel like the product is coaching them toward better recovery, not just reporting what happened.",
    metricLabel: "Sleep Need",
    metric: "7.8h",
    metricText: "Recommended tonight for stronger recovery.",
    cta: "Set Tonight’s Sleep Plan",
    why: "This creates a useful next step. The user is not just reading about sleep. They are invited to act on it tonight."
  },
  {
    stage: "Email 04 / Strain",
    subject: "Measure the impact of every step and rep.",
    preview: "Your Strain Score shows how hard your body is working.",
    image: "img/whoop_steps.png",
    kicker: "Strain Score",
    headline: "Every step, rep, and workout has a cost.",
    copy: "Strain helps users understand how hard their heart, muscles, and body are working across the day. This campaign angle turns activity tracking into a smarter load-management story.",
    metricLabel: "Today’s Strain",
    metric: "14.6",
    metricText: "Moderate to high training load.",
    cta: "Review Activity Load",
    why: "This makes effort visible. It encourages users to connect everyday movement to recovery and performance."
  },
  {
    stage: "Email 05 / Membership",
    subject: "Choose the membership that matches your goals.",
    preview: "One, Peak, or Life: different levels of insight.",
    image: "img/whoop_4x3.mp4",
    kicker: "Membership Conversion",
    headline: "Start with the insights that match your lifestyle.",
    copy: "The membership email should help users understand the difference between foundational fitness insights, longevity features, and advanced health monitoring without overwhelming them.",
    metricLabel: "Starting At",
    metric: "$199",
    metricText: "Annual membership options built around different goals.",
    cta: "Compare Memberships",
    why: "This converts product complexity into a guided decision, making the membership model easier to understand."
  }
];

const inboxList = document.getElementById("inboxList");

emails.forEach((email, index) => {
  const button = document.createElement("button");
  button.className = `inbox-item ${index === 0 ? "active" : ""}`;
  button.dataset.email = index;
  button.innerHTML = `
    <span>${email.stage}</span>
    <strong>${email.subject}</strong>
    <small>${email.preview}</small>
  `;
  inboxList.appendChild(button);
});

function setEmail(index) {
  const email = emails[index];

  document.querySelectorAll(".inbox-item").forEach((item) => item.classList.remove("active"));
  document.querySelector(`[data-email="${index}"]`).classList.add("active");

  document.getElementById("emailStage").textContent = email.stage;
  document.getElementById("emailSubject").textContent = email.subject;
  document.getElementById("emailKicker").textContent = email.kicker;
  document.getElementById("emailHeadline").textContent = email.headline;
  document.getElementById("emailCopy").textContent = email.copy;
  document.getElementById("emailMetricLabel").textContent = email.metricLabel;
  document.getElementById("emailMetric").textContent = email.metric;
  document.getElementById("emailMetricText").textContent = email.metricText;
  document.getElementById("emailCta").textContent = email.cta;
  document.getElementById("emailWhy").textContent = email.why;

  const emailImage = document.getElementById("emailImage");
  emailImage.src = email.image;
}

document.querySelectorAll(".inbox-item").forEach((item) => {
  item.addEventListener("click", () => setEmail(Number(item.dataset.email)));
});

const ads = [
  {
    label: "Recovery / Mobile Feed",
    title: "What is your body ready for today?",
    preview: "Fast hook for users who want a daily decision.",
    video: "img/whoop_9x16.mp4",
    mobileHeadline: "What is your body ready for today?",
    mobileCopy: "Recovery turns body data into a decision you can use.",
    desktopHeadline: "Know when to push. Know when to recover.",
    desktopCopy: "A clean display ad that makes recovery feel actionable.",
    cta: "Start Tracking",
    why: "This angle simplifies complex body data into one daily question, which is useful for broad acquisition."
  },
  {
    label: "Healthspan / Desktop",
    title: "Extend your prime for years to come.",
    preview: "Longevity-focused angle for Peak membership.",
    video: "img/whoop_16x9_1.mp4",
    mobileHeadline: "Your habits are shaping your future body.",
    mobileCopy: "Healthspan makes longevity feel measurable.",
    desktopHeadline: "Extend your prime for years to come.",
    desktopCopy: "A premium lifestyle message built around Healthspan and Pace of Aging.",
    cta: "Explore Healthspan",
    why: "This supports higher-tier membership positioning by connecting daily behaviors to long-term identity."
  },
  {
    label: "Sleep / Retention",
    title: "Optimize your sleep before tomorrow starts.",
    preview: "Useful evening campaign for engagement.",
    video: "img/whoop_4x3.mp4",
    mobileHeadline: "Tonight’s sleep affects tomorrow’s output.",
    mobileCopy: "Get bed and wake guidance based on your body.",
    desktopHeadline: "Sleep better. Recover stronger.",
    desktopCopy: "A retention-focused campaign that gives users a reason to check in before bed.",
    cta: "Set Sleep Plan",
    why: "This creates a recurring use case, which supports habit formation and retention."
  },
  {
    label: "Strain / Activity",
    title: "Measure every step and rep.",
    preview: "Performance-focused message for active users.",
    video: "img/whoop_16x9_2.mp4",
    mobileHeadline: "Every rep has a cost.",
    mobileCopy: "Strain shows how hard your body is working.",
    desktopHeadline: "Measure the impact of every step and rep.",
    desktopCopy: "A clear performance message for users who already train or track activity.",
    cta: "Review Strain",
    why: "This angle speaks to athletes and active users who want feedback on training load."
  },
  {
    label: "Membership / Conversion",
    title: "Choose the insight level that fits your life.",
    preview: "One, Peak, and Life comparison campaign.",
    video: "img/whoop_9x16.mp4",
    mobileHeadline: "Fitness. Longevity. Advanced health.",
    mobileCopy: "Find the WHOOP membership built around your goals.",
    desktopHeadline: "Choose the insight level that fits your life.",
    desktopCopy: "A conversion-focused ad that helps reduce decision friction around memberships.",
    cta: "Compare Plans",
    why: "This turns pricing tiers into a goal-based decision, which can make the membership model easier to understand."
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

const launches = {
  email: {
    label: "Email Campaign",
    video: "img/whoop_4x3.mp4",
    headline: "Quantify how your body is feeling.",
    copy: "A lifecycle email angle that teaches Recovery as a daily readiness signal.",
    cta: "View Recovery",
    why: "Email gives the most room to educate, so this version explains what the metric means and why it matters."
  },
  social: {
    label: "Paid Social",
    video: "img/whoop_9x16.mp4",
    headline: "Your body’s green light.",
    copy: "A mobile-first feed concept built for speed, style, and quick comprehension.",
    cta: "Start Tracking",
    why: "Social needs a faster hook, so the idea becomes short, visual, and emotionally direct."
  },
  display: {
    label: "Display Ad",
    video: "img/whoop_16x9_2.mp4",
    headline: "Ready is measurable.",
    copy: "A compact desktop message that can work across banner and retargeting environments.",
    cta: "Try WHOOP",
    why: "Display ads need instant clarity, so the copy is compressed into a simple performance promise."
  },
  landing: {
    label: "Landing Page Hero",
    video: "img/whoop_16x9_1.mp4",
    headline: "Extend your prime for years to come.",
    copy: "A Healthspan landing concept connecting daily habits to long-term performance and Pace of Aging.",
    cta: "Explore Healthspan",
    why: "Landing pages can carry more explanation and can connect features to the membership value."
  },
  mobile: {
    label: "Mobile App Module",
    video: "img/whoop_9x16.mp4",
    headline: "Today’s recommendation: build.",
    copy: "A compact module that turns body data into a clear next action.",
    cta: "View Plan",
    why: "The mobile module is focused on action because the user is already in a decision-making environment."
  }
};

const launchTabs = document.getElementById("launchTabs");

Object.keys(launches).forEach((key, index) => {
  const button = document.createElement("button");
  button.className = `launch-tab ${index === 0 ? "active" : ""}`;
  button.dataset.launch = key;
  button.textContent = launches[key].label;
  launchTabs.appendChild(button);
});

function setLaunch(key) {
  const item = launches[key];

  document.querySelectorAll(".launch-tab").forEach((tab) => tab.classList.remove("active"));
  document.querySelector(`[data-launch="${key}"]`).classList.add("active");

  document.getElementById("launchVideo").src = item.video;
  document.getElementById("launchChannel").textContent = item.label;
  document.getElementById("launchHeadline").textContent = item.headline;
  document.getElementById("launchCopy").textContent = item.copy;
  document.getElementById("launchCta").textContent = item.cta;
  document.getElementById("launchWhy").textContent = item.why;
}

document.querySelectorAll(".launch-tab").forEach((tab) => {
  tab.addEventListener("click", () => setLaunch(tab.dataset.launch));
});
