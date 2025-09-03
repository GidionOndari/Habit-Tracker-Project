import { Link } from "react-router-dom";

export default function HabitCard({ habit, onComplete, onDelete }) {
  return (
    <div className="card">
      <h3>{habit.name}</h3>
      {habit.description && <p>{habit.description}</p>}
      <p><strong>Frequency:</strong> {habit.frequency}</p>
      <p><strong>Streak:</strong> {habit.streak || 0} days</p>

      <div className="card-actions">
        <button onClick={() => onComplete(habit)}> Mark Complete</button>
        <button onClick={() => onDelete(habit.id)}> Delete</button>
        <Link to={`/habits/${habit.id}`}>View</Link>
      </div>
    </div>
  );
}
