/**************************************************
Go to the Flag
Zidi Zhu

A basic platformer prototype
**************************************************/

"use strict"

let state = `testRoom`;

let player;

let spike = [];
let bullet= [];
let floor = [];

function setup() {

  createCanvas (800,600);

  player = new Player(150,555);

  //test room platforms
  floor[0] = new Floor(330,20,0,580);
  floor[1] = new Floor(300,20,500,580);

  spike[0] = new Spike(330,600,410,600,370,550);
  spike[1] = new Spike(410,600,490,600,450,550);
}

function draw() {

  //for testing mechanics
  if(state = `testRoom`){
    background(0);

    //spawn player
    player.display();
    player.move();
    player.jump();

    //display floors
    for(let i=0; i<floor.length; i++){
      floor[i].display();
    }

    //display spikes
    for(let i=0; i<spike.length; i++){
      spike[i].display();
      spike[i].checkPlayerCollision();
    }

    if(player.active === false){
      state = `gameover`;
    }

  }

  if (state ===`gameover`){
      push();
      fill(255);
      text(`game over`,width/2,height/2);
      pop();

      //R to restart
      if(keyIsDown(82)){
        state = `testRoom`;
        respawnPlayer();
      }
  }

  function respawnPlayer(){
    //respawns player
  }


}
