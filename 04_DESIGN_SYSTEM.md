# GEATZ PORTFOLIO — DESIGN SYSTEM

## Visual Direction
Minimal + Cinematic + Editorial + Interactive + Creator-focused.

Avoid:
- Generic portfolio templates
- Corporate visual language
- Excessive gradients
- Excessive glassmorphism
- Animation for animation's sake
- Overly flashy gaming aesthetics

The work should remain the visual hero.

---

# COLOR

Primary background:
#0A0A0A

Primary text:
#F5F5F5

Secondary text:
#A1A1A1

Border:
rgba(255,255,255,0.10)

Accent:
Electric / Acid Lime

Use the accent sparingly for:
- CTA highlights
- Active navigation
- Small labels
- Cursor states
- Important metadata
- Hover states

---

# TYPOGRAPHY

Display:
Space Grotesk

Body:
Inter

Use CSS clamp() for fluid type.

Suggested ranges:
Hero: 3rem–9rem
Section heading: 4rem–6rem+
Project title: 3rem–4.5rem
Body: 1rem–1.25rem
Metadata: 0.7rem–0.875rem

Do not hardcode desktop-only typography.

---

# GRID

Desktop:
12 columns

Tablet:
8 columns

Mobile:
4 columns

Use fluid spacing and generous whitespace.

---

# PROJECT CARDS

Visual-first.

Desktop card:
Large media area + metadata.

Hover:
- Slight media scale
- Metadata movement
- Arrow movement
- Accent highlight
- Optional muted video preview

Keep interactions subtle.

---

# VIDEO

- Preserve source aspect ratio
- Responsive containers
- Lazy-load
- Use poster frames
- Muted hover previews only
- Never autoplay audio
- Do not load all videos simultaneously

---

# BUTTONS

Buttons should feel editorial and tactile.

Examples:
VIEW MY WORK ↗
LET'S TALK ↗
VIEW PROJECT ↗
WATCH ↗

Use clear hover/focus states.

---

# RESPONSIVE

Mobile-first.

Must support:
- 320px+ mobile widths
- Tablet
- Laptop
- Desktop
- Large desktop

Never:
- Horizontal overflow
- Text clipping
- Broken video ratios
- Overlapping content
- Desktop layout squeezed onto mobile
- Hover-only functionality

Touch interactions must work without hover.

---

# ACCESSIBILITY

Include:
- Semantic HTML
- Correct heading hierarchy
- Keyboard navigation
- Visible focus states
- Alt text
- Accessible buttons
- Sufficient contrast
- prefers-reduced-motion support

---

# PERFORMANCE

Prioritize:
- Optimized images
- Video posters
- Lazy loading
- Code splitting
- Minimal dependencies
- Efficient animation

Do not sacrifice performance for visual effects.
