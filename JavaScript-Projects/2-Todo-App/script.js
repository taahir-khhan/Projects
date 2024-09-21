const inputBox = document.getElementById("input-box");
const button = document.querySelector(".btn");
const listContainer = document.querySelector(".list-container");
const clearButton = document.querySelector(".clear");

// Save list data to localStorage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Load list data from localStorage
function loadData() {
  listContainer.innerHTML = localStorage.getItem("data") || "";
}

// Function to create and append a new task to the list
function addTask(text) {
  const li = document.createElement("li");
  li.innerHTML = `${text} <img class="li-remove" title="delete" src="./images/remove.png" alt="remove logo">`;

  listContainer.appendChild(li);
  saveData();
}

// Add task on button click or enter key press
function handleAddTask() {
  const text = inputBox.value.trim(); // Ensure no empty string
  if (text) {
    addTask(text);
    inputBox.value = ""; // Clear input after adding
  }
}

// Event delegation for removing tasks and marking them as complete
listContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("li-remove")) {
    e.target.parentElement.remove(); // Remove the task
  } else if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked"); // Toggle task completion
  }
  saveData();
});

// Add task on button click
button.addEventListener("click", handleAddTask);

// Add task on Enter key press
inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleAddTask();
  }
});

// Clear all tasks and local storage
clearButton.addEventListener("click", () => {
  listContainer.innerHTML = ""; // Clear tasks from UI
  localStorage.clear(); // Clear tasks from localStorage
});

// Load tasks from localStorage on page load
loadData();
