# Validation — 16 October 2026

- Generated complete EN/PL pages and checked all local assets, section targets and public destinations.
- Automated checks cover regional defaults, manual language priority, query/section preservation, language content parity and file-mode fallback.
- Consent tests cover unknown/refused/expired consent, local preview suppression, one-time initialization, query/referrer sanitisation, event minimisation, revocation and GA cookie cleanup.
- Real browser: EN and PL at 320, 390, 560, 700, 768, 1024 and 1440 px without horizontal page overflow or broken images.
- Verified language switching with section preservation, persisted selection and the automatic root redirect.
- Verified mobile menu open/close, Escape and closing after section navigation.
- Verified scenario tabs with mouse, ArrowRight and Home; animation pause; OS reduced-motion preference; and the privacy dialog.
- Verified visible navigation and offer with JavaScript disabled; no page errors or real analytics requests in local preview.
- Confirmed both product screenshot and portrait load.
- Retained the separate Google Analytics property, using measurement ID G-KNV4H5SGS0.
- Reviews Coach destination responds with HTTP 200 and the expected product title.
- Inspected desktop/mobile screenshots. Main-content text reduced from 934 to 390 words in Polish and 1,055 to 451 in English (includes all scenario text, excludes privacy controls).

Only consented visits on the approved production hosts are measured. No email was sent, meeting booked or product payment made.
