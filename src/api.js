const API_URL = "http://localhost:4000/habits"; // json-server

// Get all habits
export async function getHabits() {
  const res = await fetch(API_URL);
  return res.json();
}

// Get single habit by id
export async function getHabit(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error("Habit not found");
  return res.json();
}