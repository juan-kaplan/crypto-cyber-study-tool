# Crypto Cyber Study Tool

Interactive study tool for the Criptografia y Ciberseguridad partial exam. The site focuses on case-study analysis, not definition memorization.

## Local Usage

Open `study-tool/index.html` in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000 --directory study-tool
```

Then visit <http://localhost:8000>.

## GitHub Pages

The deployment workflow publishes the static files in `study-tool/` to GitHub Pages on every push to `main`.

## Repository Scope

The public repo keeps the study UI and generated assets. Original class PDFs, slide decks, and temporary extraction outputs remain local by default.
