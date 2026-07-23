# scorecalculatorapp

Hands-on lab: React function components + styling.

## Task
Create a function component **CalculateScore** that accepts `Name`, `School`,
`Total`, and `Goal` as props, calculates the average score of a student
(`Total / Goal`), and displays the result. Style the component using an
external stylesheet.

## Steps
1. `npx create-react-app scorecalculatorapp`
2. `cd scorecalculatorapp`
3. Create `src/Components/CalculateScore.js` (function component, see this repo).
4. Create `src/Stylesheets/mystyle.css` for styling.
5. Edit `src/App.js` to render `<CalculateScore />` with sample props.
6. Run `npm start` and open `http://localhost:3000`.

## Project structure
```
scorecalculatorapp/
├── public/index.html
├── src/
│   ├── Components/CalculateScore.js
│   ├── Stylesheets/mystyle.css
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── .gitignore
```
