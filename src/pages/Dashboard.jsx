import { useEffect, useMemo, useState } from "react";
import { getHabits, addHabit, updateHabit, deleteHabit } from "../api";
import HabitForm from "../components/HabitForm";

export default function Dashboard() {
  const [habits, setHabits] = useState([]);
  const [filter, setFilter] = useState("");
  const [freqFilter, setFreqFilter] = useState("all");

  useEffect(() => {
    getHabits().then(setHabits);
  }, []);

  function handleAdd(habit) {
    addHabit({ ...habit, streak: 0, completedDates: [] }).then(newHabit =>
      setHabits([...habits, newHabit])
    );
  }

  function handleComplete(habit) {
    const today = new Date().toISOString().split("T")[0];
    if (habit.completedDates?.includes(today)) return;

    const updated = {
      ...habit,
      completedDates: [...(habit.completedDates || []), today],
      streak: (habit.streak || 0) + 1,
    };
    updateHabit(habit.id, updated).then(updatedHabit =>
      setHabits(habits.map(h => (h.id === habit.id ? updatedHabit : h)))
    );
  }

  function handleDelete(id) {
    deleteHabit(id).then(() => setHabits(habits.filter(h => h.id !== id)));
  }

  const filtered = useMemo(() => {
    return habits
      .filter(h => h.name.toLowerCase().includes(filter.toLowerCase()))
      .filter(h => (freqFilter === "all" ? true : h.frequency === freqFilter));
  }, [habits, filter, freqFilter]);

  return (
    <div>
      <h1>Habit Tracker Dashboard</h1>
      <HabitForm onAdd={handleAdd} />

      <div className="filters">
        <input
          placeholder="Search habits..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <select value={freqFilter} onChange={(e) => setFreqFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
      </div>

     
    </div>
  );
}
