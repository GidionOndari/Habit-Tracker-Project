import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import AddHabit from "./pages/AddHabit";
import NotFound from "./pages/NotFound";
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
