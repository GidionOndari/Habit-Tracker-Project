import { useState, useEffect } from "react";
import { getHabits, updateHabit, addHabit } from "../api";

function Dashboard() {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");

  useEffect(() => {
    loadHabits();
  }, []);

  async function loadHabits() {
    const data = await getHabits();
    setHabits(data);
  }

  async function handleComplete(habit) {
    const today = new Date().toISOString().split("T")[0];
    if (habit.completedDates?.includes(today)) return; // prevent double complete

    const updatedHabit = {
      ...habit,
      completedDates: [...(habit.completedDates || []), today],
    };
    await updateHabit(habit.id, updatedHabit);
    loadHabits();
  }

  async function handleAddHabit(e) {
    e.preventDefault();
    if (!newHabit.trim()) return;

    await addHabit({ title: newHabit, completedDates: [] });
    setNewHabit("");
    loadHabits();
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Dashboard</h2>

      {/* Inline Add Form */}
      <form onSubmit={handleAddHabit} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="New habit"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {habits.map((habit) => (
          <li key={habit.id} style={{ marginBottom: "0.5rem" }}>
            {habit.title}
            <button
              onClick={() => handleComplete(habit)}
              style={{ marginLeft: "1rem" }}
            >
              Mark Complete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
