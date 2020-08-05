import occupations from './data/occupations.js';
import events from './data/random-events.js';


export function generateRandomOccupations(){
    const groupOfThree = [];

    let job1, job2, job3 = 0;
    do {
        job1 = Math.floor(Math.random() * occupations.length);
        job2 = Math.floor(Math.random() * occupations.length);
        job3 = Math.floor(Math.random() * occupations.length);
    } while (job1 === job2 || job2 === job3 || job1 === job3);
    let jobObj1 = occupations[job1];
    let jobObj2 = occupations[job2];
    let jobObj3 = occupations[job3];

    groupOfThree.push(jobObj1, jobObj2, jobObj3);
    return groupOfThree;
}


export function findById(id, array) {
    const foundItem = null;

    for (let i = 0; i < array.length; i++) {
        if (id === array[i].id) return array[i];
    }
    return foundItem;
}


export function getUser(userId) {
    let foundPlayer = null;

    const userList = JSON.parse(localStorage.getItem('PLAYERS')) || [];
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].id === userId) return userList[i];
    }
    return foundPlayer;
}


export function setUser(user) {
    const userArray = JSON.parse(localStorage.getItem('PLAYERS')) || [];

    if (findById(user.id, userArray)) {
        for (let i = 0; i < userArray.length;i++) {
            if (user.id === userArray[i].id) {
                userArray[i] = user;
            }
        }
    } else {
        userArray.push(user);
    }
    
    const stringifiedPlayers = JSON.stringify(userArray);
    localStorage.setItem('PLAYERS', stringifiedPlayers);
} 


export function rando() {
    return Math.random() > .5;
}


export function getRandomEvent() {
    const index = Math.floor(Math.random() * events.length);
    return events[index];
}

 