# GEATZ PORTFOLIO — UX & INTERACTIONS

## CORE MOTION PRINCIPLE
Motion should explain hierarchy, not show off.

The site should feel smooth and premium, but never slow.

---

# PAGE TRANSITIONS

Use smooth enter/exit transitions.

Target duration:
400–700ms depending on interaction.

Use opacity + subtle translate/scale.

Avoid long cinematic loading screens.

---

# SCROLL

Use:
- Smooth scrolling where appropriate
- Scroll-triggered reveals
- Staggered content reveals
- Subtle image movement
- Project media transitions

Do not animate every element.

---

# HERO

Hero should visually transition into Selected Work.

Possible behavior:
- Headline subtly shifts during scroll
- Project imagery enters the visual field
- Background changes subtly
- Hero compresses into the work section

Keep the interaction performant.

---

# CURSOR

Desktop only.

Default:
small dot.

Interactive:
VIEW
WATCH
OPEN

Disable custom cursor on touch devices.

Never make the custom cursor necessary for navigation.

---

# PROJECT HOVER

On desktop:
- Media scales slightly
- Arrow moves
- Metadata shifts subtly
- Optional muted preview starts

On mobile:
Use tap/click interaction instead.

---

# MOBILE MENU

Desktop navigation:
GEATZ | WORK | CREATE | THINK | ABOUT | CONTACT | LET'S TALK

Mobile:
GEATZ + menu button.

Open into a smooth full-screen menu.

Menu:
WORK
CREATE
THINK
ABOUT
CONTACT
LET'S TALK ↗

---

# LANGUAGE SWITCH

About page:
English ↔ Tanglish

Behavior:
- Default English
- Click switches to Tanglish
- Click again switches to English
- Crossfade text
- Preserve scroll position
- Prevent layout jump where possible
- Keep personality and meaning
- Tanglish must sound natural, not machine-literal

If implementing dynamic translation, use a reliable controlled content mapping rather than making external API calls for every click.

---

# REDUCED MOTION

When prefers-reduced-motion is enabled:
- Disable decorative motion
- Remove large parallax movement
- Keep simple opacity transitions or no transitions
- Preserve usability

---

# LOADING

Avoid unnecessary loading screens.

If a short transition/loading state is required, keep it brief.

Optional copy:
LOADING THE NEXT IDEA...

Never delay content unnecessarily.
