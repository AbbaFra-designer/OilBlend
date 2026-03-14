// translations.js — Bilingual (IT/EN) string dictionary for OilBlend rev.2.
// Every visible UI string is keyed here; index.html references these via t('key').
// Italian (it) contains the original strings verbatim; English (en) contains translations.

const i18n = {

  /* ─────────────────────────────────────────────
     ITALIAN  (original, verbatim)
  ───────────────────────────────────────────── */
  it: {

    /* Page */
    pageTitle:               "OilBlend — Calcolatore Viscosità",

    /* Splash */
    splashLogo:              "OilBlend",
    splashSubtitle1:         "Il calcolatore tecnico di viscosità",
    splashSubtitle2:         "per oli industriali",

    /* Calc screen — headings */
    calcTitle:               "Viscosity Blending Calculator",
    calcSubtitle:            "Inserisci i valori di viscosità cinematica",

    /* Calc screen — temperature warning (split around the bold "40°C") */
    tempWarningPre:          "Tutti i valori devono essere riferiti a",
    tempWarningPost:         "(norma ASTM D341)",

    /* Calc screen — input labels */
    oil1Label:               "Viscosità Olio 1 (mm²/s)",
    oil2Label:               "Viscosità Olio 2 (mm²/s)",
    targetLabel:             "Viscosità Finale desiderata (mm²/s)",
    litersLabel:             "Quantità totale (litri) — opzionale",

    /* Calc screen — placeholders */
    oil1Placeholder:         "es. 220",
    oil2Placeholder:         "es. 68",
    targetPlaceholder:       "es. 150",
    litersPlaceholder:       "opzionale",

    /* Calc screen — buttons */
    calcBtn:                 "CALCOLA",
    resetBtn:                "Reset",

    /* Calc screen — dynamic error & notice strings */
    errorEmpty:              "Inserisci tutti e tre i valori di viscosità.",
    errorMinVisc:            "Viscosità deve essere > 2 mm²/s",
    errorTargetRange:        "Target fuori range: deve essere tra i due oli",
    swappedNotice:           "I valori sono stati scambiati: Olio 1 è quello più viscoso.",

    /* Calc screen — result card */
    resultLabel:             "Risultato Miscela",
    oil1ResultLabel:         "Olio 1",
    oil1MoreViscous:         "(più viscoso)",
    oil2ResultLabel:         "Olio 2",
    isoMatchPrefix:          "✓ Target = ISO ",

    /* ISO VG screen */
    isoTitle:                "Tabella ISO VG",
    isoSubtitle:             "Viscosità cinematica a 40°C — tocca una riga per usarla",
    isoNotice:               "Tocca un grado per inserirne il valore mediano nell'ultimo campo selezionato.",
    isoGreenWord:            "Verde",
    isoGreenSuffix:          " = risultato attuale.",
    isoColGrade:             "Grado",
    isoColMid:               "Media",
    isoColMin:               "Min",
    isoColMax:               "Max",

    /* Info screen — headings */
    infoTitle:               "Informazioni",
    infoSubtitle:            "Metodo di calcolo e documenti legali",

    /* Info screen — warning box
       Structure: <strong>[infoWarningTitle]</strong><br/>
                  [infoWarningPre] <strong>[infoWarningBold]</strong>
                  [infoWarningMid] <strong>2 mm²/s</strong>. */
    infoWarningTitle:        "⚠️ Attenzione",
    infoWarningPre:          "Le viscosità devono essere alla",
    infoWarningBold:         "stessa temperatura (40°C)",
    infoWarningMid:          ". Valido solo per valori >",

    /* Info screen — method section */
    infoMethodTitle:         "Metodo ASTM D341 (Walther)",
    infoMethodText:          "Standard internazionale per stimare la viscosità di miscele di oli lubrificanti, basato sulla relazione doppio-logaritmica tra viscosità e composizione.",

    /* Info screen — formula section */
    infoFormulaTitle:        "Formula",
    infoFormulaComment1:     "// Walther",
    infoFormulaComment2:     "// % Olio 1",
    infoFormulaLine:         "Olio1 = x×100%  ·  Olio2 = (1−x)×100%",

    /* Info screen — limits section */
    infoLimitsTitle:         "Limiti",
    infoLimitsText:          "Funziona per oli minerali e sintetici con ν > 2 mm²/s. Non applicabile a emulsioni o oli con additivi polimerici. Evitare differenze eccessive.",

    /* Info screen — legal documents section header */
    infoLegalTitle:          "Documenti Legali",

    /* Policy accordion buttons */
    privacyBtn:              "📋 Privacy Policy",
    cookieBtn:               "🍪 Cookie Policy",
    termsBtn:                "📜 Termini di Servizio",

    /* ── Privacy Policy ── */
    privacyDocTitle:         "Privacy Policy — OilBlend",
    privacyLastUpdatedLabel: "Ultimo aggiornamento:",
    privacyLastUpdatedDate:  "Marzo 2026",
    privacy1Title:           "1. Titolare del Trattamento",
    privacy1Text:            "Digital Reality, in collaborazione con Nuova Bravol Srl.",
    privacy2Title:           "2. Dati Raccolti",
    privacy2Text:            "L'app non raccoglie dati personali. Vengono rilevati esclusivamente dati tecnici anonimi (tipo di dispositivo, dimensione schermo) a fini statistici interni, senza possibilità di identificazione dell'utente.",
    privacy3Title:           "3. Finalità del Trattamento",
    privacy3Text:            "I dati tecnici anonimi sono utilizzati esclusivamente per migliorare la compatibilità e l'esperienza d'uso dell'applicazione.",
    privacy4Title:           "4. Base Giuridica",
    privacy4Text:            "Il trattamento si basa sul legittimo interesse del titolare (art. 6.1.f GDPR) per finalità di ottimizzazione tecnica del servizio.",
    privacy5Title:           "5. Conservazione dei Dati",
    privacy5Text:            "Non vengono conservati dati personali. I dati tecnici anonimi sono elaborati in forma aggregata e non vengono associati a singoli utenti.",
    privacy6Title:           "6. Condivisione dei Dati",
    privacy6Text:            "Nessun dato viene ceduto a terze parti per finalità di marketing o profilazione.",
    privacy7Title:           "7. Diritti dell'Utente",
    privacy7Text:            "Poiché non vengono trattati dati personali identificativi, non si applica l'esercizio dei diritti GDPR. Per info rivolgersi a Digital Reality o",
    privacy8Title:           "8. Sicurezza",
    privacy8Text:            "L'app funziona in locale, senza trasmissione di dati sensibili a server esterni. Tutte le elaborazioni avvengono sul dispositivo dell'utente.",

    /* ── Cookie Policy ── */
    cookieDocTitle:          "Cookie Policy — OilBlend",
    cookie1Title:            "1. Cosa sono i cookie",
    cookie1Text:             "I cookie sono piccoli file di testo memorizzati sul dispositivo. OilBlend utilizza tecnologie equivalenti (localStorage) esclusivamente per il funzionamento locale dell'app.",
    cookie2Title:            "2. Cookie Tecnici (necessari)",
    cookie2Text:             "OilBlend utilizza localStorage esclusivamente per memorizzare le preferenze temporanee dell'app (ultimo campo attivo, risultati di calcolo). Questi dati rimangono sul dispositivo e non vengono trasmessi.",
    cookie3Title:            "3. Cookie di Profilazione",
    cookie3Text:             "OilBlend NON utilizza cookie di profilazione, cookie pubblicitari o tracker di terze parti.",
    cookie4Title:            "4. Cookie Analitici",
    cookie4Text:             "Non vengono utilizzati servizi di analisi di terze parti come Google Analytics.",
    cookie5Title:            "5. Gestione",
    cookie5Text:             "L'utente può cancellare i dati locali in qualsiasi momento tramite le impostazioni del browser o del dispositivo.",

    /* ── Terms of Service ── */
    termsDocTitle:           "Termini di Servizio — OilBlend",
    terms1Title:             "1. Descrizione del Servizio",
    terms1Text:              "OilBlend è un'applicazione di calcolo tecnico che consente di stimare le proporzioni di miscelazione di oli lubrificanti per ottenere una viscosità target, secondo il metodo ASTM D341 (Walther).",
    terms2Title:             "2. Uso Consentito",
    terms2Text:              "L'app è destinata a professionisti del settore lubrificanti e oli industriali. L'uso è consentito esclusivamente per scopi professionali e tecnici leciti.",
    terms3Title:             "3. Limitazione di Responsabilità",
    terms3Text:              "I calcoli forniti sono puramente indicativi e basati su modelli matematici standardizzati. Digital Reality e Nuova Bravol Srl non sono responsabili per danni diretti o indiretti derivanti dall'uso dei risultati, incluse miscele errate, danni a macchinari o perdite economiche. I risultati non sostituiscono analisi di laboratorio o consulenza specializzata.",
    terms4Title:             "4. Proprietà Intellettuale",
    terms4Text:              "L'app, il suo design, il logo, il codice sorgente e tutti i contenuti sono proprietà esclusiva di Digital Reality e Nuova Bravol Srl. È vietata la riproduzione, distribuzione o reverse engineering non autorizzata.",
    terms5Title:             "5. Modifiche",
    terms5Text:              "I presenti termini possono essere aggiornati periodicamente. L'uso continuato dell'app dopo modifiche costituisce accettazione dei nuovi termini.",
    terms6Title:             "6. Legge Applicabile",
    terms6Text:              "I presenti termini sono regolati dalla legge italiana e dal diritto dell'Unione Europea. Foro competente: Tribunale di Milano, Italia.",
    legalContactText:        "Per info rivolgersi a Digital Reality o",

    /* Info screen — footer card */
    footerAppName:           "OilBlend",
    versionLabel:            "Versione 1.0.0",
    footerTagline:           "ASTM D341 · Walther",
    designedBy:              "Designed by",

    /* Bottom navigation tabs */
    tabCalc:                 "Calcolo",
    tabISO:                  "ISO VG",
    tabInfo:                 "Info"
  },


  /* ─────────────────────────────────────────────
     ENGLISH
  ───────────────────────────────────────────── */
  en: {

    /* Page */
    pageTitle:               "OilBlend — Viscosity Calculator",

    /* Splash */
    splashLogo:              "OilBlend",
    splashSubtitle1:         "The technical viscosity calculator",
    splashSubtitle2:         "for industrial oils",

    /* Calc screen — headings */
    calcTitle:               "Viscosity Blending Calculator",
    calcSubtitle:            "Enter the kinematic viscosity values",

    /* Calc screen — temperature warning */
    tempWarningPre:          "All values must be referenced at",
    tempWarningPost:         "(ASTM D341 standard)",

    /* Calc screen — input labels */
    oil1Label:               "Oil 1 Viscosity (mm²/s)",
    oil2Label:               "Oil 2 Viscosity (mm²/s)",
    targetLabel:             "Target Viscosity (mm²/s)",
    litersLabel:             "Total quantity (litres) — optional",

    /* Calc screen — placeholders */
    oil1Placeholder:         "e.g. 220",
    oil2Placeholder:         "e.g. 68",
    targetPlaceholder:       "e.g. 150",
    litersPlaceholder:       "optional",

    /* Calc screen — buttons */
    calcBtn:                 "CALCULATE",
    resetBtn:                "Reset",

    /* Calc screen — dynamic error & notice strings */
    errorEmpty:              "Please enter all three viscosity values.",
    errorMinVisc:            "Viscosity must be > 2 mm²/s",
    errorTargetRange:        "Target out of range: must be between the two oils",
    swappedNotice:           "Values were swapped: Oil 1 is the more viscous one.",

    /* Calc screen — result card */
    resultLabel:             "Blend Result",
    oil1ResultLabel:         "Oil 1",
    oil1MoreViscous:         "(more viscous)",
    oil2ResultLabel:         "Oil 2",
    isoMatchPrefix:          "✓ Target = ISO ",

    /* ISO VG screen */
    isoTitle:                "ISO VG Table",
    isoSubtitle:             "Kinematic viscosity at 40°C — tap a row to use it",
    isoNotice:               "Tap a grade to insert its median value into the last selected field.",
    isoGreenWord:            "Green",
    isoGreenSuffix:          " = current result.",
    isoColGrade:             "Grade",
    isoColMid:               "Mid",
    isoColMin:               "Min",
    isoColMax:               "Max",

    /* Info screen — headings */
    infoTitle:               "Information",
    infoSubtitle:            "Calculation method and legal documents",

    /* Info screen — warning box */
    infoWarningTitle:        "⚠️ Warning",
    infoWarningPre:          "Viscosities must be at the",
    infoWarningBold:         "same temperature (40°C)",
    infoWarningMid:          ". Valid only for values >",

    /* Info screen — method section */
    infoMethodTitle:         "ASTM D341 Method (Walther)",
    infoMethodText:          "International standard for estimating the viscosity of lubricating oil blends, based on the double-logarithmic relationship between viscosity and composition.",

    /* Info screen — formula section */
    infoFormulaTitle:        "Formula",
    infoFormulaComment1:     "// Walther",
    infoFormulaComment2:     "// % Oil 1",
    infoFormulaLine:         "Oil1 = x×100%  ·  Oil2 = (1−x)×100%",

    /* Info screen — limits section */
    infoLimitsTitle:         "Limits",
    infoLimitsText:          "Works for mineral and synthetic oils with ν > 2 mm²/s. Not applicable to emulsions or oils with polymer additives. Avoid excessive viscosity differences.",

    /* Info screen — legal documents section header */
    infoLegalTitle:          "Legal Documents",

    /* Policy accordion buttons */
    privacyBtn:              "📋 Privacy Policy",
    cookieBtn:               "🍪 Cookie Policy",
    termsBtn:                "📜 Terms of Service",

    /* ── Privacy Policy ── */
    privacyDocTitle:         "Privacy Policy — OilBlend",
    privacyLastUpdatedLabel: "Last updated:",
    privacyLastUpdatedDate:  "March 2026",
    privacy1Title:           "1. Data Controller",
    privacy1Text:            "Digital Reality, in collaboration with Nuova Bravol Srl.",
    privacy2Title:           "2. Data Collected",
    privacy2Text:            "The app does not collect personal data. Only anonymous technical data (device type, screen size) is collected for internal statistical purposes, without the possibility of identifying the user.",
    privacy3Title:           "3. Purpose of Processing",
    privacy3Text:            "Anonymous technical data is used exclusively to improve the compatibility and user experience of the application.",
    privacy4Title:           "4. Legal Basis",
    privacy4Text:            "Processing is based on the legitimate interest of the controller (art. 6.1.f GDPR) for technical service optimisation purposes.",
    privacy5Title:           "5. Data Retention",
    privacy5Text:            "No personal data is retained. Anonymous technical data is processed in aggregate form and is not associated with individual users.",
    privacy6Title:           "6. Data Sharing",
    privacy6Text:            "No data is shared with third parties for marketing or profiling purposes.",
    privacy7Title:           "7. User Rights",
    privacy7Text:            "Since no identifiable personal data is processed, GDPR rights do not apply. For information contact Digital Reality or",
    privacy8Title:           "8. Security",
    privacy8Text:            "The app runs locally, without transmitting sensitive data to external servers. All processing takes place on the user's device.",

    /* ── Cookie Policy ── */
    cookieDocTitle:          "Cookie Policy — OilBlend",
    cookie1Title:            "1. What are cookies",
    cookie1Text:             "Cookies are small text files stored on the device. OilBlend uses equivalent technologies (localStorage) exclusively for the local operation of the app.",
    cookie2Title:            "2. Technical Cookies (necessary)",
    cookie2Text:             "OilBlend uses localStorage exclusively to store temporary app preferences (last active field, calculation results). This data remains on the device and is not transmitted.",
    cookie3Title:            "3. Profiling Cookies",
    cookie3Text:             "OilBlend does NOT use profiling cookies, advertising cookies or third-party trackers.",
    cookie4Title:            "4. Analytical Cookies",
    cookie4Text:             "No third-party analytics services such as Google Analytics are used.",
    cookie5Title:            "5. Management",
    cookie5Text:             "The user can delete local data at any time through browser or device settings.",

    /* ── Terms of Service ── */
    termsDocTitle:           "Terms of Service — OilBlend",
    terms1Title:             "1. Service Description",
    terms1Text:              "OilBlend is a technical calculation application that allows estimating the blending proportions of lubricating oils to achieve a target viscosity, according to the ASTM D341 (Walther) method.",
    terms2Title:             "2. Permitted Use",
    terms2Text:              "The app is intended for professionals in the lubricants and industrial oils sector. Use is permitted exclusively for lawful professional and technical purposes.",
    terms3Title:             "3. Limitation of Liability",
    terms3Text:              "The calculations provided are purely indicative and based on standardised mathematical models. Digital Reality and Nuova Bravol Srl are not responsible for direct or indirect damages arising from the use of the results, including incorrect blends, machinery damage or economic losses. Results do not replace laboratory analysis or specialised advice.",
    terms4Title:             "4. Intellectual Property",
    terms4Text:              "The app, its design, logo, source code and all content are the exclusive property of Digital Reality and Nuova Bravol Srl. Unauthorised reproduction, distribution or reverse engineering is prohibited.",
    terms5Title:             "5. Modifications",
    terms5Text:              "These terms may be updated periodically. Continued use of the app after changes constitutes acceptance of the new terms.",
    terms6Title:             "6. Applicable Law",
    terms6Text:              "These terms are governed by Italian law and European Union law. Competent court: Court of Milan, Italy.",
    legalContactText:        "For information contact Digital Reality or",

    /* Info screen — footer card */
    footerAppName:           "OilBlend",
    versionLabel:            "Version 1.0.0",
    footerTagline:           "ASTM D341 · Walther",
    designedBy:              "Designed by",

    /* Bottom navigation tabs */
    tabCalc:                 "Calc",
    tabISO:                  "ISO VG",
    tabInfo:                 "Info"
  }

};
