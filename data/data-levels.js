const store = {
    id: 'store',
    picture: 'freddies.png',
    title: 'Grocery Shopping',
    description: "I'm all lost in the supermarket I can no longer shop happily I came in here for that special offer A guaranteed personality I wasn't born so much as I fell out Nobody seemed to notice me We had a hedge back home in the suburbs Over which I never could see I heard the people who lived on the ceiling Scream and fight most scarily Hearing that noise was my first ever feeling That's how it's been all around me",
    nextLevel: 'work',
    choices: [{
        id: 'choice1',
        description: 'Choose choice 1',
        
        result: {
            health: -5,
            wealth: 10,
            description: 'You lost some health but made money, hope it was worth it.',
            url: 'http://www.cdc.gov'
        } 
    },
    {
        id: 'choice2',
        description: 'Choose choice 2',
        result: {
            health: 10,
            wealth: -10,
            description: 'Healthy choice, but it was expensive.',
            url: 'http://www.cdc.gov'
        } 
    },
    {
        id: 'choice3',
        description: 'Choose choice 3',
        result: {
            health: -100,
            wealth: 10,
            description: 'Healthy and wealthy, wise choice.',
            url: 'http://www.cdc.gov'
        } 
    }
    ],
};

const work = {
    id: 'work',
    picture: 'mounthood.jpg',
    title: 'Work',
    description: "I'm all lost in the supermarket I can no longer shop happily I came in here for that special offer A guaranteed personality I wasn't born so much as I fell out Nobody seemed to notice me We had a hedge back home in the suburbs Over which I never could see I heard the people who lived on the ceiling Scream and fight most scarily Hearing that noise was my first ever feeling That's how it's been all around me",
    nextLevel: 'bar',
    choices: [{
        id: 'choice1',
        description: 'Choose choice 1',
        
        result: {
            health: 10,
            wealth: 10,
            description: 'You lost some health but made money, hope it was worth it.',
            url: 'http://www.cdc.gov'
        } 
    },
    {
        id: 'choice2',
        description: 'Choose choice 2',
        result: {
            health: 10,
            wealth: -10,
            description: 'Healthy choice, but it was expensive.',
            url: 'http://www.cdc.gov'
        } 
    },
    {
        id: 'choice3',
        description: 'Choose choice 3',
        result: {
            health: -100,
            wealth: 10,
            description: 'Healthy and wealthy, wise choice.',
            url: 'http://www.cdc.gov'
        } 
    }
    ],
};
const bar = {
    id: 'bar',
    picture: 'kellys.jpg',
    title: 'Bar',
    description: "I'm all lost in the supermarket I can no longer shop happily I came in here for that special offer A guaranteed personality I wasn't born so much as I fell out Nobody seemed to notice me We had a hedge back home in the suburbs Over which I never could see I heard the people who lived on the ceiling Scream and fight most scarily Hearing that noise was my first ever feeling That's how it's been all around me",
    nextLevel: 'end',
    choices: [{
        id: 'choice1',
        description: 'Choose choice 1',
        result: {
            health: -5,
            wealth: 10,
            description: 'You lost some health but made money, hope it was worth it.',
            url: 'http://www.cdc.gov'
        } 
    },
    {
        id: 'choice2',
        description: 'Choose choice 2',
        result: {
            health: 10,
            wealth: -10,
            description: 'Healthy choice, but it was expensive.',
            url: 'http://www.cdc.gov'
        } 
    },
    {
        id: 'choice3',
        description: 'Choose choice 3',
        result: {
            health: 10,
            wealth: 10,
            description: 'Healthy and wealthy, wise choice.',
            url: 'http://www.cdc.gov'
        } 
    }
    ],
};
const levels = [
    store, work, bar
];
export default levels;
