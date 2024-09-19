// =========== My code is properly working, but in case of local storage it gives unnecessary behaviuor ======

// function createTask(text) {
//   if (!text) return;
//   const li = document.createElement("li");
//   li.innerHTML = `${text} <img class="li-remove" title="delete" src="./images/remove.png" alt="remove logo">`;
//   listContainer.appendChild(li);

//   li.addEventListener("click", () => {
//     li.classList.toggle("checked");
//     saveData();
//   });

//   const listRemove = document.querySelectorAll(".li-remove");
//   listRemove.forEach((item) => {
//     item.addEventListener("click", () => {
//       item.parentNode.remove();
//       saveData();
//     });
//   });

//   saveData();
// }

// function saveData() {
//   localStorage.setItem("data", listContainer.innerHTML);
// }

// function getData() {
//   listContainer.innerHTML = localStorage.getItem("data");
// }

// const inputBox = document.getElementById("input-box");
// const button = document.querySelector("#btn");
// const listContainer = document.querySelector(".list-container");

// button.addEventListener("click", () => {
//   const todoText = inputBox.value;
//   createTask(todoText);
//   saveData();
//   inputBox.value = "";
// });

// getData();

const inputBox = document.getElementById("input-box");
const button = document.querySelector(".btn");
const listContainer = document.querySelector(".list-container");
const clearButton = document.querySelector(".clear");

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function loadData() {
  listContainer.innerHTML = localStorage.getItem("data") || "";
}

// Event Delegation
listContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("li-remove")) {
    e.target.parentElement.remove();
  } else if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
  saveData();
});

button.addEventListener("click", () => {
  const text = inputBox.value.trim(); //Ensure no empty string
  if (text) {
    listContainer.innerHTML += `<li>${text} <img class="li-remove" title="delete" src="./images/remove.png" alt="remove logo"></li>`;
    saveData();
    inputBox.value = "";
  }
});

// Clear all tasks and local storage
clearButton.addEventListener("click", () => {
  listContainer.innerHTML = "";
  localStorage.clear();
});

loadData(); // Load tasks from localStorage on page load
