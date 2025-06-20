const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const filter = document.getElementById("filter");

addBtn.addEventListener("click", addTask);
filter.addEventListener("change", filterTasks);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.classList.add("task-item");

  li.innerHTML = `
    <span>${taskText}</span>
    <div class="task-buttons">
      <button class="complete-btn">✔</button>
      <button class="delete-btn">🗑</button>
    </div>
  `;

  const completeBtn = li.querySelector(".complete-btn");
  const deleteBtn = li.querySelector(".delete-btn");

  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
    filterTasks();
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = "";
}

function filterTasks() {
  const tasks = taskList.childNodes;
  tasks.forEach(task => {
    if (task.nodeType === 1) {
      switch (filter.value) {
        case "all":
          task.style.display = "flex";
          break;
        case "completed":
          task.style.display = task.classList.contains("completed") ? "flex" : "none";
          break;
        case "uncompleted":
          task.style.display = task.classList.contains("completed") ? "none" : "flex";
          break;
      }
    }
  });
}