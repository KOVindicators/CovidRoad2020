import { renderHeader } from '../render.js';
import { getUser } from '../utils.js';
// import levels from '../data/levels.js';

const user = getUser();
const headerEl = document.querySelector('header');
const { ulLeftEl, ulCenterEl, ulRightEl } = renderHeader(user);
headerEl.append(ulLeftEl, ulCenterEl, ulRightEl);


// const main = document.querySelector('main');
const imageBox = document.querySelector('.image-box');
const h2 = document.querySelector('.result-message');
const button = document.getElementById('restart-button');


if (user.health <= 0) {
    imageBox.style.backgroundImage = 'url(../assets/placement.png)';
    h2.textContent = `${user.name} contracted Covid and died.`;
} else {
    imageBox.style.backgroundImage = 'url(../assets/logo.jpg)';
    h2.textContent = `${user.name} Survived! Congratuations!`;
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



