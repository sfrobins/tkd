# TKD Form Builder — Grand Master Scott Craig

A drag-and-drop Electron desktop app for building, editing, and customising Tae Kwon Do forms.

## Features
- **All 10 forms** built-in (Chon-Ji through Ge-Baek) with full movement data
- **Drag-and-drop** — reorder moves within the canvas, or drag from the library to insert
- **Move Library** — browse techniques (upper body), stances (lower body), or pull complete moves from any existing form
- **Live Editor** — click any move to edit direction, stance, technique, Korean, section, notes and description
- **Step-Through Preview** — walk the sequence move by move with a mini map
- **Dual export** — saves both a `.json` file (in `custom-forms/`) and regenerates the storyboard `.html` in `storyboards/`

## Quick Start

```bash
cd ui/form-builder
npm install
npm run dev        # launches Vite dev server + Electron together
```

## Build for production

```bash
npm run build      # compiles React → dist/
npm start          # runs Electron loading dist/
```

## File locations after saving
| File type | Location |
|-----------|----------|
| Custom JSON | `ui/form-builder/custom-forms/<form-id>.json` |
| Storyboard HTML | `storyboards/<form-id>.html` |

## Requirements
- Node.js 18+
- npm 9+
