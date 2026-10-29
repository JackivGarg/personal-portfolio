# Engineering Motion

The portfolio hero embeds a twelve-second looping Remotion Player composition at 900×320. It cycles through actual architecture: Relay's client, FastAPI and SQLite; The Loop's plan, generate, evaluate and improve stages; and document-processing AI workflows. Every visual is driven by the current frame, with no external media or runtime CDN dependencies or invented performance figures.

Run `npm ci` then `npm run build:motion` to rebuild `dist/assets/engineering-motion.js`.

Load the bundle after the portfolio markup. It creates `#remotion-stage` inside `.hero-art`, then applies `.remotion-ready` when mounted. The host stylesheet hides the CSS fallback using `.remotion-ready .orbit-scene { visibility: hidden; }`.

The player pauses for system reduced motion, `body.motion-paused`, `body.reduced-motion`, and hidden tabs. The static CSS diagram remains the fallback if JavaScript is unavailable.
