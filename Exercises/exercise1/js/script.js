/**************************************************
Exercise 1
I a p p r e c i a t e to n a v i g a t e

Zi Di Zhu

animation interactable with mouse
i'll try to do something using the alien i drew at activity 2
**************************************************/

let margin = 100;

let bg = {
  r:200,
  b:100,
  g:100
}
let face = {
  x:20,
  y:60,
  sizeX:120,
  sizeY:100,
  r:200,
  g:200,
  b:130
}
let hat = {
x:20,
y:40,
sizeX:180,
sizeY:180,
r:30,
g:200,
b:30
}
let eye = {
  fill1:255,
  fill2:10,
  x1a:-20,
  x1b:20
}

// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(800,600);
background(bg.r,bg.g,bg.b);
}

// draw()
//
// Description of draw() goes here.
function draw() {

  let moveX = constrain(mouseX,margin,width-margin);
  let moveY = constrain(mouseY,margin,height-margin);

  bg.b = map(mouseX,0,width,0,255);
  bg.g = map(mouseY,0,height,0,255);
  background(bg.r,bg.b,bg.g);

  fill(hat.r,hat.g,hat.b);
  ellipse(moveX+hat.x,moveY+hat.y,hat.sizeX,hat.sizeY);

  fill(face.r,face.g,face.b);
  ellipse(moveX+face.x,moveY+face.y,face.sizeX,face.sizeY);
}
