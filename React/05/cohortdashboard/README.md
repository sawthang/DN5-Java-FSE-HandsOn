# cohortdashboard

Hands-on lab: styling React components with CSS Modules.

## Task
Style a dashboard that shows ongoing/completed cohort details:
- `CohortDetails.module.css` defines a `.box` class (300px width, inline
  block, 10px margin, 10px top/bottom padding, 20px left/right padding,
  1px black border, 10px border radius) and a tag selector for `<dt>`
  (font-weight 500).
- `CohortDetails.js` imports the CSS Module, applies `.box` to the
  container `div`, and colors the `<h3>` green when status is "ongoing"
  and blue otherwise.

## Steps
1. `npx create-react-app cohortdashboard`
2. `cd cohortdashboard`
3. Add `src/CohortDetails.module.css` and `src/CohortDetails.js` (see this repo).
4. Edit `src/App.js` to render a list of `<CohortDetails />`.
5. Run `npm start` and open `http://localhost:3000`.

## Project structure
```
cohortdashboard/
├── public/index.html
├── src/
│   ├── CohortDetails.js
│   ├── CohortDetails.module.css
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── .gitignore
```
