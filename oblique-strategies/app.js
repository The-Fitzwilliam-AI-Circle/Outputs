(function () {
  "use strict";

  var DOMAINS = [
    "AI Research",
    "Citizen Science",
    "Immunology",
    "Biomechanics",
    "Meta-Research",
    "Synthetic Biology",
    "Context Modeling",
    "Biomaterials",
    "Quantum Sensing",
    "Economics",
    "Philosophy",
    "Software Engineering"
  ];

  var selectedDomain = DOMAINS[0];
  var lastIndex = -1;

  // DOM refs
  var selectorNav = document.querySelector(".domain-selector");
  var cardEl = document.getElementById("strategy-card");
  var titleEl = document.getElementById("card-title");
  var infoBtn = document.getElementById("info-btn");
  var tooltipEl = document.getElementById("tooltip");
  var promptEl = document.getElementById("card-prompt");
  var drawBtn = document.getElementById("draw-btn");

  // Build domain chips
  function buildChips() {
    DOMAINS.forEach(function (domain) {
      var btn = document.createElement("button");
      btn.className = "chip";
      btn.textContent = domain;
      btn.setAttribute("type", "button");
      if (domain === selectedDomain) btn.classList.add("active");
      btn.addEventListener("click", function () {
        selectDomain(domain);
      });
      selectorNav.appendChild(btn);
    });
  }

  function selectDomain(domain) {
    selectedDomain = domain;
    var chips = selectorNav.querySelectorAll(".chip");
    for (var i = 0; i < chips.length; i++) {
      chips[i].classList.toggle("active", chips[i].textContent === domain);
    }
    drawCard();
  }

  // Random index avoiding repeat
  function randomIndex() {
    if (STRATEGIES.length <= 1) return 0;
    var idx;
    do {
      idx = Math.floor(Math.random() * STRATEGIES.length);
    } while (idx === lastIndex);
    lastIndex = idx;
    return idx;
  }

  var nudgeTimer = null;

  function drawCard() {
    tooltipEl.hidden = true;

    // Cancel any pending nudge
    if (nudgeTimer) clearTimeout(nudgeTimer);
    infoBtn.classList.remove("nudge");
    infoBtn.classList.remove("nudge-out");

    // Fade out
    cardEl.classList.remove("fade-in");
    cardEl.classList.add("fade-out");

    setTimeout(function () {
      var idx = randomIndex();
      var strategy = STRATEGIES[idx];

      titleEl.textContent = strategy.title;
      infoBtn.hidden = false;

      // Store explanation for tooltip
      infoBtn.dataset.explanation = strategy.explanation;

      // Render one random bullet
      var bullets = strategy.domains[selectedDomain] || [];
      var bullet = bullets[Math.floor(Math.random() * bullets.length)];
      promptEl.textContent = bullet || "";

      // Fade in
      cardEl.classList.remove("fade-out");
      cardEl.classList.add("fade-in");

      // Nudge the info button 3 times with exponential backoff
      // First at 4s, second at 8s after first ends, third at 16s after second ends
      var nudgeCycle = 3300; // one full nudge cycle: 800ms in + 1500ms hold + 1000ms out
      var nudgeCount = 0;
      var delays = [4000, 8000, 16000]; // initial delay, then backoff gaps

      function scheduleNudge() {
        if (nudgeCount >= 3) return;
        nudgeTimer = setTimeout(function () {
          if (tooltipEl.hidden) {
            infoBtn.classList.remove("nudge-out");
            infoBtn.classList.add("nudge");
            setTimeout(function () {
              infoBtn.classList.remove("nudge");
              infoBtn.classList.add("nudge-out");
              setTimeout(function () {
                infoBtn.classList.remove("nudge-out");
                nudgeCount++;
                scheduleNudge();
              }, 1100);
            }, 1500);
          }
        }, delays[nudgeCount]);
      }

      scheduleNudge();
    }, 150);
  }

  // Tooltip toggle
  infoBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    infoBtn.classList.remove("nudge");
    infoBtn.classList.remove("nudge-out");
    if (nudgeTimer) clearTimeout(nudgeTimer);
    if (tooltipEl.hidden) {
      tooltipEl.textContent = infoBtn.dataset.explanation || "";
      tooltipEl.hidden = false;
    } else {
      tooltipEl.hidden = true;
    }
  });

  // Close tooltip on outside click
  document.addEventListener("click", function () {
    tooltipEl.hidden = true;
  });

  cardEl.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // Draw button
  drawBtn.addEventListener("click", function () {
    drawCard();
  });

  // About section toggle
  var aboutToggle = document.getElementById("about-toggle");
  var aboutBody = document.getElementById("about-body");
  if (aboutToggle && aboutBody) {
    aboutToggle.addEventListener("click", function () {
      var expanded = aboutBody.hidden;
      aboutBody.hidden = !expanded;
      aboutToggle.setAttribute("aria-expanded", expanded);
    });
  }

  // Init
  buildChips();
  drawCard();
})();
