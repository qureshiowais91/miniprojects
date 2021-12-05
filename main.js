const addtask = document.querySelector(".add");
const searchTask = document.querySelector(".search");
const todoList = document.querySelector(".todos");

const genaratTemplate = (todo) => {
  const html = `
  <li class="m-3 d-flex list-group-item justify-content-between">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;

  todoList.innerHTML += html;
};

addtask.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addtask.add.value.trim();

  if (todo) {
    genaratTemplate(todo);
    addtask.reset();
  }
});

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterSearch = (term) => {
  
  
 const list  =   Array.from(todoList.children);

  const filtedArray = list.filter((element) => {
    return !element.textContent.toLowerCase().includes(term);
  });

  const matechedArray = list.filter((element) => {
    return element.textContent.toLowerCase().includes(term);
  });

  filtedArray.forEach((e) => {
    e.classList.add("visually-hidden");
  });

  matechedArray.forEach((e) => {
    e.classList.remove("visually-hidden");
  });

};

searchTask.addEventListener("keyup", () => {
  const term = searchTask.search.value.trim().toLowerCase();
  filterSearch(term);
});
