const store = {
    id: 'store',
    picture: 'store-pics/costco.png', //change to costco img
    title: 'Grocery Shopping',
    description: 
        "You need to make a supply run as you're currently stock of toilet paper is much too low! You get to the store and have to wait in line 6 ft. distanced with your mask (cause you value social responsibility and your part in it). There's an angry ignorant person yelling about without their mask on. What do you do?",
    nextLevel: 'store2',
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
    picture: 'work-pics/deliveryWork.png',
    title: 'Work',

    description: 'Another beautiful day in Portland!  Birds are tweeting and so is the president. Smartly avoiding Twitter, you  walk out the door and head to your job.  You get in your car and enjoy a peaceful commute to work.  Hardly any traffic!!! It like Portland in the 90s!  Halfway to work, you realize that you forgot your mask!!  Thats ok though because you keep a spare in your glove box (because you are a smart person).   It’s a pretty typical day at work, Chad is wearing his mask under his nose again.   A customer walks in without a mask.  He has a red hat and the sniffles.  Chad tells the man that masks are required to be in the building.  “I am not a sheeple!  I will not be masked!” exclaims the clearly agitated man.  What do you do?',

    

    nextLevel: 'work2',
    choices: [{
        id: 'choice1',
        description: 'Physically confront the customer',
        
        result: {
            health: -50,
            wealth: +100,
            description: 'How dare he?  Who does he think he is?  You physically grab the man and push him out of the building.  While you are face to face with him, he coughs into your face.  You can feel the moisture around your eyes.  GROSS!  Your boss is so impressed that she lays a 100 dollar bill on you and tells you to take the rest of the day off.',
            
            url: 'https://www.theverge.com/21303553/face-mask-coronavirus-cdc-etiquette-public',
            info: 'Confronting people who refuse to wear a mask can be dangerous. While you feel it may be your duty to inform the person of the threat of spreading COVID 19 being reduced by mask wearing, some people react violently.  Be careful ' 
        } 
    },
    {
        id: 'choice2',
        description: 'Do nothing. Not your problem',
        result: {
            health: -25,
            wealth: -20,
            description: 'Is it really your job to tell other people what to wear and how to act?  This is just a job after all.  You just come here to do your job, make some money and go home.  It’s not your problem.  The man rants and raves for a while but eventually leaves.  Other customers were offended and left along with their ;money.',
            
            url: 'https://www.theverge.com/21303553/face-mask-coronavirus-cdc-etiquette-public',
            info: 'Although you may not want to confront people who refuse to mask up, they should be SHAMED until they realize comply, damnit! But seriously, be careful '
        } 
    },
    {
        id: 'choice3',
        description: 'Call the manager',
        result: {
            health: -100,
            wealth: 10,
            description: 'This guy needs to go, but is it really your job?  You just come here to do your job and not have confrontations.  You call the manager because, after all, that is why they make the big bucks.  The manager calls security and the customer is eventually escorted out of the building.',
            
            url: 'https://www.universalclass.com/articles/business/the-most-effective-way-of-dealing-with-confrontation-in-the-workplace.htm',
            info: 'This is the probably the least confrontational way to deal with this situation.  Never put yourself in danger in order to encourage compliance with mask wearing rules ' 
        } 
    }
    ],
};

const work2 = {
    id: 'work2',
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
    title: 'Bar',

    description: 'What a long day!  So much work, so much strife, so THIRSTY!!  A cold one and some company sounds like a way to cap off a nightmare of a day. You grab your mask and enter your favorite watering hole. Bellying up to the bar but right before you order, you hear the voice of your old coworker call your name.  You turn to find that they are at a table with a pitch of beer and an empty glass with your name on it.  What do you do?',


    nextLevel: 'bar2',
    choices: [{
        id: 'choice1',
        description: 'Sit at table and pour yourself a beer',
        result: {
            health: -50,
            wealth: 0,
            description: 'You happily sit at the table and pour yourself a beer.  Halfway through your first glass, you notice that your former coworker has the sniffles and keeps wiping his nose.  It is then that you realize that the pitcher you just poured from had a greasy feel to it and you are nauseated . What are you doing in a bar anyways?  ITS NOT SAFE',
            
            url: 'https://www.businessinsider.com/why-bars-are-so-dangerous-for-spreading-the-coronavirus-2020-7',
            info: 'Being at a bar is bad news according to Dr Fauci. Drink and home and help stop the spread of COVID 19 ' 
        } 
    },
    {
        id: 'choice2',
        description: 'Sit at table but buy your own beer',
        result: {
            health: -40,
            wealth: -10,
            description: 'You politely decline the beer but you buy one at the bar and join your coworker at their table.  After they drone on and on about your former boss, you notice that they have runny eyes and are wiping their nose frequently.  After they cough suddenly, you step up from the table and politely say you have to go. Also, what are you doing in a bar anyways? ITS NOT SAFE',
            
            url: 'https://www.businessinsider.com/why-bars-are-so-dangerous-for-spreading-the-coronavirus-2020-7',
            info: 'Being at a bar is bad news according to Dr Fauci. Drink and home and help stop the spread of COVID 19  ' 
        } 
    },
    {
        id: 'choice3',
        description: 'Turn around and go home.  You have beer at home',
        result: {
            health: 10,
            wealth: 10,
            description: 'You suddenly realize that it is CRAZY to be in a bar during a pandemic.  Places like this spread COVID 19 like crazy. You make a quick apology and exit the bar because ITS NOT SAFE',
            
            url: 'https://www.businessinsider.com/why-bars-are-so-dangerous-for-spreading-the-coronavirus-2020-7',
            info: 'Being at a bar is bad news according to Dr Fauci. Drink and home and help stop the spread of COVID 19  ' 
        } 
    }
    ],
};


const bar2 = {
    id: 'bar2',
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
    store, store2, work, work2, bar, bar2
];
export default levels;

