/**************************************************
Exercise 6: Dog sings little star
z1d1

press space to make to dog sing a song
**************************************************/

"use strict"

let synth;

let dognote = [1,1,1.8,1.8,2,2,1.8,1.6,1.6,1.4,1.4,1.2,1.2,1];
let note = [`C4`,`C4`,`G4`,`G4`,`A5`,`A5`,`G4`,`F4`,`F4`,`E4`,`E4`,`D4`,`D4`,`C4`];

let currentNote = 0;

let dogImg;
let dog = {
  x:300,
  y:300
}
let barkSFX;

function setup() {
  createCanvas(600,600);
  barkSFX = loadSound(`assets/sounds/bark.wav`);
  dogImg = loadImage(`assets/images/dog.png`);

  synth = new p5.PolySynth();

}


function draw() {
  background(0);
  //for better audio performance?
  //userStartAudio();

  push();
  fill(190);
  text(`press SPACE repeatedly`,250,250);
  pop();

  imageMode(CENTER);
  image(dogImg,dog.x,dog.y);


}

function bark(){

  synth.play(note[currentNote],1,0,0.1);

  barkSFX.rate(dognote[currentNote]);
  barkSFX.play();
  currentNote ++;
  if(currentNote === note.length){
    currentNote = 0;
  }

}

function keyPressed(){
  if (keyCode ===32)
  bark();
}
