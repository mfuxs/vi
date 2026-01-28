# Workflow-Plan: Creator & Case Management (Low-Tech & Secure)

Dieser Plan beschreibt ein System, mit dem Nicht-Techniker die Inhalte der "Vertical Influence" (vi) Webseite sicher und einfach pflegen können, ohne ein CMS-Login oder Datenbank-Kenntnisse zu benötigen.

## 1. Das Konzept: "Sheets-as-a-CMS"

Statt ein komplexes Admin-Backend zu bauen, nutzen wir **Google Sheets** (oder Excel Online) als Interface. 

### Warum dieser Ansatz?
- **Benutzerfreundlich**: Jeder, der eine Tabelle ausfüllen kann, kann die Webseite pflegen.
- **Sicher**: Die Webseite selbst bleibt statisch. Es gibt kein Admin-Panel, das gehackt werden kann.
- **Revisionssicher**: Änderungen sind über die Versionshistorie der Tabelle und in Git nachvollziehbar.
- **Kein Login-Stress**: Die Zugriffskontrolle erfolgt über die bewährte Google-Workspace-Berechtigung.

---

## 2. Der Workflow (Schritt für Schritt)

1. **Eingabe**: Ein Redakteur öffnet das freigegebene Google Sheet und trägt einen neuen Creator oder einen neuen Case ein.
2. **Trigger**: 
   - *Option A (Automatisch)*: Einmal täglich oder stündlich prüft ein Script nach Änderungen.
   - *Option B (Manuell)*: Ein Klick auf einen Button "Webseite aktualisieren" (via GitHub Actions).
3. **Validierung (IT-Sec Layer)**:
   - Ein Script prüft die Daten: Sind alle Pflichtfelder ausgefüllt? Sind die URLs valide? Gibt es schädliche Skripte im Text (XSS-Schutz)?
4. **Build & Deploy**:
   - Die Daten werden als `creators.json` und `cases.json` gespeichert.
   - Die Webseite wird automatisch neu gebaut (Vite Build) und veröffentlicht.

---

## 3. Technische Umsetzung (Vorbereitung)

### A. Datenstruktur anpassen
Die `vi/src/data.ts` wird so umgebaut, dass sie die Daten nicht mehr hart kodiert enthält, sondern aus JSON-Dateien lädt:
```typescript
// vi/src/data.ts (neu)
import creatorsData from './data/creators.json';
import casesData from './data/cases.json';

export const influencers = creatorsData as Influencer[];
export const caseStudies = casesData as CaseStudy[];
```

### B. Sync-Script (`scripts/sync-data.ts`)
Ein kleines Programm, das:
1. Die Google Sheet CSV-URL aufruft.
2. Die Daten in das korrekte JSON-Format konvertiert.
3. Bilder/PDFs prüft (existieren die Pfade?).

---

## 4. IT-Sicherheit & Robustheit

- **Input-Sanitization**: Das Sync-Script bereinigt alle Texte von HTML-Tags, um Cross-Site Scripting (XSS) zu verhindern.
- **Schema-Validierung**: Wir nutzen `Zod` oder `JSON-Schema`, um sicherzustellen, dass das Frontend nicht abstürzt, wenn im Sheet ein Feld falsch ausgefüllt wurde.
- **Read-Only API**: Die Webseite "zieht" keine Live-Daten vom Sheet (Performance & Privacy), sondern nutzt den zum Build-Zeitpunkt validierten Snapshot.
- **Asset-Management**: Neue Bilder werden einfach in den Ordner `public/images/creators/` hochgeladen. Der Name im Sheet muss lediglich mit dem Dateinamen übereinstimmen.

---

## 5. Nächste Schritte für die Redaktion

1. **Tabelle anlegen**: Ich erstelle eine Vorlage mit den Spalten: `ID, Name, Handle, Niche, Category, Followers, ImageURL, Bio, Platforms...`
2. **Freigabe**: Zugriff auf die E-Mail-Adressen der Verantwortlichen beschränken.
3. **Einweisung**: "Fülle die Zeile aus, achte darauf, dass das Bild im Ordner liegt."

---

*Hinweis: Dieser Workflow ist aus IT-Sicht extrem sicher, da die Angriffsfläche der Live-Seite nicht vergrößert wird. Die "Brücke" zwischen Tabelle und Webseite existiert nur während des Build-Prozesses in einer geschützten Umgebung (GitHub Actions).*
