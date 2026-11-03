# Circuit archive

One routing plane links six engineering landmarks. Native scroll travels along the circuit, with each landmark held in view while its matching chapter is read. The semantic portfolio and its links remain independently available.

| Chapter | Landmark | View change |
| --- | --- | --- |
| Opening | Faceted core with an orbital cage | Three-quarter view from above the routing plane |
| Production | Three-column rack with routed status leads | Lower angle reveals the stack and activity indicators |
| Agentic AI | Six-node orchestration graph | Front view shows the branching paths |
| Generative AI | Concentric scanning aperture and voxel field | Opposite three-quarter view exposes ring depth |
| Backend | Four stacked circuit boards | Higher angle separates the layers |
| Toolkit | Seven modules around a faceted hub | Front view centers the hub and its module ring |

The continuous camera and target paths use the endpoints in `scene.js`. The canvas is transparent over the cobalt stage. The geometry uses midnight and cobalt metals with porcelain or cyan accents, a pale key, a cyan rim, and fog to separate stations. Models and details are procedural, with no remote textures, shadows, or post-processing. The shared grid and traces remain in the scene throughout.

ScrollTrigger updates the exact state that controls chapter ownership, navigation, and progress. A damped copy moves the camera. Reduced motion or the visible motion control snaps to authored frames and stops the render loop until the view needs an update. The compact composition widens the lens and adjusts the camera. Device pixel ratio is capped at 1.25 on compact layouts and 1.6 elsewhere, and drops to 1 after sustained slow frames. Rendering pauses when the canvas or page is hidden. The static poster covers WebGL creation failure and context loss.

Build with `npm run build:world`. The only runtime file is `dist/world.js`, about 690 KB uncompressed and 194 KB gzip. Three.js and ScrollTrigger licenses are included in the bundle.
