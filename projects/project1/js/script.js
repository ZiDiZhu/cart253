/**************************************************
Project1: Pain simulaTOR

this is not a literal pain simulator,
but a painting simulator where you have to mix color in RBG mode and fill in the colors to your painting!!
**************************************************/

//check if current contains any red/blue/green
let isR = false;
let isG = false;
let isB = false;

// current color
let colorNow = {
  r:20,
  b:20,
  g:20,
  x:600,
  y:500,
  size:120
};

// color pickers
let red ={
  x:100,
  y:500,
  size:100
};
let green ={
  x:250,
  y:500,
  size: 100
};
let  blue= {
  x:400,
  y:500,
  size:100
};

let bg = 0;

let brushSize = 10;

function preload(){
  //load background images here
  //load text
}

function setup() {

createCanvas (800,600);
background(bg);

//color pickers

fill(255,0,0);
ellipse(red.x, red.y, red.size);

fill(0,255,0);
ellipse(green.x, green.y, green.size);

fill(0,0,255);
ellipse(blue.x, blue.y, blue.size);

}


function draw() {

  //current color display
  fill(colorNow.r,colorNow.g,colorNow.b);
  ellipse(colorNow.x,colorNow.y,colorNow.size);

  //print(isR);
if(mouseIsPressed){
  fill(colorNow.r,colorNow.g,colorNow.b);
  noStroke();
  ellipse(mouseX,mouseY,brushSize);
}

}

function mousePressed(){

  colorMixer();
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
