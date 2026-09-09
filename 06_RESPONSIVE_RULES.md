# GEATZ PORTFOLIO — RESPONSIVE RULES

## PRINCIPLE

The site must be designed as a responsive system, not a desktop website that gets shrunk.

---

# BREAKPOINT STRATEGY

Use CSS/container-query-friendly fluid layouts where practical.

Do not over-rely on many breakpoint-specific hacks.

Recommended conceptual ranges:

Mobile:
320px–767px

Tablet:
768px–1023px

Desktop:
1024px–1439px

Large desktop:
1440px+

---

# MOBILE

- 4-column grid
- Stacked project cards
- Fluid typography
- Full-width media
- Native/touch interactions
- Simplified navigation
- No custom cursor
- Comfortable tap targets
- No horizontal scrolling

---

# TABLET

- 8-column grid
- Hybrid layouts
- Maintain visual hierarchy
- Preserve generous whitespace

---

# DESKTOP

- 12-column grid
- Large typography
- Horizontal compositions where useful
- Hover interactions
- Custom cursor if performant

---

# LARGE DESKTOP

Do not allow the content to become excessively wide.

Use max-width containers while allowing large typography and visual media to breathe.

---

# MEDIA

All video and images:
- width: 100%
- height: auto or controlled by aspect-ratio
- object-fit: cover where intentional
- no distortion

Use responsive poster images.

---

# TYPOGRAPHY

Use clamp() or equivalent fluid sizing.

Headlines should scale naturally rather than jumping dramatically at breakpoints.

---

# LAYOUT

Use:
- CSS Grid
- Flexbox
- gap
- minmax()
- clamp()
- max-width containers

Avoid fixed pixel positioning for primary layout.

---

# INTERACTION

Every desktop hover interaction needs a mobile/touch equivalent.

Do not hide essential information behind hover.

---

# TESTING

Before finalizing:
- Test narrow mobile
- Test standard mobile
- Test tablet portrait/landscape
- Test laptop
- Test desktop
- Test large monitor
- Test keyboard navigation
- Test reduced-motion
- Test slow network/media loading

No horizontal overflow.
No clipped text.
No layout jumps.
