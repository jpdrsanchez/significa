import initMenuMobile from './modules/menuMobile';
initMenuMobile();

import initSmoothScroll from './modules/smoothScroll';
initSmoothScroll();

import initInputLabel from './modules/inputLabel';
initInputLabel();

import initRatio from './modules/ratio';
initRatio();

import initImageModal from './modules/imageModal';
initImageModal();

import VMasker from 'vanilla-masker';
const inputCEP = document.querySelector('[data-mask="cep"]');
const inputTel = document.querySelector('[data-mask="tel"]');
const inputDate = document.querySelector('[data-mask="date"]');
const inputNumber = document.querySelector('[data-mask="number"]');

if (inputCEP) VMasker(inputCEP).maskPattern('99999-999');
if (inputTel) VMasker(inputTel).maskPattern('(99) 99999-9999');
if (inputDate) VMasker(inputDate).maskPattern('99/99/9999');
if (inputNumber) VMasker(inputNumber).maskNumber();
