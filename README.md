# Resume Website

Single-page resume site generated from publicly visible LinkedIn/profile activity for Edwin Tack.

## Files
- `index.html`: structure and sections
- `styles.css`: visual design and responsive layout
- `script.js`: profile data + dynamic rendering

## Customize content
Edit the `profileData` object in `script.js`:
- `headline`, `summary`, `about`
- `experience` timeline entries
- `projects` and links
- `skills`

## Local preview
From this directory:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
