//EXPORT FUNCTIONS

// PAGE RENDERING FUNCTIONS WILL GO HERE:

// RENDER HEADER
// RENDER LEVEL - Part 1
// RENDER LEVEL RESULTS- Part 2
// RENDER FINAL RESULTS - Part 1 - WINNER
// RENDER FINAL RESULTS - Part 2 - LOSER

export function renderStartPage(occupationList) {
    const mainSectionEl = document.createElement('section');
    mainSectionEl.classList.add('main-section');
    //TODO select random image
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
    return mainSectionEl;
}
