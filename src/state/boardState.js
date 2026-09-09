export const boardState = {
    columns: [
        {
            id: 'column-1',
            title: 'TODO',
            cards: [
                {
                    id: 'card-1',
                    text: 'Изучить Drag & Drop',
                },
                {
                    id: 'card-2',
                    text: 'Сделать домашку',
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

export const addCard = (columnId, text) => {
    const id = crypto.randomUUID();
    const findColumn  = boardState.columns.find(column => column.id === columnId);

    if (!findColumn) {
        return;
    }

    findColumn.cards.push({
        id,
        text
    });

    // console.log(findColumn)
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

}

addCard('column-2', 'Какой-то текст для теста')

removeCard('card-1');

 boardState.columns.forEach(column => {
   console.log(column.cards)
})

moveCard('card-2', 'column-1', 'column-2', 0);



