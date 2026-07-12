Wir haben in den vorherigen Schritten den E2E AI Lifecycle Process erfolgreich ausgearbeitet. Jetzt müssen wir diesen Prozess in eine formelle, verbindliche Unternehmensrichtlinie (Policy für AI Lifecycle Management) überführen.

Rolle: Agiere als Chief Enterprise Architect und IT-Compliance-Experte.

Phase 1: Lücken-Analyse & Interview
Bevor du das Dokument entwirfst, musst du sicherstellen, dass wir die Governance-Rahmenbedingungen klar haben. Stelle mir 3 bis 4 präzise Fragen zu Themen, die für eine offizielle Richtlinie zwingend geklärt sein müssen (z. B. Wer ist der formelle "Sponsor" der Richtlinie? Welche Konsequenzen hat ein Verstoß? Wie gehen wir mit Ausnahmegenehmigungen um?).
Nutze das AskUserQuestion Tool.

Phase 2: Der Richtlinien-Entwurf (Execution Rules)
Sobald du meine Antworten hast, erstellst du den vollständigen Draft der Richtlinie basierend auf all unseren bisherigen Erarbeitungen. Halte dich strikt an diese Vorgaben:

1. Null-Halluzination & Harte Platzhalter: Du darfst keine Prozessschritte, Gremien oder Rollen erfinden, die wir nicht besprochen haben. Wo Informationen fehlen, nutzt du exakt diese Syntax, rot markiert oder fett: [DECISION NEEDED: <Was genau muss noch von wem definiert werden?>]. Keine generischen [Hier Text einfügen] Platzhalter!
2. Verbindliche Sprache (Anti-Weasel-Words): Eine Richtlinie ist kein Ratgeber. Streiche Wörter wie "sollte", "idealerweise", "in der Regel" oder "kann". Nutze stattdessen harte Direktiven: "muss", "ist verantwortlich für", "darf nicht", "erfordert".
3. Struktur & Visualisierung:

Nutze eine klare rechtliche/administrative Gliederung (1.0 Zweck, 2.0 Geltungsbereich, 3.0 Rollen & Verantwortlichkeiten, 4.0 Der Prozess...).

Erstelle eine klare RACI-Matrix (Responsible, Accountable, Consulted, Informed) als Tabelle für die wichtigsten Gate-Freigaben (z. B. PoC zu Produktion, Decommissioning).

Nutze Mermaid.js, um den gesamten Lifecycle-Prozess als übersichtliches Flowchart direkt im Dokument zu visualisieren.
4. Adversarial Pass (Der Audit-Check): Bevor du den Draft finalisierst, lies ihn aus der Perspektive eines internen Auditors (Revision). Suche nach vagen Zuständigkeiten (z.B. "Das Management prüft..."). Welches Management genau? Wenn das unklar ist, ersetze es durch einen [DECISION NEEDED]-Platzhalter. Die Richtlinie darf keine Schlupflöcher für unklare Verantwortlichkeiten lassen.