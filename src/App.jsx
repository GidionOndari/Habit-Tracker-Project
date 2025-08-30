import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import AddHabit from "./components/AddHabit";
import NotFound from "./components/NotFound"; // <-- import
import "./style.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddHabit />} />
        <Route path="*" element={<NotFound />} /> {/* <-- catch-all */}
      </Routes>
    </Router>
  );
}

export default App;
