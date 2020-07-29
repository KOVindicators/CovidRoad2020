
const store = {
    id: 'store',
    picture: 'freddies.png', //change img
    title: 'Grocery Shopping',
    description: 
        "You need to make a supply run as you're currently stock of toilet paper is much too low! You get to the store and have to wait in line 6 ft. distanced with your mask (cause you value social responsibility and your part in it). There's an angry ignorant person yelling about without their mask on. What do you do?",
    nextLevel: 'work',
    choices: [{
        id: 'choice1',
        description: 'Sit tight and keep your distance',
        
        result: {
            health: -5,
            wealth: 10,
            description: 'You lost some health but made some money. Hope it was worth it.',
            url: 'http://www.cdc.gov'
        } 
    },
    {
        id: 'choice2',
        description: 'Cry out "CHANLLENGE ACCEPTED!" You ready to fight',
        result: {
            health: 10,
            wealth: -10,
            description: 'Violence is never the answer. What or how could you have done better?',
            url: 'https://orncc.net'
        } 
    },
    {
        id: 'choice3',
        description: 'You quietly slip away unnoticed, avoiding conflict and your groceries all together.',
        result: {
            health: -10,
            wealth: -15,
            description: 'What a waste of time and gas.',
            url: 'http://www.cdc.gov'
        } 
    }
    ],
};

const store2 = {
    id: 'store2',
    picture: 'freddies.png', //change img
    title: 'Grocery Shopping',
    description: 
        "You're in luck and just so happen to grab the last pack of toilet paper! You thank your lucky stars and start making your way to the checkout line. Minding your own business, an outraged person approaches you, claiming you stole the last pack and demanding that you hand it over! What do you do?",
    nextLevel: 'work',
    choices: [{
        id: 'choice1',
        description: 'Sit tight and keep your distance',
        
        result: {
            health: -5,
            wealth: 10,
            description: 'You lost some health but made money, hope it was worth it.',
            url: 'http://www.cdc.gov'
        } 
    },
    {
        id: 'choice2',
        description: 'Cry out "CHALLENGE ACCEPTED!" You are ready to fight!',
        result: {
            health: -10,
            wealth: -15,
            description: 'Violence is never the answer. What could you have done better?',
            url: 'https://orncc.net'
        } 
    },
    {
        id: 'choice3',
        description: 'Calmly hand over your toilet paper and leave.',
        result: {
            health: 20,
            wealth: -15,
            description: 'What a waste of time and gas.',
            url: 'http://www.cdc.gov'
        } 
    }
    ],
};

const work = {
    id: 'work',
    picture: 'mounthood.jpg', //img needs to change
    title: 'Going to work',
    description: 
        "Your boss calls you up, saying there's some vital paperwork needed for the zoom presentation your company is doing! Why it's not saved digitally is beyond you, so you rally. But before you leave out the door you grab...?",
    nextLevel: 'bar',
    choices: [{
        id: 'choice1',
        description: 'A mask!',
        
        result: {
            health: 20,
            wealth: 20,
            description: 'Smart choice! Your mask should be your first priority. That sanitizer and your keys & wallet are a good follow up.',
            url: 'http://www.cdc.gov'
        } 
    },
    {
        id: 'choice2',
        description: 'A selfie! DUH!',
        result: {
            health: -20,
            wealth: 20,
            description: 'Seriously?! Maybe you want to take a look at your priories my friend.',
            url: 'http://www.cdc.gov'
        } 
    },
    {
        id: 'choice3',
        description: 'Some hand sanitizer along with your keys and wallet.',
        result: {
            health: 0,
            wealth: 20,
            description: 'Healthy and wealthy, wise choice.',
            url: 'http://www.cdc.gov'
        } 
    }
    ],
};

const bar = {
    id: 'bar',
    picture: 'kellys.jpg',
    title: 'Recreation',
    description: 
        "Things are beginning to re-open after the first lock down. All your friends are planning a beach party and want you to join! It's been ages since you've seen anyone! What do you decide to do?",
    nextLevel: 'end',
    choices: [{
        id: 'choice1',
        description: 'Go to the beach, but hang back with your mask and give a polite wave when seeing a friend.',
        result: {
            health: -30,
            wealth: -50,
            description: 
                'What an expensive trip, with an even more expensive risk! Not too bad, but why risk it?',
            url: 'https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html'
        } 
    },
    {
        id: 'choice2',
        description: 'Go to the beach and reunite with everyone',
        result: {
            health: -70,
            wealth: -50,
            description: 
                'And you didnt even think to bring your mask?! Sounds like you need a refresher.',
            url: 'https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html'
        } 
    },
    {
        id: 'choice3',
        description: 'Stay home instead',
        result: {
            health: 50,
            wealth: 5,
            description: 
                'Smart choice! Although there may be many reopening, we are still not all the way through this thing. It would be better to sit tight and keep social distancing.',
            url: 'https://www.oregonlive.com/coronavirus/2020/05/whats-safe-whats-not-guide-to-oregons-reopening-amid-coronavirus.html'
        } 
    }
    ],
};
const levels = [
    store, store2, work, bar
];
export default levels;

