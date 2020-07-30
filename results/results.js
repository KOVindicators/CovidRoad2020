import { renderHeader } from '../render.js';
import { getUser, findById } from '../utils.js';
import occupations from '../data/occupations.js';
// import levels from '../data/levels.js';

const user = getUser();
const headerEl = document.querySelector('header');
const { ulLeftEl, ulCenterEl, ulRightEl } = renderHeader(user);
headerEl.append(ulLeftEl, ulCenterEl, ulRightEl);


// const main = document.querySelector('main');
const imageBox = document.querySelector('.image-box');
imageBox.classList.add('result-image');
const h2 = document.querySelector('.result-message');
const button = document.getElementById('restart-button');
const danceFloor = document.querySelector('.dancehall');
const avatarImage = findById(user.occupation, occupations).avatar;
const avatarEl = document.createElement('img'); 
avatarEl.src = `../assets/${avatarImage}`;
danceFloor.append(avatarEl);
avatarEl.id = 'tiny-dancer';

if (user.health <= 0) {
    imageBox.style.backgroundImage = 'url(../assets/gravestone.png)';
    imageBox.textContent = `RIP ${user.name}`;
    h2.textContent = `${user.name} contracted Covid and died.`;
    avatarEl.classList.add('fall-dead');
} else {
    imageBox.style.backgroundImage = 'url(../assets/trophy.png)';
    h2.textContent = `${user.name} Survived! Congratuations!`;
    avatarEl.classList.add('tiny-dancer');
}

button.addEventListener('click', () => {
    //restart user @ homepage

    window.location = '../start';

    //restart with exhisting/ saved user data

});


// win section
    //You Survived! Congratuations! 
    //img w/ animation
    //cdc. link
    //state info? oregon health depo. etc.

// lose section 
    //You died of Covid-19
    //img w/ tombstone
    //cdc. link
    //state info? oregon health depo. etc.



