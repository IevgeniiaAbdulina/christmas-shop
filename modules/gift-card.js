const cardElement = (category, subtitle, title) => {
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.classList.add(category);
    const cardImg = document.createElement("div");
    cardImg.className = "card__img";
    const cardHeader = document.createElement("div");
    cardHeader.className = "card__header";
    const cardSubtitle = document.createElement("h4");
    cardSubtitle.className = "card__subtitle";
    cardSubtitle.innerText = subtitle;
    const cardTitle = document.createElement("h3");
    cardTitle.className = "card__title";
    cardTitle.innerText = title;

    cardHeader.append(cardSubtitle, cardTitle);
    cardElement.append(cardImg, cardHeader);

    return cardElement;
}

export { cardElement }
