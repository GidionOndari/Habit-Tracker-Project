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
    if (habit.completedDates?.includes(today)) return;

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
    <div className="container">
      <h2>Dashboard</h2>

      {/* Inline Add Form */}
      <form onSubmit={handleAddHabit}>
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="New habit"
        />
        <button type="submit">Add</button>
      </form>

      {/* Habits List */}
      <ul>
        {habits.map((habit) => (
          <li key={habit.id} className="habit-item">
            <span>{habit.title}</span>
            <button onClick={() => handleComplete(habit)}>Mark Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
