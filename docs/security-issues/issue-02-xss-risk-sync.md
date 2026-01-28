# ISSUE-02: XSS Risk in Google Sheets Sync
**Severity: MEDIUM**

## Description
The synchronization script `vi/scripts/sync-data.ts` fetches data from public Google Sheets and validates the structure via Zod. However, it does not sanitize the string content.

## Risk
If an attacker gains access to the Google Sheet (or the sheet is compromised), they could insert malicious `<script>` tags or `onmouseover` events into text fields like "bio" or "description". When these are rendered on the website, they could execute in the context of the user's browser.

## Recommendation
- Implement a sanitization step in `scripts/sync-data.ts` using a library like `dompurify` (server-side version) or a simple HTML-escape function for all string fields before saving them to JSON.
