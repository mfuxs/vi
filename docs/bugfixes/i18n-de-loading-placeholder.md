# Bugfix: Deutsche Übersetzungen wurden teilweise nicht geladen

## Problem
Bei deutscher Sprache wurden für einige UI-Texte statt der eigentlichen Übersetzung nur der Translation-Key angezeigt (z. B. `nav_home`, `hero_title_1`).

## Ursache
Die Datei `src/data/translations.json` enthält bei vielen Einträgen keinen Sprachschlüssel `de`, sondern `de ` (mit nachgestelltem Leerzeichen).

Beispiel:

```json
"nav_home": {
  "de ": "Home",
  "en": "Home"
}
```

Die bisherige Lookup-Logik erwartete exakt `translations['de']`. Dadurch wurden diese Werte nicht gefunden und es fiel auf den Key selbst zurück.

## Lösung
Die Übersetzungsauflösung in `LanguageContext` wurde robuster gemacht:

1. Zuerst weiterhin exakter Lookup (`translations[language]`).
2. Danach defensiver Fallback mit normalisierten Sprachschlüsseln (`trim()`), sodass auch `de ` korrekt als `de` erkannt wird.
3. Danach Standard-Fallback auf Deutsch (`de`).

## Warum diese Lösung?
- **Schneller, sicherer Fix** ohne sofortiges manuelles Bereinigen aller JSON-Einträge.
- **Abwärtskompatibel** mit sauber gepflegten Daten.
- **Resilient** gegen typische CSV/Sheet-Import-Artefakte (zusätzliche Leerzeichen in Headern).

## Empfehlung für langfristige Datenqualität
Zusätzlich sollte der Datenimport (`scripts/sync-translations.ts`) so erweitert werden, dass Sprachspalten bereits beim Import getrimmt werden. Dann bleibt die Quelle (`translations.json`) konsistent und solche Effekte werden präventiv vermieden.
