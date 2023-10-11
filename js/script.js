var quotes = ["The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "The way to get started is to quit talking and begin doing. -Walt Disney", "Your time is limited, so don't waste it living someone else's life. -Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt", "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
    "Like a machine in motion, we are all gears of the cog that keeps the world spinning. -Stan van Groenendaal",
    "Like stars, we are all born with the potential to shine. -Stan van Groenendaal",
    "In life, we have roadblocks, detours, and dead ends, but we can always find another way to reach our goals. -Stan van Groenendaal",
    "We are all subject to the trial of life; work hard, stay focused, and you will succeed. -Stan van Groenendaal",
    "The only way to achieve the impossible is to believe it is possible. -Stan van Groenendaal",
     "I didn't write anything in the stars, success is a choice. Pick it up. -Stan van Groenendaal",
    "The past is a distraction from your work in the present. -Stan van Groenendaal",
    "I am the artist. My laptop is my canvas. My code is my paint. My style is my renown. -Stan van Groenendaal",
    "Don't let bad friends distract you from equilibrium. -Stan van Groenendaal",
    "I wasn't like this before, I became what I am today through my actions. -Stan van Groenendaal",
    "I always have glimpses of hope in trying times. -Stan van Groenendaal",
    "My work is what keeps the wheel in motion. -Stan van Groenendaal",
    "Problems are just a part of life, they are not life itself. -Stan van Groenendaal",
    "Problems? I don't have problems, I have solutions. -Stan van Groenendaal",
    "Sadly the world is full of people who are not willing to work hard for what they want. -Stan van Groenendaal",
    "People aren't willing to look into my work, they are afraid of what they might find. You are different, right? -Stan van Groenendaal",
    "My journey wasn't constantly about moving forwards, I had to take a few steps back to get to where I am today. -Stan van Groenendaal"];

function getQuote() {
    let randomquote = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteText").innerHTML = quotes[randomquote];
}
    function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}