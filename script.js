const input = document.querySelector('.input-field');
const btn = document.querySelector('.input-btn');
const list = document.querySelector('.list-item');
const alldelBtn = document.querySelector('.all-delete');
const totalTask = document.querySelector('.total');
const p = document.querySelectorAll('.item-desc');
const itemBtn = document.querySelector('.item-btn');

let todo = JSON.parse(localStorage.getItem('todo')) || [];

displayTask();

document.addEventListener('DOMContentLoaded', () => {
  btn.addEventListener('click', () => {
    addTask();
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  });
  alldelBtn.addEventListener('click', () => {
    todo = [];
    store();
    displayTask();
  });
});

function addTask() {
  task = input.value;
  if (task !== '') {
    todo.push({name:task,is:false});
    displayTask();
    store();
    input.value = '';
  }
}

function displayTask() {
  list.innerHTML = '';
  todo.forEach((item, index) => {
    list.innerHTML += `<li class="item">
        <p class="item-desc">

        <input type="checkbox" onchange="toggleTask(${index})"
        ${item.is ? "checked" : "" }
        >

        <span>${item.name}</span>

        <button class="item-btn"
        onclick="deleteBtn(${index})">
        <i class="fa-solid fa-x"></i>
        </button>

        </p>
      </li>`;
  });
  total();
}

function store() {
  localStorage.setItem('todo', JSON.stringify(todo));
}

function total() {
  totalTask.innerHTML = `<p><span>${todo.length}</span>Tasks</p>`;
}

function deleteBtn(index) {
  todo.splice(index,1);
  displayTask();
}

function toggleTask(index)
{
  todo[index].is = !todo[index].is;
  store();
  displayTask();
}
