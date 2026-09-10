import "../css/style.css";
import {createBoard} from "../components/Board/Board.js";
import {initDragAndDrop} from "../dragAndDrop/dragAndDrop.js";

const app = document.querySelector('#app');

app.append(createBoard());

initDragAndDrop();
