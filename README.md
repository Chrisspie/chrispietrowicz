# Chris / Krzysztof Pietrowicz — AI implementation & software engineering

Bilingual static personal website for chrispietrowicz.com. Full English and Polish HTML, no browser-side translation library or runtime dependencies.

## Develop and validate

Requires Node.js 22+.

    node scripts/build.mjs
    node scripts/check.mjs

Edit src/content.mjs for English/Polish copy and scripts/build.mjs for page structure. Commit generated index.html, en/index.html and pl/index.html alongside source changes. CSS is split between the original styles.css, refinements.css and bilingual.css.

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

## Copy and factual scope

The offer explicitly covers hands-on AI implementation, operational software, workflow automation, forward-deployed engineering and taking AI-built prototypes/MVPs into production.

The owner confirmed work on implementing AI solutions at Revolut. This is described generically as a contribution within the role. No internal use case, architecture, confidential data, metrics, client engagement or employer endorsement is asserted. Independent services are distinguished from professional experience.

Folio is the public, working product with a genuine screenshot and the supplied URL. The owner confirmed end-to-end delivery. WaterGarden is labelled exploration; the AI workflow example is an offer, not a fabricated client case.

## Contact

Email: krzysztof.pietrowicz@gmail.com
LinkedIn: https://www.linkedin.com/in/krzysztof-pietrowicz-492744a6/
GitHub is intentionally omitted from the website. The intro CTA opens a localized email request for 20 minutes; it does not book a calendar slot.
