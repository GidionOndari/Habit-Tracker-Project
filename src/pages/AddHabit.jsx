import HabitForm from "../components/HabitForm";
import { addHabit } from "../api";
import { useNavigate } from "react-router-dom";

export default function AddHabit() {
  const navigate = useNavigate();

  function handleAdd(habit) {
    addHabit({ ...habit, streak: 0, completedDates: [] }).then(() => {
      navigate("/");
    });
  }

  return (
    <div>
      <h1>Add a New Habit</h1>
      <HabitForm onAdd={handleAdd} />
    </div>
  );
}
