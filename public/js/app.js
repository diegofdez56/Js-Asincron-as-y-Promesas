import { fetchTodos } from "./async.js";
import { renderTable } from "./table.js";

document.addEventListener("DOMContentLoaded", async () => {
  const todos = await fetchTodos();
  if (todos) {
    console.log("Títulos de los Todos:");
    todos.forEach((todo) => {
      console.log(todo.title);
    });
    renderTable(todos);
  }
});
