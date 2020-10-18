/**************************************************
Exercise 4
Zi Di :)

Fun project with arrays
**************************************************/
"use strict";

let arrayofGhosts = [];
let numGhosts = 5;

let ghostImage;
let user;

let ghost1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ghostImage = loadImage('assets/images/ghost.png');

//the number inside[] is called index, the content is called element

  for(let i =0; i<numGhosts; i++){
    let ghost = createGhost(random(50, width - 50), random(50, height - 50));
    arrayofGhosts.push(ghost);
  }
}

function draw() {
  background(0);

  for(let i =0; i<arrayofGhosts.length; i++){
    moveGhost(arrayofGhosts[i]);
    displayGhost(arrayofGhosts[i]);
  }

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

  //2 percent chance of changing movement
  let change = random(0,99);
  if (change < 2){
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

function keyPressed(){

  //press space to generate more ghosts
  if (keyCode === 32){
    let ghost = createGhost(random(50, width - 50), random(50, height - 50));
    arrayofGhosts.push(ghost);
  }
}
