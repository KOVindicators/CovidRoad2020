import levels from '../data/data-levels.js';
import occupations from '../data/occupations.js';
import { findById, getUser, setUser, getRandomEvent, rando } from '../utils.js';

import { renderHeader, renderRandom } from '../render.js';

const user = getUser();
const avatarImage = findById(user.occupation, occupations).avatar;
const params = new URLSearchParams(window.location.search);
const levelId = params.get('id');
const currentLevel = findById(levelId, levels);
const bigDivEl = document.createElement('div');
const headerEl = document.querySelector('header');
const main = document.querySelector('main');
const { ulLeftEl, ulCenterEl, ulRightEl } = renderHeader(user);
bigDivEl.classList.add('bigDiv');
headerEl.append(ulLeftEl, ulCenterEl, ulRightEl);

if (rando()) {
    const event = getRandomEvent();
    const eventSectionEl = renderRandom(event);
    const healthEl = document.getElementById('health');
    const wealthEl = document.getElementById('wealth');
    user.health += event.health;
    user.wealth += event.wealth;
    healthEl.textContent = `Health: ${user.health}`;
    wealthEl.textContent = `Money: $${user.wealth}`;
    main.append(eventSectionEl);

}




const levelName = document.createElement('h2');
levelName.textContent = currentLevel.title;
const imageBox = document.createElement('section');
imageBox.classList.add('image-box');
imageBox.style.backgroundImage = `url(../assets/${currentLevel.picture})`;
const avatarEl = document.createElement('img');
avatarEl.id = 'level-avatar';
avatarEl.src = `../assets/${avatarImage}`;
imageBox.append(avatarEl);
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


const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const choiceId = formData.get('choice');
    const result = findById(choiceId, currentLevel.choices).result;
    user.health += result.health;
    user.wealth += result.wealth;
    const resultSection = document.createElement('section');
    resultSection.classList.add('popup');
    const resultDiv = document.createElement('div');
    resultDiv.textContent = result.description;
    const tooltipEl = document.createElement('div');
    tooltipEl.classList.add('tooltip');
    const spanEl = document.createElement('span');
    spanEl.classList.add('tooltiptext');
    const aEl = document.createElement('a');
    
    aEl.textContent = 'More Info Here';
    aEl.href = result.url;
    aEl.target = '_blank';
    tooltipEl.textContent = 'Covid Information ';
    
    spanEl.textContent = result.info;
    spanEl.append(aEl);
    tooltipEl.append(spanEl);
    resultSection.append(resultDiv, tooltipEl);
    main.append(resultSection);
    user.completed[currentLevel.id] = true;
    

    setUser(user);
  

    const nextButton = document.createElement('button');
    nextButton.textContent = 'NEXT';
    nextButton.classList.add('glow');
    resultSection.append(nextButton);
    
    nextButton.addEventListener('click', () => {
        if (currentLevel.nextLevel === 'end' || user.health <= 0){
            window.location = '../results';
        } else {
            window.location = `../level/?id=${currentLevel.nextLevel}`;
        }
    });

}); 

const levelAvatar = document.querySelector('#level-avatar');
window.addEventListener('load', () => {
    levelAvatar.classList.add('scene-animation');
    
});






