//utility functions for all pages.
import occupations from './data/occupations.js';


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

export function getUser() {
    return JSON.parse(localStorage.getItem('PLAYER'));
}

export function setUser(player) {
    const stringyPlayer = JSON.stringify(player);
    localStorage.setItem('PLAYER', stringyPlayer);
} 