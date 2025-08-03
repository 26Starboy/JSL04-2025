// Import initial task data
import { initialTasks } from "./initialData.js";

/*
  Maps task statuses to their DOM containers.
  Each property (todo, doing, done) corresponds to a column's <div>.
*/
const columns = {
  todo: document.querySelector('[data-status="todo"] .tasks-container'),
  doing: document.querySelector('[data-status="doing"] .tasks-container'),
  done: document.querySelector('[data-status="done"] .tasks-container')
};

/*
  Loop through all tasks and render them inside the right column
*/
initialTasks.forEach((task) => {
  const taskDiv = document.createElement("div");
  taskDiv.textContent = task.title;
  taskDiv.dataset.description = task.description;
  taskDiv.classList.add("task-div");

  // Check if the column for the task status exists
  if (columns[task.status]) {
    columns[task.status].appendChild(taskDiv);
  }
});

// ==========================
// Modal Setup
// ==========================

// Form inputs & modal element
const modal = document.getElementById("taskModal");
const taskTitleInput = document.getElementById("taskTitle");
const taskDescriptionInput = document.getElementById("taskDescription");
const taskStatusSelect = document.getElementById("taskStatus");
const closeBtn = document.querySelector(".close-btn");

/*
  When a task is clicked: open the modal and populate fields
*/
document.querySelectorAll(".task-div").forEach((taskDiv) => {
  taskDiv.addEventListener("click", () => {
    taskTitleInput.value = taskDiv.textContent;
    taskDescriptionInput.value = taskDiv.dataset.description;

    const parentStatus = taskDiv.closest(".column-div").getAttribute("data-status");
    taskStatusSelect.value = parentStatus;

    modal.classList.remove("hidden");
  });
});

/*
  Close the modal when clicking the X button
*/
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
