# Chris / Krzysztof Pietrowicz — AI implementation & software engineering

Bilingual static personal website for chrispietrowicz.com. Full English and Polish HTML, no browser-side translation library or runtime dependencies.

## Develop and validate

Requires Node.js 22+.

    node scripts/build.mjs
    node scripts/check.mjs

Edit src/content.mjs for English/Polish copy and scripts/build.mjs for page structure. Commit generated index.html, en/index.html and pl/index.html alongside source changes. Layout and motion are in styles.css; bilingual.css styles the analytics controls.

The Azure workflow rebuilds, checks and publishes on pushes to main. The existing Azure deployment secret is reused, with no credential values stored in source. The public root, /en/ and /pl/ must be served by a static HTTP server for local testing.

## Language selection

The root chooses PL when the primary browser language is Polish or the device timezone is Europe/Warsaw; otherwise it chooses EN. A previous manual choice has priority. No GPS permission or third-party IP lookup is requested. This is a regional/language heuristic, not exact physical geolocation. Direct /pl/ and /en/ links always retain the requested language. The small header switch remembers the preference and preserves the current section. Static pages, canonical tags and hreflang support search engines and sharing.

## Google Analytics

A separate GA4 property named Chris Pietrowicz — chrispietrowicz.com was created alongside Folio in the existing Analytics account.

- Web stream: Chris Pietrowicz — website
- Stream ID: 16131181308
- Measurement ID: G-KNV4H5SGS0
- Property ID: 559028737
- Reports: https://analytics.google.com/analytics/web/#/a1127455p559028737/reports/intelligenthome
- Reporting timezone: Europe/Warsaw
- Currency: PLN
- Enhanced measurement: off. Pageviews and explicit site events are used.

analytics.js uses basic consent: no Google script, cookies or measurement requests before opt-in, or after a saved refusal. Visitors can change their choice from Privacy & analytics in the footer. Consent expires after 180 days. Revocation disables measurement and clears GA cookies. Advertising storage, ad user data, personalisation and Google signals are disabled.

Tracked after consent: pageviews, intro_request, email_click, linkedin_open and folio_open. Events carry the selected language, not email contents or link destinations. Queries and fragments are removed from page_location and page_referrer. Refused visitors, blockers and local previews are not counted; Analytics is not a server access counter.

Analytics runs only on chrispietrowicz.com, www.chrispietrowicz.com and the existing Azure production hostname. Local preview and other hostnames do not send real traffic. The root entry redirect is excluded to avoid a duplicate pageview. No duplicate config is sent when the consent button is pressed repeatedly.

Implementation references:
- https://developers.google.com/tag-platform/security/guides/consent
- https://developers.google.com/analytics/devguides/collection/ga4/views

## Offer and interactions

Three services describe concrete deliverables: AI implementation, operational applications/automation, and prototype development. The main content is about 58% shorter in Polish and 57% shorter in English than the previous version, counting all main-content text including the hidden scenario panels.

The hero has three manually selected, keyboard-accessible tabs illustrating documents, workflows and prototypes. Moving data markers and a soft pulse explain the flow; there are no fabricated live results. Arrow keys, Home and End change tabs. Animations can be paused, respect reduced-motion preferences, and stop while the illustration is off screen. Sections enter once on scroll. Content and navigation remain usable without JavaScript.

The business-application example is drawn from the owner's CV and anonymized: Excel-based pricing tools became one application. No client name, internal architecture, operational detail or exact performance figure is published. The Revolut mention remains a general statement about professional experience. Reviews Coach and Folio show independent product delivery; the Folio image is a real screenshot. The page does not reproduce a career history, employer project details or CV download.

## Contact

Email: krzysztof.pietrowicz@gmail.com
LinkedIn: https://www.linkedin.com/in/krzysztof-pietrowicz-492744a6/
GitHub is intentionally omitted from the website. The contact CTA opens a localized email draft; it does not book a calendar slot.
