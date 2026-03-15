# UI Playground

> A visual component explorer and design system playground for experimenting with animations, effects, and UI patterns.

Built with **React + TypeScript + Vite + Framer Motion** + **Tailwind CSS**.

---

## 🎯 Purpose

This playground serves as:
- **Visual reference library** — see UI patterns in action, not just code
- **Animation catalog** — test and compare entrance, hover, and micro-interactions
- **Component experimentation** — prototype UI patterns before implementing in real projects
- **Design system exploration** — discover what looks good, what feels right

Created for rapid UI prototyping and visual decision-making.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) to view the playground.

---

## 📂 What's Inside

The playground is organized into 6 tabs:

### 1. **Animations** (Sparkles icon)
Entrance animations, hover effects, loading states, scroll-triggered animations, stagger effects, and gesture-based interactions.

**Includes:**
- 12 entrance animations (fade, slide, scale, rotate, bounce, elastic, flip, combos)
- 10 hover effects (lift, glow, tilt, shake, pulse, ripple, etc.)
- 6 loading animations (spinner, dots, pulse, skeleton, progress, bounce)
- Scroll-triggered reveal animations
- Stagger effects (list items, grid cards)
- Gesture-based interactions (drag, swipe, pinch)

### 2. **Effects** (Layers icon)
Visual effects like glassmorphism, gradients, shadows, glows, particles, and backdrop effects.

**Includes:**
- Glassmorphism & frosted glass
- Gradient backgrounds (mesh, radial, conic, animated)
- Shadow & glow effects
- Particle systems
- Backdrop blur & filters
- Noise & texture overlays

### 3. **Typography** (Type icon)
Text animations, gradient text, typewriter effects, split-text animations, and responsive type systems.

**Includes:**
- Animated gradient text
- Typewriter effects
- Character & word split animations
- Text reveals (fade, slide, bounce)
- Responsive type scales
- Font pairing examples

### 4. **Components** (Component icon)
Interactive UI components like buttons, cards, modals, tooltips, tabs, accordions, and inputs.

**Includes:**
- Button variants (primary, ghost, outline, icon, loading)
- Card designs (basic, hover-lift, glass, gradient)
- Modal & dialog patterns
- Tooltips & popovers
- Tabs & segmented controls
- Accordions & collapsibles
- Form inputs & validation states

### 5. **Layouts** (Layout icon)
Page layout patterns, grid systems, navigation structures, and responsive designs.

**Includes:**
- Hero sections (full-screen, split, video background)
- Grid layouts (masonry, card grids, bento boxes)
- Navigation patterns (sidebar, top nav, mobile menu)
- Footer designs
- Section dividers
- Responsive breakpoint demos

### 6. **Micro** (MousePointerClick icon)
Micro-interactions: button states, cursor effects, ripples, haptic feedback, confetti, sound triggers.

**Includes:**
- Button press states (scale down, ripple, haptic)
- Cursor followers & trail effects
- Click animations (ripple, burst, confetti)
- Toggle switches with spring physics
- Checkbox & radio animations
- Slider & range controls
- Sound effect triggers

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| **React 18** | UI library |
| **TypeScript** | Type safety |
| **Vite** | Build tool & dev server |
| **Framer Motion** | Animation library |
| **Tailwind CSS** | Utility-first styling |
| **Lucide React** | Icon library |
| **ESLint** | Code linting |

---

## 🎨 Design Principles

- **Dark mode first** — primary theme is dark (zinc-950), with light mode toggle
- **Gradient accents** — indigo-to-violet gradients for visual hierarchy
- **Smooth animations** — defaults to 0.3-0.5s easing for polish
- **Responsive** — mobile-first design with collapsible sidebar
- **Copy-friendly** — code snippets inline for easy reference

---

## 📝 Usage Notes

### Dark Mode Toggle
Click the sun/moon icon in the sidebar (desktop) or top-right (mobile) to switch themes.

### Replaying Animations
Most animated components have a replay button (↻ icon) to re-trigger the animation.

### Code Snippets
Inline code hints show key animation properties (e.g., `opacity: 0 → 1`, `spring bounce: 0.6`).

### Mobile View
On mobile, tap the menu icon (☰) to open the sidebar, then select a tab.

---

## 🔮 Future Ideas

- [ ] Export code snippets (copy full component code)
- [ ] Search/filter components by keyword
- [ ] Bookmark favorite patterns
- [ ] Custom color theme editor
- [ ] Animation timing controls (duration, easing)
- [ ] Accessibility settings (reduce motion)
- [ ] Share links to specific components
- [ ] Component composition playground

---

## 🧠 Why This Exists

Visual tools > documentation for design decisions. Code is precise, but seeing animations *move* is how you know if they feel right.

This playground lets you:
1. **See** — observe patterns in isolation
2. **Compare** — A/B test animations side-by-side
3. **Learn** — study what makes good UI feel good
4. **Decide** — choose patterns with confidence
5. **Build** — copy patterns into real projects

---

## 📜 License

Built for personal use by Ray. MIT licensed—use however you want.

---

**Last updated:** March 16, 2026 (autonomous agent maintenance)
