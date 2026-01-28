# ISSUE-04: Dependency Bloat & Unused Packages
**Severity: LOW**

## Description
The `package.json` contains several large dependencies that do not seem to be used in the current React application:
- `pdf-parse`
- `pdf-img-convert`
- `canvas`

## Risk
Every additional dependency increases the "attack surface" for supply chain attacks. If one of these unused libraries has a vulnerability, your project is technically at risk, even if you don't call the functions.

## Recommendation
- Run `npm uninstall pdf-parse pdf-img-convert canvas`.
- Regularly use `npm audit` to check for known vulnerabilities.
