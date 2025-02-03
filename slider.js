"use strict";

const sliderNavLeft = document.querySelector('button.slider__nav-arrow.left');
const sliderNavRight = document.querySelector('button.slider__nav-arrow.right');
const sliderArea = document.querySelector('.slider__content-wrapper');
const parentContainer = document.querySelector('.slider__row-wrapper');

let screenWidth;
let clicksNum;
let totalSliderWidth;
let visibleSliderArea;
let maxSliderWidth;
let offsetValue;
let clickCounter = 0;
let currentPosition;

addEventListener("load", (event) => setDefaultState());
addEventListener("resize", (event) => setDefaultState());

sliderNavLeft.addEventListener('click', (e) => {
    if (clickCounter > 1) {
        clickCounter--;
        currentPosition += offsetValue;
        parentContainer.style.left = `${currentPosition}px`;
    } else {
        clickCounter = 0;
        currentPosition = 0;
        parentContainer.style.left = `${currentPosition}px`;
    }

    sliderNavRight.disabled = false;
    sliderNavLeft.disabled = clickCounter === 0;
});

sliderNavRight.addEventListener('click', (e) => {
    if(clickCounter < clicksNum - 1) {
        clickCounter++;
        currentPosition -= offsetValue;
        parentContainer.style.left = `${currentPosition}px`;
    } else {
        clickCounter = clicksNum;
        currentPosition = -maxSliderWidth;
        parentContainer.style.left = `${currentPosition}px`;
    }

    sliderNavRight.disabled = clickCounter === clicksNum;
    sliderNavLeft.disabled = false;
});

function setDefaultState() {
    screenWidth = document.documentElement.clientWidth;
    clicksNum = screenWidth <= 768 ? 6 : 3;
    totalSliderWidth = parentContainer.scrollWidth;
    visibleSliderArea = sliderArea.clientWidth;
    maxSliderWidth = totalSliderWidth - visibleSliderArea;
    offsetValue = Math.floor(maxSliderWidth / clicksNum);

    clickCounter = 0;
    currentPosition = 0;
    parentContainer.style.left = `${currentPosition}px`;

    sliderNavLeft.disabled = true;
    sliderNavRight.disabled = false;
}
