import { renderHeader } from '../render.js';
import { getUser, findById } from '../utils.js';
import occupations from '../data/occupations.js';

const params = new URLSearchParams(window.location.search);
const userId = params.get('userId');
const user = getUser(userId);

const headerEl = document.querySelector('header');
const { ulLeftEl, ulCenterEl, ulRightEl } = renderHeader(user);
headerEl.append(ulLeftEl, ulCenterEl, ulRightEl);

const audio = document.createElement('audio');
audio.id = 'random-event-sound';
audio.src = '../assets/sound-folder/you-died-the-end.mp3';
audio.autoplay = true;
audio.type = 'audio/ogg';

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
    imageBox.textContent = `---- RIP ---- ${user.name}`;
    h2.textContent = `${user.name} contracted Covid and died.`;
    avatarEl.classList.add('fall-dead');
} else {
    imageBox.style.backgroundImage = 'url(../assets/trophy.png)';
    h2.textContent = `${user.name} Survived! Congratuations!`;
    // lol
    avatarEl.classList.add('tiny-dancer');
}

button.addEventListener('click', () => {

    window.location = '../start';
});

