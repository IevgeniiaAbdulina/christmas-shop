"use strict";

const backToTopButton = () => {
    const container = document.querySelector('body');
    const button = document.createElement("button");
    button.classList.add("back-to-top-button");

    container.appendChild(button);
}

export { backToTopButton }
