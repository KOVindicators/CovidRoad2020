// import functions and grab DOM elements
import { getUser } from './utils.js';
const enterButton = document.getElementById('enter');
const formEl = document.querySelector('form');
const mainEl = document.querySelector('main');
// initialize state

// set event listeners to update state and DOM


formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const myFormData = new FormData(formEl);
    
    const emailAddress = myFormData.get('email');
    const user = getUser(emailAddress);
    if (user) {
        const confirmEl = document.createElement('section');
        confirmEl.classList.add('popup');

        const message = `Welcome back ${user.name}, would you like to continue with your existing character or create a new one?`;
        const messageEl = document.createElement('div');
        messageEl.textContent = message;

        const continueButtonEl = document.createElement('button');
        continueButtonEl.textContent = 'Continue';
        continueButtonEl.classList.add('glow');
        continueButtonEl.id = 'continue';
        continueButtonEl.addEventListener('click', () => {
            window.location = `./start/?userId=${emailAddress}`;
        });

        const restartButtonEl = document.createElement('button');
        restartButtonEl.textContent = 'Restart';
        restartButtonEl.classList.add('glow');
        restartButtonEl.addEventListener('click', () => {
            window.location = `./start`;
        });

        confirmEl.append(messageEl, continueButtonEl, restartButtonEl);
        
        mainEl.append(confirmEl);


    } else {
        window.location = `./start/?userId=${emailAddress}`;
    }
    
});


enterButton.addEventListener('click', () => {
    window.location = './start';
});