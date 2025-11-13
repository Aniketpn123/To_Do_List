const btn = document.querySelector('.btn');
const inputFiled = document.querySelector('.input-field');
const listItem = document.querySelector('.list-item');
const deleteButton=document.getElementById('delete-button');

let todo =['aniket'];

// add btn

btn.addEventListener('click', () => {
  addItem();
});

inputFiled.addEventListener('keydown',(e)=>{
  if(e.key === 'Enter')
  {
    addItem();
  }
})

// delete alll btn

deleteButton.addEventListener('click',()=>{
   delItem();
})

// function

function addItem() {
  let task = inputFiled.value;
  if (task !== '') {
    todo.push(task);
  }
  display();
  inputFiled.value = '';
}

function display() {
  listItem.innerHTML="";
  todo.forEach((item, index) => {
    let li = document.createElement('li');
    li.id = 'todo-list';
    li.innerHTML = `<p><input type="checkbox">${item}</p>`;
    listItem.appendChild(li);
  });
}
function delItem(){
     todo= [];
     display();
}
