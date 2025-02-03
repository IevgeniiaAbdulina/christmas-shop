"use strict";
import {modalElement} from "./modules/modal.js";

const body = document.querySelector('body');
const hamburgerMenu = document.getElementById('hamburger-menu');
const iconMenu = document.querySelector('#hamburger-menu > div');
const topNav = document.querySelector('nav');
const navLinks = document.querySelectorAll('#nav-list a');

let isMenuOpened = false;

addEventListener("resize", (event) => {
    closeMenu();
});

/** Hamburger menu */
function openMenu() {
    isMenuOpened = true;

    body.style.overflowY = 'hidden';
    iconMenu.classList.add('active');
    topNav.classList.add('opened');

    navLinks.forEach((item) => {
        item.classList.remove('action-small');
        item.classList.add('action-large');
    });
}

function closeMenu() {
    isMenuOpened = false;

    body.style.overflowY = 'scroll';
    iconMenu.classList.remove('active');
    topNav.classList.remove('opened');

    navLinks.forEach((item) => {
        item.classList.remove('action-large');
        item.classList.add('action-small');
    });
}

hamburgerMenu.addEventListener('click', (event) => {
    if (!isMenuOpened) {
        openMenu();
    } else {
        closeMenu();
    }
});

navLinks.forEach((item) => {
    item.addEventListener('click', (event) => {
        closeMenu();
    });
});

/** Modal window */
const modalId = 'modal-1';
const overlay = document.querySelector('.overlay');

export function showModal(gift) {
    body.style.overflowY = 'hidden';
    overlay.classList.remove('hidden');

    const modal = modalElement(gift, modalId, closeModal);
    overlay.prepend(modal);
}

export function closeModal() {
    body.style.overflowY = 'scroll';
    overlay.classList.add('hidden');

    const elem = document.getElementById(modalId);
    overlay.removeChild(elem);
}

window.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closeModal();
    }
})
