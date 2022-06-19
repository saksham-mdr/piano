let keys = document.querySelectorAll(".key");
let whiteKeys = document.querySelectorAll(".key.white");
let blackKeys = document.querySelectorAll(".key.black");
let drumKeys = document.querySelectorAll(".key.drum");


keys.forEach(key => {
    key.addEventListener("click", () => {
        playnote(key);
    });
})



document.addEventListener("keydown", e => {
    if (e.repeat) return;
    const key = e.key;
    const drumKeyIndex = DRUM.indexOf(key);
    const whiteKeyIndex = WHITE.indexOf(key);
    const blackKeyIndex = BLACK.indexOf(key);
    if (whiteKeyIndex > -1) playnote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playnote(blackKeys[blackKeyIndex]);
    if (drumKeyIndex > -1) playnote(drumKeys[drumKeyIndex]);
   
    if(e.which===13){
        const dr = DRUM.indexOf("enter");
        playnote(drumKeys[dr]);
    }
    if(e.which===144){
        const dr = DRUM.indexOf("loc");
        playnote(drumKeys[dr]);
    }

})

function playnote(key) {

    let note = document.getElementById(key.dataset.note);
    note.currentTime = 0;
    note.volume = 1.0;
    note.play();
    key.classList.add('active');
    note.addEventListener("ended", () => {
        key.classList.remove("active");
    })
}

const WHITE = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'];

const BLACK = ['w', 'e', 't', 'y', 'u', 'o', 'p'];
const DRUM = ['loc','/', '*', '-', '7', '8', '9', '+', '4', '5', '6', '1', '2', '3','enter', '0', '.'];





