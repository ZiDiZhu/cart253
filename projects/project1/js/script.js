/**************************************************
Project1: Pain simulaTOR

this is not a literal pain simulator,
but a painting simulator where you have to mix color in RBG mode and fill in the colors to your painting!!
**************************************************/

//check if current contains any red/blue/green
let isR = false;
let isG = false;
let isB = false;

let state = `intro`;//game ,end ,
let mixingMode = `additive`; // substractive?? potentially
let instructiontext =`Instruction:\n paint with your mouse\n click on circles on the left to mix your color in RGB \n best played in fullscreen`;

// current color
let colorNow = {
  r:20,
  b:20,
  g:20,
  x:100,
  y:500,
  size:20
};

// color pickers
let red ={
  x:100,
  y:60,
  size:100
};
let green ={
  x:100,
  y:180,
  size: 100
};
let  blue= {
  x:100,
  y:300,
  size:100
};

let bg = 0;

let resetText = {
  x: 250,
  y: 40,
}

function preload(){
  //load background images here
  //load text
}

function setup() {

createCanvas (windowWidth,windowHeight);
background(bg);

fill(250,250,250);
textSize(14);
text(instructiontext,200,70);
}


function draw() {

  if(keyIsDown(65)){
    colorNow.size = 10;
  }

  fill(255,150,150);
  textSize(32);
  text(`reset`,resetText.x, resetText.y);
  text(`brush:`,60,420);

  //color pickers

  fill(255,0,0);
  ellipse(red.x, red.y, red.size);

  fill(0,255,0);
  ellipse(green.x, green.y, green.size);

  fill(0,0,255);
  ellipse(blue.x, blue.y, blue.size);

  //current color display
  fill(colorNow.r,colorNow.g,colorNow.b);
  ellipse(colorNow.x,colorNow.y,colorNow.size);

//paint
if(mouseIsPressed && dist(mouseX,mouseY,resetText.x,resetText.y)>60){

  push();
  strokeWeight(colorNow.size);
  stroke(colorNow.r,colorNow.g,colorNow.b);
  line(pmouseX, pmouseY, mouseX, mouseY);
  pop();
}

}

function resetCanvas(){
  clear();
  background(bg);
  colorNow.r=20;
  colorNow.g=20;
  colorNow.b=20;
}

function mousePressed(){

  instructiontext = ``;

  colorMixer();

  let dReset = dist(mouseX,mouseY,resetText.x,resetText.y);
  if(dReset < 60){
    resetCanvas();
  }
}

function colorMixer(){

  //check if mouse is in range of each color
  let dRed = dist(mouseX,mouseY,red.x,red.y);
  let dGreen = dist(mouseX,mouseY,green.x,green.y);
  let dBlue = dist(mouseX,mouseY,blue.x,blue.y);

  //Red on/off
  if(dRed < 100 && isR === false){
    colorNow.r = 255;
    isR = true;
  } else if(dRed < 100 && isR === true){
    colorNow.r = 20;
    isR = false;
  }

  //Green on/off
  if(dGreen < 100 && isG === false){
    colorNow.g = 255;
    isG = true;
  } else if(dGreen < 100 && isG === true){
    colorNow.g = 20;
    isG = false;
  }

  //Blue on/off
  if(dBlue < 100 && isB === false){
    colorNow.b = 255;
    isB = true;
  } else if(dBlue < 100 && isB === true){
    colorNow.b = 20;
    isB = false;
  }

}
