var quotes = ["Welcome Back.",
    "See anything you like on here?",
    "Like stars, we are all born with the potential to shine.",
    "The master failed more than the student has tried, y'know?",
    "Oh hey, that's mine.",
    "It isn't easy being me y'know?",
    "Heya. Welcome to my website.",
    "If you look at the top of the screen you'll probably find a menu.",
    "Give us rest... thinking about these quotes is sooooooooooooo tiresome. (Sarcasm)",
    "Waiting for the day I can say 'I made it'.",
    "Pretty rad, isn't it?",
    "If only the website was a little more optimized, haha."];

function getQuote() {
    let randomquote = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteText").innerHTML = quotes[randomquote];
}
    function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}