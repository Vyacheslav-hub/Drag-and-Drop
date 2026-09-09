export const createCard = (card) => {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.textContent = card.text;
    return newCard;
};