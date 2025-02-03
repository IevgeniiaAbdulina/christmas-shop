"use strict";
import {showModal} from "./main.js";
import gifts from "./data/gifts.json" with {type: 'json'};

const bestGifts = document.querySelectorAll('#best-gifts .card');
const categories = ["For Work", "For Health", "For Harmony"];

/** creates predefined list of categories times provided by [times] argument*/
function generateCategories(times = 1, shuffle = false) {
    let result = []
    const maxKnownCategories = categories.length;
    for (let index = 0; index < times; index++) {
        result.push(categories[index % maxKnownCategories])
    }

    return shuffle === true ? shuffleList(result) : result;
}

function shuffleList(list) {
    return list.sort(() => Math.random() - 0.5);
}

/** tries to find gift by requested category, may return another
 * element is element by this category can't be found*/
function getRandomGiftData(desiredCategory = "For Work") {
    const selectedGifts = gifts.filter((gift) => gift.category === desiredCategory)

    if (selectedGifts.length === 0) {
        const maxGifts = gifts.length;
        const index = Math.floor(Math.random() * maxGifts);
        return gifts[index];
    } else {
        const maxGifts = selectedGifts.length;
        const index = Math.floor(Math.random() * maxGifts);
        return selectedGifts[index];
    }
}

const cardsNumber = bestGifts.length;
const generatedCategories = generateCategories(cardsNumber, true);

bestGifts.forEach((item, index) => {
    let cardTitle = item.querySelector('.card__header .card__title');
    let cardSubTitle = item.querySelector('.card__header .card__subtitle');

    const categoryName = generatedCategories[index]
    const gift = getRandomGiftData(categoryName);

    cardTitle.innerText = gift.name;// gift.name
    cardSubTitle.innerText = gift.category;
    let newClassName = gift.category.split(' ')[1].toLowerCase();
    item.classList.add(newClassName);
    item.addEventListener('click', (e) => {
        showModal(gift);
    });
})

export { shuffleList }
