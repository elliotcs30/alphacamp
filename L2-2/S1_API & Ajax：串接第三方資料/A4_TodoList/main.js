// 初始變數
const list = document.querySelector("#my-todo");
const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#new-todo");
const listDone = document.querySelector("#my-todo-done");

// 資料
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
];

for (let todo of todos) {
  addItem(todo);
}

// 函式
function addItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  list.appendChild(newItem);
}

function doneItem(text) {
  let doneItem = document.createElement("li");
  doneItem.innerHTML = `
    <label for="todo" class="checked">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  listDone.appendChild(doneItem);
}

// Create
addBtn.addEventListener("click", function () {
  // trim() 方法會移除字串起始及結尾處的空白字元
  const inputValue = input.value.trim();

  if (inputValue.length > 0) {
    addItem(inputValue);
  }
});

// Delete and done
list.addEventListener("click", function (event) {
  const target = event.target;
  const parentElement = target.parentElement;

  if (target.classList.contains("delete")) {
    parentElement.remove();
  } else if (target.tagName === "LABEL") {
    if (!target.classList.contains("checked")) {
      // 完成的item
      doneItem(target.innerText);
      // 刪除完成的項目
      parentElement.remove();
    }
  }
});

listDone.addEventListener("click", function (event) {
  const target = event.target;
  const parentElement = target.parentElement;

  if (target.classList.contains("delete")) {
    parentElement.remove();
  }
});
