// GET TASKS FROM LOCALSTORAGE OR EMPTY ARRAY
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

// SAVE TASKS
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// UPDATE COUNTERS
function updateCounts() {
  document.getElementById("allCount").textContent = tasks.length;

  const active = tasks.filter(t => !t.done).length;
  const completed = tasks.filter(t => t.done).length;

  document.getElementById("activeCount").textContent = active;
  document.getElementById("completedCount").textContent = completed;
}

// ADD TASK
function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  if (!text) {
    alert("Enter a task");
    return;
  }

  tasks.push({ text, done: false });
  input.value = "";
  saveTasks();
  displayTasks();
}

// ENTER KEY SUPPORT
document.getElementById("taskInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// DISPLAY TASKS BASED ON FILTER
function displayTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  let filtered = tasks;
  if (currentFilter === "active") filtered = tasks.filter(t => !t.done);
  else if (currentFilter === "completed") filtered = tasks.filter(t => t.done);

  filtered.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span onclick="toggleTask(${index})" class="${task.done ? 'done' : ''}">
        ${task.text}
      </span>
      <button onclick="deleteTask(${index})">X</button>
    `;
    list.appendChild(li);
  });

  updateCounts();
}

// TOGGLE DONE
function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  saveTasks();
  displayTasks();
}

// DELETE TASK
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  displayTasks();
}

// SET FILTER
function setFilter(filter) {
  currentFilter = filter;
  displayTasks();
}

// CLEAR ALL
function clearTasks() {
  tasks = [];
  saveTasks();
  displayTasks();
}

// INITIAL LOAD
displayTasks();
