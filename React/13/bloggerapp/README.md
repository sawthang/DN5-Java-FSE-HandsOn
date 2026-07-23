# Blogger App — React Conditional Rendering (Hands-On Lab)

A small React app built for the "ReactJS HOL: Conditional Rendering" exercise.
It has 3 components — **BookDetails**, **BlogDetails**, **CourseDetails** —
each demonstrating a different way to conditionally render UI in React:

| Component      | Technique demonstrated                          |
|-----------------|--------------------------------------------------|
| BookDetails     | `if / else` statement (stored in an element variable) |
| BlogDetails     | Ternary operator (`? :`) and logical `&&` operator |
| CourseDetails   | `switch` statement                              |

## Getting Started

```bash
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
bloggerapp/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── BookDetails.js
│   │   ├── BlogDetails.js
│   │   └── CourseDetails.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Objectives Covered

- Conditional rendering with `if / else`
- Conditional rendering with the ternary operator
- Conditional rendering with the logical `&&` operator
- Conditional rendering with `switch` statements
- Rendering lists with `.map()` and using `key` props
- Extracting components
