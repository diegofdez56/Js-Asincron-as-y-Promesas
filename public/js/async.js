export async function fetchTodos() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}
