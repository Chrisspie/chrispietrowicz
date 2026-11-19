# Chris / Krzysztof Pietrowicz — from prototype to production software

Bilingual static personal website for chrispietrowicz.com. Full English and Polish HTML, no browser-side translation library or runtime dependencies.

## Develop and validate

Requires Node.js 22+.

    node scripts/build.mjs
    node scripts/check.mjs

Edit src/content.mjs for English/Polish copy and scripts/build.mjs for page structure. Commit generated index.html, en/index.html and pl/index.html alongside source changes. All styling, including light/dark themes and the consent controls, is in styles.css. Contact settings (email, optional booking link) are constants at the top of scripts/build.mjs.

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

Tracked after consent: pageviews, intro_request, email_click, email_copy, booking_open, product_open and linkedin_open. Events carry the selected language, not email contents or link destinations. Queries and fragments are removed from page_location and page_referrer. Refused visitors, blockers and local previews are not counted; Analytics is not a server access counter.

Analytics runs only on chrispietrowicz.com, www.chrispietrowicz.com and the existing Azure production hostname. Local preview and other hostnames do not send real traffic. The root entry redirect is excluded to avoid a duplicate pageview. No duplicate config is sent when the consent button is pressed repeatedly.

Implementation references:
- https://developers.google.com/tag-platform/security/guides/consent
- https://developers.google.com/analytics/devguides/collection/ga4/views

## Offer and interactions

Positioning: turning something that already works (a prototype/MVP/AI-built app, a team spreadsheet, an outgrown internal tool) into production software. The hero leads with the prototype case. Copy is first person, without decorative labels, numbered eyebrows or illustrative animations.

Page order: hero (text only) → three starting situations → what usually needs work → three-step process (review, first production release, launch/handover) → Reviews Coach case study (text and facts, no screenshot) → professional experience (Revolut, PwC, Applause, ESA project at GMV; neutral descriptions, no internal details) → about (with portrait) → contact.

EN pages use "Chris Pietrowicz", PL pages "Krzysztof Pietrowicz"; the privacy text keeps the legal name. Schema.org Person + ProfessionalService JSON-LD, hreflang and a sitemap with language alternates are generated. No content depends on JavaScript; the mobile menu falls back to a visible link row via noscript.

## Contact

Email: krzysztof.pietrowicz@gmail.com
LinkedIn: https://www.linkedin.com/in/krzysztof-pietrowicz-492744a6/
GitHub is intentionally omitted from the website. The contact CTA opens a localized email draft; a Copy address button helps visitors without a mail client. Setting `booking` in scripts/build.mjs adds a booking button as the primary contact action.
