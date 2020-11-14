/**************************************************
Go to the Flag
Zidi Zhu

A basic platformer prototype

How do I make a data holder to make codes to make levels look cleaner?
**************************************************/

"use strict"

let currentLevel = 3;
let state = `testRoom`;

let player = [];

let spike = [];
let bullet= [];
let floor = [];
let flag = [];

function setup() {

  createCanvas (800,600);

  //loadLevel1();
  //loadLevel2();
  loadLevel3();
}

function draw() {
  //for testing mechanics
  if(state === `testRoom`){

    loadLevel();
  }

  if (state ===`gameover`){
      push();
      fill(255);
      text(`game over`,width/2,height/2);
      pop();

      //R to restart
      if(keyIsDown(82)){
        restart();
      }
  }

}

function loadLevel(){
  background(0);

  //instructions
  push();
  fill(255);
  text(`L/R ARROW: MOVE   L-SHIFT: JUMP    R: RESTART`,300,100);
  pop();

  //spawn player
  if(currentLevel ===2){
    for(let i = 0; i<player.length; i++){
      player[i].display();
      player[i].jump();
      player[i].checkFlagCollision();
    }
    player[0].move1();
    player[1].move2();
  }else if(currentLevel ===3){
    for(let i = 0; i<player.length; i++){
      player[i].display();
      player[i].jump();
      player[i].checkFlagCollision();
    }
    player[0].move1();
    player[1].move1();
    player[2].move2();
  }else{
    for(let i = 0; i<player.length; i++){
      player[i].display();
      player[i].move1();
      player[i].jump();
      player[i].checkFlagCollision();
    }
  }
  //display floors
  for(let i=0; i<floor.length; i++){
    floor[i].display();
  }

  //display spikes
  for(let i=0; i<spike.length; i++){
    spike[i].display();
    spike[i].checkPlayerCollision();
  }

  //display flags
  for(let i = 0; i<flag.length;i++){
    flag[i].display();
  }
  //check winning condition
  if(flag.length ===0){
    levelCLear();
  }

  for(let i = 0; i<spike.length; i++){
    if(spike[i].isTouchingPlayer === true){
      for(let i = 0; i < player.length; i++){
        player[i].kill();
      }
    }
  }

  for(let i = 0; i < player.length; i++){
    if(player[i].active === false){
      state = `gameover`;
    }
  }
}

function restart(){
  //respawns player
  floor =[];
  loadLevel1();
  player[0].x = 50;
  player[0].y = 555;
  player[1].x = 50;
  player[1].y = 255;
  for(let i = 0; i < player.length; i++){
    player[i].revive();
  }
  state = `testRoom`;
}

function levelCLear(){
  clearLevel();
  state = `paused`;
  push();
  fill(255,0,0);
  text(`level ` + currentLevel + ` clear`,width/2,height/2);
  pop();
}
