const {
    Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, ImageRun,
    WidthType, ShadingType, AlignmentType, BorderStyle, VerticalAlign
} = require("docx");
const fs = require("fs");

const C = {
    dark: "1F3864", mid: "2E5B9F", light: "DCE6F5", zebra: "F3F6FB",
    gray: "666666", border: "B7C3D6", red: "A33232", fill: "FFF9E6", code: "F0F0F0"
};
const PAGE_W = 11906, MARGIN = 900, TBL_W = PAGE_W - 2 * MARGIN;
const thin = { style: BorderStyle.SINGLE, size: 4, color: C.border };
const allThin = { top: thin, bottom: thin, left: thin, right: thin };

function run(t, o = {}) {
    return new TextRun({ text: t, font: o.mono ? "Consolas" : "Calibri", size: o.size || 19, bold: !!o.bold, italics: !!o.i, color: o.color || "222222" });
}
function DN(t) { return run(`[DECISION NEEDED: ${t}]`, { bold: true, color: C.red }); }
function DNs(t, size) { return new TextRun({ text: `[DECISION NEEDED: ${t}]`, font: "Calibri", size: size || 19, bold: true, color: C.red }); }
function para(t, o = {}) {
    return new Paragraph({
        alignment: o.align,
        spacing: { before: o.before ?? 20, after: o.after ?? 80, line: 270 },
        children: Array.isArray(t) ? t : [run(t, o)]
    });
}
function h1(nr, title) {
    return new Paragraph({
        spacing: { before: 240, after: 100 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: C.dark, space: 2 } },
        children: [run(`${nr}  ${title}`, { bold: true, size: 24, color: C.dark })]
    });
}
function h2(nr, title) {
    return new Paragraph({
        spacing: { before: 160, after: 60 },
        children: [run(`${nr}  ${title}`, { bold: true, size: 20, color: C.mid })]
    });
}
function cell(kids, o = {}) {
    return new TableCell({
        width: { size: o.w, type: WidthType.DXA },
        columnSpan: o.span,
        verticalAlign: VerticalAlign.CENTER,
        shading: o.fill ? { type: ShadingType.CLEAR, fill: o.fill } : undefined,
        margins: { top: 40, bottom: 40, left: 90, right: 90 },
        borders: allThin,
        children: Array.isArray(kids) ? kids : [kids]
    });
}
function tcell(t, o = {}) {
    return cell(para(t, { size: o.size || 17, bold: o.bold, color: o.color, i: o.i, mono: o.mono, align: o.align, before: 10, after: 10 }), o);
}
function simpleTable(colw, headerCells, bodyRows, opt = {}) {
    const header = new TableRow({
        tableHeader: true,
        children: headerCells.map((h, i) => tcell(h, { w: colw[i], bold: true, fill: C.light, align: opt.centerHeader ? AlignmentType.CENTER : undefined, size: opt.hsize || 17 }))
    });
    const rows = bodyRows.map((r, idx) => new TableRow({
        cantSplit: true,
        children: r.map((c, i) => {
            const base = { w: colw[i], fill: idx % 2 ? C.zebra : undefined };
            if (c && c.__paras) return cell(c.__paras, base);
            if (typeof c === "object") return tcell(c.t, { ...base, ...c });
            return tcell(c, { ...base, size: 17, color: "333333" });
        })
    }));
    return new Table({ width: { size: TBL_W, type: WidthType.DXA }, columnWidths: colw, rows: [header, ...rows] });
}
function gap(h = 80) { return new Paragraph({ spacing: { before: 0, after: h }, children: [] }); }
function codeLine(t) {
    return new Paragraph({
        spacing: { before: 0, after: 0, line: 240 },
        shading: { type: ShadingType.CLEAR, fill: C.code },
        children: [new TextRun({ text: t.length ? t : " ", font: "Consolas", size: 14, color: "333333" })]
    });
}

const children = [];

// ===== Deckblatt-Kopf =====
children.push(new Table({
    width: { size: TBL_W, type: WidthType.DXA }, columnWidths: [7106, 3000],
    rows: [new TableRow({
        children: [
            new TableCell({
                width: { size: 7106, type: WidthType.DXA },
                shading: { type: ShadingType.CLEAR, fill: C.dark },
                margins: { top: 140, bottom: 140, left: 140, right: 140 },
                borders: allThin,
                children: [
                    new Paragraph({ spacing: { before: 0, after: 20 }, children: [run("KONZERNRICHTLINIE", { size: 17, color: "C9D6EC" })] }),
                    new Paragraph({ spacing: { before: 0, after: 20 }, children: [run("AI LIFECYCLE MANAGEMENT", { bold: true, size: 32, color: "FFFFFF" })] }),
                    new Paragraph({ spacing: { before: 0, after: 0 }, children: [run("Verbindliche Regelung des End-to-End-Lebenszyklus produktiver KI-Lösungen", { size: 17, color: "C9D6EC" })] })
                ]
            }),
            new TableCell({
                width: { size: 3000, type: WidthType.DXA },
                shading: { type: ShadingType.CLEAR, fill: C.dark },
                margins: { top: 140, bottom: 140, left: 140, right: 140 },
                borders: allThin, verticalAlign: VerticalAlign.CENTER,
                children: [
                    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 20 }, children: [run("STATUS", { bold: true, size: 16, color: "C9D6EC" })] }),
                    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0 }, children: [run("ENTWURF v0.1", { bold: true, size: 22, color: "FFFFFF" })] })
                ]
            })
        ]
    })]
}));
children.push(gap(100));

// Dokumentensteuerung
const dsW = [2400, 7706];
children.push(new Table({
    width: { size: TBL_W, type: WidthType.DXA }, columnWidths: dsW,
    rows: [
        ["Dokumenten-ID", [DNs("Dokumenten-ID und Einordnung in das Konzern-Richtlinienwerk – durch den Richtlinieneigner zu vergeben", 17)]],
        ["Version / Status", [run("0.1 / Entwurf zur Beschlussfassung", { size: 17 })]],
        ["Richtlinieneigner (Sponsor)", [DNs("Richtlinieneigner/Sponsor – durch die Geschäftsleitung zu benennen; alle Eskalations- und Inkraftsetzungsregelungen dieser Richtlinie referenzieren diese Rolle", 17)]],
        ["Erarbeitet durch", [run("Center of Excellence AI (CoE AI)", { size: 17 })]],
        ["Inkrafttreten", [run("nach Erfüllung der Voraussetzungen gemäß Abschnitt 10.0", { size: 17 })]],
        ["Überprüfungszyklus", [DNs("Überprüfungszyklus der Richtlinie – durch den Richtlinieneigner festzulegen", 17)]],
        ["Mitgeltende Unterlagen", [run("siehe Abschnitt 11.0", { size: 17 })]],
    ].map((r, idx) => new TableRow({
        cantSplit: true, children: [
            tcell(r[0], { w: dsW[0], bold: true, fill: C.light }),
            cell(new Paragraph({ spacing: { before: 10, after: 10 }, children: r[1] }), { w: dsW[1], fill: idx % 2 ? C.zebra : undefined })
        ]
    }))
}));
children.push(gap());

// ===== 1.0 Zweck =====
children.push(h1("1.0", "Zweck"));
children.push(para("Diese Richtlinie regelt verbindlich den vollständigen Lebenszyklus von KI-Lösungen im Unternehmen – von der Idee über Entwicklung, Betrieb, Wertmessung und Skalierung bis zur Abschaltung (E2E AI Lifecycle Process). Sie stellt sicher, dass jede produktive KI-Lösung ihren wirtschaftlichen Beitrag fortlaufend nachweist, dass Betriebs- und Governance-Verantwortung eindeutig zugeordnet sind und dass Lösungen ohne nachgewiesenen Wert nach einem definierten Verfahren abgeschaltet werden. Die im bestehenden AI Ideation Process geregelten Assessments bleiben unberührt und werden durch diese Richtlinie in einen durchgängigen Lifecycle eingebettet."));

// ===== 2.0 Geltungsbereich =====
children.push(h1("2.0", "Geltungsbereich"));
children.push(h2("2.1", "Sachlicher Geltungsbereich"));
children.push(para("Diese Richtlinie gilt für jede KI-Lösung im Sinne von Abschnitt 3.0, unabhängig vom technischen Stack (Cloud-Eigenbau, M365 Copilot / SaaS, On-Prem-Eigenbetrieb). Proof of Concepts und Experimente unterliegen den Pflichten der Phase 1; produktive Lösungen unterliegen allen Phasen. Lösungen mit Vollkosten unter 20 k€ p.a. durchlaufen das Light-Review gemäß Value One-Pager (Abschnitte 1, 3, 4) und müssen mindestens die Telemetrie-Events E1 und E2 sowie das Kosten-Tagging erfüllen."));
children.push(h2("2.2", "Zeitlicher Geltungsbereich"));
children.push(para("Für KI-Lösungen, deren Genehmigung nach Inkrafttreten dieser Richtlinie erfolgt, gilt die Richtlinie vollständig ab Genehmigung. Bestandslösungen müssen die Anforderungen des Minimal-Telemetrie-Standards und des Kosten-Taggings innerhalb von 12 Monaten nach Inkrafttreten erfüllen. Nach Ablauf dieser Frist gilt für nicht konforme Bestandslösungen die Nicht-messbar-Regel (Schwelle S6): Das jeweilige Quartal wird im Value Review rot gewertet und zählt für den Kill-Trigger."));
children.push(h2("2.3", "Organisatorischer Geltungsbereich"));
children.push(para([
    run("Die Richtlinie gilt für alle Organisationseinheiten des Unternehmens. ", {}),
    DN("Geltung für Tochtergesellschaften und Beteiligungen – durch den Richtlinieneigner festzulegen")
]));

// ===== 3.0 Begriffe =====
children.push(h1("3.0", "Begriffsbestimmungen"));
children.push(simpleTable(
    [2700, 7406],
    ["Begriff", "Definition"],
    [
        [{ t: "KI-Lösung", bold: true }, "Anwendung, die KI-Funktionalität in einen Geschäftsprozess einbringt und im AI-Use-Case-Inventar mit eindeutiger Use-Case-ID (solution_id) registriert ist. Die Use-Case-ID verbindet Business Case, Telemetrie und Kosten."],
        [{ t: "Komponente", bold: true }, "Wiederverwendbarer Bestandteil einer KI-Lösung (Typen K1–K6) gemäß Registry- & Scaling-Standard mit Reifegrad R1–R4."],
        [{ t: "Vollkosten (TCO)", bold: true }, "Summe aus Inferenz-/Compute-Kosten, Lizenzen, anteiligen Run-Team-Kosten, Wartung/Weiterentwicklung und Plattform-/Monitoring-Umlage je Quartal."],
        [{ t: "Realisierter Wert", bold: true }, "Summe der Wertkategorien V1 (Produktivität), V2 (Vermeidung, nur mit Beleg), V3 (Kapazität, nur bei nachgewiesener Umwidmung), V4 (nur falls hart quantifiziert) gemäß Value One-Pager."],
        [{ t: "ROI-Quote", bold: true }, "Realisierter Wert ÷ TCO im Quartal. Ampelschwellen: ≥ 1,0 grün · 0,5–1,0 gelb · < 0,5 rot (ab Q4 nach Go-Live)."],
        [{ t: "Berechtigte Nutzer", bold: true }, "Alle Personen mit der Prozessrolle, für die die Lösung gebaut wurde – nicht die zugewiesenen Lizenzen. Festlegung im Business Case; Änderung nur per Beschluss des AI Portfolio Boards."],
        [{ t: "Adoption-Quote", bold: true }, "Ø Weekly Active Users im Quartal ÷ berechtigte Nutzer."],
        [{ t: "Annahmequote", bold: true }, "Übernommene KI-Outputs ÷ alle Outputs (Event E4 oder Quartals-Stichprobe n ≥ 30); Multiplikator im V1-Wert."],
        [{ t: "Value Review", bold: true }, "Quartalsweise Bewertung jeder produktiven Lösung durch das AI Portfolio Board auf Basis des Value One-Pagers (Gate G3)."],
        [{ t: "Kill-Trigger", bold: true }, "Zwei rote Quartale in Folge erzeugen automatisch einen Kill-Antrag an das AI Portfolio Board."],
        [{ t: "Waiver", bold: true }, "Befristete, schriftlich beschlossene Ausnahme von einzelnen Regelungen dieser Richtlinie gemäß Abschnitt 8.0."],
    ]
));

// ===== 4.0 Rollen =====
children.push(h1("4.0", "Rollen und Verantwortlichkeiten"));
children.push(para("Jede produktive KI-Lösung muss zu jedem Zeitpunkt einen benannten AI Solution Owner und einen benannten Product Owner (IT) haben. Vakanzen müssen dem CoE AI unverzüglich gemeldet und innerhalb von 30 Tagen nachbesetzt werden.", { after: 60 }));
children.push(simpleTable(
    [2700, 7406],
    ["Rolle", "Verbindliche Verantwortlichkeiten"],
    [
        [{ t: "AI Solution Owner (Fachbereich)", bold: true }, "Ist verantwortlich für den Business Case inkl. Baseline-Messung und Exit-Kriterien, für die Durchführung der Governance-Assessments gemäß AI Ideation Process (Datenschutz, KI & Information Governance, RIA, IT-Ausschuss, VVV, Application Inventory, Application Navigator), für die Adoption entlang der Rampe inkl. der Pflichtmaßnahmen des Adoption-Standards, für die Beibringung der V2-/V3-Belege sowie für den fachlichen Kommentar im Value One-Pager."],
        [{ t: "Product Owner (IT) mit Run-Team", bold: true }, "Ist verantwortlich für den technischen Betrieb (Verfügbarkeit, SLA gemäß Betriebsübergabe-Dokument), für Implementierung und ununterbrochene Verfügbarkeit der Telemetrie (Schwelle S6), für die Bestätigung der TCO-Ist-Werte im Value One-Pager, für die Bearbeitung der Eskalationsschwellen S1, S2, S5, S6 und für die Durchführung des Decommissionings."],
        [{ t: "Center of Excellence AI (CoE AI)", bold: true }, "Ist verantwortlich für den Reuse-Check vor jeder Neuentwicklung, für die Telemetrie-Abnahme am Go-Live-Gate G2, für Scaling-Assessments (max. 4 Wochen), für Betrieb und jährlichen Review der Registry, für die Baseline-Revalidierung bei Lösungen mit Vollkosten über 100 k€ p.a., für die Pflicht-Reviews bei Schwelle S2 sowie für die Feststellung und Eskalation von Verstößen gemäß Abschnitt 9.0."],
        [{ t: "AI Portfolio Board", bold: true, __x: 1 }, ""],
        [{ t: "Konzern-Controlling", bold: true, __x: 2 }, ""],
        [{ t: "Bereich Data & AI", bold: true, __x: 3 }, ""],
        [{ t: "Bereichsleiter der zahlenden Business Unit", bold: true }, "Trägt die Vollkosten der Lösung über die BU-Verrechnung. Muss den Remediation-Plan bei einer Kill-Verlängerung gegenzeichnen. Hat im Kill-Verfahren Rederecht, aber kein Vetorecht."],
        [{ t: "IT-Ausschuss (Betriebsrat)", bold: true }, "Stimmt der Rahmenvereinbarung über das Telemetrie-Event-Schema zu und entscheidet über Einzelfreigaben bei Abweichungen vom Schema. Muss über jede Einführung von KI-Systemen gemäß bestehendem AI Ideation Process informiert werden und zustimmen."],
        [{ t: "Datenschutz", bold: true }, "Führt Schwellwertanalyse/DSFA gemäß AI Ideation Process durch, bestätigt die Datenschutz-Konformität der Telemetrie (Gate G2, Prüfpunkt 4) und zeichnet den Decommissioning-Nachweis gegen (Löschplan)."],
        [{ t: "KI & Information Governance", bold: true }, "Nimmt die Meldung jedes KI-Anwendungsfalls entgegen, trifft die Kritikalitätseinschätzung und erteilt die PoC-Freigabe gemäß bestehendem AI Ideation Process (Gate G1)."],
    ].map(r => {
        if (r[0].__x === 1) {
            return [{ t: "AI Portfolio Board", bold: true }, {
                __paras: [
                    new Paragraph({
                        spacing: { before: 10, after: 10 }, children: [
                            run("Geht aus dem bestehenden AI Synergy Board hervor, erweitert um einen stimmberechtigten Sitz des Konzern-Controllings/CFO-Office ", { size: 17, color: "333333" }),
                            DNs("Benennung des stimmberechtigten Mitglieds Controlling/CFO-Office – durch das CFO-Ressort", 17),
                            run(". Ist verantwortlich für die Priorisierung neuer Cases (G1), die Ampelvergabe im Quartals-Value-Review (G3), Rollout-Beschlüsse (G4), Kill-Beschlüsse (G5), Waiver-Entscheidungen (Abschnitt 8.0), Änderungen des Nenners der berechtigten Nutzer sowie Freigaben von Änderungen an den mitgeltenden Standards. Das Abschaltmandat des Boards erfordert einen Vorstandsbeschluss ", { size: 17, color: "333333" }),
                            DNs("Vorstandsbeschluss zum Abschaltmandat – Datum und Beschluss-Nr. nachzutragen", 17),
                            run(". Die Scaling-Prüfung erfolgreicher Lösungen hat in der Tagesordnung Vorrang vor der Priorisierung neuer Ideen. ", { size: 17, color: "333333" }),
                            DNs("Geschäftsordnung des AI Portfolio Boards (Zusammensetzung, Beschlussfähigkeit, Stimmrechte, Sitzungsfrequenz) – im Zuge der Board-Konstituierung festzulegen", 17)
                        ]
                    })
                ]
            }];
        }
        if (r[0].__x === 2) {
            return [{ t: "Konzern-Controlling", bold: true }, {
                __paras: [
                    new Paragraph({
                        spacing: { before: 10, after: 10 }, children: [
                            run("Legt die Vollkostensätze je Funktionsgruppe verbindlich fest und pflegt sie zentral; projektindividuelle Sätze sind unzulässig. ", { size: 17, color: "333333" }),
                            DNs("Liste der Vollkostensätze je Funktionsgruppe – durch Konzern-Controlling bereitzustellen", 17)
                        ]
                    })
                ]
            }];
        }
        if (r[0].__x === 3) {
            return [{ t: "Bereich Data & AI", bold: true }, {
                __paras: [
                    new Paragraph({
                        spacing: { before: 10, after: 10 }, children: [
                            run("Betreibt den zentralen Telemetrie-Store und das ROI-Dashboard; das ROI-Dashboard liest ausschließlich aus dem zentralen Store und befüllt die Value One-Pager automatisch vor. ", { size: 17, color: "333333" }),
                            DNs("Technischer Owner des zentralen Telemetrie-Stores und des ROI-Dashboards – durch die Bereichsleitung Data & AI zu benennen", 17),
                            run(" Der Salt für die Pseudonymisierung liegt ausschließlich bei der IT. ", { size: 17, color: "333333" }),
                            DNs("Verantwortliche Stelle für die Salt-Verwahrung innerhalb der IT – durch die IT-Leitung zu benennen", 17)
                        ]
                    })
                ]
            }];
        }
        return r;
    })
));

// ===== 5.0 Prozess =====
children.push(h1("5.0", "Der E2E AI Lifecycle Process"));
children.push(h2("5.1", "Phase 1 – Ideation & PoC"));
children.push(para("Jeder KI-Anwendungsfall muss im AI-Use-Case-Inventar registriert und an KI & Information Governance gemeldet werden. Der Business Case muss enthalten: (a) eine reale Baseline-Messung der Vorgangsdauer vor PoC-Start (mindestens 20 Vorgänge oder zwei Wochen Selbstaufschreibung; Methode und Rohdaten dokumentiert), (b) vom Einreicher definierte Exit-Kriterien (Ziel-Adoption, Ziel-ROI, Zeitpunkte), (c) das Ergebnis des Reuse-Checks gegen die Registry. Eine Ablehnung verfügbarer R3+-Komponenten muss technisch begründet sein; unbegründete Ablehnungen darf das AI Portfolio Board nicht akzeptieren. Baseline und berechtigte Nutzer werden mit Genehmigung eingefroren. Die Assessments des bestehenden AI Ideation Process (Abstimmung Datenschutz, Abstimmung KI & Information Governance) müssen in dieser Phase durchlaufen werden."));
children.push(h2("5.2", "Phase 2 – Deployment & Integration"));
children.push(para("Vor Go-Live müssen abgeschlossen sein: Risk & Impact Assessment, Abstimmung mit dem IT-Ausschuss, Eintrag im Verzeichnis von Verarbeitungstätigkeiten, Registrierung im Application Inventory, Durchlauf des Application Navigators (gemäß AI Ideation Process) sowie zusätzlich: (a) die Telemetrie-Abnahme durch das CoE AI gemäß Minimal-Telemetrie-Standard Abschnitt 6 (Gate G2) – ohne Abnahme darf kein Go-Live erfolgen; (b) das TCO-Sheet mit den Plan-Vollkosten p.a., gegengezeichnet durch den Bereichsleiter der zahlenden Business Unit; (c) das Betriebsübergabe-Dokument mit namentlicher Benennung von AI Solution Owner und Product Owner; (d) die Adoption-Pflichtmaßnahmen der Phase „Vor Go-Live“ gemäß Adoption-Standard (Prozessverankerung, Champions, Erwartungsmanagement); (e) die Markierung von Extraktionskandidaten für die Registry."));
children.push(h2("5.3", "Phase 3 – Operations & Monitoring"));
children.push(para("Das technische Monitoring (Verfügbarkeit, Latenz, Fehlerrate, Drift, Kosten pro Vorgang) verantwortet der Product Owner; das fachliche Monitoring (WAU, Nutzungstiefe, Annahmequote) verantwortet der AI Solution Owner. Die zahlende Business Unit muss monatlich einen automatisierten Kostenreport (Kosten, aktive Nutzer, Cost per Active User) erhalten. Die Eskalationsschwellen S1–S6 gemäß Minimal-Telemetrie-Standard Abschnitt 5 müssen mit Alert-Empfängern konfiguriert sein und lösen die dort definierten Pflicht-Aktionen aus. Lösungsindividuelle Schatten-Dashboards dürfen nicht als Grundlage für Value Reviews verwendet werden."));
children.push(h2("5.4", "Phase 4 – Value Tracking & Scaling"));
children.push(para([
    run("Jede produktive Lösung muss quartalsweise ein Value Review durchlaufen (Gate G3). Der Value One-Pager wird automatisch aus dem ROI-Dashboard vorbefüllt; AI Solution Owner und Product Owner müssen ihre Abschnitte ergänzen. Die Formeln des Value One-Pagers (Real ROI, ROI-Quote, Cost per Active User, Kosten pro Vorgang) sind verbindlich; Abweichungen sind unzulässig. Die Zeitersparnis pro Vorgang muss jährlich per Stichprobe revalidiert werden; bei Vollkosten über 100 k€ p.a. führt das CoE AI die Messung durch. Für die Adoption gilt die Rampe des Adoption-Standards (Q1–2: ≥ 30 % des Zielwerts; Q3: ≥ 60 % und ROI-Quote ≥ 0,5; ab Q4: Zielwert und ROI-Quote ≥ 1,0) einschließlich der Anti-Gaming-Regeln. Bei ROI-Quote ≥ 1,5 über zwei aufeinanderfolgende Quartale und vorliegendem Übertragbarkeitsvermerk muss das AI Portfolio Board den Scaling-Prüfpfad gemäß Registry- & Scaling-Standard auslösen. Für geteilte Komponenten gelten die Verrechnungsregeln des Registry- & Scaling-Standards; durch Reuse vermiedene Entwicklungskosten dürfen nicht als V2 gebucht werden. Die Kosten der Extraktion von Komponenten auf R3/R4 trägt das CoE-/Plattformbudget. ", {}),
    DN("Budgetträger und Budgetrahmen für Registry-Extraktionen (Plattformbudget) – durch die Geschäftsleitung festzulegen")
]));
children.push(h2("5.5", "Phase 5 – Decommissioning"));
children.push(para([
    run("Zwei rote Quartale in Folge erzeugen automatisch einen Kill-Antrag aus dem ROI-Dashboard an das AI Portfolio Board. Der betroffene Fachbereich darf genau einmal eine Verlängerung um ein Quartal erwirken; sie erfordert einen schriftlichen Remediation-Plan, der auf der Diagnose-Matrix des Adoption-Standards aufsetzt und genau eine Hauptursache benennt, sowie die Gegenzeichnung des Bereichsleiters. Ein Plan, der ausschließlich weitere Schulungen vorsieht, erfüllt diese Anforderung nicht. Das AI Portfolio Board beschließt den Kill mit einfacher Mehrheit; der betroffene Bereichsleiter hat Rederecht, aber kein Vetorecht. Nach Kill-Beschluss muss die Abschaltung innerhalb von 90 Tagen abgeschlossen sein: Nutzerkommunikation, Datenarchivierung/-löschung gemäß Löschplan und VVV, Austragung aus Application Inventory und RIA-Register, Abbau der Ressourcen sowie Extraktion verwertbarer Komponenten in die Registry vor Abschaltung. Der Decommissioning-Nachweis muss durch den Product Owner (Ressourcen abgebaut, Kosten auf null) und den Datenschutz (Löschplan umgesetzt) gegengezeichnet werden. ", {}),
    DN("Abnahmeinstanz des Decommissioning-Nachweises – durch den Richtlinieneigner festzulegen; bis zur Festlegung nimmt das AI Portfolio Board den Nachweis zur Kenntnis")
]));

children.push(h2("5.6", "Prozessübersicht (Flowchart)"));
const img = fs.readFileSync("/home/claude/onepager/lifecycle.png");
children.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 60, after: 60 },
    children: [new ImageRun({ type: "png", data: img, transformation: { width: 600, height: Math.round(600 * 1662 / 1856) } })]
}));
children.push(para("Mermaid.js-Quellcode des Flowcharts (für die Pflege der Richtlinie im Wiki/Confluence; rendert identisch zur Abbildung):", { size: 16, color: C.gray, after: 40 }));
const mermaid = [
    "flowchart TD",
    "    P1[\"Phase 1: Ideation & PoC<br/>Business Case: Baseline, Exit-Kriterien, Reuse-Check\"]",
    "    G1{{\"Gate G1: Priorisierung AI Portfolio Board<br/>PoC-Freigabe KI & Information Governance\"}}",
    "    P2[\"Phase 2: Deployment & Integration<br/>Assessments, TCO-Sheet, Betriebsübergabe-Dokument\"]",
    "    G2{{\"Gate G2 Go-Live: Telemetrie-Abnahme CoE AI<br/>RIA, IT-Ausschuss, VVV, Application Inventory/Navigator\"}}",
    "    P3[\"Phase 3: Operations & Monitoring<br/>Eskalationsschwellen S1-S6, monatlicher Kostenreport\"]",
    "    P4[\"Phase 4: Value Tracking & Scaling<br/>Gate G3: Quartals-Value-Review, Ampel AI Portfolio Board\"]",
    "    SC[\"Scaling-Assessment CoE AI, max. 4 Wochen<br/>+ Scaling Business Case Light\"]",
    "    G4{{\"Gate G4: Rollout-Beschluss<br/>AI Portfolio Board\"}}",
    "    KA[\"Kill-Antrag<br/>automatisch aus ROI-Dashboard\"]",
    "    G5{{\"Gate G5: Kill-Beschluss<br/>AI Portfolio Board, einfache Mehrheit\"}}",
    "    P5[\"Phase 5: Decommissioning<br/>max. 90 Tage: Daten, Ressourcen, Registry-Extraktion\"]",
    "    NW[\"Decommissioning-Nachweis<br/>Gegenzeichnung Product Owner + Datenschutz\"]",
    "    P1 --> G1 --> P2 --> G2 --> P3 --> P4",
    "    P4 -->|\"Ampel grün/gelb\"| P3",
    "    P4 -->|\"ROI-Quote >= 1,5 über 2 Quartale\"| SC --> G4",
    "    G4 -->|\"je aufnehmendem Bereich: eigene Value-Review-Einheit\"| P2",
    "    P4 -->|\"2 rote Quartale in Folge\"| KA",
    "    KA -->|\"einmalige Verlängerung nur mit Remediation-Plan\"| P3",
    "    KA --> G5 --> P5 --> NW"
];
mermaid.forEach(l => children.push(codeLine(l)));
children.push(gap());

// ===== 6.0 Gates & RACI =====
children.push(h1("6.0", "Gates und RACI-Matrix"));
children.push(simpleTable(
    [900, 3300, 5906],
    ["Gate", "Entscheidung", "Verbindliche Voraussetzungen"],
    [
        [{ t: "G1", bold: true, align: AlignmentType.CENTER }, "Priorisierung & PoC-Freigabe", "Business Case mit Baseline, Exit-Kriterien und dokumentiertem Reuse-Check; Meldung an KI & Information Governance"],
        [{ t: "G2", bold: true, align: AlignmentType.CENTER }, "Go-Live-Freigabe", "Telemetrie-Abnahme (6 Prüfpunkte lt. Minimal-Telemetrie-Standard); RIA, IT-Ausschuss, VVV, Application Inventory/Navigator; gegengezeichnetes TCO-Sheet; Betriebsübergabe-Dokument; Adoption-Pflichtmaßnahmen „Vor Go-Live“"],
        [{ t: "G3", bold: true, align: AlignmentType.CENTER }, "Quartals-Value-Review (Ampel)", "Vollständig befüllter Value One-Pager; Kommentare AI Solution Owner und Product Owner"],
        [{ t: "G4", bold: true, align: AlignmentType.CENTER }, "Scaling-/Rollout-Beschluss", "ROI-Quote ≥ 1,5 über zwei Quartale; Scaling-Assessment (CoE AI); Scaling Business Case Light mit eigener Zielbereichs-Baseline"],
        [{ t: "G5", bold: true, align: AlignmentType.CENTER }, "Kill-Beschluss", "Automatischer Kill-Antrag nach zwei roten Quartalen; ggf. abgelaufene Verlängerung mit Remediation-Plan"],
    ]
));
children.push(gap(60));
const rc = [2706, 1050, 1050, 900, 950, 900, 850, 850, 900, 950];
function raciRow(label, vals, idx) {
    return new TableRow({
        cantSplit: true, children: [
            tcell(label, { w: rc[0], bold: true, size: 16, fill: idx % 2 ? C.zebra : undefined }),
            ...vals.map((v, i) => tcell(v, { w: rc[i + 1], align: AlignmentType.CENTER, size: 16, bold: v.includes("A"), color: v.includes("A") ? C.red : "333333", fill: idx % 2 ? C.zebra : undefined }))
        ]
    });
}
children.push(new Table({
    width: { size: TBL_W, type: WidthType.DXA }, columnWidths: rc,
    rows: [
        new TableRow({
            tableHeader: true, children: [
                tcell("Entscheidung / Gate", { w: rc[0], bold: true, fill: C.light, size: 16 }),
                ...["AI Solution Owner", "Product Owner / Run-Team", "CoE AI", "AI Portfolio Board", "Bereichs-leiter BU", "Konzern-Controlling", "IT-Aus-schuss", "Daten-schutz", "KI & Info-Gov"].map((h, i) => tcell(h, { w: rc[i + 1], bold: true, fill: C.light, align: AlignmentType.CENTER, size: 14 }))
            ]
        }),
        raciRow("G1a Business-Case-Priorisierung", ["R", "–", "C", "A", "I", "C", "–", "–", "I"], 0),
        raciRow("G1b PoC-Freigabe (Kritikalität)", ["R", "–", "C", "I", "–", "–", "–", "C", "A"], 1),
        raciRow("G2 Go-Live-Freigabe (Telemetrie-Gate)", ["R", "R", "A", "I", "C", "–", "C", "C", "I"], 2),
        raciRow("G3 Quartals-Value-Review (Ampel)", ["R", "R", "C", "A", "I", "C", "–", "–", "–"], 3),
        raciRow("G4 Scaling-/Rollout-Beschluss", ["C", "C", "R", "A", "R ¹", "I", "–", "–", "–"], 4),
        raciRow("G5 Kill-Beschluss", ["C", "C", "R", "A", "C ²", "I", "–", "–", "–"], 5),
        raciRow("Waiver-Entscheidung (Abschnitt 8.0)", ["R", "C", "C", "A", "I", "–", "–", "–", "–"], 6),
        raciRow("Decommissioning-Durchführung & Nachweis", ["C", "R", "R ³", "(A) ⁴", "I", "I", "–", "C", "–"], 7),
    ]
}));
children.push(gap(40));
children.push(para([
    run("R = Responsible (führt aus) · A = Accountable (genau eine Instanz je Zeile, trägt die Entscheidung) · C = Consulted · I = Informed.  ", { size: 15, color: C.gray }),
    run("¹ aufnehmender Fachbereich: Scaling Business Case Light.  ² Rederecht, kein Vetorecht.  ³ Registry-Extraktion.  ⁴ ", { size: 15, color: C.gray }),
    DNs("Abnahmeinstanz Decommissioning-Nachweis (siehe 5.5) – bis zur Festlegung: Kenntnisnahme durch das AI Portfolio Board", 15)
], { after: 0 }));

// ===== 7.0 Standards =====
children.push(h1("7.0", "Verbindliche Standards (normative Anlagen)"));
children.push(para("Die folgenden Standards sind Bestandteil dieser Richtlinie und in ihrer jeweils vom AI Portfolio Board freigegebenen Fassung verbindlich: (1) Value One-Pager (Quartals-Value-Review), (2) Minimal-Telemetrie-Standard, (3) Registry- & Scaling-Standard, (4) Adoption-Standard & Playbook. Änderungen an diesen Standards erfordern die Freigabe des AI Portfolio Boards; Änderungen mit Datenschutzbezug erfordern zusätzlich die erneute Abstimmung mit dem IT-Ausschuss. Die Zweckbindung der Telemetrie (kein Einsatz zur individuellen Leistungs- oder Verhaltenskontrolle; Auswertung nur mit k-Anonymität ≥ 5) darf durch keine Änderung und keinen Waiver aufgehoben werden."));

// ===== 8.0 Ausnahmen =====
children.push(h1("8.0", "Ausnahmen (Waiver)"));
children.push(para("Ausnahmen von einzelnen Regelungen dieser Richtlinie darf ausschließlich das AI Portfolio Board beschließen. Der Antrag muss schriftlich über das CoE AI eingereicht werden und muss enthalten: die betroffene Regelung, die Begründung, die Kompensationsmaßnahme und die Befristung. Jeder Waiver muss befristet sein und wird im AI-Use-Case-Inventar der betroffenen Lösung dokumentiert; eine Verlängerung erfordert einen erneuten Beschluss. Der Beschluss muss festlegen, wie während der Waiver-Laufzeit fehlende Messwerte im Value Review behandelt werden. Ein Waiver darf den Kill-Trigger (Abschnitt 5.5), die Datenschutz-Bauvorschriften des Minimal-Telemetrie-Standards und die Zweckbindung (Abschnitt 7.0) nicht außer Kraft setzen."));

// ===== 9.0 Verstöße =====
children.push(h1("9.0", "Verstöße und Eskalation"));
children.push(para([
    run("Als Verstoß gelten insbesondere: Go-Live ohne Freigabe am Gate G2; Änderung der Baseline, des Vollkostensatzes oder des Nenners der berechtigten Nutzer ohne Beschluss des AI Portfolio Boards; die Verwendung lösungsindividueller Schatten-Dashboards als Grundlage eines Value Reviews; der Betrieb produktiver, nicht getaggter Ressourcen ohne Meldung; sowie jede Nutzung der Telemetrie zur individuellen Leistungs- oder Verhaltenskontrolle. Verstöße stellt das CoE AI fest und muss sie unverzüglich an den Richtlinieneigner ", {}),
    DN("Richtlinieneigner/Sponsor – siehe Dokumentensteuerung"),
    run(" und den zuständigen Bereichsleiter eskalieren. Verstöße gegen die Zweckbindung der Telemetrie müssen zusätzlich unverzüglich an Datenschutz und IT-Ausschuss gemeldet werden. Die systemischen Konsequenzen der Standards bleiben von der Eskalation unberührt: Ressourcen ohne Pflicht-Tags werden nicht provisioniert; nicht messbare Lösungen werden im Value Review rot gewertet (S6); fehlende Werte gelten als 0.", {})
]));

// ===== 10.0 Inkrafttreten =====
children.push(h1("10.0", "Inkrafttreten und Übergangsbestimmungen"));
children.push(para([
    run("Diese Richtlinie tritt in Kraft, sobald folgende Voraussetzungen erfüllt und dokumentiert sind: (a) ", {}),
    DN("Benennung des Richtlinieneigners/Sponsors – durch die Geschäftsleitung"),
    run("; (b) ", {}),
    DN("Vorstandsbeschluss zum Abschaltmandat des AI Portfolio Boards – Datum und Beschluss-Nr."),
    run("; (c) Konstituierung des AI Portfolio Boards aus dem bestehenden AI Synergy Board einschließlich ", {}),
    DN("Geschäftsordnung und Benennung des Controlling-/CFO-Office-Sitzes"),
    run("; (d) Abschluss der Rahmenvereinbarung mit dem IT-Ausschuss über das Telemetrie-Event-Schema – bis zum Abschluss gelten Einzelfreigaben je Lösung; (e) ", {}),
    DN("Veröffentlichung der Vollkostensätze je Funktionsgruppe – durch Konzern-Controlling"),
    run("; (f) ", {}),
    DN("Benennung des technischen Owners des zentralen Telemetrie-Stores und des ROI-Dashboards – durch die Bereichsleitung Data & AI"),
    run("; (g) ", {}),
    DN("Festlegung des Plattformbudgets für Registry-Extraktionen"),
    run(". Für Bestandslösungen gilt die Übergangsfrist gemäß Abschnitt 2.2. Das erweiterte Business Case Template (Baseline, Exit-Kriterien, Reuse-Check) muss vor Inkrafttreten durch das CoE AI bereitgestellt werden.", {})
]));

// ===== 11.0 Mitgeltende Unterlagen =====
children.push(h1("11.0", "Mitgeltende Unterlagen"));
children.push(simpleTable(
    [4200, 5906],
    ["Dokument", "Status / Verbindlichkeit"],
    [
        [{ t: "Value One-Pager (Template)", bold: true }, "normative Anlage; Formeln und Ampelschwellen verbindlich (Abschnitt 7.0)"],
        [{ t: "Minimal-Telemetrie-Standard", bold: true }, "normative Anlage; Go-Live-Gate G2 (Abschnitt 7.0)"],
        [{ t: "Registry- & Scaling-Standard", bold: true }, "normative Anlage; Reuse-Check G1, Scaling-Pfad G4, Verrechnungsregeln (Abschnitt 7.0)"],
        [{ t: "Adoption-Standard & Playbook", bold: true }, "normative Anlage; Rampe, Anti-Gaming-Regeln, Remediation-Anforderungen (Abschnitt 7.0)"],
        [{ t: "Business Case Template (erweitert)", bold: true }, "Pflichtartefakt Phase 1; Erweiterung um Baseline, Exit-Kriterien, Reuse-Check vor Inkrafttreten"],
        [{ t: "AI Ideation Process (Assessment-Checkliste)", bold: true }, "bestehende Regelung; Assessments bleiben unberührt und sind in Phase 1–2 integriert"],
        [{ t: "AI-Use-Case-Inventar / Registry", bold: true }, "führendes Verzeichnis aller Use-Case-IDs und Komponenten"],
    ]
));

// ===== 12.0 DECISION-NEEDED-Register =====
children.push(h1("12.0", "Register der offenen Festlegungen (DECISION NEEDED)"));
children.push(para("Vor Beschlussfassung müssen die folgenden Punkte entschieden und die Platzhalter im Dokument ersetzt werden. Die Richtlinie darf nicht mit offenen Platzhaltern in Kraft gesetzt werden.", { after: 60 }));
children.push(simpleTable(
    [700, 5300, 2500, 1606],
    ["Nr.", "Offene Festlegung", "Zu entscheiden durch", "Referenz"],
    [
        [{ t: "D1", bold: true, align: AlignmentType.CENTER }, "Richtlinieneigner/Sponsor", "Geschäftsleitung", "Deckblatt, 9.0, 10.0"],
        [{ t: "D2", bold: true, align: AlignmentType.CENTER }, "Dokumenten-ID und Einordnung in das Richtlinienwerk", "Richtlinieneigner (nach D1)", "Dokumentensteuerung"],
        [{ t: "D3", bold: true, align: AlignmentType.CENTER }, "Überprüfungszyklus der Richtlinie", "Richtlinieneigner", "Dokumentensteuerung"],
        [{ t: "D4", bold: true, align: AlignmentType.CENTER }, "Geltung für Tochtergesellschaften und Beteiligungen", "Richtlinieneigner", "2.3"],
        [{ t: "D5", bold: true, align: AlignmentType.CENTER }, "Vorstandsbeschluss zum Abschaltmandat (Datum, Beschluss-Nr.)", "Vorstand", "4.0, 10.0"],
        [{ t: "D6", bold: true, align: AlignmentType.CENTER }, "Geschäftsordnung AI Portfolio Board (Zusammensetzung, Beschlussfähigkeit, Stimmrechte, Sitzungsfrequenz)", "Vorstand / Board-Konstituierung", "4.0, 10.0"],
        [{ t: "D7", bold: true, align: AlignmentType.CENTER }, "Stimmberechtigtes Mitglied Controlling/CFO-Office", "CFO-Ressort", "4.0, 10.0"],
        [{ t: "D8", bold: true, align: AlignmentType.CENTER }, "Vollkostensätze je Funktionsgruppe", "Konzern-Controlling", "4.0, 5.4, 10.0"],
        [{ t: "D9", bold: true, align: AlignmentType.CENTER }, "Technischer Owner zentraler Telemetrie-Store & ROI-Dashboard", "Bereichsleitung Data & AI", "4.0, 10.0"],
        [{ t: "D10", bold: true, align: AlignmentType.CENTER }, "Verantwortliche Stelle für die Salt-Verwahrung", "IT-Leitung", "4.0"],
        [{ t: "D11", bold: true, align: AlignmentType.CENTER }, "Budgetträger und Budgetrahmen für Registry-Extraktionen (Plattformbudget)", "Geschäftsleitung", "5.4, 10.0"],
        [{ t: "D12", bold: true, align: AlignmentType.CENTER }, "Abnahmeinstanz des Decommissioning-Nachweises", "Richtlinieneigner", "5.5, 6.0"],
    ]
));

const doc = new Document({
    styles: { default: { document: { run: { font: "Calibri", size: 19 } } } },
    sections: [{
        properties: { page: { size: { width: PAGE_W, height: 16838 }, margin: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN } } },
        children
    }]
});

Packer.toBuffer(doc).then(buf => {
    fs.writeFileSync("/home/claude/onepager/Richtlinie_AI_Lifecycle_Management.docx", buf);
    console.log("OK");
});