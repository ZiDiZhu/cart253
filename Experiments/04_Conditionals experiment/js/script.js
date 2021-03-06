/**************************************************
conditionals experiment

zidi

Fun with if , else, or (||), and (&&)
**************************************************/

let bgwhite = false;

let angle = 0;

let bgShade = 0;
let circle = {
  x:0,
  y:250,
  size:100,
  vx:0,
  ax:0.1,
  maxV:10
}
let rectScale = 1;

let dot = {
  x: 100,
  y: 100,
  size:20
}

function setup() {
  createCanvas(500,500);
}


function draw() {

  background(bgShade);

  rectScale +=0.01;
  rectScale = constrain(rectScale,1,5);

  angle +=0.1;
  push();
  fill(20);
  translate(70,70);
  rotate(angle);
  rectMode(CENTER);
  scale(rectScale);
  //use translate to move it so it rotates around its center
  rect(0,0,100,100);
  pop();

  let x = dot.x;
  let numdots = 5;
  let dotsdrawn = 0;

//write between push() and pop() to make the style independent of the rest
  push()
  stroke(0,233,233);
  strokeWeight(5);
  fill(170,20,30);
  while(dotsdrawn < numdots){
    ellipse(x,dot.y,dot.size);
    x += 30;
    dotsdrawn +=1;
  }
  pop();

//same as:
//a classic for loop


//translate(x,y), push() and pop() also applies
  push();
  translate(0,40);
  for(let i=0; i<numdots;i++){
    ellipse(x,dot.y,dot.size);
    x += 30;
  }
  pop();


  if(!bgwhite){
      bgShade +=1;
  }

  if (bgShade === 255){
    bgwhite = true;
  }else {
    bgwhite = false
  }

  if(bgwhite){
    bgShade = 0;
  }

// (x===y) to check if x and y are exactly equal
// (x !== y) does not equal
//these are called relational operators

  if(circle.x > width){
    circle.vx = - circle.vx;
  }
  if(circle.x < 0) {
        circle.vx = -circle.vx;
  }

  circle.vx += circle.ax;
  circle.vx = constrain(circle.vx,-circle.maxV,circle.maxV);
  circle.x += circle.vx;

  if(mouseY < height/2){
    fill(255,0,0);
  }

  if (mouseY > height/2){
    fill(0,0,255);
  }

  if (circle.x > width/3 && circle.x < 2 * width/3){
    circle.y = 130;
  } else {
    circle.y = 250;
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
