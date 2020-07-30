const store = {
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
            wealth: 10,
            description: 'You lost some health but made some money. Hope it was worth it.',
            url: 'https://youtu.be/Xdd2M40Leb0',
            info: 'Social distancing means putting space between yourself and others. Everyone can help slow the spread of COVID-19 '
        }  
    },
    {
        id: 'choice2',
        description: 'Cry out "CHALLENGE ACCEPTED!" You ready to fight',
        result: {
            health: 10,
            wealth: -10,
            description: 'Violence is never the answer. What or how could you have done better?',
            url: 'https://orncc.net',
            info:'Welcome to the Oregon Network for Compassionate Communication (ORNCC). We invite you to join us in promoting, celebrating and supporting Nonviolent Communication in Oregon and southwest Washington. '
        } 
    },
    {
        id: 'choice3',
        description: 'You quietly slip away unnoticed, avoiding conflict and your groceries all together.',
        result: {
            health: -10,
            wealth: -15,
            description: 'What a waste of time and gas.',
            url: 'https://youtu.be/nOa8wIhQdzo',
            info:'Key Times to Practice Social Distancing: 1. Inside your home : when someone has, or things they have COVID-19. If possible stay at least 6 feet away. 2. Outside your home: Stay at least 6 feet away from people outside of your household in indoor/outdoor spaces. Stay out of crowded places if possible. '
        } 
    }
    ],
};

const store2 = {
    id: 'store2',
    picture: 'freddies.png', //change img to angry pointing pixel woman
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
            url: 'https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/essential-goods-services.html',
            info:'Wear cloth face coverings in public settings and when around people who don’t live in your household, especially when other social distancing measures are difficult to maintain. '
        } 
    },
    {
        id: 'choice2',
        description: 'Cry out "CHALLENGE ACCEPTED!" You are ready to fight!',
        result: {
            health: -10,
            wealth: -15,
            description: 'Violence is never the answer. What could you have done better?',
            url: 'https://orncc.net',
            info:'Have you ever heard of non-violent communication? If not, check it out here! '
        } 
    },
    {
        id: 'choice3',
        description: 'Calmly hand over your toilet paper and leave.',
        result: {
            health: 20,
            wealth: -15,
            description: 'What a waste of time and gas.',
            url: 'https://www.cnn.com/2020/03/09/health/toilet-paper-shortages-novel-coronavirus-trnd/index.html',
            info:'If you think toilet paper is gonna save you, you got another thing coming... '
        } 
    }
    ],
};

const work = {
    id: 'work', 
    picture: 'work-pics/deliveryWork.png',
    title: 'Work',

    description: 'Another beautiful day in Portland!  Birds are tweeting and so is the president. Smartly avoiding Twitter, you  walk out the door and head to your job.  You get in your car and enjoy a peaceful commute to work.  Halfway to work, you realize that you forgot your mask!!  Thats ok though because you keep a spare in your glove box (because you are a smart person). Your coworker Chad is wearing his mask under his nose again, while customer walks in without a mask sniffling.  Chad tells the man that masks are required to be in the building.  “I am not a sheeple!  I will not be masked!” exclaims the clearly agitated man. What do you do?',

    

    nextLevel: 'work2',
    choices: [{
        id: 'choice1',
        description: 'Physically confront the customer',
        
        result: {
            health: -20,
            wealth: +100,
            description: 'How dare he?  Who does he think he is?  You physically grab the man and push him out of the building.  While you are nose to nose with him, he coughs into your face.  You can feel the moisture around your eyes.  GROSS!  Your boss is so impressed that she lays a 100 dollar bill on you and tells you to take the rest of the day off.',
            
            url: 'https://www.theverge.com/21303553/face-mask-coronavirus-cdc-etiquette-public',
            info: 'Confronting people who refuse to wear a mask can be dangerous. While you feel it may be your duty to inform the person of the threat of spreading COVID 19 being reduced by mask wearing, some people react violently.  Be careful. ' 
        } 
    },
    {
        id: 'choice2',
        description: 'Do nothing. Not your problem',
        result: {
            health: -15,
            wealth: -20,
            description: 'Is it really your job to tell other people what to wear and how to act?  This is just a job after all. You just come here to do your job, make some money and go home.  It’s not your problem.  The man rants and raves for a while but eventually leaves.  Other customers were offended and left along with their ;money.',
            
            url: 'https://www.theverge.com/21303553/face-mask-coronavirus-cdc-etiquette-public',
            info: 'Although you may not want to confront people who refuse to mask up, they should be SHAMED until they realize comply, damnit! But seriously, be careful. '
        } 
    },
    {
        id: 'choice3',
        description: 'Call the manager',
        result: {
            health: -5,
            wealth: 10,
            description: 'This guy needs to go, but is it really your job?  You just come here to do your job and not have confrontations.  You call the manager because, after all, that is why they make the big bucks.  The manager calls security and the customer is eventually escorted out of the building.',
            
            url: 'https://www.universalclass.com/articles/business/the-most-effective-way-of-dealing-with-confrontation-in-the-workplace.htm',
            info: 'This is the probably the least confrontational way to deal with this situation.  Never put yourself in danger in order to encourage compliance with mask wearing rules. ' 
        } 
    }
    ],
};

const work2 = {
    id: 'work2',
    picture: 'work-pics/engineerWork.png', 
    title: 'Going to work',
    description: 
        "Your boss calls you up, saying there's some vital paperwork needed for the zoom presentation your company is doing! Why it's not saved digitally is beyond you, so you rally. But before you head out the door you grab...?",
    nextLevel: 'bar',
    choices: [{
        id: 'choice1',
        description: 'A mask!',
        
        result: {
            health: 20,
            wealth: 20,
            description: 'Smart choice! Your mask should be your first priority. That sanitizer, your keys & wallet are a good follow up.',
            url: 'https://www.cdc.gov/media/releases/2020/p0714-americans-to-wear-masks.html',
            info:'CDC calls on Americans to wear masks to prevent COVID-19 spread JAMA editorial reviews latest science, while case study shows masks prevented COVID spread. '
        } 
    },
    {
        id: 'choice2',
        description: 'A selfie! DUH!',
        result: {
            health: -20,
            wealth: 20,
            description: 'Seriously?! Maybe you want to take a look at your priories my friend.',
            url: 'https://youtu.be/TYgTkJD1BHY',
            info:'COVID-19 can be spread by people who do not have symptoms and do not know that they are infected. That’s why it’s important for everyone to wear cloth face coverings in public settings and practice social distancing (staying at least 6 feet away from other people). '
        } 
    },
    {
        id: 'choice3',
        description: 'Some hand sanitizer along with your keys and wallet.',
        result: {
            health: 0,
            wealth: 20,
            description: 'Healthy and wealthy, wise choice. But don\'t forget your mask!',
            url: 'https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cloth-face-cover-guidance.html',
            info:'Cloth face coverings may help prevent people who have COVID-19 from spreading the virus to others. '
        } 
    }
    ],
};

const bar = {
    id: 'bar',
    picture: 'kellys.jpg',
    title: 'Bar',

    description: 
        'What a long day!  So much work, so much strife, so THIRSTY!!  A cold one and some company sounds like a way to cap off a nightmare of a day. You grab your mask and enter your favorite watering hole. Bellying up to the bar but right before you order, you hear the voice of your old coworker call your name.  You turn to find that they are at a table with a pitch of beer and an empty glass with your name on it.  What do you do?',

    nextLevel: 'beach',
    choices: [{
        id: 'choice1',
        description: 'Sit at table and pour yourself a beer',
        result: {
            health: -50,
            wealth: 0,
            description: 
                'You happily sit at the table and pour yourself a beer.  Halfway through your first glass, you notice that your former coworker has the sniffles and keeps wiping his nose.  It is then that you realize that the pitcher you just poured from had a greasy feel to it and you are nauseated . What are you doing in a bar anyways?  ITS NOT SAFE',
            url: 'https://www.businessinsider.com/why-bars-are-so-dangerous-for-spreading-the-coronavirus-2020-7',
            info: 'Being at a bar is bad news according to Dr Fauci. Drink and home and help stop the spread of COVID 19. ' 
        } 
    },
    {
        id: 'choice2',
        description: 'Sit at table but buy your own beer',
        result: {
            health: -30,
            wealth: -10,
            description: 
                'You politely decline the beer but you buy one at the bar and join your coworker at their table.  After they drone on and on about your former boss, you notice that they have runny eyes and are wiping their nose frequently.  After they cough suddenly, you step up from the table and politely say you have to go. Also, what are you doing in a bar anyways? ITS NOT SAFE',
            url: 'https://www.businessinsider.com/why-bars-are-so-dangerous-for-spreading-the-coronavirus-2020-7',
            info: 'Being at a bar is bad news according to Dr Fauci. Drink and home and help stop the spread of COVID 19. ' 
        } 
    },
    {
        id: 'choice3',
        description: 'Turn around and go home.  You have beer at home',
        result: {
            health: 0,
            wealth: 10,
            description: 
                'You suddenly realize that it is CRAZY to be in a bar during a pandemic.  Places like this spread COVID 19 like crazy. You make a quick apology and exit the bar because ITS NOT SAFE',
            url: 'https://www.businessinsider.com/why-bars-are-so-dangerous-for-spreading-the-coronavirus-2020-7',
            info: 'Being at a bar is bad news according to Dr Fauci. Drink and home and help stop the spread of COVID 19. ' 
        } 
    }
    ],
};


const beach = {
    id: 'beach',
    picture: 'beach.png',
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
            url: 'https://www.cdc.gov/coronavirus/2019-ncov/community/large-events/considerations-for-events-gatherings.html',
            info:'Highest risk: Large in-person gatherings where it is difficult for individuals to remain spaced at least 6 feet apart and attendees travel from outside the local area. '
        } 
    },
    {
        id: 'choice2',
        description: 'Go to the beach and reunite with everyone',
        result: {
            health: -40,
            wealth: -50,
            description: 
                'And you didnt even think to bring your mask?! Sounds like you need a refresher.',
            url: 'https://www.kgw.com/article/news/local/as-hundreds-enter-oregons-closed-parks-and-beaches-crackdown-possible/283-7848f5ba-aea7-49e6-a801-1c4e278a71b0',
            info:'Coronavirus: As hundreds enter Oregons closed parks and beaches, crackdown possible. '
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
            url: 'https://www.oregonlive.com/coronavirus/2020/05/whats-safe-whats-not-guide-to-oregons-reopening-amid-coronavirus.html',
            info:'The best way to avoid catching COVID 19 and to avoid spreading COVID 19 is to shelter in place and venture out only when absolutely necessary '
        } 
    }
    ],
};

const levels = [
    store, store2, work, work2, bar, beach
];
export default levels;

