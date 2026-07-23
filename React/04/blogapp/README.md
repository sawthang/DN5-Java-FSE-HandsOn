# blogapp

Hands-on lab: React component life cycle hooks.

## Task
- `Post.js` — a simple class representing a blog post (id, title, body).
- `Posts.js` — a class component that:
  - Initializes `posts` in state via the constructor.
  - Implements `loadPosts()`, which calls the Fetch API against
    `https://jsonplaceholder.typicode.com/posts` and stores the result in state.
  - Implements `componentDidMount()` to call `loadPosts()`.
  - Implements `render()` to display each post's title and body.
  - Implements `componentDidCatch()` to show an alert if an error occurs
    while rendering.
- `Posts` is rendered from `App.js`.

## Steps
1. `npx create-react-app blogapp`
2. `cd blogapp`
3. Add `src/Post.js` and `src/Posts.js` (see this repo).
4. Edit `src/App.js` to render `<Posts />`.
5. Run `npm start` and open `http://localhost:3000`.

## Project structure
```
blogapp/
├── public/index.html
├── src/
│   ├── Post.js
│   ├── Posts.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── .gitignore
```
