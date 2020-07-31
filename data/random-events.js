const protest = {
    id: 'protest',
    title: 'Protest',
    description: 'Oh no! You take a wrong turn heading home and get stuck in a BLM protest!',
    health: -1,
    wealth: -1
};

const protesting = {
    id: 'protesting',
    title: 'A group of protestors',
    description: 'While making your way, you make a wrong turn downtown and encounter a group of peaceful protestors. It eats up your time and increases your risk of infection',
    health: -15,
    wealth: 0
};

const noMask = {
    id: 'nomask',
    title: 'Unmasked person coughs on you',
    description: 'You have just walked out the door and a neighbor who is not wearing a mask  ',
    health: -50,
    wealth: 0
};

const stimulus = {
    id: 'stimulus',
    title: 'Ka-chinng, Your stimulus check came in!',
    description: 'Your stimulus check came in! You just got $1200! Huzzah!',
    health: 0,
    wealth: 1200
};

const eviction = {
    id: 'eviction',
    title: 'Landlord Evicts You',
    description: 'Your, oh so generous, landlord decides to serve you an eviction notice! You land on the street and contract Covid.',
    health: -75,
    wealth: 0
};

const shittyRoommate = {
    id: 'shittyRoommate',
    title: 'Shitty Roommate',
    description: 'Your roommate comes home with a fever and the runs. ${user.name} too contract dysentery. ',
    health: -50,
    wealth: 0
};

const busStop = {
    id: 'busStop',
    title: 'Waiting at the bus stop',
    description: 'While waiting at the bus stop the person next to you (unfortunately not wearing a mask or caring to cover) sneazes as you sit downwind. You are hit with a cloud of germified mist. You contract Covid',
    health: -75,
    wealth: -20
};

const carePackage = {
    id: 'carePackage',
    title: 'Care package in the mail',
    description: 'Missing your family, you do your best to stay in touch. Your loving parents send you a care package filled with some of your favorite foods, vitamins and a bit of emergency money! Your health and wealth go up.',
    health: 50,
    wealth: 100
};

// const aliens = {
//     id: 'aliens',
//     title: 'A flying saucer abducts you',
//     description: 'Under the madness of Covid 2020  you question everything in life. In this moment some aliens passing by notice and abduct you. Good bye humanity! Now you are dead to the world.',
//     health: -1000000,
//     wealth: -1000000
// }


const events = [
    stimulus,
    noMask,
    protest,
    protesting,
    eviction,
    shittyRoommate,
    busStop,
    carePackage,
    // aliens
];


export default events;

