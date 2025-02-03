"use strict";
import {cardElement} from "./modules/gift-card.js";
import gifts from "./data/gifts.json" with {type: 'json'};
import {showModal} from "./main.js";
import {shuffleList} from "./best-gifts.js";

const cardContainer = document.querySelector('.best-gifts__card-container');
const tabAll = document.querySelector('.tabs__list li:nth-child(1)');
const tabForWork = document.querySelector('.tabs__list li:nth-child(2)');
const tabForHealth = document.querySelector('.tabs__list li:nth-child(3)');
const tabForHarmony = document.querySelector('.tabs__list li:nth-child(4)');
const categories = ["For Work", "For Health", "For Harmony"];

const tabs = document.querySelectorAll('.tabs__item');

addEventListener("load", () => {
    selectTab(tabAll);
    showGifts('all');
})

function unselectTab() {
    tabs.forEach(tab => {
        tab.classList.remove('selected');
    })
}

function selectTab(elem) {
    unselectTab();
    elem.classList.add('selected');
}

tabAll.addEventListener('click', (event) => {
    selectTab(tabAll);
    showGifts('all');
})
tabForWork.addEventListener('click', (event) => {
    selectTab(tabForWork);
    showGifts(categories[0]);
})
tabForHealth.addEventListener('click', (event) => {
    selectTab(tabForHealth);
    showGifts(categories[1]);
})
tabForHarmony.addEventListener('click', (event) => {
    selectTab(tabForHarmony);
    showGifts(categories[2]);
})

function createCardElement(elem) {
    const category = elem.category.split(' ')[1].toLowerCase();
    const subtitle = elem.category;
    const title = elem.name;

    const card = cardElement(category, subtitle, title);
    card.addEventListener('click', (e) => {
        showModal(elem);
    })
    return cardContainer.appendChild(card);
}

function removeAllChildren(node) {
    let child = node.lastElementChild;
    while (child) {
        node.removeChild(child);
        child = node.lastElementChild;
    }
}

function createCardList(list) {
    removeAllChildren(cardContainer);

    list.forEach((elem) => {
        createCardElement(elem);
    })
}

function showGifts(desiredCategory) {
    const randomGifts = shuffleList(gifts);

    if (!categories.includes(desiredCategory)) {
        createCardList(randomGifts);
        return;
    }

    const filteredGifts = gifts.filter((gift) => gift.category === desiredCategory);
    createCardList(filteredGifts);
}
