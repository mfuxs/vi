# Vertical Influence by insocial

Dies ist das Repository für die Webseite der Agentur **Vertical Influence**.  
Die Anwendung dient als Portfolio, um Influencer, Creator und erfolgreiche Case Studies der Agentur zu präsentieren.

## Überblick

Das Projekt ist eine moderne Single-Page-Application (SPA), die Besuchern ermöglicht:
- Einen Überblick über exklusive Influencer und Creator zu erhalten.
- Detaillierte Statistiken und Informationen zu jedem Creator einzusehen (Follower-Zahlen, Plattformen, Bio).
- Erfolgreiche Kampagnen und Case Studies zu durchstöbern.
- Kontakt mit der Agentur aufzunehmen.

## Technologien

Das Projekt basiert auf folgenden Technologien:

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Sprache:** [TypeScript](https://www.typescriptlang.org/)
- **Routing:** [React Router Dom](https://reactrouter.com/)
- **Styling:** CSS (Modular/Global) & [Lucide React](https://lucide.dev/) für Icons

## Projektstruktur

- `/src/pages`: Enthält die Hauptseiten (Home, Portfolio, Cases, etc.).
- `/src/components`: Wiederverwendbare UI-Komponenten.
- `/src/data.ts`: **WICHTIG!** Hier werden alle Daten für Influencer und Case Studies verwaltet. Änderungen an dieser Datei aktualisieren automatisch den Inhalt der Webseite.
- `/src/types.ts`: TypeScript Interfaces für die Datenstrukturen.

## Installation & Start

Um das Projekt lokal auszuführen:

1. **Repository klonen:**
   ```bash
   git clone <repo-url>
   cd vi
   ```

2. **Abhängigkeiten installieren:**
   ```bash
   npm install
   ```

3. **Entwicklungsserver starten:**
   ```bash
   npm run dev
   ```
   Die App ist nun unter `http://localhost:5173` erreichbar.

4. **Build für Produktion:**
   ```bash
   npm run build
   ```
