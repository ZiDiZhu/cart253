/**************************************************
Exercise 1
I a p p r e c i a t e to n a v i g a t e

Zi Di Zhu

animation interactable with mouse
i'll try to do something using the alien i drew at activity 2
**************************************************/

let margin = 50;

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

  x1a:-20,
  y1a:40,
  x2a:40,
  y2a:40,
  x1b:-20,
  y1b:40,
  x2b:40,
  y2b:40

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

  let rem = random(0,4);

  fill(hat.r,hat.g+rem*5,hat.b);
  ellipse(moveX+hat.x,moveY+hat.y,hat.sizeX,hat.sizeY);

  fill(face.r,face.g,face.b);
  ellipse(moveX+face.x,moveY+face.y,face.sizeX,face.sizeY);

  fill(200-rem*30,200-rem*30,200-rem*30);
  rect(moveX+eye.x1a,moveY+eye.y1a,30,30);
  rect(moveX+eye.x2a,moveY+eye.y2a,30,30);

  fill(rem);
  rect(moveX+eye.x2b,moveY+eye.y2b,20+rem,20+rem);
  rect(moveX+eye.x1b,moveY+eye.y1b,20+rem,20+rem);

//mouth
  fill(150,30,30);
  arc(20+moveX, 80+moveY, 40+rem, 40, 0, PI, OPEN);
}
