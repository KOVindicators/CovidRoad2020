import { renderHeader } from '../render.js';
import { getUser } from '../utils.js';
// import levels from '../data/levels.js';

const params = new URLSearchParams(window.location.search);
const userId = params.get('userId');
const user = getUser(userId);
const headerEl = document.querySelector('header');
const { ulLeftEl, ulCenterEl, ulRightEl } = renderHeader(user);
headerEl.append(ulLeftEl, ulCenterEl, ulRightEl);


// const main = document.querySelector('main');
const imageBox = document.querySelector('.image-box');
imageBox.classList.add('result-image');
const h2 = document.querySelector('.result-message');
const button = document.getElementById('restart-button');
//const danceFloor = document.querySelector('#dancehall'); this will be used for dancing avatar

if (user.health <= 0) {
    imageBox.style.backgroundImage = 'url(../assets/gravestone.png)';
    imageBox.textContent = `RIP ${user.name}`;
    h2.textContent = `${user.name} contracted Covid and died.`;
} else {
    imageBox.style.backgroundImage = 'url(../assets/trophy.png)';
    h2.textContent = `${user.name} Survived! Congratuations!`;
}

button.addEventListener('click', () => {
    //restart user @ homepage

    window.location = '../start';

    //restart with existing/ saved user data

});


// win section
    //You Survived! Congratuations! 
    //img w/ animation
    //cdc. link
    //state info? oregon health department. etc.

// lose section 
    //You died of Covid-19
    //img w/ tombstone
    //cdc. link
    //state info? oregon health department. etc.



