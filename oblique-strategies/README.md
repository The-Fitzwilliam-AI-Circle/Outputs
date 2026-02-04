# Oblique Strategies for Research

A digital adaptation of Brian Eno and Peter Schmidt's [Oblique Strategies](https://en.wikipedia.org/wiki/Oblique_Strategies) (1975), reframed for research and professional domains.

**Live:** [the-fitzwilliam-ai-circle.github.io/Outputs/oblique-strategies](https://the-fitzwilliam-ai-circle.github.io/Outputs/oblique-strategies/)

## What it does

Each of the 114 original strategy prompts is paired with domain-specific interpretations across 12 fields. Select a domain, draw a card, and get a single concrete reframing of the original lateral-thinking prompt for your discipline.

## Domains

- AI Research
- Citizen Science
- Immunology
- Biomechanics
- Meta-Research
- Synthetic Biology
- Context Modeling
- Biomaterials
- Quantum Sensing
- Economics
- Philosophy
- Software Engineering

## Structure

```
oblique-strategies/
├── index.html   # Page structure
├── style.css    # Styling
├── app.js       # Domain selection, card draw, tooltip, nudge animation
└── data.js      # 114 strategies × 12 domains (4 prompts each)
```

Static single-page app. No build step, no dependencies, no frameworks. Works from `file://` or any static host.

## Credits

Inspired by Brian Eno & Peter Schmidt's *Oblique Strategies: Over One Hundred Worthwhile Dilemmas*.
