const addSnowflakes = (n, total, parent) => {
    let counter = 0;
    while (counter < total) {
        const snowflakeWrap = document.createElement("div");
        if (counter < n) {
            snowflakeWrap.classList.add("snowflake");
        } else {
            snowflakeWrap.classList.add("snowflake");
            snowflakeWrap.style.opacity = "0.1";
        }
        parent.append(snowflakeWrap);
        counter++;
    }
}

const modalSuperpowersElement = (data) => {
    const modalSuperpowersContainer = document.createElement("div");
    modalSuperpowersContainer.className = "sub-container";

    const subHeader = document.createElement("h4");
    subHeader.className = 'sub-header';
    subHeader.innerText = 'Adds superpowers to:';

    const subContentWrap = document.createElement("div");
    subContentWrap.className = 'sup__content-wrap';

    Object.entries(data).forEach(([key, value]) => {
        const supContentRow = document.createElement("div");
        supContentRow.className = 'sup__content-row';
        const rowTitle = document.createElement("p");
        const rowSubtitle = document.createElement("p");
        const subSnowflakes = document.createElement("div");
        subSnowflakes.className = "sub__snowflakes";

        rowTitle.innerText = key;
        rowSubtitle.innerText = value;

        const n = value.split('')[1];
        const totalSnowflakes = 5;
        addSnowflakes(n, totalSnowflakes, subSnowflakes);

        supContentRow.append(rowTitle, rowSubtitle, subSnowflakes);
        subContentWrap.append(supContentRow);
    })
    modalSuperpowersContainer.append(subHeader, subContentWrap);

    return modalSuperpowersContainer;
}

const modalElement = (data,id, closeCallback) => {
    const modal = document.createElement('div');
    modal.className = "modal";
    modal.id = id;

    const category = data.category.split(' ')[1].toLowerCase();
    modal.classList.add(category);

    const closeBtn = document.createElement("div");
    closeBtn.className = "modal__close-icon-wrapper";
    closeBtn.addEventListener('click', (event) => {
        closeCallback();
    });

    const modalImg = document.createElement("div");
    modalImg.className = "modal__img";

    const modalContentWrapper = document.createElement("div");
    modalContentWrapper.className = "modal__content-wrapper";

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal__header";

    const modalSubtitle = document.createElement("h4");
    modalSubtitle.className = "modal__subtitle";
    modalSubtitle.innerText = data.category;

    const modalTitle = document.createElement("h3");
    modalTitle.className = "modal__title";
    modalTitle.innerText = data.name;

    const modalDescription = document.createElement("p");
    modalDescription.innerText = data.description;

    const modalSuperpowers = modalSuperpowersElement(data.superpowers);
    modalContentWrapper.append(modalHeader, modalSuperpowers)
    modalHeader.append(modalSubtitle, modalTitle, modalDescription);
    modal.append(closeBtn, modalImg, modalContentWrapper);

    return modal;
}

export {modalElement}
