const todoInputEl = document.querySelector('.todo__input');
const todoListEl = document.querySelector('.todo__list');
// const todoEl = document.querySelector('.todo__item');

function addTodo() {
  todoInputEl.addEventListener('change', () => {
    const todoItem = document.createElement('LI');
    const todoButton = document.createElement('button');
    const todoButtonText = document.createTextNode('Del');
    const inputText = todoInputEl.value;
    const t = document.createTextNode(inputText);

    todoListEl.appendChild(todoItem);
    todoListEl.lastChild.appendChild(t);
    todoListEl.lastChild.classList.add('todo__item');

    todoListEl.lastChild.appendChild(todoButton);
    todoListEl.lastChild.lastChild.appendChild(todoButtonText);
    todoListEl.lastChild.lastChild.classList.add('todo__button');

    todoInputEl.value = '';
  });
}

function toggleTodo() {
  todoListEl.addEventListener('click', (event) => {
    event.target.classList.toggle('done');
  });
}

// Luistert continu naar clicks op het gehele document en kijkt dan of de click wordt
// veroorzaakt door iets met class="todo__button".
// Werkt ook bij pagina's die vernieuwd worden.


document.addEventListener('click', (event) => {
  if (event.target.matches('.todo__button')) {
    todoListEl.removeChild(event.target.parentElement);
  }
  if (event.target.matches('.todo__item')) {
    event.target.classList.toggle('.done');
  }
}, false);


addTodo();
toggleTodo();
