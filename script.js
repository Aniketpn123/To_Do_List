const input = document.querySelector('.input-field');
const btn = document.querySelector('.input-btn');
const list = document.querySelector('.list-item');
const delBtn = document.querySelector('.all-delete');
const totalTask= document.querySelector('.total');

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
  delBtn.addEventListener('click', () => {
    todo = [];
    store();
    displayTask();
  });
});

function addTask() {
  task = input.value;
  if (task !== '') {
    todo.push(task);
    displayTask();
    store();
    input.value = '';
  }
}

function displayTask() {
  list.innerHTML = '';
  todo.forEach((item, index) => {
    list.innerHTML += `<li class="item">
        <p class="item-desc"><input type="checkbox" name="" ><span></span>${item}</p>
      </li>`;
  });
  total();
}

function store(){
  localStorage.setItem('todo',JSON.stringify(todo));
}

function total(){
  totalTask.innerHTML=`<p><span>${todo.length}</span>Tasks</p>`;
}