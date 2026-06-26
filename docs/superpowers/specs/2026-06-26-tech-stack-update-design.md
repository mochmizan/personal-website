# Tech Stack Update Specification

Update the Stacks section of the portfolio site to reflect the new set of technologies across 4 categories, loading icons dynamically from external CDNs.

## Proposed Changes

### Portfolio Page Component

#### [MODIFY] [LandingPage.tsx](file:///c:/Users/Mizan/Documents/psyche-run/portfolio/src/pages/LandingPage.tsx)
Update the `stackCategories` array to define the following data:

1. **Programming Language**
   * Python: `https://cdn.simpleicons.org/python`
   * JavaScript: `https://cdn.simpleicons.org/javascript`
   * PHP: `https://cdn.simpleicons.org/php`

2. **Framework & Libraries**
   * FastAPI: `https://cdn.simpleicons.org/fastapi`
   * React: `https://cdn.simpleicons.org/react`
   * Nuxt.js: `https://cdn.simpleicons.org/nuxt`
   * Pandas: `https://cdn.simpleicons.org/pandas`
   * NumPy: `https://cdn.simpleicons.org/numpy`
   * Matplotlib: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg`
   * Seaborn: `https://raw.githubusercontent.com/seaborn/seaborn.pydata.org/main/_images/logo-mark-lightbg.svg`
   * Scikit-Learn: `https://cdn.simpleicons.org/scikit-learn`
   * Leaflet: `https://cdn.simpleicons.org/leaflet`

3. **Tech & Tools**
   * Docker: `https://cdn.simpleicons.org/docker`
   * Vercel: `https://cdn.simpleicons.org/vercel`
   * Git: `https://cdn.simpleicons.org/git`
   * GitHub: `https://cdn.simpleicons.org/github`
   * Linux: `https://cdn.simpleicons.org/linux`
   * Cisco CCNA: `https://cdn.simpleicons.org/cisco`

4. **AI Engineering**
   * Claude Code: `https://cdn.simpleicons.org/claude`
   * Gemini API: `https://cdn.simpleicons.org/googlegemini`
   * Antigravity: `https://cdn.simpleicons.org/googlegemini`
   * Cursor: `https://cdn.simpleicons.org/cursor`
   * Codex: `https://cdn.simpleicons.org/openai`

## Layout and Styling
* Maintain the current left/right 2-column layout.
* Keep the typography standard (`Roboto Mono` monospace font and size rules).
