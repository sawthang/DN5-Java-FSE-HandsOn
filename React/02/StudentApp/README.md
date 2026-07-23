# StudentApp

Hands-on lab: React components (class components).

## Task
Create a Student Management Portal with three components:
- **Home** — displays "Welcome to the Home page of Student Management Portal"
- **About** — displays "Welcome to the About page of the Student Management Portal"
- **Contact** — displays "Welcome to the Contact page of the Student Management Portal"

All three components are rendered together from `App.js`.

## Steps
1. `npx create-react-app StudentApp`
2. `cd StudentApp`
3. Create `src/Components/Home.js`, `About.js`, `Contact.js` (see this repo).
4. Edit `src/App.js` to import and render all three components.
5. Run `npm start` and open `http://localhost:3000`.

## Project structure
```
StudentApp/
├── public/index.html
├── src/
│   ├── Components/
│   │   ├── Home.js
│   │   ├── About.js
│   │   └── Contact.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── .gitignore
```
