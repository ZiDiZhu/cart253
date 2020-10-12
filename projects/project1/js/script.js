/**************************************************
Project1: Pain simulaTOR

this is not a literal pain simulator,
but a painting simulator where you have to mix color in RBG mode and fill in the colors to your painting!!
**************************************************/

"use strict"

//check if current contains any red/blue/green
let isR = false;
let isG = false;
let isB = false;

//a quad that defines the drawable area depending on windowsize
let drawingArea = {
  x1:0,
  y1:0,
  x2:0,
  y2:0,
  x3:0,
  y3:0,
  x4:0,
  y4:0

}

let inDrawingArea;

let showingInstruction = false;

let state = `intro`;//game ,end ,
let mixingMode = `additive`; // substractive?? potentially
let instructiontext =`Instruction:\n paint with mouse\n click on circles on left to mix color\n key 1,2,3 to change brush size`;

// current color
let colorNow = {
  r:20,
  b:20,
  g:20,
  x:80,
  y:440,
  size:10
};

let brush1 = {
  x:80,
  y:440,
  size:10,
}

// color pickers
let red ={
  x:80,
  y:60,
  size:100
};
let green ={
  x:80,
  y:180,
  size: 100
};
let  blue= {
  x:80,
  y:300,
  size:100
};

let bg = 0;

let resetText = {
  x: 250,
  y: 40,
}

let helpText = {
  x:360,
  y:40
}

function preload(){
  //load background images here
  //load text
}

function setup() {

createCanvas (windowWidth,windowHeight);
background(bg);

}


function draw() {

  if (state === `intro`){
    displayIntro();
    if(mouseIsPressed){
      resetCanvas();
      state = `game`;
    }
  }

  if (state === `game`){

    displayUI();

    paint();
  }

  let posX = mouseX;
  let posY = mouseY;

  if(posX>drawingArea.x1&&posY>drawingArea.y1&&posX<drawingArea.x3&&posY<drawingArea.y3){
    inDrawingArea = true;
  }else{
    inDrawingArea =false;
  }

  //console.log(`${inDrawingArea}`);

}

function paint(){
  //paint
  if(mouseIsPressed && state ===`game` && dist(mouseX,mouseY,resetText.x,resetText.y)>60 && inDrawingArea){

    push();
    strokeWeight(5);
    stroke(colorNow.r,colorNow.g,colorNow.b);
    line(pmouseX, pmouseY, mouseX, mouseY);
    pop();
  }
}

function resetCanvas(){
  clear();
  showingInstruction = false;
  background(bg);
  colorNow.r=20;
  colorNow.g=20;
  colorNow.b=20;

//defining drawing area
  drawingArea.x1 = 150;
  drawingArea.y1 = 80;
  drawingArea.x2 = 150;
  drawingArea.y2 = height*4/5;
  drawingArea.x3 = width *3/4;
  drawingArea.y3 = height*4/5;
  drawingArea.x4 = width *3/4;
  drawingArea.y4 = 80;

  //set help text
  helpText.x = width*7/8;

//drawing out the drawingArea
  push();
  strokeWeight(6);
  stroke(100);
  fill(60);
  quad(drawingArea.x1,drawingArea.y1,drawingArea.x2,drawingArea.y2,drawingArea.x3,drawingArea.y3,drawingArea.x4,drawingArea.y4);
  pop();

  //change palette position
  red.x = width/2;
  red.y = height*7/8;

}

function displayIntro(){

  fill(255,150,150);
  textSize(24);
  textAlign(CENTER);
  text(`CLICK anywhere to start`, width/2 , height/2);

}

function displayUI(){

  //displaying reset, brush text
    fill(255,150,150);
    textSize(32);
    text(`reset`,resetText.x, resetText.y);
    text(`brush:`,60,420);
    text(`help`,helpText.x,helpText.y);

    push();
    textSize(12);
    text(`↓ draw here ↓`,width*2/5,70);
    pop();

    //current color/choose brush size
    push();
    fill(colorNow.r,colorNow.g,colorNow.b);
    ellipse(brush1.x,brush1.y,10);
    fill(colorNow.r,colorNow.g,colorNow.b);
    ellipse(brush1.x,brush1.y + 40,20);
    fill(colorNow.r,colorNow.g,colorNow.b);
    ellipse(brush1.x,brush1.y + 100,50);
    text(`1`,brush1.x - 50,brush1.y+10)
    text(`2`,brush1.x - 50,brush1.y+50)
    text(`3`,brush1.x - 50,brush1.y+110)

    pop();

  //color pickers
  fill(255,0,0);
  ellipse(red.x, red.y, red.size);

  fill(0,255,0);
  ellipse(green.x, green.y, green.size);

  fill(0,0,255);
  ellipse(blue.x, blue.y, blue.size);

  if(showingInstruction){
    push();
    textSize(16);
    textAlign(LEFT);
    fill(255,255,200);
    text(instructiontext,helpText.x-150,helpText.y+100);
    pop();
  }

}

function mousePressed(){

  colorMixer();

  let dReset = dist(mouseX,mouseY,resetText.x,resetText.y);
  if(dReset < 60){
    resetCanvas();
  }

  let dHelp = dist(mouseX,mouseY,helpText.x,helpText.y);
  if(dHelp < 60){
    if(!showingInstruction){
      showingInstruction = true;
    }else if (showingInstruction){
      showingInstruction = false;
    }
  }

  displayUI();
}

function colorMixer(){

  //check if mouse is in range of each color
  let dRed = dist(mouseX,mouseY,red.x,red.y);
  let dGreen = dist(mouseX,mouseY,green.x,green.y);
  let dBlue = dist(mouseX,mouseY,blue.x,blue.y);

  //Red on/off
  if(dRed < 50 && isR === false){
    colorNow.r = 255;
    isR = true;
  } else if(dRed < 50 && isR === true){
    colorNow.r = 20;
    isR = false;
  }

  //Green on/off
  if(dGreen < 50 && isG === false){
    colorNow.g = 255;
    isG = true;
  } else if(dGreen < 50 && isG === true){
    colorNow.g = 20;
    isG = false;
  }

  //Blue on/off
  if(dBlue < 50 && isB === false){
    colorNow.b = 255;
    isB = true;
  } else if(dBlue < 50 && isB === true){
    colorNow.b = 20;
    isB = false;
  }

}
