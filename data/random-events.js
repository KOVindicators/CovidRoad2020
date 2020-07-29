const protest = {
    id: 'protest',
    title: 'Protest',
    description: 'Oh no! You take a wrong turn heading home and get stuck in a BLM protest!',
    health: -1,
    wealth: -1
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

const events = [
    stimulus,
    noMask,
    protest
];

export default events;
