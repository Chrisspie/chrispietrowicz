// Copy for both languages. Each language uses one name consistently:
// EN pages say "Chris", PL pages say "Krzysztof". Legal/operator text keeps the full legal name.
export const content = {
  pl: {
    name: 'Krzysztof Pietrowicz',
    title: 'Od prototypu do działającej aplikacji | Krzysztof Pietrowicz',
    description: 'Doprowadzam działające prototypy, MVP, arkusze i narzędzia wewnętrzne do postaci niezawodnej aplikacji: logowanie, płatności, dane, integracje i wdrożenie.',
    skip: 'Przejdź do treści', menu: 'Menu', navLabel: 'Nawigacja główna',
    nav: ['Współpraca', 'Przykład', 'O mnie', 'Kontakt'],
    languageLabel: 'Język strony',
    hero: 'Twój prototyp działa. Zróbmy z niego produkt.',
    lead: 'Masz demo, które testują pierwsi użytkownicy, aplikację zbudowaną szybko z pomocą AI albo MVP, które zaczyna trzeszczeć. Pomagam ustalić, co zbudować najpierw, piszę oprogramowanie i doprowadzam je do wdrożenia.',
    primary: 'Opowiedz mi o swoim prototypie', secondary: 'Zobacz przykład',
    heroMeta: 'Programista, ponad 10 lat doświadczenia. Systemy produkcyjne w fintechu: Revolut, PwC.',
    portraitAlt: 'Krzysztof Pietrowicz',

    situationsTitle: 'Zwykle zaczyna się od jednej z tych sytuacji',
    situations: [
      ['Prototyp lub MVP', 'Zbudowany w Lovable, Bolt czy Cursorze albo przez freelancera. Dobrze wypada na demo i pierwsi użytkownicy go lubią, ale nikt nie wie, czy wytrzyma prawdziwych klientów, prawdziwe płatności albo kolejną funkcję.'],
      ['Arkusz, na którym pracuje cały zespół', 'Stał się systemem przez przypadek. Kilka osób edytuje go naraz, dane krążą między zakładkami i mailami, a jedna zła formuła kosztuje dzień pracy.'],
      ['Narzędzie wewnętrzne, które przestało wystarczać', 'Sprawdzało się przy pięciu osobach i jednym procesie. Teraz jednych i drugich jest więcej, a każda zmiana jest ryzykowna.']
    ],

    fixTitle: 'Co zwykle wymaga pracy',
    fixIntro: 'Prototyp dobrze pokazuje pomysł. O tym, czy można na nim polegać, decydują te elementy:',
    fixes: [
      'Logowanie, role i uprawnienia',
      'Model danych, którego nie trzeba będzie przepisywać za trzy miesiące',
      'Płatności i subskrypcje',
      'Klucze API i sekrety poza przeglądarką',
      'Integracje z narzędziami, których już używasz',
      'Testy najważniejszych ścieżek',
      'Monitoring błędów, logi i kopie zapasowe',
      'Automatyczne wdrożenia zamiast ręcznego wgrywania'
    ],

    processTitle: 'Jak wygląda współpraca',
    process: [
      ['Przegląd', 'ok. 1 tydzień', 'Przeglądam kod lub arkusz i to, jak Twój zespół naprawdę z niego korzysta. Dostajesz krótki plan na piśmie: co zostawić, co poprawić, co przebudować i co wdrożyć najpierw. Przyda się, nawet jeśli na tym skończymy.'],
      ['Pierwsza wersja produkcyjna', 'zwykle 2–6 tygodni', 'Najpierw buduję to, co najważniejsze. Co tydzień pokazuję działającą wersję, a nie raport ze statusem.'],
      ['Wdrożenie i przekazanie', 'dalej, jeśli potrzebujesz', 'Udostępniamy aplikację Twoim użytkownikom. Kod jest w Twoim repozytorium, z dokumentacją. Mogę rozwijać kolejne wersje albo przekazać projekt Twojemu zespołowi.']
    ],
    processNote: 'Przegląd ma stały zakres i cenę. Budowę wyceniam osobno dla każdej wersji, gdy oboje wiemy, co obejmuje.',

    caseLabel: 'Przykład',
    caseTitle: 'Reviews Coach: od pomysłu do płatnych subskrypcji',
    caseText: [
      'Reviews Coach to mój własny produkt: rozszerzenie Chrome dla lokalnych firm. Działa w Google Maps i do każdej opinii klienta przygotowuje trzy odpowiedzi w różnym tonie. Właściciel je edytuje i publikuje; nic nie jest wysyłane automatycznie.',
      'Zbudowałem całość sam: rozszerzenie, backend, panel dla firm, logowanie przez Google, integrację z AI i płatne subskrypcje. To dokładnie te elementy, których zwykle brakuje prototypowi.'
    ],
    caseFacts: [
      ['Logowanie', 'Google OAuth, bez nowych haseł'],
      ['Płatności', 'Trial bez karty i miesięczny plan Pro'],
      ['AI', 'Klucze modelu tylko na backendzie, limity na konto'],
      ['Zakres', 'Rozszerzenie Chrome, backend i panel dla firm']
    ],
    caseLink: 'Zobacz reviewscoach.com',

    expTitle: 'Gdzie nauczyłem się budować na produkcję',
    experience: [
      ['Revolut', 'Systemy fintech na produkcji: oprogramowanie dla operacji, integracje regulacyjne i rozwiązania AI.'],
      ['PwC', 'Silnik oceny ryzyka transakcji, który łączy dane z wielu zbiorów i stosuje konfigurowalne reguły do wykrywania podejrzanych transakcji.'],
      ['Applause', 'Onboarding klientów, integracja z Jirą i mikroserwisy dla platformy B2B SaaS.'],
      ['Projekt ESA w GMV', 'Oprogramowanie do transferu czasu i częstotliwości na podstawie danych GNSS, wykorzystywane przy kalibracji zegarów atomowych.']
    ],

    aboutTitle: 'O mnie',
    about: [
      'Jestem programistą z ponad dziesięcioletnim doświadczeniem w fintechu, platformach B2B i oprogramowaniu naukowym.',
      'Pracujesz bezpośrednio ze mną. Osoba, z którą rozmawiasz na pierwszym spotkaniu, ustala zakres, pisze kod i go wdraża. Bez pośredników i bez przekazywania projektu dalej.',
      'Buduję też własne produkty, jak Reviews Coach czy WaterGarden, aplikację na Androida do budowania nawyków, obecnie w zamkniętych testach w Google Play. Dzięki temu dobrze znam ograniczenia, z którymi pracujesz: mało czasu, prawdziwi użytkownicy i konkretny budżet.'
    ],
    aboutLink: 'Profil na LinkedIn',

    contactTitle: 'Napisz, co masz i co Cię blokuje',
    contactText: 'Wystarczy kilka zdań: co już działa, kto z tego korzysta i co przeszkadza. Odpiszę, czy mogę pomóc i od czego bym zaczął.',
    bookingCta: 'Umów 20 minut rozmowy', emailCta: 'Napisz e-mail', copyCta: 'Kopiuj adres', copied: 'Skopiowano',
    mailSubject: 'Mój prototyp / projekt', mailBody: 'Cześć Krzysztof,\n\nCo mam teraz:\n\nKto z tego korzysta:\n\nCo przeszkadza:\n',

    personal: 'Niezależne usługi programistyczne.', back: 'Do góry',
    consentTitle: 'Analityka strony', consentText: 'Czy mogę mierzyć odwiedziny przez Google Analytics? Bez śledzenia reklamowego.',
    accept: 'Zezwól', reject: 'Nie, dziękuję', settings: 'Prywatność i analityka', privacy: 'Szczegóły', close: 'Zamknij',
    privacyTitle: 'Prywatność i analityka',
    privacyText: 'Operatorem strony jest Krzysztof Pietrowicz. Kontakt: krzysztof.pietrowicz@gmail.com. Hosting przetwarza dane techniczne potrzebne do wyświetlenia strony. Jeśli zgodzisz się na analitykę, Google Analytics otrzyma dane o wizytach i interakcjach: przeglądane strony, przybliżony region, informacje o przeglądarce i urządzeniu oraz kliknięcia linków kontaktowych i produktowych. Google przetwarza adres IP, aby określić region. Analityka korzysta z własnych plików cookie o ograniczonym czasie życia. Funkcje reklamowe są wyłączone. Treść e-maili nie jest przesyłana do analityki. Odmowa nie ogranicza korzystania ze strony. Zgodę możesz zmienić w każdej chwili. Wybór języka i decyzja o analityce są zapisywane lokalnie w przeglądarce. Dane analityczne mogą być przetwarzane przez Google poza Twoim krajem; szczegóły znajdziesz w polityce prywatności Google.',
    googlePrivacy: 'Polityka prywatności Google', analyticsStatus: ['Analityka jest wyłączona.', 'Analityka jest włączona.']
  },
  en: {
    name: 'Chris Pietrowicz',
    title: 'From prototype to production software | Chris Pietrowicz',
    description: 'I turn working prototypes, MVPs, spreadsheets and internal tools into software people can rely on: sign-in, payments, data, integrations and deployment.',
    skip: 'Skip to content', menu: 'Menu', navLabel: 'Main navigation',
    nav: ['How it works', 'Example', 'About', 'Contact'],
    languageLabel: 'Website language',
    hero: 'Your prototype works. Let’s make it a product.',
    lead: 'You have a demo your first users are trying, an app built quickly with AI tools, or an MVP that is starting to creak. I help you decide what to build first, write the software and put it into production.',
    primary: 'Tell me about your prototype', secondary: 'See an example',
    heroMeta: 'Software engineer, 10+ years. Production fintech systems at Revolut and PwC.',
    portraitAlt: 'Chris Pietrowicz',

    situationsTitle: 'It usually starts with one of these',
    situations: [
      ['A prototype or MVP', 'Built in Lovable, Bolt or Cursor, or by a freelancer. It demos well and first users like it, but nobody is sure it will survive real customers, real payments or the next feature.'],
      ['A spreadsheet the whole team works in', 'It became the system by accident. Several people edit it at once, data gets copied between tabs and emails, and one wrong formula costs a day.'],
      ['An internal tool that no longer fits', 'It was fine for five people and one process. Now there are more of both, and every change feels risky.']
    ],

    fixTitle: 'What usually needs work',
    fixIntro: 'A prototype is good at showing the idea. These are the parts that decide whether people can rely on it:',
    fixes: [
      'Sign-in, roles and permissions',
      'A data model that won’t need rewriting in three months',
      'Payments and subscriptions',
      'API keys and secrets kept out of the browser',
      'Integrations with the tools you already use',
      'Tests for the paths that matter',
      'Error tracking, logs and backups',
      'Automatic deployment instead of manual uploads'
    ],

    processTitle: 'How we work together',
    process: [
      ['Review', 'about 1 week', 'I go through the code or spreadsheet and how your team actually uses it. You get a short written plan: what to keep, what to fix, what to rebuild and what to ship first. It is useful even if we stop there.'],
      ['First production release', 'usually 2–6 weeks', 'I build the part that matters most first and show you a working version every week, not a status report.'],
      ['Launch and handover', 'ongoing if you need it', 'We put it in front of your users. The code lives in your repository, with documentation. I can carry on with the next releases or hand over to your team.']
    ],
    processNote: 'The review has a fixed scope and price. I price the build per release, once we both know what it involves.',

    caseLabel: 'Example',
    caseTitle: 'Reviews Coach: from idea to paid subscriptions',
    caseText: [
      'Reviews Coach is my own product: a Chrome extension for local businesses. It works inside Google Maps and drafts three replies to each customer review, each in a different tone. The owner edits and publishes; nothing is posted automatically.',
      'I built all of it myself: the extension, the backend, the business dashboard, Google sign-in, the AI integration and paid subscriptions. These are exactly the pieces a prototype usually lacks.'
    ],
    caseFacts: [
      ['Sign-in', 'Google OAuth, no new passwords'],
      ['Payments', 'Free trial without a card, monthly Pro plan'],
      ['AI', 'Model keys on the backend only, limits per account'],
      ['Scope', 'Chrome extension, backend and business dashboard']
    ],
    caseLink: 'Visit reviewscoach.com',

    expTitle: 'Where I learned to build for production',
    experience: [
      ['Revolut', 'Fintech systems in production: operations software, regulatory integrations and AI solutions.'],
      ['PwC', 'A transaction risk-assessment engine that correlates several datasets and applies configurable rules to flag suspicious transactions.'],
      ['Applause', 'Customer onboarding, a Jira integration and microservices for an established B2B SaaS platform.'],
      ['ESA project at GMV', 'Software for GNSS-based time and frequency transfer, used in atomic-clock calibration.']
    ],

    aboutTitle: 'About me',
    about: [
      'I’m a software engineer with more than ten years of experience in fintech, B2B platforms and scientific software.',
      'You work with me directly. The person you talk to on the first call is the one who scopes the work, writes the code and deploys it. No account managers and no handoffs.',
      'I also build my own products, such as Reviews Coach and WaterGarden, an Android habit app in closed testing on Google Play. That keeps me close to the constraints you work with: little time, real users and a fixed budget.'
    ],
    aboutLink: 'LinkedIn profile',

    contactTitle: 'Tell me what you have and where it’s stuck',
    contactText: 'A few sentences are enough: what already works, who uses it and what is getting in the way. I’ll reply with whether I can help and what the first step would be.',
    bookingCta: 'Book a 20-minute call', emailCta: 'Email me', copyCta: 'Copy address', copied: 'Copied',
    mailSubject: 'My prototype / project', mailBody: 'Hi Chris,\n\nWhat I have now:\n\nWho uses it:\n\nWhat is getting in the way:\n',

    personal: 'Independent software services.', back: 'Back to top',
    consentTitle: 'Website analytics', consentText: 'May I measure visits with Google Analytics? No advertising tracking.',
    accept: 'Allow', reject: 'No thanks', settings: 'Privacy & analytics', privacy: 'Details', close: 'Close',
    privacyTitle: 'Privacy & analytics',
    privacyText: 'This website is operated by Krzysztof (Chris) Pietrowicz. Contact: krzysztof.pietrowicz@gmail.com. Hosting processes the technical request data needed to serve the website. If you allow analytics, Google Analytics receives visit and interaction data, such as pages viewed, approximate region, browser/device information and clicks on contact or product links. Google processes IP addresses to derive regional data. Analytics uses first-party cookies with a limited lifetime. No advertising features are enabled. Email contents are never sent to Analytics. You can refuse analytics and still use the entire site, or change your choice here at any time. Consent and language preferences are stored locally in your browser. Analytics data may be processed by Google outside your country; see Google’s privacy information for details.',
    googlePrivacy: 'Google’s privacy information', analyticsStatus: ['Analytics is currently off.', 'Analytics is currently allowed.']
  }
};
