/**************************************************
Go to the Flag
Zidi Zhu

A basic platformer prototype
**************************************************/

"use strict"

let state = `testRoom`;

let player = [];

let spike = [];
let bullet= [];
let floor = [];

function setup() {

  createCanvas (800,600);

  player[0] = new Player(50,555);
  player[1] = new Player(50,255);

  //test room platforms-dowm
  floor[0] = new Floor(330,20,0,580);
  floor[1] = new Floor(300,20,500,580);

  //test room platforms-up
  floor[2] = new Floor(130,20,0,280);
  floor[3] = new Floor(400,20,200,280);
  floor[4] = new Floor(150,20,670,280);
  floor[5] = new Floor(800,5,0,280);

  //test room spikes - down
  spike[0] = new Spike(330,600,410,600,370,550);
  spike[1] = new Spike(410,600,490,600,450,550);

  //test room spikes - up
  spike[2] = new Spike(130,300,200,300,165,250);
  spike[3] = new Spike(600,300,670,300,635,250);
}

function draw() {

  //for testing mechanics
  if(state === `testRoom`){
    background(0);

    //spawn player
    for(let i = 0; i<player.length; i++){
      player[i].display();
      player[i].move1();
      player[i].jump();
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
