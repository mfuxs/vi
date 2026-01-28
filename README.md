# Vertical Influence - Web Plattform

Eine moderne, hochperformante Influencer-Management-Plattform, die als "Headless CMS" konzipiert ist. Die Pflege der Inhalte erfolgt vollständig über Google Sheets und Google Drive, während die Webseite als statische, extrem sichere Single Page Application (SPA) operiert.

## 🚀 Key Features

### 🛠 Low-Tech CMS Integration
- **Content Management**: Pflege aller Creator, Cases und Texte direkt über Google Sheets (CSV-Sync).
- **Asset Management**: Bilder werden automatisch aus einem Google Drive Ordner synchronisiert und mit den Creatorn gemappt.
- **Workflow**: Automatisierte GitHub Actions synchronisieren Daten & Assets zweimal täglich oder auf Knopfdruck.

### 🌍 Global Translation System
- **Mehrsprachigkeit**: Volle Unterstützung für Deutsch und Englisch.
- **Dynamic Content**: Jedes Wort der Webseite kann ohne Code-Änderung über das Google Sheet angepasst werden.
- **Persistent**: Die Sprachwahl wird im Browser des Nutzers gespeichert.

### ⚡ Performance & SEO
- **Image Optimization**: Automatische Konvertierung aller Bilder in das **WebP-Format** und Größenoptimierung während des Builds.
- **Portfolio Search**: Integrierte Echtzeit-Suche nach Creatorn, Nischen oder Handles.
- **JSON-LD Schema**: Strukturierte Daten (Person/Organization) für optimale Sichtbarkeit in den Google Suchergebnissen (Rich Snippets).
- **Vite 6 & React 19**: Nutzung modernster Framework-Versionen für minimale Ladezeiten.

### 🛡 IT-Security Hardening
- **XSS Protection**: Automatisches HTML-Escaping aller Daten beim Synchronisieren.
- **Content Security Policy (CSP)**: Strikte Sicherheitsregeln für externe Scripte und Ressourcen.
- **No Client-Side Secrets**: API-Keys wurden aus dem Client-Bundle entfernt.
- **Static Hosting**: 100% robust gegen Server-Side Attacks durch Hosting auf GitHub Pages.

## 📖 Bedienung für die Redaktion

### 1. Creator & Texte pflegen
Änderungen in den verknüpften Google Sheets vornehmen und die GitHub Action **"Sync Data and Deploy"** starten.

### 2. Bilder aktualisieren
Bilder einfach in den Google Drive Ordner hochladen. Dateiname muss dem Handle (z.B. `affeaufbike.jpg`) oder dem Eintrag in der Spalte `image_name` entsprechen.

---
*Entwickelt von Gemini CLI Agent für Vertical Influence.*