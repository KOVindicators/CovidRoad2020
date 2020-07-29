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
            
            url: 'http://www.cdc.gov',
            info: 'This is where info will pop up as well as a link ' 

        } 
    },
    {
        id: 'choice2',
        description: 'Choose choice 2',
        result: {
            health: 10,
            wealth: -10,
            description: 'Healthy choice, but it was expensive.',
            
            url: 'http://www.cdc.gov',
            info: 'This is where info will pop up as well as a link ' 
        } 
    },
    {
        id: 'choice3',
        description: 'Choose choice 3',
        result: {
            health: -100,
            wealth: 10,
            description: 'Healthy and wealthy, wise choice.',
            popup: 'More info here',
            url: 'http://www.cdc.gov',
            info: 'This is where info will pop up as well as a link ' 
           
        } 
    }
    ],
};

const work = {
    id: 'work',
    picture: 'mounthood.jpg',
    title: 'Work',
    description: 'Another beautiful day in Portland!  Birds are tweeting and so is the president. Smartly avoiding Twitter, you  walk out the door and head to your job.  You get in your car and enjoy a peaceful commute to work.  Hardly any traffic!!! It like Portland in the 90s!  Halfway to work, you realize that you forgot your mask!!  Thats ok though because you keep a spare in your glove box (because you are a smart person).   It’s a pretty typical day at work, Chad is wearing his mask under his nose again.   A customer walks in without a mask.  He has a red hat and the sniffles.  Chad tells the man that masks are required to be in the building.  “I am not a sheeple!  I will not be masked!” exclaims the clearly agitated man.  What do you do?',
    nextLevel: 'bar',
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
const bar = {
    id: 'bar',
    picture: 'kellys.jpg',
    title: 'Bar',
    description: 'What a long day!  So much work, so much strife, so THIRSTY!!  A cold one and some company sounds like a way to cap off a nightmare of a day. You grab your mask and enter your favorite watering hole. Bellying up to the bar but right before you order, you hear the voice of your old coworker call your name.  You turn to find that they are at a table with a pitch of beer and an empty glass with your name on it.  What do you do?',
    nextLevel: 'end',
    choices: [{
        id: 'choice1',
        description: 'Sit at table and pour yourself a beer',
        result: {
            health: -50,
            wealth: 0,
            description: 'You happily sit at the table and pour yourself a beer.  Halfway through your first glass, you notice that your former coworker has the sniffles and keeps wiping his nose.  It is then that you realize that the pitcher you just poured from had a greasy feel to it and you are nauseated . What are you doing in a bar anyways?  ITS NOT SAFE',
            
            url: 'https://www.businessinsider.com/why-bars-are-so-dangerous-for-spreading-the-coronavirus-2020-7',
            info: 'Being at a bar is bad news according to Dr Faucci. Drink and home and help stop the spread of COVID 19 ' 
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
            info: 'Being at a bar is bad news according to Dr Faucci. Drink and home and help stop the spread of COVID 19  ' 
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
            info: 'Being at a bar is bad news according to Dr Faucci. Drink and home and help stop the spread of COVID 19  ' 
        } 
    }
    ],
};
const levels = [
    store, work, bar
];
export default levels;
