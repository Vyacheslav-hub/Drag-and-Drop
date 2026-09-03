import './testStyle.css'
export const createDiv = () => {
    const div = document.createElement('div');
    div.classList.add('test-div');
    div.textContent = 'Что-то написал'
    document.body.append(div);
}
