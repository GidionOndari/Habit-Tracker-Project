import { useState, useEffect } from "react";

export default function HabitDetail({ habit, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(habit || {});

  // update formData whenever habit changes (after API loads)
  useEffect(() => {
    if (habit) setFormData(habit);
  }, [habit]);

  if (!habit) return <p>Habit not found</p>;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSave() {
    onUpdate(formData);
    setEditing(false);
  }

  return (
    <div className="detail">
      {editing ? (
        <>
          <input name="name" value={formData.name || ""} onChange={handleChange} />
          <input name="description" value={formData.description || ""} onChange={handleChange} />
          <select name="frequency" value={formData.frequency || ""} onChange={handleChange}>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
          <div className="card-actions">
            <button onClick={handleSave}> Save</button>
            <button onClick={() => setEditing(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h2>{habit.name}</h2>
          {habit.description && <p>{habit.description}</p>}
          <p><strong>Frequency:</strong> {habit.frequency}</p>
          <p><strong>Streak:</strong> {habit.streak || 0} days</p>
          <button onClick={() => setEditing(true)}> Edit</button>
        </>
      )}
    </div>
  );
}
