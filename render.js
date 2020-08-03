import { findById, setUser, getUser } from './utils.js';
import occupations from './data/occupations.js';
import levels from './data/data-levels.js';


export function renderStartPage(occupationList, userId) {
    const mainSectionEl = document.createElement('section');
    mainSectionEl.classList.add('main-section');

    const user = getUser(userId);

    const startImgEl = document.createElement('img');
    startImgEl.src = '../assets/logo.jpg';
    startImgEl.classList.add('start-image');

    const formEl = document.createElement('form');

    const nameLabelEl = document.createElement('label');
    nameLabelEl.textContent = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.name = 'name';
    if (user) nameInput.value = user.name;
    nameLabelEl.append(nameInput);

    const ageLabelEl = document.createElement('label');
    ageLabelEl.textContent = 'Age:';
    const ageInput = document.createElement('input');
    ageInput.name = 'age';
    ageInput.type = 'number';
    if (user) ageInput.value = user.age;
    ageLabelEl.append(ageInput);

    const emailLabelEl = document.createElement('label');
    emailLabelEl.textContent = 'Email:';
    const emailInput = document.createElement('input');
    emailInput.name = 'email';
    emailInput.type = 'email';
    emailInput.value = userId;
    emailLabelEl.append(emailInput);
    formEl.append(nameLabelEl, ageLabelEl, emailLabelEl);

    occupationList.forEach(occupation => {
        const labelEl = document.createElement('label');
        labelEl.textContent = occupation.title;
        labelEl.classList.add('glow');

        const imgEl = document.createElement('img');
        imgEl.src = `../assets/${occupation.avatar}`;
        imgEl.classList.add('start-avatar');

        const radioButtonEl = document.createElement('input');
        radioButtonEl.type = 'radio';
        radioButtonEl.name = 'occupation';
        radioButtonEl.value = occupation.id;
        radioButtonEl.classList.add('hidden');

        labelEl.append(radioButtonEl, imgEl);
        formEl.append(labelEl);
    });
    
    const submitButtonEl = document.createElement('button');
    submitButtonEl.classList.add('glow');
    submitButtonEl.textContent = 'Start:';
    submitButtonEl.type = 'submit';

    formEl.append(submitButtonEl);
    mainSectionEl.append(startImgEl, formEl);
    return mainSectionEl;
}


export function renderHeader(user) {
    const ulLeftEl = document.createElement('ul');
    ulLeftEl.classList.add('avatar');
    const avatarImage = findById(user.occupation, occupations).avatar;

    const liImgEl = document.createElement('li');
    const liImg = document.createElement('img');
    user.health <= 0 ? liImg.src = '../assets/gravestone.png' : liImg.src = `../assets/${avatarImage}`;
    liImg.classList.add('avatar-image');
    liImgEl.append(liImg);

    const liNameEl = document.createElement('li');
    liNameEl.textContent = `Name : ${user.name}`;

    ulLeftEl.append(liImgEl, liNameEl);

    const ulCenterEl = document.createElement('ul');
    const liProgress = document.createElement('li');
    const numberCompleted = Object.keys(user.completed).length;
    liProgress.textContent = `Levels: ${numberCompleted} of ${levels.length} completed`;
    ulCenterEl.append(liProgress);

    const ulRightEl = document.createElement('ul');
    const liMoneyEl = document.createElement('li');
    const liHealthEl = document.createElement('li');
    liMoneyEl.id = 'wealth';
    liHealthEl.id = 'health';
    liMoneyEl.textContent = `Money: $${user.wealth}`;
    liHealthEl.textContent = `Health: ${user.health}`;
    ulRightEl.append(liMoneyEl, liHealthEl);
    return { ulLeftEl, ulCenterEl, ulRightEl };
}


export function renderRandom(event, user) {
    const sectionEl = document.createElement('section');
    sectionEl.id = 'eventPopup';
    sectionEl.classList.add('popup');
    user.health += event.health;
    user.wealth += event.wealth;
    const titleEl = document.createElement('h2');
    titleEl.textContent = event.title;
    
    const descriptionEl = document.createElement('div');
    descriptionEl.textContent = event.description;

    const resultDivH = document.createElement('div');
    const resultDivW = document.createElement('div');

    if (event.health > 0) {
        resultDivH.textContent = `You have gained ${event.health} health!`;
    } else if (event.health < 0) {
        resultDivH.textContent = `You have lost ${Math.abs(event.health)} health!`; 
    }
    if (event.wealth > 0) {
        resultDivW.textContent = `You have gained $${event.wealth}!`;
    } else if (event.wealth < 0) {
        resultDivW.textContent = `You have lost $${Math.abs(event.wealth)}!`;
    }
    
    const audio = document.createElement('audio');
    audio.id = 'random-event-sound';
    audio.src = '../assets/sound-folder/random-event-sound.mp3';
    audio.autoplay = true;
    audio.type = 'audio/ogg';
    
    const continueButtonEl = document.createElement('button');
    continueButtonEl.textContent = 'Next';
    continueButtonEl.classList.add('glow');
    continueButtonEl.addEventListener('click', () => {
        setUser(user);

        const eventPopup = document.querySelector('#eventPopup');
        eventPopup.classList.toggle('hidden');
        
        if (user.health <= 0){
            window.location = `../results/?userId=${user.id}`;
        }
    });

    sectionEl.append(titleEl, descriptionEl, resultDivH, resultDivW, continueButtonEl, audio);
    return sectionEl;
}

