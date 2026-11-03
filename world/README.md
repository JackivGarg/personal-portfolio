# Circuit archive

One routing plane links six engineering landmarks. Native scroll travels along the circuit, with each landmark held in view while its matching chapter is read. The semantic portfolio and its links remain independently available.

| Chapter | Landmark | View change |
| --- | --- | --- |
| Opening | Faceted core with an orbital cage | Three-quarter view from above the routing plane |
| Production | Munshot document routing, extraction, validation, and monitoring | The diagram highlights each step as scroll progresses |
| Agentic AI | The Loop plan, generate, evaluate, and improve cycle | The return edge shows the evaluation feedback loop |
| Generative AI | StorySeed tokenization, attention, decoding, and evaluation | The steps show how input becomes a model output |
| Backend | Relay client, WebSocket, deduplication, and SQLite | Message flow exposes the delivery and storage boundaries |
| Toolkit | AI, backend, full stack, and delivery modules | Front view centers the hub and its module ring |

The continuous camera and target paths use the endpoints in `scene.js`. The canvas is transparent over the cobalt stage. The geometry uses midnight and cobalt metals with porcelain or cyan accents, a pale key, a cyan rim, and fog to separate stations. Models and details are procedural, with no remote textures, shadows, or post-processing. The shared grid and traces remain in the scene throughout.

ScrollTrigger updates the exact state that controls chapter ownership, navigation, and progress. A damped copy moves the camera. Native scroll also advances the highlighted step within each engineering diagram. The stage does not receive wheel, touch, or pointer input, so the same scroll position produces the same view regardless of pointer location. The render loop settles when scrolling stops. Reduced motion and the pause control show chapter snapshots. The compact composition widens the lens and adjusts the camera. Device pixel ratio is capped at 1.25 on compact layouts and 1.6 elsewhere, and drops to 1 after sustained slow frames. Rendering pauses when the canvas or page is hidden. The static poster covers WebGL creation failure and context loss.

Build with `npm run build:world`. The only runtime file is `dist/world.js`, about 690 KB uncompressed and 194 KB gzip. Three.js and ScrollTrigger licenses are included in the bundle.
