import levels from '../data/levels.js';
import { findById, getUser, setUser } from '../utils.js';
import occupations from '../data/occupations.js';

const user = getUser();
const avatarImage = findById(user.occupation, occupations).avatar;
const params = new URLSearchParams(window.location.search);
const levelId = params.get('id');
const currentLevel = findById(levelId, levels);

const headerEl = document.querySelector('header');
const ulLeftEl = document.createElement('ul');
ulLeftEl.classList.add('avatar');

const liImgEl = document.createElement('li');
const liImg = document.createElement('img');
liImg.src = `../assets/${avatarImage}`;
liImg.classList.add('avatar-image');
liImgEl.append(liImg);


const liNameEl = document.createElement('li');
liNameEl.textContent = `Name : ${user.name}`;

ulLeftEl.append(liImgEl, liNameEl);

const ulCenterEl = document.createElement('ul');
const liProgress = document.createElement('li');
const numberCompleted = Object.keys(user.completed).length;
liProgress.textContent = `Level: ${numberCompleted} of ${levels.length}`;
ulCenterEl.append(liProgress);

const ulRightEl = document.createElement('ul');
const liMoneyEl = document.createElement('li');
const liHealthEl = document.createElement('li');
liMoneyEl.textContent = `Money: ${user.wealth}`;
liHealthEl.textContent = `Health: ${user.health}`;
ulRightEl.append(liMoneyEl, liHealthEl);

headerEl.append(ulLeftEl, ulCenterEl, ulRightEl);
 // <header>
// <ul class="avatar">
// <li>
//     <img src="../assets/protestor.png" width ="40px" height="auto">
// </li>
// <li>
//  name: Dr. FunStix
// </li> 
// </ul>
// <ul>
// <!-- We want to add a LEVEL 1, LEVEL 2, LEVEL 3 in the center of our HEADER -->
// <li>
//     Level x of y
// </li>
// </ul>
// <ul>
// <li>
//     money: 800
// </li>
// <li>
//     health: 100
// </li>
// </ul>

// </header>




const main = document.querySelector('main');
const bigDivEl = document.createElement('div');
const levelName = document.createElement('h2');
levelName.textContent = levels[0].title;
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
    const resultDiv = document.createElement('div');
    resultDiv.textContent = result.description;
    const aEl = document.createElement('a');
    aEl.classList.add('glow');
    aEl.textContent = 'For more info, visit: ' + result.url;
    aEl.href = result.url;
    resultSection.append(resultDiv, aEl);
    bigDivEl.append(resultSection);
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
   

 
   

   




  
    





