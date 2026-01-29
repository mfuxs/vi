# Vertical Influence (vi) - Projekt-Handbuch

Willkommen im technischen und redaktionellen Herz von **Vertical Influence**. Dieses Dokument erklärt, wie die Webseite funktioniert, wie Inhalte gepflegt werden und wie die Technik dahinter aufgebaut ist.

---

## 🌟 Das Konzept: "Headless Low-Code"

Diese Webseite ist eine moderne **Single Page Application (SPA)**, die aber **ohne** ein klassisches CMS (wie WordPress) auskommt. Stattdessen nutzen wir Tools, die jeder kennt:
- **Google Sheets** als Datenbank (Texte, Creator, Cases).
- **Google Drive** als Mediathek (Bilder).
- **GitHub Actions** als Automatisierungs-Maschine ("Der Roboter").

Das Ergebnis ist eine extrem schnelle, sichere und günstige Webseite, die trotzdem kinderleicht zu pflegen ist.

---

## 📝 Anleitung für Redakteure

Um Inhalte auf der Webseite zu ändern, musst du **keinen Code** anfassen. Du arbeitest nur in Google Tabellen.

### 1. Creator & Influencer verwalten
Die Datenbank für alle Profile liegt in einem Google Sheet.
- **Neue Zeile = Neuer Creator.**
- **Wichtig**: Nach Änderungen muss in GitHub die Action "Sync Data and Deploy" gestartet werden (oder man wartet auf den automatischen Sync um 00:00/12:00 Uhr).

#### Die wichtigsten Spalten:
| Spalte | Erklärung | Beispiel |
| :--- | :--- | :--- |
| `name` | Der Anzeigename | `Affeaufbike` |
| `handle` | Das Social Media Handle | `@affeaufbike` |
| `category` | Filter-Kategorie (Wichtig für Unit-Seiten!) | `Handwerk & DIY` oder `Tech` |
| `image_name` | Name des Bildes im Google Drive (ohne .jpg) | `affeaufbike_portrait` |
| `canva_link` | Optional: Link zum Mediakit | `https://canva.com/...` |
| `gender_male` | Demografie (Männer) | `35%` |
| `age_data` | Altersstruktur | `18-24:45%, 25-34:35%` |

### 2. Bilder hochladen
Bilder liegen in einem speziellen **Google Drive Ordner**.
1. Lade das Bild hoch.
2. Benenne es exakt so, wie das Handle des Creators (z.B. `affeaufbike.jpg`) ODER trage den Dateinamen in die Spalte `image_name` im Sheet ein.
3. Der Roboter lädt das Bild beim nächsten Sync automatisch herunter, optimiert es (kleiner & schneller) und packt es auf die Webseite.

### 3. Texte & Übersetzungen ändern
Alle Texte der Webseite (Überschriften, Buttons, Menü) liegen in einem zweiten Google Sheet (`translations`).
- Spalte `de`: Deutscher Text.
- Spalte `en`: Englischer Text.
- Ändere einfach den Text in der Zelle, und er wird auf der Webseite aktualisiert.

---

## ⚙️ Technik & Entwicklung

Für Entwickler, die am Code arbeiten wollen:

### Stack
- **Frontend**: React 19, TypeScript, Vite 6.
- **Styling**: Tailwind CSS 4 (PostCSS).
- **Animation**: Framer Motion.
- **Routing**: `react-router-dom` (HashRouter für maximale Robustheit auf GitHub Pages).
- **Icons**: Lucide React.

### Projektstruktur
```
vi/
├── src/
│   ├── data/            # Hier landen die JSONs aus dem Sync (NICHT manuell bearbeiten!)
│   ├── pages/           # Die einzelnen Unterseiten (Home, Portfolio, etc.)
│   ├── components/      # Wiederverwendbare Bausteine (Layout, SEO, etc.)
│   └── context/         # Globaler State (z.B. Sprache)
├── scripts/             # Die "Roboter"-Scripte
│   ├── sync-data.ts     # Holt Daten aus Sheets
│   ├── sync-assets.ts   # Holt Bilder aus Drive & optimiert sie (Sharp)
│   └── sync-translations.ts # Holt Texte
└── public/              # Statische Dateien (404.html, favicon)
```

### Setup & Installation
1. Repository klonen.
2. In den Ordner `vi` wechseln: `cd vi`.
3. Abhängigkeiten installieren: `npm install --legacy-peer-deps`.
4. Dev-Server starten: `npm run dev`.

### GitHub Actions (CI/CD)
Der Workflow `.github/workflows/sync-data.yml` steuert alles:
1. **Trigger**: Zeitplan (00:00/12:00) oder manuell.
2. **Sync**: Führt die Scripte in `vi/scripts/` aus.
3. **Build**: Baut die React-App (`npm run build`).
4. **Deploy**: Schiebt den `dist`-Ordner auf den `gh-pages` Branch.

**Secrets (in GitHub Settings hinterlegt):**
- `CREATORS_CSV_URL`: Link zum Creator-Sheet (CSV).
- `TRANSLATIONS_CSV_URL`: Link zum Text-Sheet (CSV).
- `CASES_CSV_URL`: Link zum Cases-Sheet (CSV).
- `GOOGLE_SERVICE_ACCOUNT_KEY`: JSON-Key für GDrive Zugriff.
- `GDRIVE_FOLDER_ID`: ID des Bilder-Ordners.

---

## 🛡 Sicherheit

Das Projekt folgt strengen Security-Richtlinien:
1. **Keine Secrets im Client**: API-Keys werden nur im Build-Prozess (Server-Side) genutzt.
2. **XSS Protection**: Alle Daten aus Google Sheets werden vor dem Speichern "sanitized" (gefährliche HTML-Tags entfernt).
3. **Content Security Policy (CSP)**: Die `index.html` erlaubt nur vertrauenswürdige Quellen für Scripte und Bilder.
4. **Static Hosting**: Da es keinen Server und keine Datenbank gibt, ist die Angriffsfläche extrem klein.

---

*Stand: Februar 2026. Entwickelt mit Unterstützung von Gemini CLI.*
