# 001 — Use compositor motion and clear press feedback

- Status: IN PROGRESS
- Commit: 2a71b06
- Severity: MEDIUM
- Category: Performance and accessibility
- Estimated scope: dist/motion-polish.css

## Problem
At dist/styles.css:1, @keyframes packet animates left from 0 to 100%, causing layout. Hover transforms are not gated for touch, and buttons lack press feedback.

## Target
Override packet animation with transform translateX(0) to translateX(58px); fix left at zero. Add button :active transform scale(.97), transition transform 160ms ease-out. Gate hover movement using @media(hover:none) overrides. Honor body.motion-paused and prefers-reduced-motion.

## Repo conventions
CSS variables and plain CSS transitions; no motion dependency needed for UI. Existing modal enters with opacity and a small transform.

## Steps
1. Add dist/motion-polish.css overrides above.
2. Link after styles.css.
3. Preserve all content and navigation.

## Verification
Run node --check dist/app.js. Open project panels and rapidly change filters: controls remain immediately available. Verify press feedback is subtle, touch does not retain hover movement, pause stops decorative motion, and reduced-motion prevents spatial animation. Browser visual verification pending browser infrastructure recovery.
