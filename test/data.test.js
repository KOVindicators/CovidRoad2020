import { findById } from '../utils.js';
import occupations from '../data/occupations.js';
import levels from '../data/data-levels.js';

const test = QUnit.test;

test('find item by id', assert => {

    const id = 'greg';
    const expected = {
        id: 'greg',
        avatar: 'gregpixelated.png',
        title: 'Software Engineer',
        health: 100,
        wealth: 1000000,
        workPic: 'engineerWork.png',
    };

    const chosenOccupation = findById(id, occupations);

    assert.ok(chosenOccupation);
    assert.deepEqual(chosenOccupation, expected);
});


test('to return null if id not found', assert => {
    
    const id = 'not found';
    const expected = null;

    const chosenOccupation = findById(occupations, id);

    assert.equal(chosenOccupation, expected);
});


test('testing our data-levels rendering', assert => {

    const id = 'store';
    const expected = { 
        id: 'store',
        picture: 'store-pics/costco.png', 
        title: 'Grocery Shopping',
        description: 
        "You need to make a supply run as you're current stock of toilet paper is much too low! You get to the store and have to wait in line 6 ft. distanced with your mask (cause you value social responsibility and your part in it). There's an angry ignorant person yelling about without their mask on. What do you do?",
        nextLevel: 'store2',
        choices: [{
            id: 'choice1',
            description: 'Sit tight and keep your distance',
        
            result: {
                health: -5,
                wealth: -10,
                description: 'You maintain your distance and get your supplies. Small health lost due to possible exposure.',
                url: 'https://youtu.be/Xdd2M40Leb0',
                info: 'Social distancing means putting space between yourself and others. Everyone can help slow the spread of COVID-19'
            }  
        },
        {
            id: 'choice2',
            description: 'Cry out "CHALLENGE ACCEPTED!" You ready to fight',
            result: {
                health: -20,
                wealth: -10,
                description: 'Violence is never the answer. What or how could you have done better?',
                url: 'https://orncc.net',
                info:'Welcome to the Oregon Network for Compassionate Communication (ORNCC). We invite you to join us in promoting, celebrating and supporting Nonviolent Communication in Oregon and southwest Washington.'
            } 
        },
        {
            id: 'choice3',
            description: 'You quietly slip away unnoticed, avoiding conflict and your groceries all together.',
            result: {
                health: -10,
                wealth: 0,
                description: 'What a waste of time and gas.',
                url: 'https://youtu.be/nOa8wIhQdzo',
                info:'Key Times to Practice Social Distancing: 1. Inside your home : when someone has, or things they have COVID-19. If possible stay at least 6 feet away. 2. Outside your home: Stay at least 6 feet away from people outside of your household in indoor/outdoor spaces. Stay out of crowded places if possible.'
            } 
        }
        ],
    };
    
    const chosenLevel = findById(id, levels);

    assert.deepEqual(expected, chosenLevel);
});

