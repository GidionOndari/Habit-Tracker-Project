Habit Tracker
===========================
Includes:
- Dashboard (list + mark complete)
- Add Habit form (inline on Dashboard + dedicated /add page)
- NavBar with routes
- Habit Detail Page (edit)
- Delete habits
- Search & Filter
- db.json seed for json-server

Quick start
-----------
1) Start the API (json-server) from the project root (where db.json lives):
   npx json-server --watch db.json --port 4000

2) Drop the /src folder into your React project (Vite/CRA). Ensure React Router is installed:
   npm i react-router-dom

3) Run your React dev server as usual (e.g., npm run dev).

Notes
-----
- API URL is set to http://localhost:4000/habits in src/api.js
- You can add more fields to the habit model as needed (e.g., goal, category).
- The Dashboard prevents double "complete" actions on the same day.
- There's a dedicated /add route, linked from the NavBar, which returns to Dashboard after save.
