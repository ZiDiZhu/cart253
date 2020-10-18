/**************************************************
Exercise 4
Zi Di :)

Fun project with arrays
**************************************************/
"use strict";

let arrayofGhosts = [];
let numGhosts = 20;

let ghostImage;
let spGhostImage;
let user = {
  x:0,
  y:0,
};
let userImage;

let life = 3;

let state = 'game'; // goodend. badend

function setup() {
  createCanvas(windowWidth, windowHeight);
  ghostImage = loadImage('assets/images/ghost.png');
  spGhostImage = loadImage('assets/images/specialGhost.png');
  userImage = loadImage('assets/images/user.png');

//the number inside[] is called index, the content is called element

  for(let i =0; i<numGhosts; i++){

    //spawns a regular or special ghost by chance
    spawnGhost();
  }
}

function draw() {
  background(0);

//game state
  if(state ==='game'){

    textAlign(LEFT);
    fill(255);
    text('press SPACE for more ghosts',20,20);
    text('Life:'+ life,width/2,20);

    for(let i =0; i<arrayofGhosts.length; i++){
      moveGhost(arrayofGhosts[i]);
      displayGhost(arrayofGhosts[i]);
    }

    user.x = mouseX;
    user.y = mouseY;
    imageMode("CENTER");
    image(userImage,user.x,user.y);

    checkCollision();
  }

  if(life <1){
    state = 'badend';
  }

//good end
  if(state === 'goodend'){
    textAlign(CENTER);
    fill(255);
    text(`this one loves you and will never ghost you \n refresh to replay`,width/2,height/2);
    image(spGhostImage,width/2,height*2/3);
  }

  if(state === 'badend'){
    textAlign(CENTER);
    fill(255);
    text('you feel sad from getting ghosted \n refresh to replay',width/2,height/2);
    image(ghostImage,width/2,height*2/3);
  }


}

function createGhost(x,y,type){
  let ghost = {
    x:x,
    y:y,
    size: 50,
    vx:0,
    vy:0,
    speed:3 ,
    type:type,
    active:true
  };
  return ghost;
}

function spawnGhost(){
  let chance = random(0,10);
  if(chance > 2){
    let ghost = createGhost(random(50, width - 50), random(50, height - 50),'regular');
    arrayofGhosts.push(ghost);
  }else{
    let ghost = createGhost(random(50, width - 50), random(50, height - 50),'special');
    arrayofGhosts.push(ghost);
  }
}

function displayGhost(ghost){

  imageMode(CENTER);
  if(ghost.type === 'regular'&& ghost.active === true){
    image(ghostImage,ghost.x,ghost.y);
  }
  if(ghost.type === 'special'&& ghost.active === true){
    image(spGhostImage,ghost.x,ghost.y);
  }
}

function checkCollision(){

  for(let i =0; i<arrayofGhosts.length; i++){
    let d = dist(user.x, user.y,arrayofGhosts[i].x,arrayofGhosts[i].y);
    if (d < 50 ){
      if(arrayofGhosts[i].type === 'regular'&&arrayofGhosts[i].active === true){
        arrayofGhosts[i].active = false;
        life -=1;
      }else if(arrayofGhosts[i].type === 'special'){
        state = 'goodend';
      }
    }
  }
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

  if(ghost.type ==='regular'){

  }

}

function keyPressed(){

  //press space to generate more ghosts
  if (keyCode === 32){
    if(state ==='game'){
      spawnGhost();
    }
  }
}
