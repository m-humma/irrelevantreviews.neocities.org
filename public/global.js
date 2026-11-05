// spoiler function
function spoiler(no){
    document.getElementById("spoiler" + no).style.fontFamily='"Handwriting"';
    document.getElementById("spoiler" + no).style.color="darkred";
    document.getElementById("spoiler" + no).style.backgroundColor="rgba(0, 0, 0, 0)";
    document.getElementById("spoiler" + no).style.cursor="text";
}

// random review function
const reviews = ["2026/rhythm-tengoku", "2026/locoroco", "2026/parappa-the-rapper", "2026/miitopia", "2026/snipperclips",
               "2026/smash-bros-brawl", "2026/katamari-damacy", "2026/gitaroo-man", "2026/tangle-tower", "2026/tomodachi-life-tld",
               "2026/mermaid-mask", "2026/rhythm-heaven-groove", "2026/we-love-katamari", "2026/parappa-the-rapper-2", "2026/wii-sports",
                "2026/scribblenauts-unlimited", "2026/wobbledogs", "2026/uncanny-cat-golf", "2026/twd-season-1", "paper-mario-color-splash",
                "2026/twd-season-2"];

function randomReview(){
    window.open("https://irrelevantreviews.neocities.org/reviews/" + reviews[Math.floor(Math.random() * reviews.length)]);
}

// sourced by self function
function self(){
    window.alert("My source? Well, I made it myself! With a box of scraps in a cave!")
}

// themes
function switchTheme(theme) {
    document.querySelector('body').setAttribute('data-theme', theme);
}
function saveTheme(theme) {
  localStorage.setItem('theme', theme)
}

function loadTheme(theme) {
  return localStorage.getItem('theme')
}

function setTheme(theme) {
  document
    .querySelector('body')
    .setAttribute('data-theme', theme)
}

function switchTheme(theme) {
  setTheme(theme)
  saveTheme(theme)
}

const theme = loadTheme()
setTheme(theme)

// fonts
function switchFont(font) {
    document.querySelector('body').setAttribute('data-font', font);
}
function saveFont(font) {
  localStorage.setItem('font', font)
}

function loadFont(font) {
  return localStorage.getItem('font')
}

function setFont(font) {
  document
    .querySelector('body')
    .setAttribute('data-font', font)
}

function switchFont(font) {
  setFont(font)
  saveFont(font)
}

const font = loadFont()
setFont(font)

if(font != "default" || font != "dark" || font != "light" || font == "null" || font == null){
  switchFont("default");
  console.log("Automatically adjusted font");
}

console.log(font)