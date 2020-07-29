// import functions and grab DOM elements
import { generateRandomOccupations, findById, setUser } from '../utils.js';
import { renderStartPage } from '../render.js';
import occupations from '../data/occupations.js';
const mainEl = document.querySelector('main');

// initialize state

// set event listeners to update state and DOM

const occupationList = generateRandomOccupations();

const descriptionEl = document.createElement('section');
descriptionEl.textContent = 'Enter your name, age, and choose an occupation';

const mainSectionEl = renderStartPage(occupationList);


mainEl.append(descriptionEl, mainSectionEl);

const form = document.querySelector('form');
//console.log(form, 'hello');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const occupationId = formData.get('occupation');
    const occupation = findById(occupationId, occupations);
    const name = formData.get('name');
    const email = formData.get('email');
    const age = formData.get('age');
    const user = {
        name: name,
        occupation: occupationId,
        email: email,
        age: age,
        health: occupation.health,
        wealth: occupation.wealth,
        completed: {}
    };

    setUser(user);
    window.location = '../level/?id=store';
    
});




