// import functions and grab DOM elements
import { generateRandomOccupations } from '../utils.js';
import { renderStartPage} from '../render.js';
const mainEl = document.querySelector('main');
// initialize state

// set event listeners to update state and DOM

const occupationList = generateRandomOccupations();

const descriptionEl = document.createElement('section');
descriptionEl.textContent = 'Enter your name, age, and choose an occupation';

const mainSectionEl = renderStartPage(occupationList);


mainEl.append(descriptionEl, mainSectionEl);


