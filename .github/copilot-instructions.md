## Quick orientation

This repository is a collection of small frontend JavaScript labs organized by Unit. Each lab usually has a `Student` and (sometimes) a `Teacher_AnswerKey` folder. Focus your edits in the `Student/src/` folder for the lab you're working on.

Key paths to know:
- Top-level units: `Units/Unit X - <name>/...`
- Student lab source files: `.../Student/src/` (HTML, CSS, JS)
- Teacher answers & teacher copies: `.../LABS-DEVELOPMENT/.../Teacher_AnswerKey/`

How students run labs (examples found in per-lab README files):
- Node-based console labs: `node src/<LabFile>.js` (e.g., many Unit 1 labs show `node src/Lab002_DataTypes.js`)
- Browser labs: open `src/index.html` in a browser (or use Live Server in the editor)

Repository conventions you must follow
- Do not change `README.md` files other than to correct typos; they are the lab instructions for students and graders.
- Edit only files under `Student/src/` when implementing student-facing fixes or examples. Many READMEs explicitly state `Edit only: src/<file>`.
- Preserve lab filenames and expected entry points (e.g., `src/index.html` for browser labs or `src/LabXXX_*.js` for node-run labs).

Patterns and structural notes (what to expect)
- Most labs are small, single-file JS scripts or a simple static site (HTML + linked JS/CSS). There is no centralized build system or package.json in the repo.
- Projects are intentionally minimal: plain ES6 JavaScript, DOM APIs for browser labs, and console I/O for Node labs.
- Teacher answer keys and student versions coexist; avoid leaking teacher solutions into student folders.

Developer workflows (what to run locally)
- Run a Node script from a lab folder:
  - cd into the lab folder containing `src/` and run: `node src/<LabFile>.js`
- Open a browser lab by opening `src/index.html` or serve it via a simple static server/VS Code Live Server.

What to do when making edits
- If fixing student code or adding hints, keep changes scoped to `Student/src/` and add a short comment explaining intent.
- For teacher-side changes (answer keys), edit only files under `LABS-DEVELOPMENT/.../Teacher_AnswerKey/`.

Examples from this repo (use as templates)
- Unit 1 JS console labs: `Units/Unit 1 - JavaScript Basics/*/Student/src/` (run `node src/<Lab>.js` per the lab README)
- Unit 1 browser labs: `Units/Unit 1 - JavaScript Basics/*/Student/src/index.html` (open in browser)

Limitations & integration
- There is no package manager, CI, or automated unit tests to run. Keep changes simple and self-contained.
- Avoid adding heavy tooling (no package.json, build pipelines) unless the maintainer asks; prefer plain edits.

If you need more context
- Read the lab README in the same folder (every lab includes a README with Run/Setup details).
- Inspect sibling `Teacher_AnswerKey` folders for expected outputs or canonical solutions.

When in doubt, ask the maintainer whether changes should go into the Student or Teacher directory.

— End of instructions —
