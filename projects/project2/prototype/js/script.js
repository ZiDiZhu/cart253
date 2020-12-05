/**************************************************
Plural Platformers
Zidi Zhu

A platformer
**************************************************/

"use strict"

let currentLevel = 0;
let state = `testRoom`;

let titleImg;

let player = [];
let player1Sprite;//white bunny
let player2Sprite;//grey bunny
let player1Sprite_flipped;//white bunny upside down
let player2Sprite_flipped;

let berrySprite;
let spikeSprite;
let spikeSprite_flipped;

let instrImg;

let jumpSFX;
let collectedSFX;
let killedSFX;
let startSFX;
let clearSFX;
let bgm_intro;
let bgm_game;
let bgm_outro;

let spike = [];
let bullet= [];
let floor = [];
let flag = [];

function preload(){
  //load art/sound assets
  titleImg = createImg('assets/images/title.gif');

  player1Sprite = loadImage('assets/images/player.png');
  player2Sprite = loadImage('assets/images/player2.png');
  player1Sprite_flipped = loadImage('assets/images/player_flipped.png');
  player2Sprite_flipped = loadImage('assets/images/player2_flipped.png');
  berrySprite = loadImage('assets/images/berry.png');
  spikeSprite = loadImage('assets/images/spike.png');
  spikeSprite_flipped = loadImage('assets/images/spike_flipped.png');
  instrImg = loadImage('assets/images/instr.png');

  jumpSFX = loadSound('assets/sounds/jump.wav');
  collectedSFX = loadSound('assets/sounds/collected.wav');
  killedSFX = loadSound('assets/sounds/killed.wav');
  startSFX = loadSound('assets/sounds/levelStart.wav');
  clearSFX = loadSound('assets/sounds/levelCleared.wav');
  bgm_intro = loadSound('assets/sounds/bgm_intro.wav');
  bgm_game = loadSound('assets/sounds/bgm_game.wav');
  bgm_outro = loadSound('assets/sounds/bgm_outro.wav');
}

function setup() {

  createCanvas (800,600);

  loadLevel0();
  //loadLevel1();
  //loadLevel2();
  //loadLevel3();
  //loadLevel4();
  bgm_intro.loop();
}

function draw() {

  cheatMode();

  //game state
  if(state === `testRoom`){
    loadLevel();
  }

//called when using mouseClick when "level clear"
//to load to next level
  if (state === `paused`){
    if(mouseIsPressed){
      startSFX.play();
      if(currentLevel === 0){
        loadLevel0();
        bgm_intro.stop();
        bgm_game.loop();
      }else if(currentLevel === 1){
        loadLevel1();
        bgm_intro.stop();
        bgm_game.loop();
      }else if(currentLevel === 2){
        loadLevel2();
      }else if(currentLevel === 3){
        loadLevel3();
      }else if(currentLevel === 4){
        loadLevel4();
      }
      state = `testRoom`;
    }
  }

  if (state ===`gameover`){
      push();
      fill(255);
      text(`game over`,width/2,height/2);
      pop();

      //R to restart
      if(keyIsDown(82)){
        startSFX.play();
        restart();
      }
  }

}

function loadLevel(){

  background(0,10,70); //deep blue

  //instructions
  push();
  fill(255);
  textAlign(CENTER);
  text(`L/R ARROW: MOVE   L-SHIFT: JUMP    R: RESTART \n BUNNY IS YOU \n COLLECT ALL BERRY`,400,100);
  text(`level ` + `${currentLevel}`,400,50);
  pop();

  //spawn player
  if(currentLevel ===0){
    startLevel0();
  }
  if(currentLevel ===1){
    startLevel1();
  }
  else if(currentLevel ===2){
    startLevel2();
  }else if(currentLevel ===3){
    startLevel3();
  }else if(currentLevel ===4){
    startLevel4();
  }


  //display floors
  for(let i=0; i<floor.length; i++){
    floor[i].display();
  }

  //display flags
  for(let i = 0; i<flag.length;i++){
    flag[i].display();
  }

  //check winning condition: if no more flags to be collected
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


//Sets player behaviour

function startLevel0(){
  titleImg.position(100,120);
  image(instrImg,0,450);
  player[0].display1();
  player[0].move1();
  player[0].jump();
  player[0].checkFlagCollision();
  for(let i=0; i<spike.length; i++){
    spike[i].display();
    spike[i].checkPlayerCollision();
  }
}

function startLevel1(){
  for(let i = 0; i<player.length; i++){
    player[i].display1();
    player[i].move1();
    player[i].jump();
    player[i].checkFlagCollision();
  }
  for(let i=0; i<spike.length; i++){
    spike[i].display();
    spike[i].checkPlayerCollision();
  }
}

function startLevel2(){
  for(let i = 0; i<player.length; i++){
    player[i].jump();
    player[i].checkFlagCollision();
  }
  player[0].move1();
  player[1].move2();
  player[0].display1();
  player[1].display2();
  for(let i=0; i<spike.length; i++){
    spike[i].display();
    spike[i].checkPlayerCollision();
  }
}

function startLevel3(){
  for(let i = 0; i<player.length; i++){
    player[i].jump();
    player[i].checkFlagCollision();
  }
  player[0].move1();
  player[1].move1();
  player[2].move2();
  player[0].display1();
  player[1].display1();
  player[2].display2();
  for(let i=0; i<spike.length; i++){
    spike[i].display();
    spike[i].checkPlayerCollision();
  }
}

function startLevel4(){
  player[0].jump2();
  player[0].move1();
  player[0].display3();
  player[1].jump();
  player[1].move1();
  player[1].display1();
  spike[0].display2();
  spike[1].display();
  spike[2].display();
  spike[3].display2();
  spike[4].display();
  spike[5].display2();
  spike[6].display();
  for(let i = 0; i<player.length; i++){
    player[i].checkFlagCollision();
  }
  for(let i=0; i<spike.length; i++){
    spike[i].checkPlayerCollision();
  }
}


//load level at command
function cheatMode(){
  //1 to load level 1, 2 to load level 2, etc

  if(keyIsDown(49)){
    state = `paused`
    currentLevel = 1;
    clearLevel();
    loadLevel1();
    state = `testRoom`;
  }
  if(keyIsDown(50)){
    state = `paused`
    currentLevel = 2;
    clearLevel();
    loadLevel2();
    state = `testRoom`;
  }
  if(keyIsDown(51)){
    state = `paused`
    currentLevel = 3;
    clearLevel();
    loadLevel3();
    state = `testRoom`;
  }
  if(keyIsDown(52)){
    state = `paused`
    currentLevel = 4;
    clearLevel();
    loadLevel4();
    state = `testRoom`;
  }
}


function restart(){
  //restarts current level
  clearLevel();
  state = `testRoom`;
  if(currentLevel === 0){
    loadLevel0();
  }else if(currentLevel === 1){
    loadLevel1();
  }else if (currentLevel === 2){
    loadLevel2();
  }else if (currentLevel === 3){
    loadLevel3();
  }else if (currentLevel === 4){
    loadLevel4();
  }
}

function levelCLear(){
  clearSFX.play();
  clearLevel();
  state = `paused`;
  push();
  fill(255,0,0);
  text(`level ` + currentLevel + ` clear \n Click to play next level`,width/2,height/2);
  currentLevel +=1;
  pop();
}
