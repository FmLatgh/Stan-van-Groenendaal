var quotes = ["The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "The way to get started is to quit talking and begin doing. -Walt Disney",
    "Like stars, we are all born with the potential to shine. -Stan van Groenendaal",
    "The only way to achieve the impossible is to believe it is possible. -Stan van Groenendaal",
    "I didn't write anything in the stars, success is a choice. Pick it up. -Stan van Groenendaal",
    "I always have glimpses of hope in trying times. -Stan van Groenendaal",
    "Problems? I don't have problems, I have solutions. -Stan van Groenendaal",
    "Sadly the world is full of people who are not willing to work hard for what they want. -Stan van Groenendaal",
    "People aren't willing to look into my work, they are afraid of what they might find. You are different, right? -Stan van Groenendaal",
    "My journey wasn't constantly about moving forwards, I had to take a few steps back to get to where I am today. -Stan van Groenendaal",
    "What if? Strong words. Scary, even. -Stan van Groenendaal",
    "We can do epic things... but only if you allow it. -Stan van Groenendaal"];

function getQuote() {
    let randomquote = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteText").innerHTML = quotes[randomquote];
}
    function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}