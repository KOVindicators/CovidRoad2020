import levels from '../data/levels.js';
import { findById, getUser } from '../utils.js';
import occupations from '../data/occupations.js';

const user = getUser();
const avatarImage = findById(user.occupation, occupations).avatar;


const main = document.querySelector('main');
const currentLevel = levels[0];
const bigDivEl = document.createElement('div');
const levelName = document.createElement('h2');
levelName.textContent = levels[0].title;

const imageBox = document.createElement('section');
imageBox.classList.add('image-box');
imageBox.style.backgroundImage = `url(../assets/${currentLevel.picture})`;

const avatarEl = document.createElement('img');
avatarEl.id = 'avatar';
avatarEl.src = `../assets/${avatarImage}`;


imageBox.append(avatarEl);
//bigDivEl.append(imageBox);

const mainSectionEl = document.createElement('section');
mainSectionEl.classList.add('main-section');
const descriptionEl = document.createElement('div');
descriptionEl.classList.add('scene');
descriptionEl.textContent = currentLevel.description;
const formEl = document.createElement('form'); 
const labelDivEl = document.createElement('div');
currentLevel.choices.forEach(choice => {
    const labelEl = document.createElement('label');
    labelEl.classList.add('glow');
    labelEl.textContent = choice.description;
    const inputEl = document.createElement('input');
    inputEl.type = 'radio';
    inputEl.value = choice.id;
    inputEl.name = 'choice';
    labelEl.append(inputEl);
    labelDivEl.append(labelEl);
});
const buttonEl = document.createElement('button');
buttonEl.classList.add('glow');
buttonEl.textContent = 'submit';
buttonEl.type = 'submit';
formEl.append(labelDivEl, buttonEl);
mainSectionEl.append(descriptionEl, formEl);
bigDivEl.append(levelName, imageBox, mainSectionEl);


main.append(bigDivEl);
