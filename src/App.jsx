import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import HabitPage from "./pages/HabitPage";
import AddHabit from "./pages/AddHabit";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddHabit />} />
          <Route path="/habits/:id" element={<HabitPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
