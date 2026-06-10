# Aditya Bagri Research Portfolio

A single-page React portfolio structured like an interactive research paper and research dashboard.

## Install dependencies

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Then open the local URL printed by Vite, usually `http://localhost:5173/`.

## Edit personal information

Hero text and core section copy live in:

```text
src/App.jsx
src/components/Hero.jsx
```

Update contact email, GitHub, LinkedIn, and resume links in those files.

## Add or edit projects

Project cards are data-driven. Edit:

```text
src/data/experiments.js
```

Each experiment supports title, category, problem, method, dataset, result, tech stack, links, and appendix notes. Smaller additional builds live in the same file.

## Replace links and resume

Reference links live in:

```text
src/data/references.js
```

Place your actual resume at:

```text
public/resume.pdf
```

Or update the `/resume.pdf` links to your preferred hosted resume URL.

## Other editable content

```text
src/data/experience.js
src/data/skills.js
src/data/sections.js
```

Styling is centralized in:

```text
src/index.css
```
