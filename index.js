//Select variables

const addBtn = document.querySelector(".add-btn");
const input = document.querySelector(".input");
const ul = document.querySelector(".tasks-list");

// Event Listeners

addBtn.addEventListener("click", addItem);

checkBtn.addEventListener("click", checkItem);
deleteBtn.addEventListener("click", deleteItem);

//Functions

function addItem(e) {
  e.preventDefault(); //Prevent form from submiting
  const text = input.value;
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  const listItem = document.createElement("li");
  const checkBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  listItem.innerText = text;
  listItem.classList.add("list-item");
  checkBtn.classList.add("check-btn");
  deleteBtn.classList.add("delete-btn");
  listItem.appendChild(checkBtn);
  listItem.appendChild(deleteBtn);
  taskDiv.appendChild(listItem);
  ul.appendChild(taskDiv);

  input.value = "";
}

function deleteItem() {
  const item = e.target.parentElement;
  ul.removeChild(item);

  return deleteBtn;
}

checkBtn.innerText = "check";
deleteBtn.innerText = "delete";
