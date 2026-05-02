# Wizwit Shorts

Scroll stories about working with AI. By Alexandra Kelstrom.

## Structure

```
wizwit-shorts/
├── index.html              ← landing page with tiles
├── shorts/
│   ├── jira-chronicles/    ← single index.html, no build
│   ├── hallway-story/      ← Next.js static export
│   ├── missing-context/    ← single index.html, no build
│   └── four-ds/            ← single index.html, no build
├── shared/
│   └── tokens.css          ← brand baseline (cream / black / coral / green / gold)
└── README.md
```

## Adding a new short

1. `mkdir shorts/<slug>/`
2. Drop `index.html` (and any assets) inside
3. Add a tile to `index.html` in the root
4. Push

No build step. No framework. Each short is self-contained.

## Conventions

- **Brand baseline:** cream `#faf7f2`, ink `#1a1a1a`, coral `#ff5a36`, green `#2d5f4e`, gold `#c9a227`
- **Type:** Fraunces (display), Inter (body), JetBrains Mono (mono)
- **Per-piece accent colors** are allowed and encouraged — the baseline holds, the pop varies
- **Reading time:** ~5 minutes, best on desktop

## Deploy

Static site. Drop into Vercel or GitHub Pages. No environment variables, no server.

## Shorts

- The Jira Chronicles
- The Hallway Story
- The Missing Context
- The Four Ds of AI Fluency
- Claude in the Room (drafted, not yet built)
