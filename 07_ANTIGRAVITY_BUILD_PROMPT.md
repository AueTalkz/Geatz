# GEATZ PORTFOLIO — ANTIGRAVITY MASTER BUILD PROMPT

Build a complete, production-quality personal portfolio website for **Geatz**, a Video Editor & Content Creator.

The website should communicate one core idea:

> I TURN IDEAS INTO CONTENT WORTH WATCHING.

Secondary philosophy:

> CONTENT FIRST. EFFECTS SECOND.

The site is a personal creative portfolio, not an agency landing page.

---

# OBJECTIVE

Create a premium, minimal, cinematic, editorial portfolio that demonstrates:

- Video editing
- Content creation
- Script writing
- Storytelling
- Content thinking
- Short-form editing
- Creative experimentation

The website should make a client or recruiter think:

> “This person understands content, not just editing software.”

---

# PAGES

Create:

1. HOME
2. WORK
3. CREATE
4. THINK
5. ABOUT
6. CONTACT

Use the content in:
- 02_CONTENT.md
- 03_PROJECTS.md

Do not invent achievements, clients, metrics, awards, or experience.

---

# DESIGN

Visual style:
- Dark
- Minimal
- Cinematic
- Editorial
- Premium
- Creative
- Human

Background:
#0A0A0A

Text:
#F5F5F5

Secondary:
#A1A1A1

Border:
rgba(255,255,255,0.10)

Accent:
Electric / Acid Lime, used sparingly.

Typography:
- Space Grotesk for display
- Inter for body

Do not make the site look like a generic SaaS template.

Avoid:
- Excessive gradients
- Excessive glassmorphism
- Excessive rounded cards
- Huge amounts of decorative UI
- Unnecessary 3D
- Animation overload

---

# HOME STRUCTURE

Hero:
VIDEO EDITOR · CONTENT CREATOR

I TURN IDEAS INTO
CONTENT WORTH WATCHING.

Supporting:
I work across video editing, scripting, and content development — helping ideas become clear, engaging, and built for the audience.

CTA:
VIEW MY WORK ↗
LET'S TALK ↗

Then:
SELECTED WORK

Feature:
1. Pal VS Nari
2. Basic Mistake Done By All
3. Day 1
4. Before / After — Day 1

Then:
EDIT / CREATE / THINK

Then:
GOOD CONTENT DOESN'T NEED MORE EFFECTS. IT NEEDS MORE INTENT.

Then:
FROM IDEA TO UPLOAD.

Then:
ABOUT PREVIEW

Then:
HAVE AN IDEA?
LET'S MAKE IT WORTH WATCHING.

---

# WORK

Build a strong visual project archive.

Featured projects:
- Pal VS Nari
- Basic Mistake Done By All
- Day 1
- Before / After — Day 1

Additional writing/content projects can be presented as supporting work.

Project cards must be visual-first.

---

# PROJECT PAGES

Create case-study layouts for:
- Pal VS Nari
- Basic Mistake Done By All
- Day 1

Structure:
TITLE
ROLE
TYPE
FOCUS
THE IDEA
MY APPROACH
VIDEO
EDITING DECISIONS
SUPPORTING VISUALS
WHAT I LEARNED
MORE WORK

Make the project page feel like a mini editorial case study.

Do not fabricate results.

---

# CREATE

Hero:
BEFORE I EDIT IT,
I THINK ABOUT IT.

Show selected writing/content work:
- The Intro
- Things To Focus On
- Scripting
- The Plan

Present writing through:
Concept → Hook → Structure → Writing → Editing Direction

---

# THINK

Hero:
HOW I THINK ABOUT CONTENT.

Show:
UNDERSTAND THE AUDIENCE.
MAKE THE IDEA CLEAR.
BUILD THE STORY.
USE THE EDIT TO SUPPORT IT.
REMOVE WHAT DOESN'T MATTER.

Highlight:
THE EDIT SHOULDN'T COMPETE WITH THE CONTENT.

---

# ABOUT

Hero:
SO, WHO IS GEATZ?

Use the approved English copy from 02_CONTENT.md.

Add a highly visible but tasteful language control:

ENGLISH ↔ TANGLISH

Default:
English.

Click:
Tanglish.

Click again:
English.

The Tanglish version must be natural, conversational Tanglish and preserve the original meaning/personality.

Animate the text change with a smooth crossfade/height-aware transition.

Do not cause the page to jump.

Keep language switching client-side and reliable. Prefer controlled content mapping for this fixed page instead of calling a translation API on every click.

---

# CONTACT

Heading:
HAVE AN IDEA?
LET'S MAKE IT WORTH WATCHING.

Only provide:
EMAIL
INSTAGRAM
YOUTUBE

Do NOT add LinkedIn.
Do NOT add Resume.

---

# RESPONSIVENESS

This is a critical requirement.

Build mobile-first.

Support:
- 320px+
- mobile
- tablet
- laptop
- desktop
- large desktop

Use:
- CSS Grid
- Flexbox
- clamp()
- minmax()
- max-width containers
- responsive aspect ratios

Never allow:
- horizontal overflow
- clipped text
- distorted videos
- overlapping sections
- fixed desktop layouts on mobile
- hover-only functionality

Every desktop interaction must have a touch-friendly equivalent.

---

# MOTION

The site must have smooth transitions.

Implement:
- Page transitions
- Smooth scrolling where appropriate
- Scroll reveal animations
- Text reveals
- Project hover interactions
- Subtle image/video scaling
- Mobile menu transitions
- Language-switch transitions

Animation duration should generally remain around 400–700ms.

Do not create slow or distracting animations.

Motion must support hierarchy.

---

# CURSOR

Desktop only:
- Small custom dot
- VIEW / WATCH / OPEN states on interactive elements

Disable custom cursor on touch devices.

Never make cursor interaction necessary to understand the site.

---

# VIDEO PERFORMANCE

Because this portfolio contains multiple videos:

- Lazy-load videos
- Use poster images
- Do not autoplay audio
- Use muted previews
- Do not load all project videos at initial page load
- Preserve aspect ratios
- Use responsive containers
- Optimize media where possible

---

# ACCESSIBILITY

Implement:
- Semantic HTML
- Proper headings
- Keyboard navigation
- Visible focus states
- Accessible buttons
- Alt text
- Good contrast
- Reduced-motion support

Respect:
prefers-reduced-motion

When reduced motion is enabled, disable large movement/parallax and use minimal transitions.

---

# PERFORMANCE

Prioritize:
1. Fast initial load
2. Responsive layout
3. Content
4. Accessibility
5. Animation

Use code splitting/lazy loading where appropriate.

Avoid unnecessary libraries.

Do not add dependencies simply because they are trendy.

---

# CODE QUALITY

Create reusable components for:
- Navigation
- Buttons
- Project cards
- Project metadata
- Section headings
- Page transitions
- Media containers
- Language switch
- Footer

Keep content data-driven where practical.

Use clean semantic naming.

Do not duplicate large blocks of markup unnecessarily.

---

# FINAL UX TEST

Before considering the website complete, verify:

- Every navigation item works
- Every CTA works
- Every project opens correctly
- Videos load responsively
- About language toggle works
- English ↔ Tanglish preserves meaning
- Mobile menu works
- Keyboard navigation works
- No horizontal overflow
- No broken images
- No layout shift caused by media
- Reduced motion works
- Mobile experience feels intentionally designed
- Desktop experience feels premium
- Animations remain smooth
- The work remains more prominent than the interface

The final result should feel like a real creative portfolio built by a video/content creator — not a generic AI-generated portfolio.
