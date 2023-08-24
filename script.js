// const input = document.getElementById("#new-task-input");
// const addBtn = document.getElementById("#new-task-submit");
// const tasks = document.querySelector(".task");
let input = document.querySelector(".entered-list");
let addBtn = document.querySelector(".add-list");
let tasks = document.querySelector(".task");
// add btn disabled
input.addEventListener("keyup", function () {
  if (input.value.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
});

// add new item to list

addBtn.addEventListener("click", function () {
  if (input.value.trim() != 0) {
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.innerHTML = `
       <p> ${input.value} </p>
          <div class="item-btn actions">
            <button class="done">Done</button>
            <button class="delete">Delete</button>
          </div>
   `;

    tasks.appendChild(newItem);
    input.value = "";
  } else {
    alert("Please enter a task");
  }
});

// delete item from list

tasks.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
});

// mark item from list

tasks.addEventListener("click", function (e) {
  if (e.target.classList.contains("done")) {
    e.target.parentElement.parentElement.classList.toggle("completed");
  }
});
