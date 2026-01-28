# ISSUE-01: API Key Exposure in Client Bundle
**Severity: HIGH**

## Description
In `vi/vite.config.ts`, the environment variable `GEMINI_API_KEY` is injected into the client-side bundle using Vite's `define` feature. 

```typescript
define: {
  'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
  'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
}
```

This makes the API key publicly accessible to anyone who visits the website and opens the DevTools.

## Risk
- Unauthorized use of your Gemini API quota.
- Potential financial costs if the key has no strict billing limits.
- Theft of the key for malicious purposes.

## Recommendation
- Remove the `define` block for secrets in `vite.config.ts`.
- If the Gemini API is needed, move the logic to a secure backend/serverless function instead of calling it directly from the browser.
