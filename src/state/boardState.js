import { loadBoardState } from '../storage/storage.js';

export const boardState = {
    columns: [
        {
            id: 'column-1',
            title: 'TODO',
            cards: [
                {
                    id: 'card-1',
                    text: 'Изучить Drag & Drop',
                    image: null,
                },
                {
                    id: 'card-2',
                    text: 'Сделать домашку',
                    image: null,
                },
            ],
        },

        {
            id: 'column-2',
            title: 'IN PROGRESS',
            cards: [],
        },

        {
            id: 'column-3',
            title: 'DONE',
            cards: [],
        },
    ],
};

export const addCard = (columnId, text, image = null) => {
    const id = crypto.randomUUID();
    const findColumn = boardState.columns.find(column => column.id === columnId);

    if (!findColumn) {
        return;
    }

    const newCard = {
        id,
        text,
        image
    };

    findColumn.cards.push(newCard);

    return newCard;
}

export const removeCard = (cardId) => {
    boardState.columns.forEach(column => {
        const cardIndex = column.cards.findIndex(card =>
            card.id === cardId
        );

        if (cardIndex !== -1) {
            column.cards.splice(cardIndex, 1);
        }
    })

}

export const moveCard = (cardId, fromColumnId, toColumnId, newIndex = 0) => {
    const fromColumn = boardState.columns.find(column => column.id === fromColumnId);
    const toColumn = boardState.columns.find(column => column.id === toColumnId);

    if (!fromColumn || !toColumn) {
        return;
    }

    const card = fromColumn.cards.find(card => card.id === cardId);
    const cardIndex = fromColumn.cards.findIndex(card => card.id === cardId);

    if (cardIndex === -1) {
        return;
    }

    fromColumn.cards.splice(cardIndex, 1);
    toColumn.cards.splice(newIndex, 0, card);
};

const savedState = loadBoardState();

if (savedState) {
    boardState.columns = savedState.columns;
}
