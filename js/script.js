// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
    {
        quote: "No one can make you feel inferior without your consent.",
        source: "Eleanor Roosevelt"
    },
    {
        quote: "If it’s a good idea, go ahead and do it. It’s much easier to apologize than it is to get permission.",
        source: "Grace Hopper"
    },
    {
        quote: "Instead of letting your hardships and failures discourage or exhaust you, let them inspire you. Let them make you even hungrier to succeed.",
        source: "Michelle Obama",
        image: "images/obama.jpg"
    },
    {
        quote: "Don't be like the rest of them, darling.",
        source: "Audrey Hepburn",
        image: "images/audrey.jpg"
    },
    {
        quote: "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all – in which case, you fail by default.",
        source: "J.K. Rowling"
    }
];


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(){
    // Get a random number between 0 and 4
    var randNum = Math.floor(Math.random() * 5);
    // Assign random number to the key in array quotes, return the object in the array
    return quotes[randNum];
}


// Create the printQuote funtion and name it printQuote
function printQuote(){
    var randQuote = getRandomQuote();
    // Assign property values of random quote to elements in DOM
    document.querySelector(".quote").innerHTML = randQuote.quote;
    document.querySelector(".source").innerHTML = randQuote.source;
    // If has image, assign to background
    if(randQuote.image){
        document.querySelector("body").style.backgroundImage = "url('" + randQuote.image + "')";
    } else {
        document.querySelector("body").style.backgroundImage = "";
    }
}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);