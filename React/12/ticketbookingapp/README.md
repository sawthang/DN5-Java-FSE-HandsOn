# ticketbookingapp

React hands-on lab: conditional rendering.

## Covers

- **Conditional rendering** — the app shows a Guest page or a User page depending on login state.
- **Element variables** — `App.js` assigns the page and the auth button to variables (`page`, `authButton`) inside `render()` before returning JSX, instead of nesting ternaries.
- **Preventing a component from rendering** — `BookingBanner` returns `null` when there is no booking message, so nothing renders to the DOM.

## Behavior

- Guest (logged out): sees the flight list, but there's no "Book" column/button. A **Login** button is shown.
- User (logged in): sees the flight list with a **Book** button per flight, and a **Logout** button. Booking a flight shows a confirmation banner.

## Run locally

```bash
npm install
npm start
```

Then open http://localhost:3000.
