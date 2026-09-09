import {createCard} from "../Card/Card.js";

export const createColumn = (column) => {
    const newColumn = document.createElement("div");
    newColumn.classList.add("column");

    const newColumnTitle = document.createElement("h2");
    newColumnTitle.textContent = column.title;

    const newCards = document.createElement('div');
    newCards.classList.add("card");
    column.cards.forEach(card => {
       newColumn.append(createCard(card));
    })



    console.log( newColumn);
}

