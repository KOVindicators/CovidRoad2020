import occupations from './data/occupations.js';
import { getUser, findById, setUser } from './utils.js';

const formEl = document.querySelector('form');
const mainEl = document.querySelector('main');


formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const myFormData = new FormData(formEl);
    window.scrollTo(0, 0);

    const emailAddress = myFormData.get('email');
    const user = getUser(emailAddress);

    if (user) {
        const confirmEl = document.createElement('section');
        confirmEl.classList.add('popup');

        const message = `Welcome back ${user.name}, would you like to play again with your existing character or create a new one?`;
        const messageEl = document.createElement('div');
        messageEl.textContent = message;

        const continueButtonEl = document.createElement('button');
        continueButtonEl.textContent = 'Same Character';
        continueButtonEl.classList.add('glow');
        continueButtonEl.id = 'continue';
        continueButtonEl.addEventListener('click', () => {
            
            user.health = findById(user.occupation, occupations).health;
            user.wealth = findById(user.occupation, occupations).wealth;
            user.completed = {};

            setUser(user);
            
            window.location = `./level/?id=store&userId=${user.id}`;
        });

        const restartButtonEl = document.createElement('button');
        restartButtonEl.textContent = 'New Character';
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

