import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import AddHabit from "./components/AddHabit";
import NotFound from "./components/NotFound";
import "./styles.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />       {/* Dashboard page */}
        <Route path="/add" element={<AddHabit />} />     {/* Add Habit page */}
        <Route path="*" element={<NotFound />} />       {/* Catch-all 404 page */}
      </Routes>
    </Router>
  );
}

export default App;
