const translations = {
    pl: {
        metaTitle: "ROOTSEC | Ofensywne Bezpieczeństwo i Testy Penetracyjne",
        nav: {
            about: "O nas",
            services: "Usługi",
            whyUs: "Dlaczego ROOTSEC",
            audit: "Zamów Audyt"
        },
        hero: {
            badge: "NOWY GRACZ NA RYNKU CYBERBEZPIECZEŃSTWA",
            title1: "Wyprzedź hakerów.",
            title2: "Zabezpiecz swój biznes.",
            desc: "Jesteśmy dynamicznym zespołem ekspertów ofensywnego bezpieczeństwa. Symulujemy realne cyberataki, aby odkryć słabe punkty Twoich systemów zanim zrobią to cyberprzestępcy.",
            ctaPrimary: "Rozpocznij Współpracę",
            ctaSecondary: "Poznaj Usługi",
            stat1Val: "100%",
            stat1Desc: "Podejście Ofensywne",
            stat2Val: "OSCP & CISSP",
            stat2Desc: "Certyfikowana Kadra",
            stat3Val: "Zero",
            stat3Desc: "Kompromisów"
        },
        terminal: {
            comment: "# ROOTSEC Offensive Security Suite v1.0.4",
            cmd1: "rootsec --target client-infrastructure.pl --mode pentest",
            out1: "[+] Initializing reconnaissance phase...",
            out2: "[!] Scanning active ports and services...",
            out3: "Found 3 potential entry vectors on web gateway.",
            cmd2: "exploit --verify-safely --report-mode",
            out4: "[✓] Vulnerabilities verified without service disruption.",
            out5: "[✓] Executive & Technical report generated successfully."
        },
        about: {
            badge: "O NASZYM ZESPOLE",
            title1: "Młoda ekipa,",
            title2: "bezkompromisowe",
            title3: "podejście do bezpieczeństwa.",
            p1: "ROOTSEC powstał z pasji do bezpieczeństwa ofensywnego i chęci dostarczenia polskiemu i europejskiemu rynku usług audytorskich nowej generacji. Nie polegamy wyłącznie na automatycznych skanerach – drążymy głębiej, łącząc wiedzę ekspercką z realnymi technikami stosowanymi przez współczesnych cyberprzestępców.",
            p2: "Jesteśmy świeżą marką, ale nasz zespół tworzą certyfikowani specjaliści z wieloletnim doświadczeniem w zabezpieczaniu kluczowych systemów finansowych, e-commerce oraz infrastruktury krytycznej.",
            card1Title: "Ofensywny Mindset",
            card1Desc: "Myślimy i działamy jak atakujący, abyś Ty spał spokojnie.",
            card2Title: "Szybkość i Zwinność",
            card2Desc: "Brak korporacyjnej biurokracji, szybkie raporty i bezpośredni kontakt z ekspertami.",
            valuesTitle: "Nasze Wartości w Pigułce",
            val1Title: "Zero fałszywych obietnic",
            val1Desc: "Dostarczamy twarde dowody poparte proof-of-concept (PoC).",
            val2Title: "Edukacja i Remediacja",
            val2Desc: "Nie tylko wskazujemy błędy, ale pokazujemy zespołom deweloperskim jak je skutecznie naprawić.",
            val3Title: "Pełna Dyskrecja",
            val3Desc: "Najwyższe standardy poufności danych i bezpieczeństwa informacji."
        },
        services: {
            badge: "OFERTA ROOTSEC",
            title1: "Kompleksowe Usługi",
            title2: "Bezpieczeństwa",
            desc: "Zabezpiecz każdy aspekt swojej cyfrowej obecności. Od kodu źródłowego, przez aplikacje webowe i mobilne, aż po świadomość pracowników.",
            enquire: "Zapytaj o usługę",
            items: [
                {
                    title: "Testy Penetracyjne Web",
                    desc: "Głęboka analiza aplikacji webowych i API pod kątem podatności OWASP Top 10, logiki biznesowej, uwierzytelniania i autoryzacji.",
                    tag: "OWASP / API"
                },
                {
                    title: "Testy Aplikacji Mobilnych",
                    desc: "Audyt bezpieczeństwa aplikacji na systemy iOS i Android. Analiza reverse-engineering, przechowywania danych i komunikacji sieciowej.",
                    tag: "iOS & Android"
                },
                {
                    title: "Infrastruktura i Sieć",
                    desc: "Testy penetracyjne sieci wewnętrznej i zewnętrznej, konfiguracji chmury (AWS, Azure, GCP) oraz urządzeń brzegowych.",
                    tag: "Cloud / Infra"
                },
                {
                    title: "Analiza Kodu Źródłowego",
                    desc: "Przegląd kodu źródłowego (SAST) wsparty analizą ekspercką w celu wykrycia ukrytych luk bezpieczeństwa już na etapie developmentu.",
                    tag: "SAST / Code Review"
                },
                {
                    title: "Testy Socjotechniczne",
                    desc: "Kontrolowane kampanie phishingowe (e-mail, SMS), testy vishingowe oraz ocena odporności pracowników na manipulację.",
                    tag: "Phishing / Awareness"
                },
                {
                    title: "Audyty i Compliance",
                    desc: "Kompleksowe audyty bezpieczeństwa konfiguracji, polityk bezpieczeństwa oraz gotowości pod kątem standardów rynkowych.",
                    tag: "Audits / Standards"
                }
            ]
        },
        whyUs: {
            badge: "DLACZEGO ROOTSEC",
            title1: "Dlaczego warto powierzyć nam",
            title2: "bezpieczeństwo?",
            desc: "Nie jesteśmy korporacją z szablonowymi raportami. Podchodzimy do każdego projektu indywidualnie z pasją i zaangażowaniem.",
            card1Title: "Realne Scenariusze Ataków",
            card1Desc: "Symulujemy zaawansowane zagrożenia (APT), z którymi mierzą się współczesne organizacje. Identyfikujemy ścieżki eskalacji uprawnień i przejęcia systemów.",
            card2Title: "Raporty Dedykowane",
            card2Desc: "Otrzymasz jasny podział na Executive Summary dla zarządu oraz szczegółowe technical findings z instrukcją reprodukcji i naprawy (PoC).",
            card3Title: "Wsparcie po Audycie",
            card3Desc: "Nasza praca nie kończy się na wysłaniu raportu. Pomagamy zweryfikować poprawność wdrożonych poprawek i pozostajemy do dyspozycji zespołu."
        },
        contact: {
            badge: "SKONTAKTUJ SIĘ Z NAMI",
            title1: "Porozmawiajmy o",
            title2: "bezpieczeństwie",
            title3: "Twojej firmy",
            desc: "Masz pytania dotyczące podatności, chcesz wycenić testy penetracyjne lub omówić zakres audytu? Napisz do nas bezpośrednio lub wypełnij formularz.",
            emailLabel: "E-mail kontaktowy",
            phoneLabel: "Telefon",
            locationLabel: "Lokalizacja / Działanie",
            locationVal: "Warszawa, Polska (Usługi Zdalne i Krajowe)",
            nameLabel: "Imię i Nazwisko *",
            namePlaceholder: "Jan Kowalski",
            emailInputLabel: "Adres E-mail *",
            emailPlaceholder: "jan@firma.pl",
            companyLabel: "Nazwa Firmy",
            companyPlaceholder: "Firma S.A.",
            serviceLabel: "Interesująca Usługa",
            serviceOptions: [
                "Testy Penetracyjne Web / API",
                "Testy Aplikacji Mobilnych",
                "Infrastruktura i Sieć",
                "Analiza Kodu Źródłowego (SAST)",
                "Testy Socjotechniczne (Phishing)",
                "Inny Audyt / Konsultacje"
            ],
            msgLabel: "Wiadomość / Opis Projektu *",
            msgPlaceholder: "Krótko opisz swój system lub cel audytu...",
            submitBtn: "Wyślij Zapytanie",
            successTitle: "Wiadomość wysłana pomyślnie!",
            successDesc: "Dziękujemy za kontakt. Nasz zespół przeanalizuje Twoje zapytanie i skontaktuje się w ciągu 24 godzin.",
            successBtn: "Wyślij kolejną wiadomość"
        },
        footer: {
            rights: "&copy; 2026 ROOTSEC. Wszelkie prawa zastrzeżone. | root@rootsec:~$ exit"
        }
    },
    en: {
        metaTitle: "ROOTSEC | Offensive Security & Penetration Testing Services",
        nav: {
            about: "About Us",
            services: "Services",
            whyUs: "Why ROOTSEC",
            audit: "Request Audit"
        },
        hero: {
            badge: "NEXT-GEN OFFENSIVE SECURITY STARTUP",
            title1: "Outsmart Hackers.",
            title2: "Secure Your Digital Assets.",
            desc: "We simulate real-world cyberattacks to pinpoint vulnerabilities before adversaries exploit them. Modern penetration testing tailored for agile tech companies.",
            ctaPrimary: "Get Started Today",
            ctaSecondary: "Explore Services",
            stat1Val: "100%",
            stat1Desc: "Offensive Focus",
            stat2Val: "OSCP & CEH",
            stat2Desc: "Certified Experts",
            stat3Val: "Zero",
            stat3Desc: "False Positives"
        },
        terminal: {
            comment: "# ROOTSEC Offensive Engine v2.4.0-release",
            cmd1: "rootsec-scan --target client-app.com --depth full",
            out1: "[+] Reconnaissance: Mapping attack surface...",
            out2: "[!] Identified 2 critical web vectors & API exposure",
            cmd2: "execute-exploit-poc --safe-mode",
            out3: "[✓] Vulnerabilities verified safely with zero downtime.",
            out4: "[✓] Comprehensive PoC report generated."
        },
        about: {
            badge: "ABOUT ROOTSEC",
            title1: "Agile, hungry, and",
            title2: "relentless",
            title3: "in securing your code.",
            p1: "Founded by seasoned cybersecurity specialists, ROOTSEC was born out of a desire to eliminate outdated corporate security audits. We don't just click 'Run' on automated scanners and hand over automated noise.",
            p2: "We combine deep manual penetration testing with custom automation scripts to dig deeper into business logic flaws, broken access controls, and complex multi-step exploits that automated tools routinely miss.",
            card1Title: "Attacker Mindset",
            card1Desc: "We think like adversarial hackers so you stay three steps ahead.",
            card2Title: "Speed & Precision",
            card2Desc: "Fast turnaround, zero fluff, and actionable remediation steps.",
            valuesTitle: "Our Core Commitments",
            val1Title: "100% Manual Verification",
            val1Desc: "Every vulnerability in our report comes with a verified Proof-of-Concept.",
            val2Title: "Developer-Centric Guidance",
            val2Desc: "We write clear remediation guidelines tailored specifically for engineers.",
            val3Title: "Strict Confidentiality",
            val3Desc: "Rigorous NDA compliance and encrypted data exchange standards."
        },
        services: {
            badge: "WHAT WE DO",
            title1: "Comprehensive",
            title2: "Cybersecurity Services",
            desc: "Protect every layer of your technology stack with tailored offensive security solutions.",
            enquire: "Enquire",
            items: [
                {
                    title: "Web App Penetration Testing",
                    desc: "Thorough manual assessment of web portals, SaaS platforms, and REST/GraphQL APIs based on OWASP Top 10 and advanced attack vectors.",
                    tag: "OWASP / REST / GraphQL"
                },
                {
                    title: "Mobile Security Audits",
                    desc: "Reverse engineering, static & dynamic analysis of iOS and Android applications to prevent credential theft and payload tampering.",
                    tag: "iOS & Android"
                },
                {
                    title: "Cloud & Infra Testing",
                    desc: "Security posture reviews for AWS, Azure, GCP infrastructures, Active Directory environments, and external perimeter networks.",
                    tag: "AWS / Azure / GCP"
                },
                {
                    title: "Source Code Review (SAST)",
                    desc: "In-depth inspection of your source code repository to uncover secret leaks, logic vulnerabilities, and unsecure dependency usage.",
                    tag: "Static Analysis"
                },
                {
                    title: "Social Engineering",
                    desc: "Controlled phishing simulations and spear-phishing campaigns to test human awareness and security incident response speed.",
                    tag: "Phishing & Awareness"
                },
                {
                    title: "Compliance & Audits",
                    desc: "Security posture evaluations aligned with SOC2, ISO 27001, and NIS2 requirements to prepare your startup for enterprise deals.",
                    tag: "SOC2 / ISO27001"
                }
            ]
        },
        whyUs: {
            badge: "WHY ROOTSEC",
            title1: "Why trust us with your",
            title2: "security posture?",
            desc: "We are not a corporation with template reports. We approach every project individually with passion and dedication.",
            card1Title: "Real Attack Scenarios",
            card1Desc: "We simulate advanced threats (APT) faced by modern organizations. We identify privilege escalation paths and system takeovers.",
            card2Title: "Dedicated Reports",
            card2Desc: "You will receive a clear split into Executive Summary for management and detailed technical findings with PoC reproduction and fix instructions.",
            card3Title: "Post-Audit Support",
            card3Desc: "Our work doesn't end with sending the report. We help verify the correctness of implemented patches and remain available to the team."
        },
        contact: {
            badge: "GET IN TOUCH",
            title1: "Ready to assess your",
            title2: "security posture?",
            title3: "",
            desc: "Contact us to request a proposal, discuss scope requirements, or get answers to your cybersecurity questions.",
            emailLabel: "Email Contact",
            phoneLabel: "Direct Hotline",
            locationLabel: "Global Operations",
            locationVal: "Remote-first & Global Assessments",
            nameLabel: "Full Name *",
            namePlaceholder: "Alex Mercer",
            emailInputLabel: "Business Email *",
            emailPlaceholder: "alex@company.com",
            companyLabel: "Company Name",
            companyPlaceholder: "TechCorp Inc.",
            serviceLabel: "Target Service",
            serviceOptions: [
                "Web Application Penetration Test",
                "Mobile Application Security Audit",
                "Cloud Infrastructure Review",
                "Source Code Review (SAST)",
                "Social Engineering & Phishing",
                "General Security Consultation"
            ],
            msgLabel: "Project Details / Scope *",
            msgPlaceholder: "Briefly describe your target assets, timeline, and audit goals...",
            submitBtn: "Submit Request",
            successTitle: "Message Transmitted!",
            successDesc: "Thank you for reaching out. Our security team will analyze your request and get back to you within 24 hours.",
            successBtn: "Send Another Request"
        },
        footer: {
            rights: "&copy; 2026 ROOTSEC Inc. All rights reserved. | root@rootsec:~$ exit"
        }
    }
};
