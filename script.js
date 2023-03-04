const addBtn = document.getElementById("add-btn");
const input = document.getElementById("task-input");
const tasksList = document.getElementById("tasks-list");
const doneAllBtn = document.getElementById("done-all-btn");

// function to create new task element
function createTaskElement(task) {
  const li = document.createElement("li");
  li.textContent = task;
  const btnDone = document.createElement("button");
  btnDone.textContent = "Done";
  btnDone.classList.add("btnDone");
  li.appendChild(btnDone);
  return li;
}

// function to add a new task to the list
function addTask() {
  if (input.value.trim() !== "") {
    const task = input.value.trim();
    const taskElement = createTaskElement(task);
    tasksList.appendChild(taskElement);
    input.value = "";
  }
}

// function to mark a task as done
function markTaskDone(e) {
  if (e.target.classList.contains("btnDone")) {
    const li = e.target.parentElement;
    li.classList.toggle("checked");
  }
}

// function to mark all tasks as done
function markAllTasksDone() {
  const tasks = tasksList.getElementsByTagName("li");
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].classList.add("checked");
  }
}

// add event listener for adding a new task
addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addTask();
});

// add event listener for marking a task as done
tasksList.addEventListener("click", function (e) {
  markTaskDone(e);
});
