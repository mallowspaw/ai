# 52-Wochen-Micro-Kit-Curriculum — KI-Literacy & Copilot
**Blueprint für ein 5.000-Mitarbeiter-Versicherungsunternehmen · 2-Personen-Kernteam · 30 Ambassadors · 3h/Monat-Deckelung**

---

## Die Kapazitätsschutz-Regel: Warum 52 Wochen NICHT 52-fache Arbeit bedeuten

Der Trick ist eine **1:3-Produktionsökonomie**: Pro Monat wird nur **ein** vollwertiges Stück produziert (das Show-&-Tell-Insert, 15 Min), die drei übrigen Wochen sind **Derivate** — Nebenprodukte, die beim Bau des Hauptstücks ohnehin anfallen (der beste Prompt daraus, der häufigste Fehler daraus, die Guardrail daraus). Ihr produziert also weiterhin im Monatsrhythmus, ihr **veröffentlicht** nur wöchentlich.

**Produktionsmodell Kernteam (2 Personen):**
- **1 Quartals-Sprint (2 Arbeitstage):** Rohinhalte für 13 Wochen entstehen am Stück — Themenplan steht (siehe unten), Demos werden einmal durchgetestet, Screenshots/GIFs aufgenommen.
- **Wöchentliche Endmontage: max. 2 Stunden.** Ein Teams-Post finalisieren, versenden, fertig. Freitags, immer zur gleichen Zeit.
- **Eisernes Gesetz:** Kein Micro-Kit wird jemals ad hoc unter der Woche gebaut. Was nicht im Sprint entstand, erscheint eine Woche später — niemand merkt es.

**Belastungsmodell Ambassador (unter 2h/Monat, Puffer zur 3h-Deckelung bleibt):**
- **1× Typ A pro Monat:** 15-Min-Insert im ohnehin stattfindenden Teammeeting, Vorbereitung = einmal das 3-Min-Demovideo des Kernteams ansehen (~15 Min gesamt inkl. Durchführung: 30 Min).
- **3× Typ B/C pro Monat:** Fertigen Post per Copy-Paste in den Team-Chat weiterleiten. Aufwand: **2 Minuten pro Woche.** Kein Vortrag, keine Anpassung.
- Plus: 45-Min-Sync + 3-Min-Monatsreport. **Summe: ~1,5–2 h/Monat.**

**Wochentypen (Legende für die Karte unten):**
| Typ | Format | Ambassador-Aufwand |
|---|---|---|
| **A** | Show-&-Tell-Insert: 15 Min live im Teammeeting, mit Demo-Skript | 30 Min inkl. Vorbereitung |
| **B** | Prompt-Drop: fertiger Teams-Post mit „Klau-Prompt" zum Weiterleiten | 2 Min |
| **C** | Wissensnugget: Mythos, Guardrail oder Aha-Moment als Weiterleitung (Text + GIF/Screenshot) | 2 Min |
| **D** | Challenge-Woche: Gamification-Element, läuft über den Kanal von selbst | 5 Min |

**Interne Tools sind eingewoben:** der interne KI-Chatbot (für alles, was nicht in Copilot gehört, und für sensible Übungen) und das Dokumentenanalyse-Tool (Multi-Dokument-Abfragen — der heimliche Star von Q3).

---

## Kommunikationsformate & Gamification (das Engagement-Arsenal)

- **„Wissensnugget"-Standard:** Jeder Typ-B/C-Post hat exakt dieselbe Anatomie: 1 Hook-Satz → 1 Screenshot oder 10-Sek-GIF → 1 kopierbarer Prompt in Codeblock → 1 Guardrail-Zeile. Lesezeit unter 60 Sekunden. Wiedererkennbares Kopfbild („💡 KI-Nugget der Woche").
- **Prompt-Rezeptkarten:** Jeder Klau-Prompt existiert zusätzlich als quadratische PDF-„Sammelkarte" (Titel, Prompt, Einsatzgebiet, Schwierigkeitsgrad). Nach 52 Wochen hat jedes Team ein Kartendeck — sammelbar, druckbar, am Monitor klebbar.
- **Halluzinations-Bingo (Q1-Challenge):** Bingokarte mit typischen KI-Fehlern („erfundener Paragraph", „falsche Jahreszahl", „zu selbstsichere Antwort"). Wer einen echten Fund einreicht, kommt in die „Fehlerjäger-Galerie" des Monatsdigests.
- **Prompt-Battle (quartalsweise):** Zwei Wochen lang reichen Teams ihren besten Prompt zur Quartalsaufgabe ein; Abstimmung per Teams-Umfrage; Gewinnerprompt wird offizielle Rezeptkarte mit Namensnennung. Kostet: nichts. Bringt: Status.
- **Abteilungs-Leaderboard (aggregiert, betriebsratsfest):** Quartalsweise im Digest: Copilot-Aktivquote pro Abteilung als Rennen dargestellt — nie Einzelpersonen, immer Einheiten. Rivalität Claims vs. Underwriting wirkt Wunder.
- **KI-Adventskalender (Dezember):** Die Typ-B-Drops im Dezember erscheinen als „Türchen" — 24 Mini-Prompts, einer pro Arbeitstag, vom Kernteam vorproduziert im Q4-Sprint.
- **„Fang die Fälschung"-Quiz (Quartalsabschluss):** 5 Aussagen, eine davon KI-halluziniert — per Forms-Quiz. Teilnahmequote ist zugleich euer Literacy-Reichweiten-Messpunkt.

---

# DIE 52-WOCHEN-KARTE

## Q1 (Wochen 1–13): GenAI-Grundlagen, Halluzinationen & Prompting-Mechanik

---

**Woche 1 – „Was GenAI wirklich ist (und was nicht)"** · Typ A
- **Literacy-Ziel:** Mentales Modell „Wahrscheinlichkeitsmaschine, nicht Wissensdatenbank" verankern.
- **Kernbotschaften:**
  - GenAI vervollständigt Text auf Basis von Wahrscheinlichkeiten — sie „weiß" nichts, sie schätzt.
  - Deshalb ist sie brillant im Formulieren und unzuverlässig im Faktenzitieren.
  - Ihr habt zwei Werkzeuge: M365 Copilot und unseren internen KI-Chatbot — heute lernt ihr das Grundprinzip beider.
- **Versicherungsbeispiel:** Ein Sachbearbeiter lässt sich den Unterschied zwischen „grober Fahrlässigkeit" und „Vorsatz" in Alltagssprache erklären — perfektes Ergebnis. Dann fragt er nach der Schadenquote des eigenen Hauses 2024 — die KI erfindet eine plausible Zahl.
- **Demo-Skript (3 Min):** (1) Internen Chatbot öffnen. (2) Prompt: `Erkläre den Unterschied zwischen grober Fahrlässigkeit und Vorsatz so, dass es ein Azubi im ersten Lehrjahr versteht. Nutze ein Beispiel aus der Wohngebäudeversicherung.` (3) Ergebnis zeigen — Stärke demonstriert. (4) Prompt: `Wie hoch war unsere Schadenquote 2024?` (5) Die selbstbewusst erfundene Antwort zeigen. Satz zum Mitnehmen: „Formulieren ja, Fakten prüfen immer."
- **Guardrail:** Nie eine Zahl, ein Datum oder einen Paragraphen aus der KI übernehmen, ohne die Originalquelle zu prüfen.

---

**Woche 2 – „Der Fachchinesisch-Übersetzer"** · Typ B
- **Literacy-Ziel:** Erste eigene Erfolgserfahrung: KI als Verständlichkeits-Werkzeug.
- **Kernbotschaften:**
  - Der schnellste Alltagsnutzen: komplizierte Sachverhalte kundentauglich machen.
  - Je genauer ihr die Zielgruppe beschreibt, desto besser das Ergebnis.
- **Versicherungsbeispiel:** Eine Kundin fragt, was „Elementarschadendeckung" bedeutet — die Antwort soll ohne ein einziges Fachwort auskommen.
- **Klau-Prompt:** `Erkläre einer Kundin ohne Versicherungsvorwissen in maximal 5 Sätzen, was eine Elementarschadendeckung abdeckt und was nicht. Freundlicher Ton, keine Fachbegriffe, ein Alltagsbeispiel mit Starkregen.`
- **Guardrail:** Die vereinfachte Erklärung ist ein Entwurf — Deckungsaussagen immer gegen das tatsächliche Bedingungswerk prüfen, bevor sie an Kunden gehen.

---

**Woche 3 – „Die KI erfindet Paragraphen"** · Typ C
- **Literacy-Ziel:** Halluzination als konkretes, selbst reproduzierbares Phänomen erleben — nicht als abstrakte Warnung.
- **Kernbotschaften:**
  - KI-Modelle erfinden Quellen, Paragraphen und Urteile — flüssig und überzeugend.
  - Der Fehler liegt nicht an „schlechter Tagesform", sondern am Funktionsprinzip.
- **Versicherungsbeispiel:** Auf die Frage nach der Rechtsgrundlage einer Kündigungsfrist liefert die KI „§ 205a VVG" — diesen Paragraphen gibt es nicht.
- **Klau-Prompt (Selbsttest):** `Nenne mir den exakten Paragraphen im VVG, der die Frist für die Anzeige eines Leitungswasserschadens regelt, mit wörtlichem Zitat.` — Danach das Zitat in der echten Gesetzesquelle suchen. Der Post zeigt per Screenshot: KI-Antwort vs. Realität.
- **Guardrail:** Wörtliche „Zitate" aus Gesetzen, Bedingungswerken oder Urteilen sind bis zum Beweis des Gegenteils erfunden.

---

**Woche 4 – „Mythos: Die KI denkt mit"** · Typ C
- **Literacy-Ziel:** Vermenschlichung abbauen; verstehen, warum die KI nie „unsicher" klingt.
- **Kernbotschaften:**
  - Die KI hat keine Absicht, kein Verständnis, kein Bewusstsein für Wahrheit.
  - Selbstsicherer Tonfall ist Stil, kein Qualitätssignal.
  - Eure Fachkompetenz bleibt die einzige Qualitätskontrolle.
- **Versicherungsbeispiel:** Zwei KI-Antworten zur Frage „Ist ein Marderbiss in der Teilkasko gedeckt?" — eine korrekt, eine falsch. Beide klingen exakt gleich überzeugend. Screenshot-Vergleich.
- **Klau-Prompt (Experiment):** `Beantworte: Ist ein Folgeschaden eines Marderbisses in der Teilkasko mitversichert? Gib deine Antwort einmal sehr selbstsicher und einmal mit ehrlicher Angabe deiner Unsicherheit.` — Der Kontrast macht den Mechanismus sichtbar.
- **Guardrail:** Traut dem Ton nie. Bewertet nur den Inhalt — mit eurem Fachwissen.

---

**Woche 5 – „Halluzinationen live fangen mit dem Dokumentenanalyse-Tool"** · Typ A
- **Literacy-Ziel:** Der wichtigste Skill des Jahres: Quellenprüfung als Reflex. Plus: internes Dokumentenanalyse-Tool kennenlernen.
- **Kernbotschaften:**
  - Antworten mit Dokumentbezug sind prüfbar — genau das macht unser Dokumentenanalyse-Tool wertvoll.
  - Regel: Jede KI-Aussage → Fundstelle im Dokument zeigen lassen.
- **Versicherungsbeispiel:** Ein 60-seitiges Bedingungswerk Wohngebäude wird ins Dokumentenanalyse-Tool geladen; Frage nach der Deckung von Rückstauschäden.
- **Demo-Skript (3 Min):** (1) Bedingungswerk (anonymisiert/Standardwerk) ins Tool laden. (2) Prompt: `Ist ein Schaden durch Rückstau gedeckt? Nenne die exakte Klausel und zitiere die relevante Passage mit Abschnittsnummer.` (3) Genannte Fundstelle im Original-PDF aufschlagen und vergleichen. (4) Eine Detailaussage bewusst nachprüfen und zeigen, dass Prüfen 30 Sekunden dauert. Merksatz: „Erst Fundstelle, dann Freigabe."
- **Guardrail:** Auch dokumentbasierte Tools können Passagen falsch verknüpfen — die Fundstellen-Prüfung ist Pflicht, keine Kür.

---

**Woche 6 – „Kontext ist König"** · Typ B
- **Literacy-Ziel:** Verstehen, dass Ergebnisqualität zu 80 % von der Eingabequalität abhängt.
- **Kernbotschaften:**
  - Die KI kennt euren Fall nicht — was nicht im Prompt steht, existiert für sie nicht.
  - Drei Zeilen Kontext verdoppeln die Ergebnisqualität.
- **Versicherungsbeispiel:** „Schreib eine Antwort an den Kunden" (schwach) vs. Kontext-Prompt zu einem verzögerten Kfz-Schaden (stark) — beide Ergebnisse im Post nebeneinander.
- **Klau-Prompt:** `Kontext: Kfz-Haftpflichtschaden, Regulierung verzögert sich um 2 Wochen, weil das Gutachten aussteht. Kunde hat bereits zweimal nachgefragt und ist verärgert. Aufgabe: Entwirf eine E-Mail, die sich aufrichtig entschuldigt, den Grund transparent erklärt und einen konkreten nächsten Termin nennt.`
- **Guardrail:** Kontext ja — aber ohne Klarnamen, Vertragsnummern oder Gesundheitsdaten. Fallkontext beschreiben, nicht Falldaten kopieren.

---

**Woche 7 – „Gib der KI eine Rolle"** · Typ B
- **Literacy-Ziel:** Rollen-Prompting als einfachsten Qualitätshebel beherrschen.
- **Kernbotschaften:**
  - Eine Rollenzuweisung („Du bist…") kalibriert Ton, Tiefe und Perspektive.
  - Die Rolle bestimmt, für wen geschrieben wird.
- **Versicherungsbeispiel:** Derselbe Sachverhalt (Ablehnung eines Leitungswasserschadens wegen fehlender Frostvorsorge) — einmal als interner Vermerk, einmal als Kundenschreiben.
- **Klau-Prompt:** `Du bist ein erfahrener Schadenreferent. Formuliere aus folgenden Stichpunkten einen sachlichen internen Entscheidungsvermerk: [Stichpunkte]. Danach: Übernimm die Rolle eines Kundenkommunikations-Profis und formuliere denselben Inhalt als verständliches, respektvolles Kundenschreiben.`
- **Guardrail:** Die Rolle ändert die Verpackung, nicht die fachliche Richtigkeit — die Entscheidung selbst trefft ihr, nicht die Rolle.

---

**Woche 8 – „Sag der KI, WIE das Ergebnis aussehen soll"** · Typ B
- **Literacy-Ziel:** Format-Prompting: Struktur der Ausgabe vorgeben statt nachbearbeiten.
- **Kernbotschaften:**
  - Tabelle, Bulletliste, E-Mail, 5-Punkte-Zusammenfassung — was ihr nicht vorgebt, würfelt die KI.
  - Formatvorgaben sparen die meiste Nachbearbeitungszeit.
- **Versicherungsbeispiel:** Aus einem unstrukturierten Besichtigungsbericht eines Regulierers eine saubere Übersichtstabelle machen.
- **Klau-Prompt:** `Strukturiere folgenden Besichtigungsbericht als Tabelle mit den Spalten: Schadenposition | Beschreibung | geschätzte Höhe | offene Nachweise. Ergänze darunter eine Liste der 3 wichtigsten offenen Fragen an den Versicherungsnehmer. [Text einfügen]`
- **Guardrail:** Zahlen in der Tabelle stichprobenartig gegen den Ursprungstext prüfen — beim Umstrukturieren verrutschen gelegentlich Werte.

---

**Woche 9 – „Der Prompt-Baukasten: Rolle + Kontext + Aufgabe + Format"** · Typ A
- **Literacy-Ziel:** Die vier Bausteine zu einem wiederverwendbaren Muster zusammensetzen — das Prompt-Fundament für den Rest des Jahres.
- **Kernbotschaften:**
  - Jeder gute Prompt hat vier Teile: Wer schreibt? Worum geht's? Was genau tun? Wie soll's aussehen?
  - Der Baukasten ist eine Checkliste, kein Auswendiglern-Stoff.
- **Versicherungsbeispiel:** Live-Bau eines Prompts für eine eingehende, wirre Schadenmeldung (Sturmschaden, per E-Mail, emotional, unvollständig).
- **Demo-Skript (3 Min):** (1) Anonymisierte Schadenmeldung zeigen. (2) Prompt Baustein für Baustein am Bildschirm tippen: `[Rolle] Du bist Schadensachbearbeiter Sach. [Kontext] Eingegangen ist folgende unstrukturierte Schadenmeldung: [Text]. [Aufgabe] Extrahiere alle relevanten Angaben und liste fehlende Pflichtangaben auf. [Format] Zwei Abschnitte: 'Erfasste Daten' als Tabelle, 'Fehlende Angaben' als nummerierte Liste.` (3) Ergebnis zeigen. (4) Rezeptkarte „Baukasten" ans Team verteilen.
- **Guardrail:** Der Baukasten macht Prompts besser, nicht die Antworten wahr — Faktenprüfung bleibt Schritt 5.

---

**Woche 10 – „Nicht aufgeben — nachfassen"** · Typ B
- **Literacy-Ziel:** Iteration als Normalfall begreifen: Der zweite Prompt ist der eigentliche Skill.
- **Kernbotschaften:**
  - Ein mittelmäßiges Ergebnis ist eine Einladung zum Nachsteuern, kein Scheitern.
  - „Kürzer", „förmlicher", „aus Kundensicht", „als Tabelle" — Nachfass-Befehle kosten 5 Sekunden.
- **Versicherungsbeispiel:** Ein zu langes, zu juristisches Antwortschreiben zu einer Beitragsanpassung wird in zwei Iterationen kundentauglich.
- **Klau-Prompt (Nachfass-Trio):** Nach der ersten Antwort nacheinander senden: `Kürze auf die Hälfte.` → `Ersetze alle Fachbegriffe durch Alltagssprache.` → `Füge einen konkreten Ansprechpartner-Absatz am Ende hinzu.`
- **Guardrail:** Bei jeder Iteration prüfen, ob inhaltliche Kernaussagen (Fristen, Beträge) unverändert geblieben sind — Kürzen frisst manchmal Fakten.

---

**Woche 11 – „Was darf rein — und was niemals"** · Typ C
- **Literacy-Ziel:** Datenschutz-Reflex: In 3 Sekunden entscheiden können, was in welches Tool darf.
- **Kernbotschaften:**
  - Faustregel: Personenbezogene Kunden- und Gesundheitsdaten haben in keinem KI-Prompt etwas verloren — auch nicht in internen Tools, sofern nicht ausdrücklich freigegeben.
  - Anonymisieren heißt: Namen, Vertragsnummern, Adressen, Geburtsdaten raus — der Fall bleibt beschreibbar.
  - Interner Chatbot und Dokumentenanalyse-Tool sind die Heimat für interne Dokumente; öffentliche Tools sind für Firmendaten tabu.
- **Versicherungsbeispiel:** Vorher/Nachher-Screenshot: eine Leistungsanfrage aus der Lebensversicherung — einmal mit Klardaten (rot durchgestrichen), einmal sauber anonymisiert („VN, männlich, 54, BU-Antrag wegen Rückenleiden").
- **Klau-Prompt (Anonymisier-Helfer):** `Prüfe folgenden Text auf personenbezogene Daten (Namen, Nummern, Adressen, Gesundheitsangaben mit Personenbezug) und liste jede Fundstelle auf, bevor ich ihn weiterverwende: [Text]` — im internen Chatbot ausführen.
- **Guardrail:** Im Zweifel: nicht einfügen, sondern beim Datenschutz-Team fragen. Ein Prompt ist schneller gesendet als zurückgeholt.

---

**Woche 12 – „Bias: Wenn die KI Schieflagen mitbringt"** · Typ C
- **Literacy-Ziel:** Verstehen, dass Trainingsdaten gesellschaftliche Verzerrungen enthalten — und wo das im Versicherungsalltag relevant wird.
- **Kernbotschaften:**
  - KI reproduziert Muster aus Daten — inklusive Klischees zu Geschlecht, Alter, Herkunft.
  - Besonders wachsam sein bei: Personalprozessen, Kundensegmentierung, Risikobeschreibungen.
- **Versicherungsbeispiel:** Eine KI-formulierte Stellenanzeige für „Führungskraft Vertrieb" nutzt unbewusst durchsetzungsbetonte, männlich konnotierte Sprache — Screenshot mit Markierungen.
- **Klau-Prompt (Bias-Check):** `Prüfe folgende Stellenanzeige auf Formulierungen, die bestimmte Gruppen (Geschlecht, Alter, Herkunft) unbewusst ansprechen oder abschrecken könnten, und schlage neutrale Alternativen vor: [Text]`
- **Guardrail:** Ein KI-Bias-Check ersetzt keine AGG-konforme Prüfung durch HR — er ist ein Vorfilter, kein Freibrief.

---

**Woche 13 – „Q1-Finale: Halluzinations-Bingo & Fang die Fälschung"** · Typ D
- **Literacy-Ziel:** Q1-Wissen spielerisch festigen und messbar machen.
- **Kernbotschaften:**
  - 12 Wochen Grundlagen — jetzt wird gejagt: Wer fängt die beste Halluzination?
  - Das Quiz ist anonym, dauert 3 Minuten und zeigt uns allen, wo wir stehen.
- **Versicherungsbeispiel:** Das „Fang die Fälschung"-Quiz enthält 5 Aussagen zu Versicherungsrecht und Copilot-Funktionen — eine ist KI-erfunden (z. B. ein nicht existenter VVG-Paragraph aus Woche 3).
- **Demo/Ablauf:** Ambassador leitet zwei Links weiter: (1) Bingo-Karte (PDF) mit 9 Feldern typischer KI-Fehler — Funde als Screenshot in den Team-Kanal; (2) Forms-Quiz „Fang die Fälschung". Beste Funde landen namentlich in der „Fehlerjäger-Galerie" des Monatsdigests.
- **Guardrail:** Für die Bingo-Jagd nur Test-Prompts ohne echte Kundendaten verwenden — gejagt wird mit fiktiven Fällen.

---

## Q2 (Wochen 14–26): M365 Copilot Mastery (Outlook, Word, Teams, Excel)

---

**Woche 14 – „Copilot in Outlook: Der 40-Mails-Thread in 60 Sekunden"** · Typ A
- **Literacy-Ziel:** Copilot dort verankern, wo alle täglich leiden: im Posteingang. Thread-Zusammenfassung als Einstiegs-Killerfeature.
- **Kernbotschaften:**
  - Lange Korrespondenzverläufe fasst Copilot in Sekunden zusammen — inklusive offener Punkte.
  - Das ist der schnellste messbare Zeitgewinn im ganzen Curriculum.
- **Versicherungsbeispiel:** Ein über Wochen gewachsener Schaden-Mailverlauf (VN, Makler, Gutachter, Werkstatt) — 40 Mails, wer ist auf welchem Stand?
- **Demo-Skript (3 Min):** (1) Vorbereiteten (anonymisierten) Thread öffnen. (2) Copilot-Symbol → „Zusammenfassen". (3) Ergebnis zeigen: Verlauf, Beteiligte, offene Punkte. (4) Nachfassen: `Liste alle Zusagen mit Datum auf, die wir dem Kunden in diesem Verlauf gemacht haben.` (5) Eine Zusage im Original verifizieren — Q1-Reflex vorleben. Merksatz: „Lesen lassen, prüfen, handeln."
- **Guardrail:** Die Zusammenfassung kann Nuancen verlieren (z. B. ein „vorbehaltlich Gutachten") — vor rechtsverbindlichen Schritten den Originalwortlaut der Schlüsselmail lesen.

---

**Woche 15 – „Aus 5 Stichpunkten eine fertige Makler-Mail"** · Typ B
- **Literacy-Ziel:** Copilot-Entwurfsfunktion in Outlook als Standardweg für Routinemails etablieren.
- **Kernbotschaften:**
  - Stichpunkte rein, Entwurf raus — ihr bleibt Redakteur, nicht Tipparbeiter.
  - Tonalität lässt sich per Klick anpassen (formeller/kürzer).
- **Versicherungsbeispiel:** Rückfrage an einen Makler zu unvollständigen Antragsunterlagen in der Gewerbe-Sach.
- **Klau-Prompt (in Outlook „Entwurf mit Copilot"):** `Entwirf eine freundlich-professionelle Mail an einen Makler: Antrag Gewerbe-Inhaltsversicherung eingegangen, es fehlen aktuelle Betriebsbeschreibung und Vorschadenliste der letzten 5 Jahre. Bitte um Nachreichung binnen 14 Tagen, biete Rückruf an.`
- **Guardrail:** Entwurf heißt Entwurf: Anrede, Vertragsdetails und Fristen prüfen, bevor „Senden" — Copilot kennt eure Geschäftsbeziehung zum Makler nicht.

---

**Woche 16 – „Die Beschwerde-Antwort: Empathie auf Knopfdruck? Fast."** · Typ B
- **Literacy-Ziel:** Tonalitäts-Steuerung beherrschen — der Unterschied zwischen korrekt und kundenbindend.
- **Kernbotschaften:**
  - Copilot kann Ton: empathisch, deeskalierend, lösungsorientiert — wenn ihr es verlangt.
  - Bei Beschwerden gilt: Erst Emotion adressieren, dann Sachverhalt.
- **Versicherungsbeispiel:** Beschwerde eines Kunden über eine aus seiner Sicht zu niedrige Hausrat-Entschädigung nach Einbruch.
- **Klau-Prompt:** `Entwirf eine Antwort auf folgende Beschwerde. Struktur: (1) Verständnis für den Ärger zeigen, ohne die Entscheidung vorwegzunehmen, (2) die Bewertungsgrundlage (Zeitwert, Nachweise) in einfacher Sprache erklären, (3) konkreten nächsten Schritt anbieten (Nachreichung von Belegen, persönliches Gespräch). Deeskalierender, respektvoller Ton. [Beschwerdetext]`
- **Guardrail:** Keine neuen Zusagen aus der KI übernehmen („Wir prüfen eine Nachzahlung") — jede Zusage muss eurer tatsächlichen Entscheidungslage entsprechen.

---

**Woche 17 – „Posteingangs-Triage: Was will die Mail von mir?"** · Typ C
- **Literacy-Ziel:** Copilot als Priorisierungs-Assistent für den Mailberg nach Urlaub oder Wochenende.
- **Kernbotschaften:**
  - Copilot extrahiert Handlungsbedarf aus Mails: Was ist zu tun, bis wann, durch wen?
  - Triage ist keine Delegation der Verantwortung — nur der Sichtung.
- **Versicherungsbeispiel:** Montagmorgen im Underwriting: 60 neue Mails, darunter zwei fristgebundene Vorlagen zur Risikoprüfung.
- **Klau-Prompt (in langer Einzelmail):** `Fasse zusammen: (1) Was wird konkret von mir erwartet? (2) Gibt es eine Frist? (3) Welche Informationen brauche ich für die Antwort?` — als Wissensnugget mit GIF der Copilot-Seitenleiste.
- **Guardrail:** Fristen aus der KI-Zusammenfassung immer im Originaltext gegenchecken — ein übersehenes „spätestens" ist im Versicherungsgeschäft teuer.

---

**Woche 18 – „Copilot in Word: Der Erstentwurf, der keiner weißen Seite mehr begegnet"** · Typ A
- **Literacy-Ziel:** Word-Copilot für strukturierte Dokumente nutzen: Vermerke, Entscheidungen, Berichte.
- **Kernbotschaften:**
  - Die weiße Seite ist abgeschafft: Aus Stichpunkten und Referenzdokumenten entsteht ein Rohentwurf.
  - Euer Job verschiebt sich vom Schreiben zum Redigieren — das ist ein Upgrade, kein Ersatz.
- **Versicherungsbeispiel:** Entscheidungsvermerk zu einem Kulanzfall in der Wohngebäudeversicherung (Frostschaden, Fahrlässigkeit strittig).
- **Demo-Skript (3 Min):** (1) Neues Word-Dokument, Copilot öffnen. (2) Prompt: `Erstelle einen internen Entscheidungsvermerk mit den Abschnitten Sachverhalt, Bewertung, Entscheidung, Begründung. Stichpunkte: Frostschaden Leitungswasser, VN 3 Wochen abwesend, Heizung nachweislich auf Frostschutz, Bedingungen fordern 'regelmäßige Kontrolle', Kulanzrahmen 70% vorgeschlagen.` (3) Rohentwurf zeigen. (4) Einen Abschnitt markieren → „Mit Copilot umschreiben" → präziser machen. Merksatz: „Copilot liefert den Rohbau, ihr macht die Abnahme."
- **Guardrail:** Der Vermerk ist erst nach eurer fachlichen Prüfung ein Vermerk — KI-Rohbauten nie ungelesen in die Akte.

---

**Woche 19 – „60 Seiten Bedingungswerk, 6 Bullet Points"** · Typ B
- **Literacy-Ziel:** Dokument-Zusammenfassung in Word beherrschen — und wissen, wann das Dokumentenanalyse-Tool die bessere Wahl ist.
- **Kernbotschaften:**
  - Word-Copilot fasst das geöffnete Dokument zusammen; das interne Dokumentenanalyse-Tool kann mehrere Dokumente gleichzeitig und zitiert Fundstellen.
  - Regel: Ein Dokument, schneller Überblick → Word. Mehrere Dokumente oder Detailfragen mit Belegpflicht → Dokumentenanalyse-Tool.
- **Versicherungsbeispiel:** Neues Bedingungswerk Unfallversicherung — was hat sich gegenüber der Vorversion geändert?
- **Klau-Prompt (im Dokumentenanalyse-Tool, beide Versionen geladen):** `Vergleiche die beiden Bedingungswerke und liste alle inhaltlichen Änderungen als Tabelle: Klausel | alte Regelung | neue Regelung | Auswirkung für Bestandskunden. Nenne je Zeile die Fundstelle.`
- **Guardrail:** Vollständigkeit nicht garantiert — der Vergleich ist eine Arbeitsgrundlage; für verbindliche Änderungsübersichten gilt das Vier-Augen-Prinzip mit der Fachabteilung.

---

**Woche 20 – „Ein Inhalt, zwei Welten: Vermerk vs. Kundenbrief"** · Typ B
- **Literacy-Ziel:** Umschreiben („Rewrite") als Kernfunktion: denselben Inhalt für verschiedene Empfänger übersetzen.
- **Kernbotschaften:**
  - Einmal fachlich sauber formulieren, dann per Copilot für jede Zielgruppe übersetzen lassen.
  - Interner Präzisionsanspruch und externe Verständlichkeit sind kein Widerspruch mehr.
- **Versicherungsbeispiel:** Teilablehnung eines Gebäudeschadens (Abnutzung vs. versichertes Ereignis) — der interne Vermerk existiert, der Kundenbrief fehlt.
- **Klau-Prompt (Text in Word markieren):** `Schreibe diesen internen Vermerk als Brief an den Versicherungsnehmer um: verständliche Sprache, respektvoller Ton, klare Erklärung, warum ein Teil nicht gedeckt ist, und was der Kunde tun kann (Belege, Widerspruchsweg). Keine juristischen Abkürzungen.`
- **Guardrail:** Rechtlich erforderliche Bestandteile (Fristen, Rechtsbehelfsbelehrung) gehören aus der geprüften Vorlage, nicht aus der KI.

---

**Woche 21 – „Aus Vorlage + Notizen wird ein Bericht"** · Typ C
- **Literacy-Ziel:** Copilot mit Referenzdokumenten arbeiten lassen („Beziehe dich auf…") — Vorlagen als Qualitätsanker.
- **Kernbotschaften:**
  - Copilot kann sich in Word auf eure bestehenden Dateien beziehen — die Hausvorlage bleibt maßgeblich.
  - Notizen + Vorlage = konsistenter Berichtsentwurf in Minuten.
- **Versicherungsbeispiel:** Quartalsbericht Regulierungsstand Großschäden — es existieren die Vorlage vom Vorquartal und Stichpunkt-Notizen aus der Schadenrunde.
- **Klau-Prompt:** `Erstelle auf Basis der Datei [Q1-Bericht] einen Berichtsentwurf für Q2 mit gleicher Struktur und Tonalität. Verwende dazu ausschließlich diese Notizen: [Stichpunkte]. Markiere Stellen, für die dir Informationen fehlen, mit [OFFEN].`
- **Guardrail:** Der `[OFFEN]`-Trick ist Pflicht — er zwingt die KI, Lücken zuzugeben, statt sie plausibel zu füllen.

---

**Woche 22 – „Copilot in Teams: Nie wieder Protokoll-Dienst"** · Typ A
- **Literacy-Ziel:** Meeting-Recap beherrschen: Zusammenfassung, Aktionspunkte, Entscheidungen aus transkribierten Besprechungen.
- **Kernbotschaften:**
  - Aus jeder transkribierten Teams-Besprechung liefert Copilot Recap und Aufgabenliste.
  - Voraussetzung: Transkription an — Teilnehmende werden informiert; das ist Transparenzregel, keine Formalie.
- **Versicherungsbeispiel:** Wöchentliche Schadenrunde: 45 Minuten, 8 Teilnehmende, 12 besprochene Fälle — wer macht was bis wann?
- **Demo-Skript (3 Min):** (1) Recap einer (vorbereiteten Test-)Besprechung öffnen. (2) KI-Zusammenfassung und automatisch erkannte Aufgaben zeigen. (3) Prompt im Besprechungs-Copilot: `Liste alle Entscheidungen und alle offenen Punkte mit verantwortlicher Person als Tabelle.` (4) Zeigen, wie ein zugewiesener Punkt korrigiert wird — die KI verwechselt gelegentlich Sprecher. Merksatz: „Das Protokoll schreibt Copilot, die Verantwortung bleibt beim Menschen."
- **Guardrail:** Sprecherzuordnung prüfen: Falsch zugewiesene Aufgaben sind der häufigste Recap-Fehler. Sensible Personalgespräche werden grundsätzlich nicht transkribiert.

---

**Woche 23 – „Was habe ich verpasst?" — Der Chat-Aufholer** · Typ B
- **Literacy-Ziel:** Copilot in Teams-Chats und -Kanälen zum Aufholen langer Verläufe nutzen.
- **Kernbotschaften:**
  - Nach Urlaub oder Krankheit: Kanalverlauf zusammenfassen lassen statt 300 Nachrichten scrollen.
  - Gezielt fragen schlägt allgemein zusammenfassen.
- **Versicherungsbeispiel:** Rückkehr aus zwei Wochen Urlaub; im Projekt-Kanal „Bestandsmigration Leben" sind 240 Nachrichten aufgelaufen.
- **Klau-Prompt (im Kanal-Copilot):** `Fasse die wichtigsten Entwicklungen der letzten 14 Tage zusammen. Gliedere nach: getroffene Entscheidungen, offene Streitpunkte, Punkte, bei denen ich (@[Name]) erwähnt oder gebraucht werde.`
- **Guardrail:** Entscheidungs-Zusammenfassungen können Zwischenstände als final darstellen — bei kritischen Punkten den verlinkten Original-Thread öffnen.

---

**Woche 24 – „Excel entziffern: Erklär mir diese Formel"** · Typ B
- **Literacy-Ziel:** Angstabbau vor fremden Arbeitsmappen: Copilot als Formel-Erklärer und Fehler-Finder.
- **Kernbotschaften:**
  - Geerbte Excel-Ungetüme muss niemand mehr allein entschlüsseln.
  - Verstehen vor Verändern: Erst erklären lassen, dann anfassen.
- **Versicherungsbeispiel:** Die historisch gewachsene Provisionsabrechnungs-Mappe der Vertriebssteuerung — der Kollege, der sie baute, ist in Rente.
- **Klau-Prompt (in Excel-Copilot):** `Erkläre in einfacher Sprache, was die Formel in Zelle [G14] berechnet, welche Zellen einfließen und unter welchen Bedingungen sie ein falsches Ergebnis liefern könnte.`
- **Guardrail:** Copilot in Excel arbeitet am besten mit formatierten Tabellen — und seine Formel-Erklärung ist eine Hypothese: bei abrechnungsrelevanten Formeln mit Testwerten gegenrechnen.

---

**Woche 25 – „Trends auf Zuruf: Die Schadenliste befragen"** · Typ C
- **Literacy-Ziel:** Datenanalyse per Sprache: Verteilungen, Ausreißer, Trends in eigenen Listen erkennen.
- **Kernbotschaften:**
  - „Zeig mir Auffälligkeiten" ersetzt für den ersten Blick die Pivot-Bastelei.
  - Die KI findet Muster — die Interpretation und Ursachenprüfung bleibt Fachaufgabe.
- **Versicherungsbeispiel:** Monatsliste gemeldeter Kfz-Schäden (anonymisiert): Gibt es Häufungen nach Region, Schadenart oder Wochentag?
- **Klau-Prompt (in Excel-Copilot, formatierte Tabelle):** `Analysiere diese Schadenliste: (1) Top-3-Schadenarten nach Anzahl und Summe, (2) auffällige Ausreißer bei der Schadenhöhe, (3) erkennbare zeitliche Häufungen. Erstelle dazu ein passendes Diagramm.`
- **Guardrail:** Korrelation ist keine Ursache — eine Häufung ist ein Prüfauftrag, kein Befund. Und: keine personenbezogenen Rohdaten in der Tabelle.

---

**Woche 26 – „Q2-Finale: Mein Copilot-Workflow + Prompt-Battle"** · Typ A/D
- **Literacy-Ziel:** Einzelfunktionen zu einem persönlichen Arbeitsablauf verketten — und Q2 messbar abschließen.
- **Kernbotschaften:**
  - Die Magie entsteht in der Kette: Outlook-Thread zusammenfassen → Word-Vermerk entwerfen → Antwortmail generieren.
  - Jedes Team kürt im Prompt-Battle seinen besten Q2-Prompt — der Gewinner wird offizielle Rezeptkarte mit Namensnennung.
- **Versicherungsbeispiel:** Durchgängiger Fall: Beschwerde zu verzögerter Sturmschaden-Regulierung — von der Mail-Triage bis zum versandfertigen Antwortentwurf in unter 10 Minuten.
- **Demo-Skript (3 Min):** (1) Thread-Zusammenfassung aus Woche 14 wiederholen (30 Sek). (2) Kernpunkte nach Word übernehmen, Kurzvermerk generieren (60 Sek). (3) Aus dem Vermerk die Kundenantwort in Outlook entwerfen (60 Sek). (4) Battle ankündigen: Einreichung per Forms bis Ende der Woche, Abstimmung im Kanal. Dazu: „Fang die Fälschung"-Quiz Q2.
- **Guardrail:** Verkettung potenziert Fehler: Ein Halluzinationsfehler in Schritt 1 wandert bis in die Kundenmail. Der Prüfpunkt liegt deshalb am Ende der Kette — vor dem Senden, nicht nach dem Generieren.

---


## Q3 (Wochen 27–39): Business Value & Abteilungs-Use-Cases (Claims, Underwriting, HR, P&C, Leben)

---

**Woche 27 – „Vom Werkzeug zum Wertschöpfer: Der 3-Fragen-Filter"** · Typ A
- **Literacy-Ziel:** Use-Case-Identifikation als Kernkompetenz: Jede/r kann in 60 Sekunden bewerten, ob eine Aufgabe KI-tauglich ist.
- **Kernbotschaften:**
  - Der 3-Fragen-Filter: (1) Wiederholt sich die Aufgabe? (2) Ist sie text- oder dokumentbasiert? (3) Bleibt die Entscheidung beim Menschen?
  - Dreimal Ja = Use-Case-Kandidat. Ein Nein bei Frage 3 = Stopp und Governance-Frage.
  - Ab heute sammeln wir: Jeder Kandidat kommt als Steckbrief in die Pipeline.
- **Versicherungsbeispiel:** Live-Bewertung dreier Aufgaben: Standmitteilung erklären (Ja/Ja/Ja ✓), Posteingang Schaden vorsortieren (Ja/Ja/Ja ✓), BU-Leistungsentscheidung treffen (Ja/Ja/**Nein** ✗ — Entscheidung bleibt zwingend beim Menschen).
- **Demo-Skript (3 Min):** (1) Filter-Folie zeigen. (2) Die drei Beispiele gemeinsam durchbewerten — das Team ruft die Antworten zu. (3) Use-Case-Steckbrief zeigen (Formular, 5 Felder: Aufgabe, Häufigkeit, heutiger Zeitaufwand, beteiligte Dokumente, Bauchgefühl-Zeitersparnis). (4) Aufruf: Jedes Teammitglied reicht bis Quartalsende mindestens einen Steckbrief ein. Merksatz: „Ihr kennt die Prozesse — die KI kennt sie nicht."
- **Guardrail:** Frage 3 ist nicht verhandelbar: Aufgaben mit rechtlicher oder finanzieller Entscheidungswirkung (Annahme, Ablehnung, Auszahlung) sind Assistenz-Fälle, nie Automatisierungs-Fälle.

---

**Woche 28 – „Claims: Das Fall-Dossier aus vier Dokumenten"** · Typ B
- **Literacy-Ziel:** Multi-Dokument-Synthese im Dokumentenanalyse-Tool: aus verstreuten Unterlagen eine Fallübersicht bauen.
- **Kernbotschaften:**
  - Schadenmeldung, Gutachten, Polizeibericht, Fotobeschreibung — das Tool liest alle gleichzeitig.
  - Die Fallübersicht ist der neue Startpunkt der Bearbeitung, nicht ihr Ergebnis.
- **Versicherungsbeispiel:** Kfz-Haftpflicht mit Personenschaden-Verdacht: vier Dokumente, drei Versionen des Unfallhergangs.
- **Klau-Prompt (Dokumentenanalyse-Tool, alle Dokumente geladen):** `Erstelle eine Fallübersicht mit den Abschnitten: (1) Unstrittiger Sachverhalt, (2) Angaben, die sich zwischen den Dokumenten unterscheiden — als Tabelle mit Quelle je Angabe, (3) fehlende Unterlagen für die Regulierungsentscheidung. Zitiere je Aussage die Fundstelle.`
- **Guardrail:** Nur anonymisierte bzw. freigegebene Dokumente ins Tool — und die Widerspruchs-Tabelle ist ein Prüfauftrag an euch, keine Bewertung der Glaubwürdigkeit von Personen.

---

**Woche 29 – „Claims: Die Erstmeldung, die sich selbst sortiert"** · Typ B
- **Literacy-Ziel:** Unstrukturierten Schadeneingang in strukturierte Ersterfassung plus Vollständigkeits-Check verwandeln.
- **Kernbotschaften:**
  - Wirre Kundenmails werden zu sauberen Erfassungsdaten plus Nachforderungsliste — in einem Schritt.
  - Der Nachforderungsbrief entsteht direkt mit — zwei Arbeitsgänge werden einer.
- **Versicherungsbeispiel:** Emotionale Sturmschaden-Meldung per E-Mail: Dachziegel, Carport, Nachbars Zaun — ohne Datum, ohne Fotos, ohne Versicherungsnummer im Betreff.
- **Klau-Prompt:** `Aus folgender Schadenmeldung: (1) Extrahiere alle erfassbaren Angaben als Tabelle (Ereignis, Datum/Zeitraum, betroffene Positionen, Dritte betroffen ja/nein). (2) Liste fehlende Pflichtangaben für eine Sturmschaden-Regulierung. (3) Entwirf eine empathische Antwort, die den Eingang bestätigt und genau diese Angaben nachfordert. [Text]`
- **Guardrail:** Drittschäden (Nachbars Zaun) haben haftungsrechtliche Folgen — die Zuordnung Gebäude/Haftpflicht prüft der Mensch, nicht der Prompt.

---

**Woche 30 – „Claims: Widersprüche finden — Urteile fällen verboten"** · Typ C
- **Literacy-Ziel:** Die Grenze zwischen legitimer Inkonsistenz-Prüfung und unzulässiger KI-Verdachtsbewertung verstehen.
- **Kernbotschaften:**
  - Erlaubt und wertvoll: „Wo widersprechen sich Dokumente?" — eine Faktenfrage mit Fundstellen.
  - Nicht erlaubt: „Ist dieser Fall Betrug?" oder Bewertungen von Personen — das ist Sache geschulter Menschen und geregelter Prozesse.
- **Versicherungsbeispiel:** Gutachten datiert den Wasserschaden auf „mehrere Wochen zurückliegend", die Meldung nennt „letztes Wochenende" — die KI markiert die Abweichung mit beiden Fundstellen; die Bewertung übernimmt die Fachkraft.
- **Klau-Prompt:** `Vergleiche die Sachverhaltsangaben in den geladenen Dokumenten und liste ausschließlich faktische Abweichungen (Daten, Beträge, Abläufe, Mengen) als Tabelle: Angabe | Dokument A | Dokument B | Fundstellen. Keine Bewertung, keine Schlussfolgerung.`
- **Guardrail:** Formulierungen wie „verdächtig" oder „unglaubwürdig" im KI-Output streichen und nie in die Akte übernehmen — Verdachtsbewertung durch KI kann Menschen unfair treffen und ist governance-pflichtig.

---

**Woche 31 – „Underwriting: Das Risikodossier in 10 Minuten"** · Typ A
- **Literacy-Ziel:** Entscheidungs*vorbereitung* per Multi-Dokument-Analyse — bei glasklarer Trennung zur Entscheidung selbst.
- **Kernbotschaften:**
  - Betriebsbeschreibung, Vorschadenliste, Besichtigungsbericht: Das Tool baut die Entscheidungsvorlage.
  - Die KI bereitet vor, der Underwriter entscheidet — diese Reihenfolge ist auch regulatorisch (Stichwort EU AI Act) der sichere Korridor.
- **Versicherungsbeispiel:** Neuantrag Gewerbe-Inhalt eines metallverarbeitenden Betriebs: 3 Dokumente, Frage nach Zeichnungsempfehlung-Vorbereitung.
- **Demo-Skript (3 Min):** (1) Drei anonymisierte Dokumente ins Dokumentenanalyse-Tool laden. (2) Prompt: `Erstelle eine Underwriting-Vorlage: (1) Betriebsprofil in 5 Sätzen, (2) risikorelevante Merkmale als Tabelle (Merkmal | Fundstelle | risikoerhöhend/-mindernd), (3) offene Fragen an den Makler, (4) Punkte, die gegen die Angaben im Antrag sprechen.` (3) Eine Fundstelle live prüfen. (4) Betonen, was NICHT im Prompt steht: keine Annahmeempfehlung, kein Prämienvorschlag. Merksatz: „Die KI deckt den Tisch — gegessen wird von euch."
- **Guardrail:** Niemals die KI um eine Annahme-/Ablehnungsempfehlung oder Prämienindikation bitten — Risikoentscheidungen sind menschliche Entscheidungen mit dokumentierter Begründung.

---

**Woche 32 – „Underwriting: Annahmerichtlinien maklertauglich erklärt"** · Typ B
- **Literacy-Ziel:** Interne Regelwerke in adressatengerechte Außenkommunikation übersetzen.
- **Kernbotschaften:**
  - Die häufigste Makler-Rückfrage („Warum wollt ihr das wissen?") lässt sich vorformuliert beantworten.
  - Gute Erklärungen reduzieren Nachfrage-Schleifen — messbare Zeitersparnis auf beiden Seiten.
- **Versicherungsbeispiel:** Ein Makler versteht nicht, warum bei Photovoltaik auf Gewerbedächern eine separate Risikoanfrage nötig ist.
- **Klau-Prompt:** `Erkläre einem Makler in einer kurzen, kooperativen E-Mail, warum wir bei Photovoltaikanlagen auf Gewerbedächern zusätzliche Angaben benötigen (Brandlast, Wartungsvertrag, Montageart). Ton: partnerschaftlich, nicht belehrend. Schließe mit einer Checkliste der 4 benötigten Unterlagen.`
- **Guardrail:** Zeichnungsrichtlinien sind teils vertraulich — erklärt wird das *Warum* in Alltagssprache, nie der interne Richtlinientext im Wortlaut.

---

**Woche 33 – „Underwriting & Risk: Den 80-Seiten-Lagebericht knacken"** · Typ C
- **Literacy-Ziel:** Lange Drittdokumente (Geschäftsberichte, Lageberichte) gezielt befragen statt linear lesen.
- **Kernbotschaften:**
  - Gezielte Fragen an ein Dokument schlagen die Gesamtzusammenfassung — ihr wisst, wonach ihr sucht.
  - Frage-Batterien sind wiederverwendbar: einmal gebaut, für jeden Firmenkunden nutzbar.
- **Versicherungsbeispiel:** Jahresabschluss + Lagebericht eines Industriekunden vor der Vertragsverlängerung: Was hat sich am Risikoprofil geändert?
- **Klau-Prompt (Dokumentenanalyse-Tool):** `Beantworte aus dem geladenen Lagebericht mit Fundstellen: (1) Gab es Standort-, Produktions- oder Geschäftsmodell-Änderungen? (2) Werden Investitionen in Anlagen oder Sicherheit erwähnt? (3) Welche Risiken benennt das Unternehmen selbst? (4) Gibt es Hinweise auf Personalabbau oder Auslagerungen?`
- **Guardrail:** Was der Bericht verschweigt, kann das Tool nicht finden — Abwesenheit einer Erwähnung ist kein Beleg für Abwesenheit eines Risikos.

---

**Woche 34 – „HR: Onboarding, das sich selbst schreibt (fast)"** · Typ B
- **Literacy-Ziel:** HR-Routinetexte beschleunigen — und die rote Linie bei Personalentscheidungen kennen.
- **Kernbotschaften:**
  - Einarbeitungspläne, Willkommensmails, Checklisten: perfekte KI-Entwurfsarbeit.
  - Rote Linie: KI bewertet keine Bewerbungen und keine Menschen — Entwurfsarbeit ja, Auswahlentscheidung nie.
- **Versicherungsbeispiel:** Einarbeitungsplan für eine neue Sachbearbeiterin Schaden Kfz, 30 Tage, hybrides Arbeiten.
- **Klau-Prompt:** `Erstelle einen 30-Tage-Einarbeitungsplan für eine neue Sachbearbeiterin Kfz-Schaden: Woche 1 Systeme & Sicherheit, Woche 2 Begleitung erfahrener Kollegin, Woche 3 erste eigene Fälle mit Vier-Augen-Prinzip, Woche 4 Selbstständigkeit mit Rückfragekanal. Format: Tabelle Tag | Ziel | Aktivität | Ansprechperson [Platzhalter].`
- **Guardrail:** Sobald es um konkrete Personen geht (Leistungsbeurteilung, Bewerberauswahl), ist Schluss — das ist AGG-Terrain und je nach Ausgestaltung Hochrisiko-Anwendung im Sinne des EU AI Act.

---

**Woche 35 – „HR & alle: Der Richtlinien-Lotse — Betriebsvereinbarungen befragen"** · Typ A
- **Literacy-Ziel:** Interne Regelwerke als befragbare Wissensbasis nutzen — mit klarer Verbindlichkeits-Hierarchie.
- **Kernbotschaften:**
  - „Was gilt bei Elternzeit plus Teilzeit?" — das Dokumentenanalyse-Tool findet die Passage schneller als jede Intranet-Suche.
  - Die Antwort ist ein Wegweiser zur Fundstelle, keine verbindliche HR-Auskunft.
- **Versicherungsbeispiel:** Mitarbeiterfrage: Gleitzeit-Betriebsvereinbarung, Reisekostenrichtlinie und Homeoffice-Regelung — was gilt bei einer Dienstreise am Homeoffice-Tag?
- **Demo-Skript (3 Min):** (1) Die drei (freigegebenen) Regelwerke ins Tool laden. (2) Prompt: `Was gilt für Reisezeiten und Kostenerstattung, wenn eine Dienstreise an einem vereinbarten Homeoffice-Tag stattfindet? Antworte nur auf Basis der geladenen Dokumente, zitiere je Aussage die Fundstelle, und sage ausdrücklich, wenn die Dokumente die Frage nicht regeln.` (3) Fundstelle im Original zeigen. (4) Verbindlichkeits-Regel erklären. Merksatz: „Das Tool findet die Stelle — verbindlich antwortet HR."
- **Guardrail:** Der Zusatz „sage ausdrücklich, wenn die Dokumente die Frage nicht regeln" ist Pflichtbestandteil — ohne ihn füllt die KI Regelungslücken mit plausiblen Erfindungen.

---

**Woche 36 – „P&C: Die Bestandsliste erzählt ihre Geschichte"** · Typ B
- **Literacy-Ziel:** Excel-Analyse (Q2-Skill) mit Berichts-Entwurf (Q2-Skill) zur Wertschöpfungskette verbinden.
- **Kernbotschaften:**
  - Von der Zahl zum Satz: Copilot analysiert die Sparten-Liste und entwirft den Kommentartext fürs Reporting.
  - Der Fachkommentar (Warum ist das so?) bleibt eure Leistung — die KI liefert das Was.
- **Versicherungsbeispiel:** Quartalsliste Wohngebäude: Schadenaufwand nach Gefahr (Sturm/Hagel, Leitungswasser, Feuer) — Kommentar für den Spartenbericht.
- **Klau-Prompt (Excel-Copilot, danach Word):** `Analysiere: Schadenaufwand je Gefahr im Quartalsvergleich, größte absolute und prozentuale Veränderung, auffällige Einzelmonate. Formuliere anschließend einen neutralen Berichtsabsatz (max. 120 Wörter), der nur beschreibt, was die Daten zeigen — ohne Ursachenvermutung.`
- **Guardrail:** „Ohne Ursachenvermutung" steht bewusst im Prompt: KI-erfundene Kausalitäten („wegen des milden Winters") wirken plausibel und landen sonst ungeprüft im Vorstandsbericht.

---

**Woche 37 – „Leben: Standmitteilung & Produktwissen in Kundensprache"** · Typ B
- **Literacy-Ziel:** Erklärungsintensive Leben-Themen kundentauglich machen — bei absolutem Schutz von Gesundheitsdaten.
- **Kernbotschaften:**
  - Überschussbeteiligung, Rückkaufswert, Beitragsfreistellung: Erklär-Bausteine einmal bauen, oft nutzen.
  - Härteste Datenschutz-Zone des Hauses: Gesundheitsdaten sind für jeden KI-Prompt tabu — ohne Ausnahme.
- **Versicherungsbeispiel:** Kunde versteht seine Standmitteilung nicht: Warum ist die prognostizierte Ablaufleistung niedriger als vor drei Jahren?
- **Klau-Prompt:** `Erkläre in maximal 6 Sätzen und ohne Fachbegriffe, warum die prognostizierte Ablaufleistung einer klassischen Lebensversicherung sinken kann (Zinsumfeld, Überschussdeklaration, unverbindliche Prognosen vs. garantierte Werte). Ton: ruhig, ehrlich, ohne Beschönigung. Schließe mit dem Hinweis, welche Werte garantiert sind.`
- **Guardrail:** Erklärt wird das Prinzip, nie der Einzelvertrag — konkrete Vertragswerte kommen aus dem Bestandssystem, und Gesundheits- oder Leistungsfalldaten (BU, Pflege) berühren KI-Tools grundsätzlich nicht.

---

**Woche 38 – „Revision & Compliance: Maßnahmen im Griff"** · Typ C
- **Literacy-Ziel:** KI für Prüfungs-Folgeprozesse nutzen: Berichte verdichten, Maßnahmen tabellieren, Status nachhalten.
- **Kernbotschaften:**
  - Prüfberichte sind lang, Maßnahmenlisten sind das, was zählt — die Extraktion ist perfekte KI-Arbeit.
  - Gleiches Muster funktioniert für BaFin-Rundschreiben, interne Audits, Wirtschaftsprüfer-Feststellungen.
- **Versicherungsbeispiel:** 45-seitiger interner Revisionsbericht zur Schadenregulierung mit verstreuten Feststellungen und Empfehlungen.
- **Klau-Prompt (Dokumentenanalyse-Tool):** `Extrahiere alle Feststellungen und Maßnahmen als Tabelle: Nr. | Feststellung (1 Satz) | Risikoeinstufung laut Bericht | empfohlene Maßnahme | genannte Frist | verantwortliche Einheit | Fundstelle. Kennzeichne Felder ohne Angabe im Bericht mit [NICHT GENANNT].`
- **Guardrail:** Revisionsberichte sind hochvertraulich — Nutzung nur im internen, dafür freigegebenen Tool und nur durch den berechtigten Personenkreis; die `[NICHT GENANNT]`-Kennzeichnung verhindert erfundene Fristen.

---

**Woche 39 – „Q3-Finale: Der Use-Case-Pitch"** · Typ D
- **Literacy-Ziel:** Die gesammelten Steckbriefe in eine bewertete Pipeline verwandeln — jedes Team wird zum Ideengeber.
- **Kernbotschaften:**
  - Jedes Team kürt aus seinen Q3-Steckbriefen einen Favoriten und reicht ihn zum Pitch ein.
  - Die Top-Use-Cases präsentieren die Ambassadors beim Quartals-Showcase vor den Bereichsleitungen — mit Namensnennung der Ideengeber.
  - Aus Pitches werden in Q4 Pipeline-Kandidaten mit Fachpaten aus euren Reihen.
- **Versicherungsbeispiel:** Beispiel-Pitch als Vorlage: „Nachforderungsbriefe Sturmschaden — 15 Min/Fall, ca. 400 Fälle/Jahr in unserer Einheit, Dokumente: Erstmeldung + Bedingungswerk, geschätzte Ersparnis: 100 h/Jahr."
- **Demo/Ablauf:** Ambassador leitet weiter: Pitch-Formular (Forms, 5 Felder = Steckbrief + „Warum dieser?"), Einreichfrist 10 Tage, Team-Voting im Kanal, plus „Fang die Fälschung"-Quiz Q3. Das Kernteam konsolidiert alle Pitches in die Use-Case-Log-Liste (Nutzen/Aufwand-Raster) für Q4.
- **Guardrail:** Zeitersparnis-Schätzungen bleiben konservativ und werden von der Teamleitung plausibilisiert — die Glaubwürdigkeit der Pipeline ist wichtiger als große Zahlen.

---

## Q4 (Wochen 40–52): KI-Agenten, Automatisierungs-Pipelines & Skalierung

---

**Woche 40 – „Was ist ein Agent? Der Unterschied zwischen Antworten und Handeln"** · Typ A
- **Literacy-Ziel:** Das mentale Modell „Agent = KI mit Auftrag, Werkzeugen und mehreren Schritten" verankern — Hype von Realität trennen.
- **Kernbotschaften:**
  - Chat beantwortet eine Frage; ein Agent verfolgt ein Ziel über mehrere Schritte und nutzt dabei Werkzeuge (Dokumente lesen, Entwürfe erstellen, Daten nachschlagen).
  - Agenten sind konfigurierte Assistenten mit Leitplanken — keine autonomen Kollegen.
  - Alles aus Q1 gilt doppelt: Mehr Schritte heißt mehr Stellen, an denen geprüft werden muss.
- **Versicherungsbeispiel:** Gegenüberstellung: Chat-Frage „Was ist eine Elementardeckung?" vs. Agent-Auftrag „Prüfe eingehende Sturmschaden-Meldungen auf Vollständigkeit und entwirf den passenden Nachforderungsbrief" — Ziel, Schritte, Werkzeuge, Stopp-Punkt.
- **Demo-Skript (3 Min):** (1) Folie: Chat vs. Agent als Bild (Frage→Antwort vs. Ziel→Plan→Schritte→Entwurf→Mensch). (2) Live: einen vorbereiteten einfachen Agenten (z. B. in Copilot konfigurierter „Richtlinien-Lotse" aus Woche 35 als Agent-Variante) eine Frage beantworten lassen und zeigen, wie er selbstständig im Dokument nachschlägt. (3) Den Stopp-Punkt zeigen: Der Agent legt einen Entwurf vor — gesendet wird von Menschen. Merksatz: „Ein Agent hat einen Auftrag, kein Mandat."
- **Guardrail:** Begriffs-Hygiene: Nicht alles, was „Agent" heißt, ist eines — und kein Agent im Haus handelt ohne definierte Grenzen und menschlichen Freigabepunkt.

---

**Woche 41 – „Der Agenten-Steckbrief: Auslöser, Wissen, Aktionen, Grenzen"** · Typ B
- **Literacy-Ziel:** Agenten in vier Bausteinen beschreiben können — die gemeinsame Sprache zwischen Fachbereich und IT.
- **Kernbotschaften:**
  - Jeder Agent lässt sich vollständig beschreiben mit: Auslöser (wann startet er?), Wissen (worauf greift er zu?), Aktionen (was darf er tun?), Grenzen (wo muss er stoppen?).
  - Wer den Steckbrief ausfüllen kann, kann mit der IT auf Augenhöhe über Automatisierung sprechen.
- **Versicherungsbeispiel:** Steckbrief „Makler-Anfragen-Assistent": Auslöser = eingehende Makler-Mail im Funktionspostfach; Wissen = Produktunterlagen + Annahme-FAQ; Aktionen = Antwortentwurf in den Entwurfsordner legen; Grenzen = sendet nie selbst, keine Prämienaussagen, eskaliert Beschwerden an Menschen.
- **Klau-Prompt (Denkwerkzeug im internen Chatbot):** `Ich beschreibe eine Aufgabe aus meinem Arbeitsalltag: [Aufgabe]. Fülle dafür einen Agenten-Steckbrief aus (Auslöser, benötigtes Wissen, erlaubte Aktionen, zwingende Grenzen/Stopp-Punkte) und nenne die 3 größten Risiken dieser Automatisierung.`
- **Guardrail:** Das Feld „Grenzen" ist das wichtigste — ein Steckbrief ohne Stopp-Punkte ist keine Idee, sondern ein Risiko.

---

**Woche 42 – „Mensch in der Schleife: Wo Agenten anhalten MÜSSEN"** · Typ C
- **Literacy-Ziel:** Die nicht verhandelbaren Stopp-Punkte kennen — Governance als Teil der Literacy, nicht als Anhängsel.
- **Kernbotschaften:**
  - Zwingende menschliche Freigabe bei: Zahlungen, Ablehnungen, Vertragsänderungen, allem mit Rechtswirkung nach außen, allem mit Personenbewertung.
  - Der EU AI Act verlangt für viele Versicherungs-Anwendungen genau das: menschliche Aufsicht, Transparenz, Dokumentation — unsere Stopp-Punkte sind also kein Misstrauen, sondern Berufsstandard.
  - „Der Agent hat's gemacht" ist keine Verantwortungsübergabe — verantwortlich bleibt immer ein Mensch.
- **Versicherungsbeispiel:** Zwei Varianten desselben Prozesses „Kfz-Glasschaden": Entwurfs-Agent (bereitet Freigabe vor — zulässig) vs. Durchreiche-Automatik (zahlt bis 500 € selbst aus — Stopp: braucht Governance-Prozess, Freigaben, Kontrollen, bevor so etwas überhaupt diskutiert wird).
- **Klau-Prompt (Selbsttest fürs Team):** `Nimm folgenden Prozessvorschlag und markiere jeden Schritt mit AMPEL: Grün = KI darf entwerfen, Gelb = KI darf vorbereiten mit Pflicht-Prüfung, Rot = nur Mensch. Begründe jede rote Markierung. [Prozessbeschreibung]`
- **Guardrail:** Die Ampel-Übung ist Sensibilisierung, keine Rechtsberatung — verbindliche Einstufungen trifft das Governance-/Compliance-Team.

---

**Woche 43 – „Der Richtlinien-Lotse live: Unser erster sicherer Agent"** · Typ A
- **Literacy-Ziel:** Einen echten, read-only Pilot-Agenten erleben — Agenten werden vom Konzept zur Alltagserfahrung.
- **Kernbotschaften:**
  - Unser Pilot: ein Frage-Antwort-Agent auf freigegebenen internen Richtlinien — er liest nur, er verändert nichts, er zitiert immer die Fundstelle.
  - Ambassadors und ihre Teams sind die Erstnutzer (First-Access-Prinzip): Euer Feedback formt den Agenten, bevor das Haus ihn bekommt.
- **Versicherungsbeispiel:** Live-Fragen ans Tool: „Ab welchem Betrag brauche ich eine Zweitunterschrift bei Kulanz?", „Was gilt für Geschenke von Geschäftspartnern?" — Antworten mit Fundstellen-Zitat aus Kulanzrichtlinie bzw. Compliance-Richtlinie.
- **Demo-Skript (3 Min):** (1) Agent öffnen, erste Frage live stellen. (2) Fundstelle anklicken und im Originaldokument verifizieren — der Q1-Reflex, jetzt im Agenten-Kontext. (3) Eine Frage stellen, die die Richtlinien NICHT regeln — zeigen, dass der Agent das sagt (so ist er konfiguriert), statt zu erfinden. (4) Feedback-Weg zeigen: Daumen-Bewertung + Formular. Merksatz: „Ein guter Agent kennt seine Grenzen — wörtlich."
- **Guardrail:** Auch der Lotse kann Fundstellen falsch verknüpfen — bei entscheidungsrelevanten Auskünften (Compliance!) gilt: Fundstelle lesen, im Zweifel Fachstelle fragen.

---

**Woche 44 – „Prozess-Zerlegung: Die 5-Schritte-Landkarte"** · Typ B
- **Literacy-Ziel:** Prozesse in automatisierbare und menschliche Teilschritte zerlegen können — die Kernfähigkeit hinter jeder Pipeline.
- **Kernbotschaften:**
  - Nie „den Prozess automatisieren" — immer fragen: Welcher der 5 Teilschritte ist KI-tauglich?
  - Standard-Zerlegung: Eingang → Erfassen/Extrahieren → Prüfen/Anreichern → Entscheiden → Kommunizieren. KI glänzt bei 2, 3 und 5 — Schritt 4 gehört dem Menschen.
- **Versicherungsbeispiel:** Posteingang Schaden Sach: (1) Mail/Brief kommt an, (2) Daten extrahieren, (3) Vollständigkeit & Deckung vorprüfen, (4) Regulierungsentscheidung, (5) Kundenkommunikation — Schritte 2, 3, 5 sind die Q3-Use-Cases; Schritt 4 bleibt markiert als Mensch.
- **Klau-Prompt:** `Zerlege folgenden Prozess in die Schritte Eingang, Erfassen, Prüfen, Entscheiden, Kommunizieren. Bewerte je Schritt: heutiger Zeitanteil (schätzen), KI-Eignung (hoch/mittel/keine) mit Begründung, benötigte Dokumente/Daten. Format: Tabelle. [Prozess]`
- **Guardrail:** Die Schätzwerte aus dem Prompt sind Diskussionsgrundlage — echte Zeitanteile misst man im Team, bevor eine Pipeline gebaut wird.

---

**Woche 45 – „Die Pipeline: Wenn Teilschritte Hand in Hand arbeiten"** · Typ C
- **Literacy-Ziel:** Verstehen, wie einzelne KI-Bausteine zu einer Automatisierungs-Pipeline mit Kontrollpunkten zusammenwachsen.
- **Kernbotschaften:**
  - Eine Pipeline ist eine Kette aus Woche-44-Schritten mit definierten Übergaben — und an jeder kritischen Übergabe sitzt ein Kontrollpunkt.
  - Faustregel: Je weiter hinten in der Kette, desto näher am Kunden, desto strenger die Kontrolle.
- **Versicherungsbeispiel:** Als Schaubild (kein Live-System): Sturmschaden-Meldung → Extraktion (KI) → Vollständigkeits-Check gegen Bedingungswerk (KI, mit Fundstellen) → Sachbearbeiter-Freigabe [KONTROLLPUNKT] → Nachforderungsbrief-Entwurf (KI) → Versand durch Menschen [KONTROLLPUNKT].
- **Klau-Prompt (Verständnis-Übung):** `Zeichne folgende Prozesskette als Textdiagramm mit Pfeilen und markiere jeden Punkt, an dem ein Mensch prüfen oder freigeben sollte, mit [KONTROLLPUNKT] plus einer Begründung in Klammern: [Prozessschritte aus Woche 44 einfügen]`
- **Guardrail:** Kontrollpunkte sind keine Bremse, sondern die Bedingung, unter der Automatisierung überhaupt genehmigungsfähig ist — wer sie wegoptimiert, verliert das ganze Vorhaben.

---

**Woche 46 – „Priorisieren wie ein Portfolio-Manager: Die Pitch-Auswertung"** · Typ B
- **Literacy-Ziel:** Die Q3-Pipeline mit einem Nutzen/Aufwand-Raster in eine ehrliche Rangfolge bringen — inklusive KI als Sparringspartner.
- **Kernbotschaften:**
  - Aus den Use-Case-Pitches wird jetzt ein Portfolio: Quick Wins zuerst, Leuchttürme geplant, Blender aussortiert.
  - Die Bewertung ist transparent — jedes Team sieht, wo sein Pitch steht und warum.
- **Versicherungsbeispiel:** Die konsolidierte Pitch-Liste des Hauses (z. B. 25 Einreichungen) wird nach Nutzen (Stunden/Jahr, Fehlerreduktion) und Aufwand (Datenlage, Governance-Bedarf, IT-Abhängigkeit) sortiert — die Top 5 gehen in die Übergabe (Woche 47).
- **Klau-Prompt (Kernteam & Ambassadors, im internen Chatbot):** `Hier ist unsere Use-Case-Liste mit Feldern [Aufgabe, Häufigkeit, Zeitaufwand, Dokumente, Ersparnis-Schätzung]. Ordne jeden Case in eine 2x2-Matrix (Nutzen hoch/niedrig × Aufwand hoch/niedrig) ein, begründe je Einordnung in einem Satz und nenne je Quick Win die eine kritische Annahme, die vor dem Start geprüft werden muss.`
- **Guardrail:** Die KI-Einordnung ist ein Erstsortierung-Vorschlag — die finale Priorisierung trifft das Kernteam mit den Fachbereichen, denn politische und regulatorische Faktoren stehen nicht in der Tabelle.

---

**Woche 47 – „Die Übergabe: Vom Steckbrief zur Projektreife"** · Typ A
- **Literacy-Ziel:** Verstehen, was IT/Transformation braucht, um einen Use Case zu bauen — und die Rolle der Fachpaten etablieren.
- **Kernbotschaften:**
  - Ein projektreifer Use Case hat: Steckbrief + Prozess-Zerlegung (W44) + Ampel-Bewertung (W42) + benannten Fachpaten aus dem Team.
  - Die Ideengeber bleiben als Fachpaten am Ball — mit Namen im Projektsteckbrief. Das ist das Karrierekapital-Versprechen, eingelöst.
- **Versicherungsbeispiel:** Live-Durchgang der Nr.-1-Priorität aus Woche 46 (z. B. „Nachforderungsbriefe Sturmschaden"): alle vier Bausteine werden am Bildschirm zu einer 2-seitigen Anforderungsskizze zusammengefügt.
- **Demo-Skript (3 Min):** (1) Die vier Bausteine als Puzzle-Folie zeigen. (2) Im Dokumentenanalyse-Tool/Chatbot: `Füge Steckbrief, Prozess-Zerlegung und Ampel-Bewertung zu einer Anforderungsskizze zusammen: Ziel, Umfang, ausgeschlossener Umfang, benötigte Daten/Dokumente, Kontrollpunkte, offene Fragen an IT. Maximal 2 Seiten.` (3) Ergebnis zeigen, Fachpaten-Rolle erklären (ca. 1 h/Monat, zählt aufs Ambassador-Zeitbudget des Paten). Merksatz: „Ihr habt die Idee geboren — ihr bleibt ihre Eltern."
- **Guardrail:** Die Anforderungsskizze verspricht nichts: Ob und wann gebaut wird, entscheiden IT-Kapazität und Governance — das wird den Teams ehrlich so kommuniziert, sonst vergiftet eine stille Absage die ganze Pipeline-Kultur.

---

**Woche 48 – „Türchen auf: Der KI-Adventskalender startet"** · Typ D
- **Literacy-Ziel:** Jahreswissen spielerisch verdichten — ein Mini-Impuls pro Arbeitstag, null Zusatzlast für Ambassadors.
- **Kernbotschaften:**
  - Ab dem 1. Dezember: jeden Arbeitstag ein „Türchen" im Kanal — der beste Prompt, Aha-Moment oder Fehlgriff des Jahres, neu verpackt.
  - Alles vorproduziert im Q4-Sprint; Ambassadors leiten nur den Kalender-Startpost weiter.
- **Versicherungsbeispiel:** Türchen-Beispiele: Tag 3 = der Anonymisier-Helfer (W11) als Weihnachtsedition; Tag 8 = „Fang die Fälschung", Spezialausgabe Bescherungs-Mythen über KI; Tag 15 = das beste Prompt-Battle-Rezept des Jahres mit Namensnennung.
- **Demo/Ablauf (für Ambassadors):** Einen einzigen Post weiterleiten: „🎄 Ab Montag jeden Tag ein Türchen im Kanal — 30 Sekunden Lesezeit, ein Prompt zum Klauen." Die Tages-Türchen postet das Kernteam zentral in den öffentlichen Kanal; Teams-Chats bekommen wöchentlich eine „Türchen der Woche"-Sammlung zum Weiterleiten.
- **Guardrail:** Der Kalender recycelt nur geprüfte Jahresinhalte — kein Türchen führt neue Tools oder ungeprüfte Prompts ein; Dezember ist Festigungszeit, nicht Neuerungszeit.

---

**Woche 49 – „Der persönliche Prompt-Ordner: Wissen, das bleibt"** · Typ B
- **Literacy-Ziel:** Individuelles Wissensmanagement: die eigenen Top-Prompts systematisch sichern und teilen.
- **Kernbotschaften:**
  - 52 Wochen Prompts sind wertlos, wenn sie im Chatverlauf versinken — jede/r baut jetzt die persönliche Top-10-Sammlung.
  - Team-Ebene: Der geteilte Prompt-Ordner (OneNote/Loop-Seite je Team) wird Teil der Einarbeitung neuer Kolleginnen und Kollegen.
- **Versicherungsbeispiel:** Eine Schadensachbearbeiterin kuratiert ihre fünf Alltags-Prompts: Thread-Zusammenfassung (W14), Erstmeldungs-Strukturierung (W29), Nachforderungsbrief, Beschwerde-Antwort (W16), Fall-Dossier (W28) — mit eigenen Anpassungen versehen.
- **Klau-Prompt (Meta-Prompt zum Kuratieren):** `Hier sind Prompts, die ich dieses Jahr genutzt habe: [einfügen]. Hilf mir, daraus meine Top-5-Bibliothek zu bauen: fasse ähnliche zusammen, verallgemeinere sie mit [Platzhaltern] für den Wiedereinsatz und gib jedem einen kurzen, findbaren Titel.`
- **Guardrail:** In die geteilte Bibliothek kommen nur Prompts mit Platzhaltern — nie ausgefüllte Beispiele mit realen Fallinhalten.

---

**Woche 50 – „Die 12 Reflexe: Was von 52 Wochen bleiben muss"** · Typ C
- **Literacy-Ziel:** Das Jahr auf zwölf dauerhafte Verhaltens-Reflexe verdichten — Selbsttest statt Frontalwiederholung.
- **Kernbotschaften:**
  - Nicht 52 Themen bleiben, sondern 12 Reflexe — von „Fundstelle zeigen lassen" über „Kontext vor Prompt" bis „Rot bei Personenbewertung".
  - Der Selbsttest ist anonym und zeigt jedem privat die eigenen Lücken — die zugehörige Wochen-Nummer steht dabei, Nachlesen dauert 2 Minuten.
- **Versicherungsbeispiel:** Test-Item: „Copilot fasst einen Schaden-Thread zusammen und nennt eine Zusage mit Frist. Was ist dein nächster Schritt?" — (a) Frist notieren, (b) Original-Mail der Zusage öffnen ✓, (c) Copilot nach der Quelle fragen.
- **Demo/Ablauf:** Ambassador leitet den Forms-Selbsttest (12 Fragen, je eine pro Reflex) plus die „12 Reflexe"-Rezeptkarte (1 PDF-Seite fürs Team-Board) weiter. Jahres-Edition „Fang die Fälschung" läuft parallel im Kanal.
- **Guardrail:** Ergebnisse werden nie pro Person ausgewertet oder verglichen — aggregierte Team-Lücken fließen anonym in die Jahr-2-Themenplanung.

---

**Woche 51 – „Aktuell bleiben ohne Hype: Der Skepsis-Kompass"** · Typ B
- **Literacy-Ziel:** Selbstständige Weiterbildung nach Curriculum-Ende: seriöse Quellen erkennen, Hype-Behauptungen prüfen.
- **Kernbotschaften:**
  - Die KI-Welt dreht sich weiter — euer Kompass: Wer behauptet es? Gibt es eine nachvollziehbare Quelle? Wurde es unabhängig geprüft? Gilt es für unseren regulierten Kontext?
  - Interne Anlaufstelle bleibt der Ambassador-Kanal: Dort werden Neuigkeiten eingeordnet, bevor sie Gerücht werden.
- **Versicherungsbeispiel:** Ein LinkedIn-Post behauptet: „KI reguliert Schäden jetzt vollautomatisch ohne Menschen." Kompass-Prüfung im Team: Quelle? (Anbieter-Marketing) — Kontext? (anderes Rechtssystem) — Übertragbar? (Woche 42: bei uns zwingend Mensch in der Schleife).
- **Klau-Prompt:** `Hier ist eine Behauptung über KI, die ich gelesen habe: [Text]. Prüfe sie kritisch: (1) Welche Teilaussagen sind belegbar, welche sind Zuspitzung? (2) Welche Fragen müsste ich dem Urheber stellen? (3) Was davon wäre in einem regulierten Versicherungsumfeld überhaupt zulässig?`
- **Guardrail:** Auch die KI-Antwort auf den Skepsis-Prompt kann falsch liegen — der Kompass ist eine Denkroutine, kein Wahrheitsautomat.

---

**Woche 52 – „Graduation: Das Jahr in Zahlen — und die Staffelübergabe"** · Typ A/D
- **Literacy-Ziel:** Wirkung sichtbar machen, Status auszahlen, das Jahr-2-Modell starten — das Netzwerk überlebt seinen eigenen Erfolg.
- **Kernbotschaften:**
  - Das Jahr in drei Zahlen: Copilot-Aktivquote (Ambassador-Teams vs. Rest), dokumentierte Use Cases mit plausibilisierter Zeitersparnis, erreichte Kolleginnen und Kollegen.
  - Zertifikatsverleihung „Certified AI Ambassador", unterschrieben vom ranghöchsten Sponsor — LinkedIn-tauglich, Personalakten-tauglich.
  - Jahr 2: Alumni-Modell (erfahrene Ambassadors wählen: weitermachen, Fachpate werden oder mit Dank ausscheiden) plus Rekrutierung der zweiten Generation — Übergabe ist Ehre, nicht Abgang.
- **Versicherungsbeispiel:** Die Abschluss-Story fürs Haus: der Weg eines konkreten Use Cases von der Team-Idee (W27-Steckbrief einer Sachbearbeiterin) über den Pitch (W39) bis zur Anforderungsskizze bei der IT (W47) — mit Namen und Gesicht.
- **Demo-Skript (Showcase-Format, 15 Min statt 3):** (1) Die Drei-Zahlen-Folie. (2) Zwei Ambassadors erzählen je 3 Minuten ihre Use-Case-Story. (3) Zertifikatsübergabe durch Sponsor/Patin. (4) Jahr-2-Aufruf: Nominierung der nächsten Generation durch die Teams. (5) Dank an die Teamleitungen — namentlich, denn ihre Zeitfreigabe war die eigentliche Währung des Jahres.
- **Guardrail:** Die Drei-Zahlen-Folie zeigt nur teamleitungs-plausibilisierte Werte und aggregierte Nutzungsdaten — der letzte Post des Jahres muss der glaubwürdigste sein.

---

---

## Adversarialer Stresstest: 3 Wochen Ausfall in der Schaden-Hochsaison

**Das Szenario:** Sturmtief im Oktober. Die Ambassadorin in der Schadenabteilung arbeitet drei Wochen lang nur Großschadenlagen ab. Kein Typ-A-Insert, keine Weiterleitungen, keine Sync-Teilnahme. Bricht die Architektur?

**Warum das System das aushält — fünf eingebaute Sollbruchstellen:**

1. **Jede Woche ist zustandslos.** Kein Micro-Kit setzt das vorherige voraus (die Reflexe bauen aufeinander auf, die *Posts* nicht). Drei verpasste Wochen erzeugen keine Lernschuld — Woche 4 funktioniert ohne Woche 1–3. Es gibt nichts „nachzuholen", nur etwas „nachzulesen", freiwillig, im Archiv.

2. **Typ B/C sind delegierbar auf Weiterleitungs-Niveau.** Ein fertiger Post braucht keinen Ambassador — der Tandempartner (Paar-Regel!), die Teamleitung oder das Kernteam selbst kann ihn in den Team-Chat stellen. In der Hochsaison schaltet das Kernteam betroffene Teams auf **Direktzustellung**: Die Posts kommen drei Wochen lang zentral, die Ambassadorin tut exakt nichts. Das ist ein vorgesehener Betriebsmodus, kein Notfall.

3. **Typ A entfällt ersatzlos — per Design.** Die Regel lautet: Ein ausgefallenes Show-&-Tell wird **nicht nachgeholt**, denn Nachholen erzeugt Doppelbelastung im Folgemonat und genau das Schuldgefühl, das Freiwillige tötet. Das Team bekommt stattdessen das 3-Minuten-Demovideo des Kernteams als Weiterleitung. Erkenntnis aus der Netzwerk-Praxis: Ein Video-Monat kostet etwas Wirkung, ein schuldbewusster Ambassador kostet das ganze Jahr.

4. **Die Pausen-Meldung kostet einen Satz und erzeugt null Rechtfertigung.** Prozess: eine Zeile im Ambassador-Kanal („Sturmlage, bin 3 Wochen raus") — Antwort des Kernteams ist standardisiert positiv („Verstanden, wir übernehmen, melde dich wenn's passt") und öffentlich sichtbar, damit alle sehen: Pausieren ist normal. Es gibt **keine wöchentliche Anwesenheitsmessung** von Ambassadors — der einzige Berichtspunkt ist die Monatszahl, und „0 diese Runde" ist eine gültige, kommentarlos akzeptierte Antwort.

5. **Der Wiedereinstieg ist ein einziger Post, kein Aufholprogramm.** Nach der Rückkehr schickt das Kernteam eine persönliche „Willkommen zurück"-Nachricht mit einem **Kondensat der verpassten Wochen als einem einzigen Nugget** (drei Prompts, drei Sätze) plus dem Hinweis, welcher Typ-A-Termin als Nächstes ansteht — vorbereitet wie immer vom Kernteam. Einstiegskosten: 10 Minuten. Und: Die Sturm-Erfahrung selbst wird zum Content veredelt — „Welcher Prompt hat dir in der Lage geholfen?" wird das Ambassador-Spotlight im nächsten Sync. Der Ausfall wird so rückwirkend zur Statusquelle statt zur Bringschuld.

**Die eine echte Schwachstelle, ehrlich benannt:** Fällt in einer Abteilung das *ganze Tandem* länger als sechs Wochen aus, verliert das Team spürbar Momentum — Direktzustellung hält die Sichtbarkeit, aber ohne lokales Gesicht sinkt die Aktivierung. Gegenmaßnahme im Design: Bei absehbar langen Ausfällen (Elternzeit, Projektabordnung) rekrutiert das Kernteam über die Teamleitung eine **Interims-Nominierung** — mit der Woche-1-Erfahrung des Hauses dauert das Anlernen eines Interims-Ambassadors genau ein Demovideo und einen Sync. Das System ist also nicht ausfallsicher, aber **ausfalltolerant mit definierter Reparaturroutine** — mehr kann eine Null-Budget-Architektur ehrlich nicht versprechen, und mehr braucht sie auch nicht.
