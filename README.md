# Krzysztof — personal consulting landing page

Complete static website, English copy. No build step, packages, external fonts, analytics or third-party assets. Open `index.html` directly or serve this folder with any static HTTP server. Upload its contents to any static web host when ready.

## Before publishing

1. Email is configured as `krzysztof.pietrowicz@gmail.com`. In `script.js`, fill `SITE_CONTACT.linkedin` and `github` with real profile links. Placeholder labels disappear automatically for configured fields.
2. A professional portrait edited with ImageGen from supplied personal photos is included at `assets/krzysztof-portrait.png` and already displayed on the page. To use a different photo, set `SITE_CONTACT.portrait` to its relative path, for example `assets/krzysztof.jpg`.
3. Review the biography and the experience claims: 10+ years, aerospace background, Revolut and the project descriptions. These come from the referenced conversation; that conversation is not independent verification.
4. Replace the conceptual illustrations with real public product images if available. The present visuals are explicitly labelled as concepts. No invented metrics, endorsements or client outcomes are included.
5. Add your full name, public product links, domain-specific social sharing metadata and privacy information if needed for your eventual hosting setup.

Contact buttons and the visible email link use `krzysztof.pietrowicz@gmail.com`, including when JavaScript is disabled. LinkedIn and GitHub URLs are still marked placeholders. Contact buttons open the visitor's email application. There is no server-side contact form.

## Editing

- Content and section structure: `index.html`
- Colors, typography and responsive layout: `styles.css`
- Contact configuration and mobile menu: `script.js`
- Local SVG assets: `assets/`

The case studies use native expandable sections, so they work without JavaScript. Core content and navigation remain available without JavaScript. Motion respects the visitor's reduced-motion preference.

## Local preview

If Python is installed, run `python -m http.server 4173 --bind 127.0.0.1` in this folder, then open http://127.0.0.1:4173. Stop the server with Ctrl+C.

This deliverable is local and has not been publicly published.
"# chrispietrowicz" 
