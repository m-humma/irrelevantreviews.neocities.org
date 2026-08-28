// spoiler function
function spoiler(no){
    document.getElementById("spoiler" + no).style.fontFamily='"Handwriting"';
    document.getElementById("spoiler" + no).style.color="darkred";
    document.getElementById("spoiler" + no).style.cursor="text";
}

// random review function
const reviews = ["2026/rhythm-tengoku", "2026/locoroco", "2026/parappa-the-rapper", "2026/miitopia", "2026/snipperclips",
               "2026/smash-bros-brawl", "2026/katamari-damacy", "2026/gitaroo-man", "2026/tangle-tower", "2026/tomodachi-life-tld",
               "2026/mermaid-mask", "2026/rhythm-heaven-groove", "2026/we-love-katamari", "2026/parappa-the-rapper-2"];

function randomReview(){
    window.open("https://irrelevantreviews.neocities.org/reviews/" + reviews[Math.floor(Math.random() * reviews.length)]);
}

// sourced by self function
function self(){
    window.alert("My source? Well, I made it myself! With a box of scraps and an emulator!")
}