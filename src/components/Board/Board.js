import './Board.css'
import {boardState} from "../../state/boardState.js";
import {createColumn} from "../Column/Column.js";

export const createBoard = () => {
    const board = document.createElement('div');
    board.classList.add('board');

    boardState.columns.forEach(column => {
        board.append( createColumn(column));
    });

    return board;
};
