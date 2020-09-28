/**************************************************
conditionals experiment

zidi

Fun with if loops!
**************************************************/

let bgShade = 0;
let circle = {
  x:0,
  y:250,
  size:100,
  speed:10
}

function setup() {
  createCanvas(500,500);
}


function draw() {
  background(bgShade);

// (x===y) to check if x and y are exactly equal
// (x !== y) does not equal
//these are called relational operators

  if(circle.x > width){
    circle.speed = - circle.speed;
  }
  if(circle.x < 0) {
        circle.speed = -circle.speed;
  }

  circle.x += circle.speed;

  if(mouseY < height/2){
    fill(255,0,0);
  }

  if (mouseY > height/2){
    fill(0,0,255);
  }

  ellipse(circle.x,circle.y,circle.size);
}

function mouseClicked(){
  if (circle.size === 100){
    circle.size = 200
  }else{
    circle.size = 100
  }
}
