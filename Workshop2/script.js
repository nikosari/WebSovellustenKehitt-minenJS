//exercise1
document.body.innerHTML += "<p><strong><i>\"If I had nine hours to chop down a tree, I'd use the first six sharpening my ax.\"</i></strong><br>-- Abraham Lincoln</p>";



//exercise2
function repeatingText() {
	for (let i = 0; i < 50; i++) {
        document.body.innerHTML += "<p>This is some repeating lines of text.</p>";
}
}
repeatingText();


//exercise3
const site = ['http://www.google.com', 'http://www.youtube.com', 'http://www.reddit.com', 'http://www.w3schools.com', 'http://www.stackoverflow.com'];
if (navigator.userAgent && navigator.userAgent.toLowerCase().includes('firefox')) { //Couldn't get to work consistently so used AI's help
    window.location.href = 'http://www.mozilla.org';
} else {
    var index = Math.floor(Math.random() * site.length);
    window.location.href = site[index];
}

//exercise4
const check = confirm("Confirm you are a student.");
if (check) {
    document.write("Welcome, student")
}
else {
    document.write("Sorry, this page is for students only")
}



//exercise5
let images = [
    "https://www.poewiki.net/images/7/72/Occultist_ascendancy_class.png"
    , "https://www.poewiki.net/images/2/27/Assassin_ascendancy_class.png"
    , "https://www.poewiki.net/images/1/10/Gladiator_ascendancy_class.png"
    , "https://www.poewiki.net/images/2/2c/Pathfinder_ascendancy_class.png"
    , "https://www.poewiki.net/images/7/76/Saboteur_ascendancy_class.png"
]
// I used my own set of images from a videogame, for a potential future project of mine
function img () {
    let randomImage = Math.floor(Math.random() * images.length);
    document.write('<img src="' + images[randomImage] + '">');
}

img();

