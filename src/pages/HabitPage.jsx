import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHabit, updateHabit } from "../api";
import HabitDetail from "../components/HabitDetail";

export default function HabitPage() {
  const { id } = useParams();
  const [habit, setHabit] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getHabit(id) // fixed (no Number(id))
      .then(setHabit)
      .catch(() => setError("Habit not found"));
  }, [id]);

  function handleUpdate(updatedHabit) {
    updateHabit(updatedHabit.id, updatedHabit).then(setHabit);
  }

  return (
    <div>
      {error ? <p>{error}</p> : <HabitDetail habit={habit} onUpdate={handleUpdate} />}
    </div>
  );
}
