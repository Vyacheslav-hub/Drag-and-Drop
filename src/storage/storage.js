const STORAGE_KEY = 'trello-board';

export const saveBoardState = (boardState) => {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(boardState),
    );
};

export const loadBoardState = () => {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
        return null;
    }

    return JSON.parse(data);
};
