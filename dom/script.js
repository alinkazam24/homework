
// --- Задание 1: создать структуру и добавить в body ---
const container = document.createElement('div');
container.className = 'container';

const heading = document.createElement('h1');
heading.textContent = 'Заголовок';

const paragraph = document.createElement('p');
paragraph.textContent = 'Это параграф';

const button = document.createElement('button');
button.textContent = 'Кнопка';

container.appendChild(heading);
container.appendChild(paragraph);
container.appendChild(button);
document.body.appendChild(container);

// --- Задание 2: изменить существующий элемент с id="box" ---
const boxById = document.getElementById('box');

if (boxById) {
  boxById.textContent = 'Новый текст';
  boxById.className = 'new';
  boxById.setAttribute('data-status', 'active');
  boxById.style.backgroundColor = 'lightblue';
}



