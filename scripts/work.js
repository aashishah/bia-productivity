
var sounds = {
    0: new Howl({
    src: ['assets/pen.mp3']
  }),
  1:
  new Howl({
    src: ['assets/house.mp3']
  }),
  2: new Howl({
    src: ['assets/laptop.mp3']
  }),
}

let buttons = document.querySelectorAll(".box");
console.log(buttons);

function playMusic(num){
    console.log("LOG", num)
    sounds[num].play();
    buttons[num].classList.add("clicked");
    for(let i = 0; i < 4; i++){
        if (i != num){
            buttons[i].classList.add("faded");
        }
    }
}

function silentMode(){
    alert("Silent Mode is on. No song will be played.");
    buttons[3].classList.add("clicked");
}