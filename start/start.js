// import functions and grab DOM elements
import { generateRandomOccupations } from '../utils.js';
const mainEl = document.querySelector('main');
// initialize state

// set event listeners to update state and DOM

const occupationList = generateRandomOccupations();
const descriptionEl = document.createElement('section');
descriptionEl.textContent = 'Enter your name, age, and choose an occupation';

const mainSectionEl = document.createElement('section');
mainSectionEl.classList.add('main-section');

const startImgEl = document.createElement('img');
startImgEl.src = "https://covid-19archive.org/files/large/e265d1d5cdc41f348959af6faf7d92492d278190.jpg";
startImgEl.classList.add('start-image');

const formEl = document.createElement('form');

const nameLabelEl = document.createElement('label');
nameLabelEl.textContent = 'Name:';
const nameInput = document.createElement('input');
nameLabelEl.append(nameInput);

const ageLabelEl = document.createElement('label');
ageLabelEl.textContent = 'Age:';
const ageInput = document.createElement('input');
ageLabelEl.append(ageInput);

const emailLabelEl = document.createElement('label');
emailLabelEl.textContent = 'Email:'; 
const emailInput = document.createElement('input');
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
    radioButtonEl.id = occupation.id;
    radioButtonEl.classList.add('hidden');
    labelEl.append(radioButtonEl, imgEl);
    formEl.append(labelEl);
});

const submitButtonEl = document.createElement('button');
submitButtonEl.classList.add('glow');
submitButtonEl.textContent = 'Start:';
submitButtonEl.type = 'submit';


mainSectionEl.append(startImgEl, formEl, submitButtonEl);


mainEl.append(descriptionEl, mainSectionEl);

/*
<main>
        <!-- class? id? something here -->
       
        <section class="main-section">
            <img src="https://covid-19archive.org/files/large/e265d1d5cdc41f348959af6faf7d92492d278190.jpg">
        <form>
            
            <label>
                name
            <input>
        </label>
        <label>
            age
            <input min="13" type="number">
        </label>
        <label>
            email
            <input type="email">
        </label>
        <label>doctor
            <input type="radio" name="class" value="doctor">
        </label>
        <label>barista
            <input type="radio" name="class" value="barista">
        </label>
        <label>delivery person
            <input type="radio" name="class" value="delivery">
        </label>
        <label>skater
            <input type="radio" name="class" value="skater">
        </label>
        <button class="glow" type="submit">submit</button>

        </form>
            
        </section>
    </main>
*/