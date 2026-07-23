# cricketapp

Hands-on lab: ES6 features in React (map, arrow functions, destructuring, merge).

## Task
1. **ListofPlayers**
   - Declares an array of 11 players (name + score) and renders it using `map()`.
   - Filters players with a score below 70 using an ES6 arrow function.
2. **IndianPlayers**
   - Displays Odd Team and Even Team players using ES6 destructuring.
   - Declares `T20players` and `RanjiTrophyPlayers` arrays and merges them
     using the ES6 spread (merge) feature.
3. Both components are shown on the same home page, toggled with a simple
   `flag` variable in `App.js` (`flag ? <ListofPlayers /> : <IndianPlayers />`).

## Steps
1. `npx create-react-app cricketapp`
2. `cd cricketapp`
3. Add `src/Components/ListofPlayers.js` and `src/Components/IndianPlayers.js` (see this repo).
4. Edit `src/App.js` to toggle between the two components using `flag`.
5. Run `npm start` and open `http://localhost:3000`.

## Project structure
```
cricketapp/
├── public/index.html
├── src/
│   ├── Components/
│   │   ├── ListofPlayers.js
│   │   └── IndianPlayers.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── .gitignore
```
