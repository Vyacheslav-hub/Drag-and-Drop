import './Card.css'
import {boardState, removeCard} from "../../state/boardState.js";
import {saveBoardState} from "../../storage/storage.js";
export const createCard = (card) => {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.dataset.id = card.id;
    newCard.textContent = card.text;

    if (card.image) {
        const image = document.createElement('img');
        image.src = card.image;
        image.alt = '';
        newCard.append(image);
    }

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.textContent = '✕';

    removeButton.addEventListener('click', (e) => {
        e.stopPropagation();

        removeCard(card.id);
        saveBoardState(boardState);
        newCard.remove();
    })

    newCard.append(removeButton);
    return newCard;
};
