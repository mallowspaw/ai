## Prompt 

Ich arbeite im "Center of Excellence für KI" (CoE) in einem großen Unternehmen. Wir haben bereits einen "AI Ideation Process" definiert (von der Idee über den PoC bis zur ersten Inbetriebnahme).

Mein Ziel: Ich muss diesen Prozess zu einem vollständigen, unternehmensweiten E2E AI Lifecycle Process weiterentwickeln. Der neue Prozess muss zwingend den Betrieb, das Monitoring, die Skalierung (Wiederverwendbarkeit von Modellen/Agenten), hartes Business Value Tracking (ROI) und das Decommissioning (Abschaltung) umfassen.
Im Anhang findest du unsere aktuellen Unterlagen zum Ideation-Prozess.

Phase 1: Dokumenten-Analyse & Interview Analysiere zuerst die hochgeladenen Dokumente, um unseren Status Quo zu verstehen. Bevor du den neuen E2E-Prozess entwirfst, stelle mir 3 bis maximal 4 präzise Rückfragen, um unsere Governance-Struktur zu verstehen. Finde heraus:

1. Wie unser Tech-Stack für den Betrieb aussieht (haben wir MLOps-Plattformen im Einsatz?).
2. Wer aktuell die Cloud- bzw. Inferenz-Kosten für KI-Lösungen im Betrieb trägt (Business Unit oder zentrale IT?). Nutze das AskUserQuestion Tool. 

Phase 2: Konzept & Architektur des E2E AI Lifecycle Processes Sobald du meine Antworten hast, entwirfst du das Gesamtkonzept für den neuen Lifecycle-Prozess. Halte dich zwingend an diese Regeln:
1. Lead with the outcome: Definiere im ersten Absatz glasklar den Unterschied zwischen unserem alten "Ideation-Fokus" und dem neuen "Lifecycle-Fokus" (Stichwort: Von der reinen Machbarkeit hin zur Wirtschaftlichkeit und Skalierbarkeit).
2. The anti-overthinking rule: Gliedere den Prozess in klare Phasen (z.B. Phase 1: Ideation & PoC [nur kurze Zusammenfassung des bestehenden], Phase 2: Deployment & Integration, Phase 3: Operations & Monitoring, Phase 4: Value Tracking & Scaling, Phase 5: Decommissioning). Liste pro Phase die exakten Gatekeeper (Wer gibt was frei?), die notwendigen Artefakte (z.B. ROI-Dashboard, Risiko-Assessment) und die Metriken auf. 
3. The anti-bullshit line: Kein generisches ITIL- oder Change-Management-Bla-Bla. Wenn es um "Adoption" geht, will ich harte KPIs sehen (z.B. "Weekly Active Users vs. Lizenzkosten/Compute-Kosten"). Beim "Value Tracking" brauche ich konkrete Formeln für KI (z.B. "Eingesparte Arbeitszeit x Stundensatz minus Inferenzkosten = Real ROI").
4. Adversarial pass: Attackiere dein eigenes Konzept aus der Sicht eines knallharten CFOs. Die größte Gefahr bei KI sind "Zombie-Projekte", die im Betrieb Cloud-Kosten verursachen, aber nicht mehr genutzt werden. Baue einen rücksichtslosen "Kill-Switch" (Decommissioning-Prozess) in den Lifecycle ein. Wann und wie genau wird ein KI-Produkt abgeschaltet, wenn der ROI nicht mehr stimmt? KI-Adoption ist eine zeitliche Entwicklung (Cultural Change Prozess), ab welchem Zeitpunkt zieht man den Stecker, wenn die Nutzungszahlen nicht im Verhältnis zu den Kosten stehen? Phase 3: Der interaktive Deep-Dive Schließe deine Konzeptvorstellung mit der Bestätigung ab, dass wir als Nächstes iterativ Block für Block (Monitoring, Scaling, Value Tracking, Adoption) in die Ausarbeitung der Details und Templates gehen werden. Gib mir einen Vorschlag, mit welchem Block wir starten sollten.


## Interaktion

Phase 1: Ideation & PoC (bestehender Prozess, erweitert)
Bleibt wie dokumentiert (Ideenentwicklung → Bewertung/Machbarkeit inkl. Datenschutz und KI & Information Governance). Drei verpflichtende Ergänzungen im Business Case Template:

Baseline-Messung statt Schätzung: Vorgangsdauer und -häufigkeit werden vor PoC-Start real gemessen (Stichprobe genügt), nicht geschätzt. Ohne Baseline kein späterer Einsparungsnachweis.
Exit-Kriterien ab Tag 1: Der Einreicher definiert selbst, unter welchen Bedingungen die Lösung abgeschaltet wird (Ziel-Adoption, Ziel-ROI, Zeitpunkt). Das nimmt dem späteren Kill die Emotionalität – man exekutiert nur, was der Fachbereich selbst unterschrieben hat.
Reuse-Check gegen Registry: Prüfung gegen die Modell-/Agenten-Registry (siehe Phase 4), bevor Neuentwicklung genehmigt wird.

Gatekeeper: AI Portfolio Board (Priorisierung), KI & Information Governance (PoC-Freigabe). Artefakte: Erweitertes Business Case Template mit Baseline + Exit-Kriterien. Metrik: Durchlaufzeit Idee→PoC-Entscheid.
Phase 2: Deployment & Integration
Technische Umsetzung plus die bestehenden Assessments (RIA, IT-Ausschuss, VVV, Application Inventory/Navigator). Neu hinzu kommen die Betriebsfähigkeits-Gates:

Telemetrie-Pflicht vor Go-Live: Wegen eures heterogenen Stacks (Azure/SaaS/Eigenbetrieb) gibt es keinen Plattform-Zwang, aber einen Minimal-Telemetrie-Standard, den jede Lösung erfüllen muss, egal wo sie läuft: Nutzungsereignisse pro User (anonymisiert/pseudonymisiert, mit IT-Ausschuss abgestimmt), Anzahl Vorgänge, Inferenz-/Lizenzkosten pro Monat, Fehlerrate. Eine Lösung, die ihre Nutzung nicht messen kann, geht nicht live – Punkt. Das ist das wichtigste einzelne Gate im ganzen Prozess.
TCO-Kalkulation: Vollkosten p.a. (Inferenz + Lizenzen + Run-Team-Anteil + Wartung), vom Fachbereich gegengezeichnet, da er sie per Verrechnung trägt.
Betriebsübergabe-Dokument: Formalisiert eure bereits gelebte Rollenteilung – AI Solution Owner verantwortet Wert und Adoption, Product Owner/Run-Team verantwortet Verfügbarkeit und Kosten-Effizienz. Beide Namen stehen im Dokument, beide berichten quartalsweise.

Gatekeeper: IT-Ausschuss (Betriebsrat), Application Navigator (Security/Architektur), CoE AI (Telemetrie-Abnahme). Artefakte: Telemetrie-Nachweis, TCO-Sheet, Betriebsübergabe-Dokument, Value Tracking Plan. Metriken: Time-to-Production, Anteil Go-Lives mit vollständiger Telemetrie (Ziel: 100 %).
Phase 3: Operations & Monitoring
Zwei getrennte Monitoring-Ebenen mit getrennten Verantwortlichen:

Technisch (Product Owner/Run-Team): Verfügbarkeit, Latenz, Fehlerrate, bei ML-Modellen Drift-Indikatoren (Verteilungsshift der Eingaben, Qualitätsstichproben der Ausgaben), Kosten pro Vorgang (Inferenzkosten ÷ Anzahl Vorgänge – die zentrale Effizienzmetrik, weil sie Kostenexplosionen bei GenAI sofort sichtbar macht).
Fachlich (AI Solution Owner): Weekly Active Users, Vorgänge pro User, Annahmequote der KI-Ergebnisse (wie oft wird der KI-Output tatsächlich verwendet vs. verworfen/manuell überschrieben – der ehrlichste Qualitätsindikator).

Monatlicher automatisierter Kostenreport an den zahlenden Fachbereich: verbrauchte Kosten, aktive Nutzer, Kosten pro aktivem Nutzer. Da die BU zahlt, erzeugt allein diese Transparenz Handlungsdruck – das ist euer struktureller Vorteil gegenüber Unternehmen mit zentralem KI-Budget.
Gatekeeper: keiner (laufender Betrieb), aber definierte Eskalationsschwellen (z. B. Kosten pro Vorgang > 150 % des TCO-Plans für 2 Monate → Pflicht-Review). Artefakte: Live-Dashboard pro Lösung, monatlicher Kostenreport. Metriken: Verfügbarkeit, Kosten/Vorgang, WAU, Annahmequote.
Phase 4: Value Tracking & Scaling
Das Herzstück. Quartalsweise Value Review jeder produktiven Lösung durch das AI Portfolio Board, auf Basis eines standardisierten One-Pagers. Die Formeln – keine weichen "Effizienzgewinne":
Real ROI pro Quartal:

Realisierter Wert = (Vorgänge laut Telemetrie × gemessene Zeitersparnis pro Vorgang × Vollkostensatz der Nutzergruppe) + vermiedene Dienstleister-/Lizenzkosten
Real ROI = Realisierter Wert − (Inferenzkosten + Lizenzkosten + anteilige Run-Team-Kosten + Wartung)
ROI-Quote = Real ROI ÷ Vollkosten (Ziel: > 1,0 spätestens ab Quartal 4 nach Go-Live)

Wichtig: Die Zeitersparnis pro Vorgang wird nicht dauerhaft aus dem Business Case übernommen, sondern einmal jährlich per Stichprobenmessung revalidiert – sonst rechnet sich jede Lösung mit ihrer eigenen Ursprungsschätzung schön.
Adoption (harte KPIs, keine Umfragen):

Adoption-Quote = WAU ÷ berechtigte Nutzer (Zielpfad siehe Phase 5)
Cost per Active User = monatliche Vollkosten ÷ MAU – vergleichbar über alle Lösungen hinweg, macht Portfolio-Ranking möglich
Nutzungstiefe = Vorgänge pro aktivem User und Woche (unterscheidet echte Nutzung von Login-Tourismus)

Scaling: Jede Lösung mit ROI-Quote > 1,5 und Übertragbarkeits-Vermerk im Business Case wird im Value Review aktiv auf Rollout in weitere Bereiche geprüft – das AI Portfolio Board ist wegen seiner bereichsübergreifenden Besetzung genau dafür das richtige Organ. Technische Grundlage ist eine Modell-/Agenten-Registry (Erweiterung eures AI-Use-Case-Inventars): wiederverwendbare Komponenten (Prompts, Agenten, Feinabstimmungen, Konnektoren) mit Owner, Reifegrad und Nachnutzungsbedingungen. Skalierungsmetrik: Reuse-Quote = Anteil neuer Cases, die mindestens eine Registry-Komponente nachnutzen.
Gatekeeper: AI Portfolio Board (Ampelvergabe, Scaling-Entscheid). Artefakte: Value One-Pager pro Lösung, ROI-Dashboard (Portfolio-Sicht), Registry. Metriken: ROI-Quote, Adoption-Quote, Cost per Active User, Reuse-Quote.
Phase 5: Decommissioning – der Kill-Switch
Deine CFO-Frage zuerst beantwortet: Wann zieht man den Stecker, wenn Adoption ein kultureller Prozess ist? Antwort: Man gibt der Kultur eine definierte, endliche Rampe – und danach entscheiden nur noch Zahlen.
Die Adoption-Rampe (Zielpfad ab Go-Live):
ZeitraumErwartungKonsequenz bei VerfehlungQuartal 1–2Schonfrist: keine ROI-Pflicht, aber Adoption-Quote ≥ 30 % des Zielwerts und steigender TrendGelb: AI Solution Owner legt Adoption-Maßnahmenplan vor (Champions, Schulung, Prozessintegration)Quartal 3Adoption ≥ 60 % des Zielwerts, ROI-Quote ≥ 0,5Gelb → Pflicht-Review mit CoE AIAb Quartal 4ROI-Quote ≥ 1,0Rot2 rote Quartale in Folge—Automatischer Kill-Antrag ans AI Portfolio Board
Der Kill-Prozess selbst:

Trigger ist automatisch, nicht politisch: Zwei rote Quartale erzeugen den Antrag maschinell aus dem ROI-Dashboard. Niemand muss den unangenehmen ersten Schritt gehen – das System tut es.
Eine einzige Gnadenrunde: Der Fachbereich kann genau einmal ein Quartal Verlängerung erwirken – aber nur mit schriftlichem Remediation-Plan und der expliziten Bestätigung, dass er die Vollkosten weiterträgt (tut er per Verrechnung ohnehin, aber die Unterschrift des Bereichsleiters macht es sichtbar).
Kill-Entscheid: AI Portfolio Board beschließt mit einfacher Mehrheit; der betroffene Bereichsleiter hat Rederecht, aber kein Veto. Das ist das neue Mandat aus dem Vorstandsbeschluss.
Geordnete Abschaltung (max. 90 Tage): Nutzerkommunikation → Datenarchivierung/-löschung gemäß VVV und Datenschutzabstimmung → Austragung aus Application Inventory und RIA-Register → Abbau der Cloud-Ressourcen → Lessons-Learned-Eintrag in die Registry (verwertbare Komponenten werden vor Abschaltung extrahiert – auch ein totes Projekt kann Organe spenden).
Decommissioning-Nachweis: Formales Abschlussdokument, gegengezeichnet von Product Owner (Ressourcen abgebaut, Kosten auf null) und Datenschutz (Daten behandelt).

Gatekeeper: AI Portfolio Board (Kill-Entscheid). Artefakte: Kill-Antrag (auto-generiert), Remediation-Plan, Decommissioning-Nachweis. Metriken: Zombie-Quote (Anteil Lösungen mit ROI < 1 länger als 2 Quartale – Zielwert 0), eingesparte Betriebskosten p.a. durch Abschaltungen.

Adversarial Pass: Angriff aus CFO-Sicht
Angriff 1 – "Eure Einsparungen sind selbstberichtete Fantasie." Berechtigt: Die Formel steht und fällt mit der "Zeitersparnis pro Vorgang", die der Fachbereich selbst liefert. Gegenmaßnahme ist eingebaut (jährliche Stichproben-Revalidierung), aber ich verschärfe: Bei Lösungen mit Vollkosten > 100 k€ p.a. führt das CoE die Messung durch, nicht der Fachbereich. Zusätzlich zählt nur Zeitersparnis auf angenommene KI-Outputs (Annahmequote als Multiplikator) – verworfene Ergebnisse sparen nichts.
Angriff 2 – "Die BU zahlt doch selbst – warum sollte mich ein Zombie stören?" Klingt nach Selbstregulierung, ist es aber nicht: Bereichsleiter tragen Zombie-Kosten aus Prestige, Sunk-Cost-Denken oder schlichtem Nichtwissen jahrelang mit. Konzernweit summiert sich das. Deshalb ist der Kill-Trigger automatisch und der Kill-Entscheid liegt beim Portfolio Board, nicht bei der zahlenden BU. Die Verrechnung ist Transparenzinstrument, kein Ersatz für das Abschaltmandat.
Angriff 3 – "Heterogener Stack = eure Telemetrie ist Wunschdenken." Der härteste Punkt. Bei M365 Copilot bekommt ihr Nutzungsdaten aus dem Admin-Reporting, bei Eigenentwicklungen baut ihr sie ein – aber bei manchen SaaS-Tools gibt es schlicht keine brauchbare Vorgangs-Telemetrie. Konsequenz: Das Telemetrie-Gate in Phase 2 wird zum Beschaffungskriterium. Kein neuer KI-Service ohne auswertbare Nutzungs-API. Für Bestandslösungen: 12 Monate Nachrüstfrist, danach gilt "nicht messbar = ROI 0 = rot". Das klingt brutal, ist aber die einzige Regel, die das Messsystem vor Erosion schützt.
Angriff 4 – "Euer Messapparat kostet selbst Geld." Stimmt. Deshalb Staffelung: Lösungen unter ~20 k€ Vollkosten p.a. durchlaufen nur ein Light-Review (Kostenreport + Adoption-Quote, kein voller One-Pager). Der volle Apparat gilt für die teuren 20 % des Portfolios, die 80 % der Kosten verursachen.

Nächster Schritt: der iterative Deep-Dive
Bestätigt: Wir arbeiten die Blöcke Monitoring, Scaling, Value Tracking und Adoption nacheinander im Detail aus, jeweils mit Templates (Value One-Pager, Telemetrie-Standard, Registry-Struktur, Kill-Antrag etc.).
Mein Vorschlag für den Start: Value Tracking. Begründung: Es ist der Block, von dem alle anderen abhängen – der Kill-Switch braucht die ROI-Formel, die Adoption-Rampe braucht die Zielwerte, das Monitoring muss genau die Datenpunkte liefern, die die Formeln verlangen. Wenn wir zuerst definieren, was gemessen wird (inkl. Vollkostensätze, Baseline-Methodik, One-Pager-Template), ergibt sich das Monitoring-Design in Block 2 fast von selbst.
Sollen wir mit dem Value-Tracking-Block und dem One-Pager-Template beginnen?

## Value Tracking Block

Sehr gut. Hier ist der Value-Tracking-Block im Detail – erst die Messregeln (das ist der Teil, an dem solche Systeme in der Praxis sterben), dann die Formeln, dann das One-Pager-Template als Word-Dokument.

Block 1: Value Tracking im Detail
Die drei Messfundamente
Jede ROI-Zahl im Konzern basiert auf genau drei Größen. Werden sie sauber definiert, sind alle Formeln trivial – werden sie schwammig definiert, ist das ganze System Theater.
1. Baseline (t₀). Die Vorgangsdauer ohne KI wird vor PoC-Start real gemessen: mindestens 20 Vorgänge oder zwei Wochen Selbstaufschreibung durch die späteren Nutzer, Methode und Rohdaten werden im Business Case dokumentiert. Die Baseline wird eingefroren – sie ist der Vertragswert. Jährliche Revalidierung per Stichprobe; bei Lösungen mit Vollkosten über 100 k€ p.a. misst das CoE, nicht der Fachbereich.
2. Vollkostensatz. Kommt ausschließlich vom Konzern-Controlling als Standardsatz pro Funktionsgruppe (z. B. Sachbearbeitung, Fachexperte, Führungskraft) – Vollkosten inklusive Arbeitgeberanteile und Overhead, nicht Bruttogehalt, und niemals projektindividuell "geschätzt". Das nimmt jede Diskussion über Schönrechnerei aus den Reviews, weil der Satz für alle Lösungen identisch gepflegt wird.
3. Annahmequote. Der Anteil der KI-Outputs, die tatsächlich übernommen werden (nicht verworfen, nicht substanziell manuell überschrieben). Sie geht als Multiplikator in die Wertformel ein: Ein verworfener KI-Vorschlag spart null Zeit, egal wie schnell er generiert wurde. Messung per Telemetrie (Übernahme-Event) oder, wo technisch nicht möglich, per quartalsweiser Stichprobe.
Der Value Ledger: vier Wertkategorien, drei zählen
V1 – Produktivitätswert (der Regelfall):

V1 = Vorgänge lt. Telemetrie × (Baseline-Dauer − Ist-Dauer mit KI) × Vollkostensatz × Annahmequote

V2 – Vermeidungswert: eingesparte Dienstleister-, Lizenz- oder Fremdkosten. Härteregel: zählt nur mit Beleg – gekündigter Vertrag, reduziertes Bestellvolumen, abgelöstes Tool. Eine "wir hätten sonst extern vergeben müssen"-Behauptung ist kein Vermeidungswert.
V3 – Kapazitätswert (FTE): Die wichtigste CFO-Unterscheidung im ganzen System: Zeitersparnis ist erst dann eine FTE-Einsparung, wenn Kapazität nachweislich umgewidmet oder abgebaut wurde (Stellenplan-Änderung, dokumentierte Aufgabenverlagerung). Solange das nicht passiert ist, bleibt der Wert in V1 – als Produktivitätsgewinn, nicht als Personalkosteneinsparung. V1 und V3 dürfen sich nie überlappen (kein Double Counting: dieselbe gesparte Stunde steht entweder in V1 oder in V3).
V4 – Qualitäts- und Risikowert: höhere Arbeitsgüte, Governance-Konformität, weniger Fehler. Wird im One-Pager qualitativ dokumentiert, fließt aber nicht in die ROI-Quote ein – außer er ist hart quantifizierbar (z. B. vermiedene Fehlerkosten mit historischer Fehlerkostenbasis). Das ist die Anti-Bullshit-Linie: Weiche Werte dürfen eine gelbe Ampel erklären, aber niemals eine rote verhindern.
Die Kostenseite (TCO pro Quartal)

TCO = Inferenz-/Compute-Kosten + Lizenzkosten + anteilige Run-Team-Kosten (Stunden × Satz) + Wartung/Weiterentwicklung + Plattform-/Monitoring-Umlage

Verursachungsgerecht der Lösung zugeordnet – bei euch über die bestehende BU-Verrechnung ohnehin angelegt. Wichtig: Weiterentwicklungskosten gehören in den TCO des Quartals, in dem sie anfallen. Wer sein Produkt ständig umbaut, muss das gegen den Wert rechtfertigen.
Die konsolidierten Formeln

Realisierter Wert = V1 + V2 + V3 (+ V4 nur falls hart belegt)
Real ROI (€) = Realisierter Wert − TCO
ROI-Quote = Realisierter Wert ÷ TCO  → Ampel: ≥ 1,0 grün · 0,5–1,0 gelb · < 0,5 rot (ab Q4 nach Go-Live; Rampe davor wie im Gesamtkonzept)
Cost per Active User = TCO ÷ Ø MAU  → portfolioweiter Vergleichswert
Kosten pro Vorgang = Inferenz- + Lizenzkosten ÷ Vorgänge  → Effizienz-Frühindikator

Datenquellen im heterogenen Stack
DatenpunktAzure/Cloud-EigenbauM365 Copilot / SaaSOn-Prem-EigenbetriebVorgänge, WAU/MAUeigene Telemetrie (Pflicht-Gate)Admin-/Usage-Reports, ggf. Graph APIeigene Telemetrie (Pflicht-Gate)AnnahmequoteÜbernahme-Event in Appmeist nicht verfügbar → Quartals-StichprobeÜbernahme-Event in AppInferenzkostenCost Management, Tagging pro LösungLizenzkosten × zugewiesene SeatsInfrastruktur-Umlage lt. IT-KostenmodellRun-Team-AufwandZeiterfassung Product Owner/Run-Teamentfällt weitgehendZeiterfassung
Wo eine Quelle strukturell fehlt (typisch: Annahmequote bei SaaS), wird der Ersatzmechanismus – die Stichprobe – im Value Tracking Plan der Lösung festgeschrieben, nicht ad hoc improvisiert.
Der Review-Rhythmus
Quartalsweise wird der One-Pager automatisch vorbefüllt aus Dashboard-Daten (Nutzung, Kosten, Formeln). Der AI Solution Owner ergänzt nur noch V2/V3-Belege, V4-Einschätzung und Kommentar; der Product Owner bestätigt die Kostenseite. Das Portfolio Board sieht pro Lösung eine Seite, vergibt die Ampel und entscheidet über Scaling- oder Kill-Anträge. Zielaufwand pro Lösung und Quartal: unter zwei Stunden manuelle Arbeit – sonst frisst der Messapparat den Wert, den er messen soll.

Jetzt erstelle ich das One-Pager-Template als Word-Dokument:Verified rendering quality and authorized presentationVerified rendering quality and authorized presentationDas Template ist fertig und geprüft – zwei Seiten, sofort einsetzbar:Presented filePresented fileDas Template setzt die Value-Tracking-Regeln direkt um: Seite 1 enthält Kopfdaten, Nutzung/Adoption, Value Ledger (V1–V4 mit den Härteregeln als Ausfüllhinweis in jeder Zeile) und TCO; Seite 2 die ROI-Kennzahlen mit fest hinterlegten Formeln und Ampelschwellen, den Exit-Kriterien-Status inklusive Kill-Trigger-Hinweisbox und den Entscheidungsblock fürs Portfolio Board. Die Ausfüllregeln unten (eingefrorene Baseline, Controlling-Sätze, Light-Review unter 20 k€) verhindern die typischen Schönrechen-Schlupflöcher.
Damit ist der Value-Tracking-Block konzeptionell und als Artefakt abgeschlossen. Als nächsten Block schlage ich Monitoring vor – konkret den Minimal-Telemetrie-Standard, denn er ist die Datenquelle für alles, was der One-Pager automatisch vorbefüllen soll: Wir müssten dort die Pflicht-Events definieren (Nutzungs-Event, Vorgangs-Event, Übernahme-Event), das Kostentagging-Schema für euren heterogenen Stack und die Eskalationsschwellen für den laufenden Betrieb. Sollen wir damit weitermachen?

## Monitoring Block

Weiter geht's mit Block 2: Monitoring. Erst das Konzept, dann der Minimal-Telemetrie-Standard als normatives Dokument im gleichen Stil wie der One-Pager.

Block 2: Operations & Monitoring im Detail
Designprinzip: Der Standard definiert was, nicht womit
Bei eurem heterogenen Stack (Cloud-Eigenbau, M365/SaaS, On-Prem) wäre jede Plattform-Vorgabe zum Scheitern verurteilt. Der Standard definiert deshalb ein Event-Schema – fünf Pflicht-Events mit festen Feldern – und lässt den Implementierungsweg offen. Egal ob die Events aus Application Insights, einem M365-Admin-Report oder einem On-Prem-Log kommen: Sie landen in einem zentralen Telemetrie-Store, aus dem das ROI-Dashboard die One-Pager vorbefüllt. Genau ein Datenmodell, drei Zulieferwege.
Die fünf Pflicht-Events
Jedes Event trägt dieselben Stammfelder: solution_id (= Use-Case-ID aus dem Inventar – das ist der Schlüssel, der Telemetrie, Kosten und Business Case verbindet), timestamp, user_hash (pseudonymisiert), environment, app_version.
EventAusgelöst wenn…Liefert die KennzahlE1 usage_sessionNutzer startet aktive SitzungWAU / MAU / Adoption-QuoteE2 task_completedKI-unterstützter Vorgang abgeschlossen (task_type, duration_ms)Vorgänge, Nutzungstiefe, Ist-Dauer für V1E3 output_generatedKI erzeugt Ergebnis (output_id, model_version, units/tokens)Kosten pro Vorgang, Drift-BezugE4 output_decisionNutzer übernimmt / ändert / verwirft (accepted / modified / rejected)AnnahmequoteE5 errorTechnischer oder fachlicher Fehler (error_class)Fehlerrate, SLA
Wo E4 technisch nicht abbildbar ist (typisch bei SaaS ohne API), tritt die im Value Tracking Plan festgeschriebene Quartals-Stichprobe (n ≥ 30) an seine Stelle – als dokumentierte Ausnahme, nicht als stillschweigender Verzicht.
Datenschutz als Bauvorschrift, nicht als Nachgedanke
Das ist der Punkt, an dem der IT-Ausschuss (Betriebsrat) das ganze System kippen kann, wenn man es falsch aufsetzt. Deshalb gehören diese Regeln in den Standard selbst: user_hash ist salted und für den Fachbereich nicht rückrechenbar; jede Auswertung erfolgt nur aggregiert mit k-Anonymität ≥ 5 (keine Kennzahl wird angezeigt, wenn weniger als fünf Nutzer dahinterstehen); Zweckbindung ausschließlich auf Value Review und Betrieb – individuelle Leistungs- oder Verhaltenskontrolle ist ausgeschlossen und wird genau so in der IT-Ausschuss-Vereinbarung fixiert; Rohevents werden nach 24 Monaten gelöscht, aggregierte Quartalswerte bleiben. Mein Rat: Verhandelt mit dem Betriebsrat eine Rahmenvereinbarung über das Event-Schema – dann muss nicht jede einzelne KI-Lösung ihre Telemetrie neu verhandeln, sondern nur noch Abweichungen vom Standard.
Kosten-Tagging: drei Zulieferwege, ein Schlüssel
Auch hier verbindet die solution_id alles. Cloud-Ressourcen tragen vier Pflicht-Tags (usecase-id, costcenter, environment, component), durchgesetzt per Deployment-Policy – ungetaggte Ressourcen werden gar nicht erst provisioniert, Bestandsressourcen erscheinen in einem monatlichen Untagged-Report an das CoE. Bei SaaS läuft die Zuordnung über Lizenzgruppen je Lösung (Seats × Preis), bei On-Prem über den Umlageschlüssel des IT-Kostenmodells. Damit ist die TCO-Seite des One-Pagers vollständig automatisierbar.
Zwei Monitoring-Ebenen, sechs Eskalationsschwellen
Das technische Monitoring (Product Owner/Run-Team: Verfügbarkeit, Latenz, Fehlerrate, Drift, Kosten pro Vorgang) und das fachliche Monitoring (AI Solution Owner: WAU, Nutzungstiefe, Annahmequote) laufen kontinuierlich – aber niemand soll Dashboards anstarren. Deshalb definierte Schwellen, die automatisch Aktionen auslösen:
#SchwelleAuslöserAktionVerantwortlichS1Inferenzkosten-Tagesspike > 300 % des ØsofortSofort-Alert, Ursachenanalyse binnen 48 h (Kostenexplosion, Fehlkonfiguration, Missbrauch)Run-TeamS2Kosten pro Vorgang > 150 % Plan2 Monate in FolgePflicht-Review mit CoE (Modellwahl, Caching, Prompt-Optimierung)Product OwnerS3WAU-Rückgang > 30 %2 Monate in FolgeAdoption-Review, Maßnahmenplan vor nächstem Value ReviewAI Solution OwnerS4Annahmequote < 50 %1 QuartalQualitäts-/Drift-Analyse mit Output-Stichprobebeide gemeinsamS5Verfügbarkeit unter SLA2 Monate in FolgeMaßnahmenplan Run-Team, Bericht ans Portfolio BoardProduct OwnerS6Telemetrie-Ausfall > 4 Wochensofort ab Woche 5Lösung gilt als "nicht messbar" → Quartal wird rot gewertetProduct Owner
S6 ist der Selbstschutz des Systems: Ohne diese Regel ist der bequemste Weg zu einer grünen Ampel, die Messung "kaputtgehen" zu lassen.
Das Telemetrie-Gate vor Go-Live
Die Abnahme durch das CoE (Phase 2) prüft eine Checkliste: alle fünf Events fließen nachweislich in den zentralen Store, das Dashboard zeigt Testdaten korrekt an, Kosten-Tagging bzw. Lizenzgruppe aktiv, Datenschutz-Konformität der Telemetrie bestätigt (Rahmenvereinbarung oder Einzelfreigabe), Ersatzmechanismen für nicht abbildbare Events im Value Tracking Plan dokumentiert. Ohne Abnahme kein Go-Live.

Jetzt das Ganze als normatives Standard-Dokument:Optimized document layout by reconsidering page break placementOptimized document layout by reconsidering page break placementDamit ist der Monitoring-Block abgeschlossen. Der Standard ist bewusst so gebaut, dass er drei Governance-Funktionen gleichzeitig erfüllt: Er ist das Go-Live-Gate (Abschnitt 6, Abnahme durch euch als CoE), die Datenlieferung für den Value One-Pager (Events E1–E4 mappen exakt auf die Felder in Abschnitt 1 und 4 des One-Pagers – nichts wird gemessen, was nicht in eine Formel fließt) und die Verhandlungsgrundlage für den Betriebsrat (Abschnitt 2 als Rahmenvereinbarung, damit ihr die Telemetrie-Diskussion einmal führt statt pro Projekt).
Zwei Punkte solltet ihr intern früh klären, weil sie außerhalb meiner Reichweite liegen: Wer im Data-&-AI-Bereich den zentralen Telemetrie-Store technisch verantwortet (ohne benannten Owner bleibt das Konzept Papier), und ob eure Deployment-Pipelines eine Tag-Policy technisch durchsetzen können – falls nicht, ist der monatliche Untagged-Report die Rückfalllinie.
Als nächsten Block schlage ich Scaling vor: die Struktur der Modell-/Agenten-Registry (welche Komponententypen, welche Metadaten, welcher Reifegrad-Stufen), der Reuse-Check in Phase 1 und der Scaling-Prüfpfad bei ROI-Quote ≥ 1,5 – inklusive der Frage, wie die Kosten- und Wertanteile bei bereichsübergreifend genutzten Komponenten verrechnet werden. Danach bliebe Adoption als letzter Block. Passt diese Reihenfolge?

## Scaling Block

Weiter mit Block 3: Scaling & Reuse. Erst das Konzept mit den Designentscheidungen, dann der Registry- & Scaling-Standard als Dokument im gewohnten Stil.

Block 3: Scaling & Reuse im Detail
Designprinzip: Skalierung ist Portfolio-Optimierung, keine Belohnung
Die zweite Nutzung einer bewährten Komponente liefert mehr Wert pro investiertem Euro als fast jede neue Idee – Entwicklungskosten sind bereits versenkt, Risiken bekannt, die Baseline-Logik existiert. Deshalb hat die Scaling-Prüfung erfolgreicher Lösungen im Portfolio Board Vorrang vor der Priorisierung neuer Ideen. Und deshalb braucht Reuse zwei Pflicht-Haken im Lifecycle: den Reuse-Check in Phase 1 (nichts wird neu gebaut, was es schon gibt) und die Scaling-Prüfung in Phase 4 (nichts Erfolgreiches bleibt in seinem Silo).
Die Registry: sechs Komponententypen, vier Reifegrade
Die Registry erweitert euer bestehendes AI-Use-Case-Inventar um eine Komponentenebene – der Use Case bleibt die Governance-Einheit, die Komponente wird die Wiederverwendungs-Einheit:
TypInhaltTypisches Reuse-SzenarioK1 Prompt-AssetSystem-Prompts, Prompt-Templates, Few-Shot-Setsgleicher Aufgabentyp in anderem BereichK2 Agent / WorkflowOrchestrierung, Tool-Definitionen, Guardrailsgleicher Prozess, andere DatenK3 Modell / Feinabstimmungfeingetunte Modelle, Embedding-ModelleFachdomänen-Sprache konzernweitK4 Konnektor / IntegrationSystemanbindungen (SAP, DMS, M365 …)jede Lösung am selben QuellsystemK5 DatenproduktRAG-Indizes, kuratierte WissensbasenWissensdomäne mit mehreren AnwendungenK6 Evaluations-SetGolden Sets, Testdaten, BenchmarksQualitätssicherung & Drift-Analyse (S4)
Jede Komponente trägt Pflicht-Metadaten (Owner, Herkunfts-solution_id, technische Abhängigkeiten, Nachnutzungsbedingungen inkl. Datenschutz-Scope, Nachnutzer-Liste) und einen Reifegrad:

R1 Experimentell (aus PoC, keine Garantien) → R2 Produktiv-Einzeln (läuft in genau einer Lösung) → R3 Wiederverwendbar (versioniert, dokumentiert, Eval-Set vorhanden, Owner leistet Support) → R4 Plattform-Service (zentral betrieben, SLA, mehrere Nachnutzer)

Governance-Regel: Nur R3+ darf ohne Einzelabstimmung nachgenutzt werden. Und die wichtigste Klarstellung für eure Assessment-Landschaft: Governance-Freigaben vererben sich nicht automatisch – Datenschutz, RIA und Betriebsratszustimmung gelten für den Use Case, nicht für die Komponente. Der Anreiz liegt woanders: Wer eine R3-Komponente nachnutzt, durchläuft ein Delta-Assessment (nur die Unterschiede: neue Datenarten, neuer Nutzerkreis, neue Systeme) statt der Vollprüfung. Das verkürzt Phase 1–2 typischerweise um Wochen – das ist der Grund, warum Fachbereiche freiwillig in die Registry schauen werden.
Der Reuse-Check in Phase 1 (Gate)
Vor jeder Genehmigung einer Neuentwicklung prüft das CoE den Case gegen die Registry. Das Ergebnis wird im Business Case dokumentiert: entweder "Nachnutzung von Komponente X" oder eine begründete Ablehnung – "passt nicht zu uns" ohne technische Begründung akzeptiert das Board nicht. Not-invented-here wird damit begründungspflichtig. Metrik: Reuse-Quote = Anteil neuer Cases mit mindestens einer nachgenutzten R3+-Komponente (realistischer Zielpfad: Jahr 1 ≥ 20 %, ab Jahr 3 ≥ 50 %).
Der Scaling-Prüfpfad in Phase 4
Trigger: ROI-Quote ≥ 1,5 über zwei aufeinanderfolgende Quartale (ein Ausreißerquartal genügt nicht) plus Übertragbarkeitsvermerk aus dem Business Case. Dann läuft ein fester Pfad:

Scaling-Assessment (CoE, maximal 4 Wochen): Prozessähnlichkeit und Vorgangsvolumen in den Zielbereichen (= Wertpotenzial nach derselben V1-Formel), technische Übertragbarkeit (Mandantenfähigkeit, Kapazität), Governance-Delta. Explizit enthalten: ein ehrlicher Build-vs.-Reuse-Kostenvergleich – wenn Mandantenfähigkeit nachzurüsten teurer ist als ein Neuaufbau auf denselben Komponenten, muss das Assessment das sagen. Reuse ist Default, nicht Dogma.
Scaling Business Case (Light): nur Zielbereichs-Baseline (Stichprobenmessung dort – die Zeitersparnis des Ursprungsbereichs darf nicht einfach übertragen werden, Prozesse unterscheiden sich) plus Rollout-Kosten. Keine erneute Vollprüfung der Lösungsidee.
Rollout-Beschluss des Portfolio Boards mit benannten aufnehmenden Bereichen und Zieltermin.
Registry-Extraktion: Die tragenden Komponenten werden auf R3/R4 gehoben.

Jeder aufnehmende Bereich wird eine eigene Value-Review-Einheit mit eigenem One-Pager, eigener Adoption-Rampe und eigenem Kill-Trigger – ein erfolgreicher Ursprungsbereich immunisiert die Ableger nicht.
Kosten- und Wertverrechnung bei geteilten Komponenten
Deine Frage aus der Blockplanung, und der Teil, an dem solche Modelle politisch scheitern. Drei Regeln, konsistent mit eurer BU-Verrechnung und der Anti-Bullshit-Linie aus Block 1:
Regel 1 – Wert wird nie geteilt. Wert entsteht dort, wo Vorgänge laufen: in der nutzenden BU. Es gibt keine Wert-Transferpreise an die Ursprungslösung und kein "Erfinder-Bonus"-Theater im Value Ledger.
Regel 2 – Kosten geteilter Komponenten folgen dem Verbrauch. R4-Plattform-Services werden nach gemessenem Verbrauch verteilt (Vorgänge bzw. Units aus Event E3 – die Telemetrie aus Block 2 liefert genau dafür die Datenbasis). Fallback bei nicht messbarem Verbrauch: Seats, notfalls Gleichverteilung, im Kostenmodell dokumentiert. Jede Lösung sieht ihren Anteil als Position "Plattform-Umlage" in ihrem TCO.
Regel 3 – Extraktionskosten trägt das CoE-/Plattformbudget, nicht die Ursprungs-BU. Das ist der zentrale Anreizmechanismus: Eine Komponente von R2 auf R3 zu heben (Dokumentation, Versionierung, Eval-Set, Mandantenfähigkeit) nützt dem Konzern, nicht der Ursprungs-BU. Müsste sie es selbst bezahlen, würde es nie passieren.
Und eine bewusste Härte-Entscheidung: Die durch Reuse vermiedenen Entwicklungskosten werden nicht als V2 gebucht – eine hypothetische Neuentwicklung ist kein Beleg im Sinne der V2-Regel. Reuse wirkt stattdessen automatisch über den niedrigeren TCO auf die ROI-Quote und wird zusätzlich als Portfolio-Kennzahl (kumulierte Reuse-Ersparnis, geschätzt) im Jahresbericht des CoE geführt. Keine Doppelzählung, keine Fantasie-Euros im Ledger.
Anti-Friedhof-Regeln
Der häufigste Tod einer Registry ist der Datenfriedhof. Drei Gegenmaßnahmen: Komponenten ohne aktiven Owner oder ohne Nutzung seit 12 Monaten werden automatisch archiviert (jährlicher Registry-Review durch das CoE). Die Registry wird an zwei Lifecycle-Stellen zwangsbefüllt – beim Go-Live (Extraktionskandidaten werden markiert) und beim Decommissioning (Organspende-Schritt aus Phase 5). Und sie ist nur dann lebendig, wenn der Reuse-Check in Phase 1 sie wirklich abfragt – das Gate erzwingt die Nachfrage, die Nachfrage rechtfertigt die Pflege.

Jetzt das Standard-Dokument:Identified table formatting issue and devised fixIdentified table formatting issue and devised fixDamit ist der Scaling-Block abgeschlossen. Die drei Standards greifen jetzt ineinander: Der Telemetrie-Standard liefert mit Event E3 die Verbrauchsdaten für die Plattform-Umlage (Regel 2), der One-Pager weist diese Umlage im TCO aus, und der Scaling-Trigger (ROI-Quote ≥ 1,5) speist sich direkt aus Abschnitt 4 des One-Pagers – keine der Regeln existiert isoliert.
Die politisch heikelste Entscheidung in diesem Block, auf die du dich intern vorbereiten solltest: Regel 3 (Extraktionskosten trägt das CoE-Budget) braucht ein tatsächliches Plattformbudget beim CoE bzw. Data & AI. Ohne diesen Topf bleibt die Registry ein Katalog von R2-Komponenten, die niemand nachnutzen darf. Das wäre ein Argument fürs Portfolio Board gleich bei der Prozess-Verabschiedung.
Bleibt Block 4: Adoption – der letzte. Dort würde ich ausarbeiten: das Adoption-Playbook entlang der Rampe (welche Maßnahmen in Q1–2 Pflicht sind: Champions-Modell, Prozessverankerung statt Schulungs-Gießkanne), die Abgrenzung zwischen Adoption-Problem und Produkt-Problem (niedrige WAU bei hoher Annahmequote vs. hohe WAU bei niedriger Annahmequote – zwei verschiedene Diagnosen mit verschiedenen Verantwortlichen), und die Verzahnung mit S3/S4 aus dem Telemetrie-Standard sowie dem Kill-Trigger. Soll ich?

## Adoption Block

Der letzte Block: Adoption. Erst das Konzept, dann der Adoption-Standard mit Playbook als Dokument.

Block 4: Adoption im Detail
Designprinzip: Adoption ist Bringschuld mit Ablaufdatum, kein Kulturmysterium
"Cultural Change braucht Zeit" ist wahr – und gleichzeitig die beliebteste Ausrede für Zombie-Projekte. Der Standard löst das Spannungsfeld so: Adoption bekommt eine definierte, endliche Rampe (Q1–Q3), in der Maßnahmen Pflicht sind und ROI-Nachsicht gilt. Ab Q4 zählt nur noch das Ergebnis. Adoption-Arbeit ist damit kein Dauerzustand, sondern ein Budget mit Ablaufdatum – und sie ist explizit die Verantwortung des AI Solution Owners, nicht der IT.
Die Diagnose-Matrix: Adoption-Problem oder Produkt-Problem?
Der analytische Kern des Blocks. Niedrige Nutzung hat zwei völlig verschiedene Ursachen mit verschiedenen Verantwortlichen – wer sie verwechselt, schult Nutzer für ein Produkt, das schlecht ist, oder verbessert ein Produkt, das niemand kennt. Die Telemetrie aus Block 2 liefert die Unterscheidung frei Haus:
Annahmequote hoch (≥ 70 %)Annahmequote niedrig (< 50 %)WAU hochGesund → Scaling-Prüfung (Block 3)Produkt-Problem: Nutzer müssen, aber Output taugt nicht → S4-Analyse, Product Owner (Drift? UX? Modellwahl?)WAU niedrigAdoption-Problem: Wer es nutzt, profitiert – es erreicht nur zu wenige → Playbook-Maßnahmen, AI Solution OwnerFundamentalproblem: Kill-Kandidat. Remediation nur mit belastbarer Ursachenhypothese, keine "mehr Schulung"-Reflexe
Dritte Dimension: die Nutzungstiefe (Vorgänge pro aktivem Nutzer). Viele Sitzungen bei wenigen Vorgängen ist Login-Tourismus – typisch nach Schulungswellen – und zählt nicht als Adoption.
Die Rampe operationalisiert – und gegen Manipulation gehärtet
Die Rampe kennt ihr aus dem Gesamtkonzept (Q1–2 ≥ 30 % des Zielwerts mit steigendem Trend, Q3 ≥ 60 % und ROI-Quote ≥ 0,5, ab Q4 Zielwert und ROI ≥ 1,0). Was noch fehlte, sind die Anti-Gaming-Regeln, denn die Adoption-Quote hat einen manipulierbaren Nenner:

Der Nenner ist eingefroren: "Berechtigte Nutzer" werden im Business Case definiert (Rolle im Prozess, nicht Lizenzzuweisung) und dürfen nur per Portfolio-Board-Beschluss geändert werden. Sonst schrumpft man den Nutzerkreis, bis die Quote stimmt.
Gleitender Quartalsdurchschnitt statt Stichtag: Ein Schulungs-Spike in der letzten Woche vor dem Review zählt nicht.
Keine Nutzungs-Incentives: Nutzung per se wird nie belohnt oder in Zielvereinbarungen geschrieben – das erzeugt Vorgangs-Inflation ohne Wert. Der Schutz ist systemisch: Wert entsteht in V1 nur multipliziert mit der Annahmequote, und sinnlose Vorgänge drücken diese.
Datenschutz-Grenze: Wegen der Zweckbindung aus dem Telemetrie-Standard darf Telemetrie nie zur individuellen Ansprache von Nicht-Nutzern verwendet werden. Adoption-Maßnahmen arbeiten auf Team-/Bereichsebene (k ≥ 5). Das ist keine Schwäche, sondern die Bedingung, unter der der Betriebsrat dem Messsystem überhaupt zugestimmt hat – wer sie verletzt, riskiert die Rahmenvereinbarung und damit das gesamte Telemetriefundament.

Das Playbook: Pflichtmaßnahmen je Phase
Kein Maßnahmen-Buffet, sondern phasengebundene Pflichten, deren Erfüllung im Value Review abgefragt wird:
Vor Go-Live (Phase 2): Prozessverankerung – der KI-Schritt wird Teil des dokumentierten Standardprozesses, nicht ein freiwilliges Parallelangebot (der einzelne wirksamste Adoption-Hebel überhaupt). Champions benannt (Richtwert: einer je ~20 berechtigte Nutzer, aus dem Fachbereich, nicht aus der IT). Erwartungsmanagement in der Kommunikation: was die Lösung kann und was nicht – überzogene Ankündigungen erzeugen die Enttäuschung, die später als "Akzeptanzproblem" fehldiagnostiziert wird.
Q1: Onboarding in Wellen statt Big Bang. Wöchentliche Champions-Feedbackschleife mit dokumentiertem Friction-Log (wo bricht der Arbeitsfluss?). Quick Wins intern sichtbar machen – konkrete Vorgänge, echte Zeitersparnis, keine Marketingprosa.
Q2–Q3: Friction-Log-Punkte fließen als priorisierte Changes ans Run-Team (hier verzahnt sich Adoption mit den Wartungskosten im TCO – bewusst: Adoption-Investment muss sich gegen den Wert rechnen). Team-Ebenen-Analyse: Bereiche mit niedriger Nutzung bekommen Prozess-Reviews, keine Einzelgespräche (siehe Datenschutz-Grenze).
Bei S3-Trigger (WAU-Rückgang > 30 %): Strukturiertes Adoption-Review entlang von fünf Ursachenkategorien – Awareness (kennen sie es?), Können (beherrschen sie es?), Wollen (vertrauen sie ihm? Angst vor Rationalisierung?), Prozesspassung (liegt es im Arbeitsfluss?), Produktqualität (Übergabe an S4/Product Owner). Ergebnis ist ein Maßnahmenplan mit genau einer Hauptursachen-Hypothese – "wir machen von allem mehr" ist kein Plan.
Das Ende der Geduld
Verzahnung mit dem Kill-Trigger: Während der Rampe (Q1–Q3) ist ein verfehltes Adoption-Ziel ein Gelb mit Maßnahmenpflicht. Ab Q4 gibt es keine Adoption-Ausrede mehr – dann zählt die ROI-Quote, und zwei rote Quartale lösen den Kill-Antrag aus. Ein Remediation-Plan, der nur "weitere Schulungen" enthält, erfüllt die Anforderung an den schriftlichen Remediation-Plan nicht; er muss auf der Diagnose-Matrix aufsetzen und die Hauptursache benennen. Damit ist die Frage aus deinem ursprünglichen Auftrag ("ab wann zieht man den Stecker, wenn Adoption ein kultureller Prozess ist?") abschließend beantwortet: Die Kultur bekommt drei Quartale mit Pflichtprogramm und Geld – danach entscheidet die Mathematik.

Jetzt das Dokument:Viewed 3 files, created a file, ran a commandViewed 3 files, created a file, ran a commandAlles sauber gerendert:Presented filePresented fileDamit sind alle vier Deep-Dive-Blöcke abgeschlossen. Was jetzt vorliegt, ist ein geschlossenes System aus vier Dokumenten plus Gesamtkonzept:
Das Gesamtkonzept (Chat, Phase 2) definiert die fünf Lifecycle-Phasen, das AI Portfolio Board mit Abschaltmandat und den Kill-Prozess. Der Value One-Pager ist das quartalsweise Steuerungsinstrument mit den ROI-Formeln und Exit-Kriterien. Der Minimal-Telemetrie-Standard liefert die fünf Events und das Kosten-Tagging, aus denen der One-Pager automatisch befüllt wird, plus die Eskalationsschwellen S1–S6. Der Registry- & Scaling-Standard regelt Reuse-Check, Reifegrade, Scaling-Pfad und die Verrechnung geteilter Komponenten. Das Adoption-Standard & Playbook operationalisiert die Rampe, trennt Adoption- von Produktproblemen und härtet die Quote gegen Manipulation. Die Querverweise zwischen den Dokumenten sind konsistent – jede Kennzahl, die irgendwo eine Konsequenz auslöst, hat genau eine definierte Datenquelle und einen Verantwortlichen.
Drei sinnvolle nächste Schritte, falls du weitermachen willst: (a) ein konsolidiertes Prozesshandbuch, das Gesamtkonzept und alle vier Standards in ein Dokument mit Phasendiagramm zusammenführt – das wäre die Vorlage für den Vorstandsbeschluss zum Board-Mandat; (b) die noch fehlenden operativen Templates aus Phase 5 (Kill-Antrag, Remediation-Plan, Decommissioning-Nachweis); oder (c) ein Rollout-Plan für den Prozess selbst – mit welchen zwei, drei Bestandslösungen ihr das Value Review pilotiert, bevor ihr es portfolioweit scharf schaltet. Mein Favorit wäre (c) vor (a): Ein Quartal Pilotbetrieb deckt Lücken auf, die kein Review am Reißbrett findet, und liefert euch echte One-Pager als Anschauungsmaterial für den Vorstand.

## Richtlinien Prompt

Wir haben in den vorherigen Schritten den E2E AI Lifecycle Process erfolgreich ausgearbeitet. Jetzt müssen wir diesen Prozess in eine formelle, verbindliche Unternehmensrichtlinie (Policy für AI Lifecycle Management) überführen.

Rolle: Agiere als Chief Enterprise Architect und IT-Compliance-Experte.

Phase 1: Lücken-Analyse & Interview Bevor du das Dokument entwirfst, musst du sicherstellen, dass wir die Governance-Rahmenbedingungen klar haben. Stelle mir 3 bis 4 präzise Fragen zu Themen, die für eine offizielle Richtlinie zwingend geklärt sein müssen (z. B. Wer ist der formelle "Sponsor" der Richtlinie? Welche Konsequenzen hat ein Verstoß? Wie gehen wir mit Ausnahmegenehmigungen um?). Nutze das AskUserQuestion Tool.

Phase 2: Der Richtlinien-Entwurf (Execution Rules) Sobald du meine Antworten hast, erstellst du den vollständigen Draft der Richtlinie basierend auf all unseren bisherigen Erarbeitungen. 

Halte dich strikt an diese Vorgaben:
1. Null-Halluzination & Harte Platzhalter: Du darfst keine Prozessschritte, Gremien oder Rollen erfinden, die wir nicht besprochen haben. Wo Informationen fehlen, nutzt du exakt diese Syntax, rot markiert oder fett: [DECISION NEEDED: <Was genau muss noch von wem definiert werden?>]. Keine generischen [Hier Text einfügen] Platzhalter! 
2. Verbindliche Sprache (Anti-Weasel-Words): Eine Richtlinie ist kein Ratgeber. Streiche Wörter wie "sollte", "idealerweise", "in der Regel" oder "kann". Nutze stattdessen harte Direktiven: "muss", "ist verantwortlich für", "darf nicht", "erfordert". 
3. Struktur & Visualisierung:
   - Nutze eine klare rechtliche/administrative Gliederung (1.0 Zweck, 2.0 Geltungsbereich, 3.0 Rollen & Verantwortlichkeiten, 4.0 Der Prozess...).
   - Erstelle eine klare RACI-Matrix (Responsible, Accountable, Consulted, Informed) als Tabelle für die wichtigsten Gate-Freigaben (z. B. PoC zu Produktion, Decommissioning).
   - Nutze Mermaid.js, um den gesamten Lifecycle-Prozess als übersichtliches Flowchart direkt im Dokument zu visualisieren. 4. Adversarial Pass (Der Audit-Check): Bevor du den Draft finalisierst, lies ihn aus der Perspektive eines internen Auditors (Revision). Suche nach vagen Zuständigkeiten (z.B. "Das Management prüft..."). Welches Management genau? Wenn das unklar ist, ersetze es durch einen [DECISION NEEDED]-Platzhalter. Die Richtlinie darf keine Schlupflöcher für unklare Verantwortlichkeiten lassen.

## Ergebnis der Richtlinie

Die Richtlinie ist fertig. Zum Aufbau und zum Audit-Pass:
Struktur: Dokumentensteuerung → 1.0 Zweck → 2.0 Geltungsbereich (sachlich/zeitlich/organisatorisch, inkl. der 12-Monats-Übergangsfrist für Bestandslösungen und dem Light-Review unter 20 k€) → 3.0 Begriffsbestimmungen → 4.0 Rollen mit verbindlichen Verantwortlichkeiten → 5.0 die fünf Prozessphasen mit allen Gates, eingebettetem Flowchart und dem Mermaid-Quellcode als Codeblock (für die Pflege in Confluence/Wiki) → 6.0 Gate-Übersicht plus RACI-Matrix mit genau einem Accountable pro Zeile → 7.0 normative Anlagen (die vier Standards) → 8.0 Waiver-Regime (Board entscheidet, wie von dir festgelegt; Kill-Trigger, Datenschutz-Bauvorschriften und Zweckbindung sind waiver-fest) → 9.0 Verstöße mit Eskalation an Sponsor und Bereichsleiter → 10.0 Inkrafttretens-Voraussetzungen → 11.0 mitgeltende Unterlagen → 12.0 das konsolidierte Register aller offenen Festlegungen.
Ergebnisse des Adversarial-Audit-Pass – diese Schlupflöcher habe ich beim Revisions-Durchgang gefunden und durch harte [DECISION NEEDED]-Platzhalter ersetzt (insgesamt D1–D12 im Register):
Die "zentrale IT" als Salt-Verwahrerin aus dem Telemetrie-Standard ist für einen Auditor keine adressierbare Stelle → D10. Das AI Portfolio Board beschließt "mit einfacher Mehrheit", aber ohne Geschäftsordnung ist unklar, wer stimmberechtigt und wann das Board beschlussfähig ist – ein klassisches Governance-Loch → D6. Der Decommissioning-Nachweis wurde in unserem Konzept gegengezeichnet, aber niemand nimmt ihn ab → D12, mit Übergangsregel (Kenntnisnahme durch das Board). Die Feststellung von Verstößen hätte ohne Zuordnung niemand verantwortet – sie ist jetzt explizit dem CoE AI zugewiesen, konsistent mit seiner bestehenden Gate- und Report-Funktion. Und das "CoE-/Plattformbudget" für Registry-Extraktionen existiert bisher nur als Konzept ohne Budgetträger → D11.
Zwei Formulierungs-Entscheidungen zur Transparenz: Es gibt im gesamten Dokument kein "sollte", "idealerweise" oder "in der Regel" – jedes verbliebene "darf" ist ein echtes Recht (z. B. "darf genau einmal eine Verlängerung erwirken") oder ein Verbot ("darf nicht"). Und Abschnitt 10.0 koppelt das Inkrafttreten hart an die Erledigung der offenen Festlegungen – die Richtlinie kann also formal nicht mit Platzhaltern in Kraft gesetzt werden, was das DECISION-NEEDED-Register faktisch zur Beschlussvorlage für die Geschäftsleitung macht.
Falls du als Nächstes die Beschlussfassung vorbereitest: Das Register in Abschnitt 12.0 lässt sich direkt als Tagesordnung verwenden – D1 (Sponsor) und D5/D6 (Vorstandsbeschluss zum Abschaltmandat plus Geschäftsordnung) sind die kritischen Punkte, an denen alles andere hängt.