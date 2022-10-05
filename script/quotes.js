var text = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall", 
    "The way to get started is to quit talking and begin doing", 
    "If life were predictable it would cease to be life, and be without flavor.",
    "Sebab hidup Gusti kadaluarsa, jika Hanya berisi nasehat mama-papa", 
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "Life is what happens when you're busy making other plans.", 
    "Spread love everywhere you go. Let no one ever come to you without leaving happier.", 
    "When you reach the end of your rope, tie a knot in it and hang on.",
    "It is during our darkest moments that we must focus to see the light.", 
    "The purpose of our lives is to be happy.", 
    "An unexamined life is not worth living.",
    "Medicine considers the human body as to the means by which it is cured and by which it is driven away from health.",
];

var author = [
    "Nelson Mandela", 
    "Walt Disney", 
    "Eleanor Roosevelt", 
    "Silampukau-Doa 1",
    "James Cameron", 
    "John Lennon", 
    "Mother Teresa",
    "Franklin D. Roosevelt", 
    "Aristotle", 
    "Dalai Lama",
    "Socrates", 
    "Ibnu Sina", 
];


var counter = 10;
var elem = document.getElementById("changeText");
var people = document.getElementById("changePeople")
var inst = setInterval(change, 3000);

function change() {
  elem.innerHTML = text[counter];
  people.innerHTML = author[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}

// <div id="changeText"></div>
// <div id="changePeople"></div>