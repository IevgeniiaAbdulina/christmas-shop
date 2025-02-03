"use strict";
import {backToTopButton} from "./modules/back-to-top-button.js";

let scrollToTopButton;

addEventListener("load", function () {
    backToTopButton();

    scrollToTopButton = document.querySelector(".back-to-top-button");
    scrollToTopButton.addEventListener("click", function () {
        scrollToTopPage();
    })
})

window.onscroll = function () {
    scrollFunction(scrollToTopButton)
};

function scrollFunction(button) {
    if (!button) return;

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        if (document.body.clientWidth <= 768) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    } else {
        button.style.display = "none";
    }
}

function scrollToTopPage() {
    document.documentElement.scrollTop = 0;
}

