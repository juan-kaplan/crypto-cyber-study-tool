# Repository Guidelines

## Project Structure & Module Organization
This repository is a workspace for building a study tool for the Criptografia y Ciberseguridad partial exam. Source material lives in `clases/`: `clases/teoricas/` contains lecture decks/PDFs, and `clases/practicas/` contains practical class PDFs. The exam scope is Module 2 through Module 3 and is case-study oriented, not definition recall. Use the course notes page as the scope boundary: <https://crypto-cyber-classes.github.io/crypto-cyber/modulo-2-ciberseguridad/clase-08-fundamentos/>.

When adding code, keep it separate from the originals. Recommended layout: `src/` for extraction and study-tool logic, `tests/` for automated tests, `docs/` for notes and solved cases, and `data/processed/` for generated indexes. Do not edit original slides/PDFs unless intentionally replacing source material.

## Build, Test, and Development Commands
No build system is checked in yet. Useful current commands:

- `rg --files clases` - list all class materials quickly.
- `find clases -type f | sort` - produce a stable inventory of source files.

When tooling is added, expose repeatable commands through `package.json`, `Makefile`, or documented scripts, such as `npm run dev`, `npm test`, or `python -m pytest`.

## Study Content Workflow
Extract concepts, examples, and exam-like cases from the slides/PDFs, then map each item back to its source file and module. Prioritize solved case analysis over glossary expansion. Avoid broad cryptography depth unless it appears in the course notes or class material. Track open questions in `docs/`.

## Coding Style & Naming Conventions
Prefer small modules over large notebooks or one-off scripts. For Python, use 4-space indentation and `snake_case`. For JavaScript/TypeScript, use 2-space indentation, `camelCase` functions, and `PascalCase` components. Name study artifacts by topic and class, for example `docs/cases/clase-09-iam.md`.

## Testing Guidelines
Add tests for parsers, source indexing, and answer-generation logic. Keep fixtures small and avoid duplicating full class files. Use `test_*.py` for Python or `*.test.ts` / `*.test.js` for JS. Run the relevant test command before committing.

## Commit & Pull Request Guidelines
This checkout has no local Git history, so no existing convention can be inferred. Use concise, imperative commits with a scope, such as `docs: add IAM case solutions` or `tool: index practical PDFs`. Pull requests should describe study value, source materials touched, commands run, and screenshots for UI changes.

## Security & Configuration Tips
Do not commit secrets, credentials, or private student data. Keep cybersecurity examples educational and case-focused; avoid adding runnable offensive tooling unless it is explicitly required by class material and clearly documented.
