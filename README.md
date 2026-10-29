# Jackiv Garg — Personal Portfolio

Responsive portfolio with custom animated system diagrams, accessible project dialogs, reduced-motion support, and downloadable résumé.

## Preview locally

Run `python -m http.server 4317 --directory dist`, then open http://localhost:4317.

## Deploy

Vercel serves the `dist` directory using the root vercel.json. Sites configuration is in .openai/hosting.json. No package installation or build step is required.

Content is grounded in the supplied résumé and public project READMEs. Diagrams illustrate architecture; they are not application screenshots.
