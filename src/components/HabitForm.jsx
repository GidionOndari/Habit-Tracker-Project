import { useState } from "react";

export default function HabitForm({ onAdd, defaultValues }) {
  const [formData, setFormData] = useState(
    defaultValues || { name: "", description: "", frequency: "daily" }
  );

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name.trim()) return;
    onAdd(formData);
    setFormData({ name: "", description: "", frequency: "daily" });
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Habit name"
        required
      />
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description (optional)"
      />
      <select name="frequency" value={formData.frequency} onChange={handleChange}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
      </select>
      <button type="submit">Add Habit</button>
    </form>
  );
}
