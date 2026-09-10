import Sortable from 'sortablejs';
import {boardState, moveCard} from "../state/boardState.js";
import {saveBoardState} from "../storage/storage.js";

export const initDragAndDrop = () => {
    const cardsContainers = document.querySelectorAll('.cards');

    cardsContainers.forEach(column => {
        new Sortable(column, {
            animation: 250,
            group: 'cards',

            onEnd: (event) => {
                const cardId = event.item.dataset.id;
                const fromColumnId = event.from.closest('.column').dataset.id;
                const toColumnId = event.to.closest('.column').dataset.id;

                moveCard(
                    cardId,
                    fromColumnId,
                    toColumnId,
                    event.newIndex,
                );

                saveBoardState(boardState);
            },
        });
    });
};
