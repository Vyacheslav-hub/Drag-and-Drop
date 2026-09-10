import './Column.css'
import { createCard } from "../Card/Card.js";
import {addCard, boardState} from '../../state/boardState.js';
import { saveBoardState } from '../../storage/storage.js';

export const createColumn = (column) => {
    const newColumn = document.createElement("div");
    newColumn.classList.add("column");
    newColumn.dataset.id = column.id;

    const newColumnTitle = document.createElement("h2");
    newColumnTitle.textContent = column.title;

    const newCards = document.createElement('div');
    newCards.classList.add("cards");

    column.cards.forEach(card => {
       newCards.append(createCard(card));
    })

    const addCardButton = document.createElement('button');
    addCardButton.textContent = 'Добавить карточку';
    addCardButton.classList.add('add-card-button');

    addCardButton.addEventListener('click', () => {
        const newCard = document.createElement('div');
        newCard.classList.add('card');

        const input = document.createElement('textarea');
        input.placeholder = 'Введите текст...';

        const imageInput = document.createElement('input');
        imageInput.type = 'file';
        imageInput.accept = 'image/*';

        let image = null;

        imageInput.addEventListener('change', () => {
            const file = imageInput.files[0];

            if (!file) {
                return;
            }

            const reader = new FileReader();

            reader.onload = () => {
                image = reader.result;

                const preview = document.createElement('img');

                preview.src = image;
                preview.alt = '';

                newCard.append(preview);
            };

            reader.readAsDataURL(file);
        });
        input.addEventListener('input', () => {
            input.style.height = 'auto';
            input.style.height = `${input.scrollHeight}px`;
        });

        const actions = document.createElement('div');
        actions.classList.add('card-actions');

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Добавить';

        saveButton.addEventListener('click', () => {
            const card = addCard(column.id, input.value, image);

            saveBoardState(boardState);

            newCard.remove();
            newCards.append(createCard(card));
        });

        const cancelButton = document.createElement('button');
        cancelButton.textContent = '✕';

        cancelButton.addEventListener('click', () => {
            newCard.remove();
        });

        actions.append(saveButton, cancelButton);
        newCard.append(input, imageInput, actions);
        newCards.append(newCard);

        input.focus();
    });

    newColumn.append(newColumnTitle, newCards, addCardButton);
    return newColumn;
}
