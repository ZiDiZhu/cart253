/**************************************************
Exercise 4
Zi Di :)

Fun project with arrays
**************************************************/

let ghostImage;
let user;

let ghost1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ghostImage = loadImage('assets/images/ghost.png');

  ghost1 = createGhost(random(50, width - 50), random(50, height - 50));
}

function draw() {
  background(0);

  moveGhost(ghost1);

  displayGhost(ghost1);

}

function createGhost(x,y){
  let ghost = {
    x:x,
    y:y,
    size: 50,
    vx:0,
    vy:0,
    speed:2
  };
  return ghost;
}

function displayGhost(ghost){
  push();
  imageMode(CENTER);
  image(ghostImage,ghost.x,ghost.y);
  pop();
}

function moveGhost(ghost){

  //5 percent chance of changing movement
  let change = random(0,100);
  if (change < 5){
    ghost.vx = random(-ghost.speed, ghost.speed);
    ghost.vy = random(-ghost.speed, ghost.speed);
  }

  //move the ghost
  ghost.x +=ghost.vx;
  ghost.y +=ghost.vy;

  //constrain to createCanvas
  ghost.x = constrain(ghost.x, ghost.size, width - ghost.size);
  ghost.y = constrain(ghost.y, ghost.size, height - ghost.size);

}
