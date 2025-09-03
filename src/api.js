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

// Add new habit
export async function addHabit(habit) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(habit),
  });
  return res.json();
}

// Update habit
export async function updateHabit(id, updates) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  return res.json();
}

// Delete habit
export async function deleteHabit(id) {
  return fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
