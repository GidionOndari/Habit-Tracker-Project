import { useState } from "react";
import { addHabit } from "../api";
import { useNavigate } from "react-router-dom";

function AddHabit() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;

    await addHabit({ title, completedDates: [] });
    navigate("/");
  }

  return (
    <div className="container">
      <h2>Add Habit</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Habit name"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default AddHabit;
