export function renderTable(todos) {
  const todosTableBody = document.getElementById("todosTableBody");
  todosTableBody.innerHTML = "";

  todos.forEach((todo) => {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = todo.title;
    row.appendChild(titleCell);

    const priorityCell = document.createElement("td");
    priorityCell.textContent = todo.priority;
    row.appendChild(priorityCell);

    const isDoneCell = document.createElement("td");
    isDoneCell.textContent = todo.isDone ? "Sí" : "No";
    row.appendChild(isDoneCell);

    todosTableBody.appendChild(row);
  });
}
