# ISSUE-03: Missing Content Security Policy (CSP)
**Severity: MEDIUM**

## Description
The application currently lacks a Content Security Policy (CSP). 

## Risk
Without a CSP, the browser has no instructions on which sources are trusted for script execution, image loading, or frame embedding. This makes the site vulnerable to:
- Cross-Site Scripting (XSS)
- Clickjacking
- Data Injection

## Recommendation
- Add a `<meta http-equiv="Content-Security-Policy" content="...">` tag to `index.html`.
- Restrict `script-src` to 'self' and trusted CDNs only.
- Disable `object-src` and restrict `frame-ancestors`.
