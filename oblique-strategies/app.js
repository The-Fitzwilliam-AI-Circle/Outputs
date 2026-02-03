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
    "Quantum Sensing"
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

  function drawCard() {
    tooltipEl.hidden = true;

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
    }, 150);
  }

  // Tooltip toggle
  infoBtn.addEventListener("click", function (e) {
    e.stopPropagation();
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

  // Init
  buildChips();
  drawCard();
})();
