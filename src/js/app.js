import "../css/style.css";

import Sortable from "sortablejs";

const todo = document.querySelector('#todo');

const done = document.querySelector('#done');

new Sortable(todo, {
    animation: 250,
    group: 'cards'
});

new Sortable(done, {
    animation: 250,
    group: 'cards'
});
// const cards = document.querySelectorAll('.card');
//
// cards.forEach(card => {
//     card.addEventListener('dragstart', (e) => {
//         e.dataTransfer.setData('text/plain', card.id);
//         console.log(`взял карточку ${card.id}`);
//
//     });
//
//     card.addEventListener('dragover', (e) => {
//         e.preventDefault();
//         console.log(`над карточкой ${card.id}`);
//     });
//
//     card.addEventListener('drop', (e) => {
//         const id = e.dataTransfer.getData('text/plain');
//         const elem = document.getElementById(id);
//         card.classList.remove('drag-over');
//         card.before(elem);
//         console.log(`бросил карточку ${id}`);
//         console.log(`на элементом ${card.id}`)
//         console.log(elem)
//     });
//
//     card.addEventListener('dragenter', () => {
//         card.classList.add('drag-over');
//         console.log(`Зашёл на карточку ${card.id}`);
//     });
//
//     card.addEventListener('dragleave', () => {
//         card.classList.remove('drag-over');
//         console.log(`Ушёл с карточки ${card.id}`);
//     });
// })
