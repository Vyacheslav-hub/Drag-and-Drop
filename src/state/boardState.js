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

addCard('column-2', 'Какой-то текст для теста')

removeCard('card-1');

boardState.columns.forEach(column => {
    console.log(column.cards)
})
