/**************************************************
Plural Platformers
Zidi Zhu

A platformer
**************************************************/

"use strict"

let currentLevel= {
  level:0,
  title:''
  };
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
  //loadLevel5();
  //loadLevel6();
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
  if (state === `paused` && currentLevel.level <=7){
    if(mouseIsPressed){
      if(currentLevel <7){
          startSFX.play();
      }
      if(currentLevel.level === 0){
        loadLevel0();
        bgm_intro.stop();
        bgm_game.loop();
      }else if(currentLevel.level === 1){
        loadLevel1();
        bgm_intro.stop();
        bgm_game.loop();
      }else if(currentLevel.level === 2){
        loadLevel2();
      }else if(currentLevel.level === 3){
        loadLevel3();
      }else if(currentLevel.level === 4){
        loadLevel4();
      }else if(currentLevel.level === 5){
        loadLevel5();
      }else if(currentLevel.level === 6){
        loadLevel6();
      }else if(currentLevel.level === 7){
        loadLevel7();
      }
      state = `testRoom`;
    }
  }

  if (state ===`gameover`){
      push();
      fill(255);
      textAlign(CENTER);
      textSize(24);
      text(`game over \n R to restart`,width/2,height/2);
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
  text(`you are bunny \n collect all berries \n L/R ARROW: MOVE    /or A D \n SHIFT: JUMP    /or SPACE`,10,10);
  textAlign(CENTER);
  text(`level ` + `${currentLevel.level}`,400,50);
  textSize(24);
  text(`${currentLevel.title}`,400,85);
  pop();

  //spawn player
  if(currentLevel.level ===0){
    startLevel0();
  }
  if(currentLevel.level ===1){
    startLevel1();
  }
  else if(currentLevel.level ===2){
    startLevel2();
  }else if(currentLevel.level ===3){
    startLevel3();
  }else if(currentLevel.level ===4){
    startLevel4();
  }else if(currentLevel.level ===5){
    startLevel5();
  }else if (currentLevel.level ===6){
    startLevel6();
  }else if (currentLevel.level ===7){
    startLevel7();
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

function startLevel5(){
  player[0].display1();
  player[0].move1();
  player[0].jump();
  player[1].display4();
  player[1].move2();
  player[1].jump2();

  for(let i=0; i<15; i++){
    spike[i].display();
  }
  for(let i=15; i<30; i++){
    spike[i].display2();
  }
  for(let i=0; i<spike.length; i++){
    spike[i].checkPlayerCollision();
  }
  spike[30].display();
  spike[31].display2();
  for(let i = 0; i<player.length; i++){
    player[i].checkFlagCollision();
  }
}

function startLevel6(){
  player[0].display1();
  player[0].jump();
  player[0].move1();
  player[1].display2();
  player[1].jump();
  player[1].move2();
  player[2].display1();
  player[2].jump();
  player[2].move1();
  player[3].display2();
  player[3].jump();
  player[3].move2();
  player[4].display1();
  player[4].jump();
  player[4].move1();
  for(let i=0; i<spike.length; i++){
    spike[i].display();
    spike[i].checkPlayerCollision();
  }
  for(let i = 0; i<player.length; i++){
    player[i].checkFlagCollision();
  }
}

function startLevel7(){
  bgm_game.stop();
  push();
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text(`plural platformers \n made by Zi Di \n\n special thanks:
    \n concordia cart 253 \n my friends for test playing \n\n tools used: \n coding: P5JS \n art: Aseprite \n music: Ableton `,width/2,200);
  pop();
}



//load level at command
function cheatMode(){
  //1 to load level 1, 2 to load level 2, etc

  if(keyIsDown(49)){
    state = `paused`
    currentLevel.level = 1;
    clearLevel();
    loadLevel1();
    state = `testRoom`;
  }
  if(keyIsDown(50)){
    state = `paused`
    currentLevel.level = 2;
    clearLevel();
    loadLevel2();
    state = `testRoom`;
  }
  if(keyIsDown(51)){
    state = `paused`
    currentLevel.level = 3;
    clearLevel();
    loadLevel3();
    state = `testRoom`;
  }
  if(keyIsDown(52)){
    state = `paused`
    currentLevel.level = 4;
    clearLevel();
    loadLevel4();
    state = `testRoom`;
  }
  if(keyIsDown(53)){
    state = `paused`
    currentLevel.level = 5;
    clearLevel();
    loadLevel5();
    state = `testRoom`;
  }if(keyIsDown(54)){
    state = `paused`
    currentLevel.level = 6;
    clearLevel();
    loadLevel6();
    state = `testRoom`;
  }
}


function restart(){
  //restarts current level
  clearLevel();
  state = `testRoom`;
  if(currentLevel.level === 0){
    loadLevel0();
  }else if(currentLevel.level === 1){
    loadLevel1();
  }else if (currentLevel.level === 2){
    loadLevel2();
  }else if (currentLevel.level === 3){
    loadLevel3();
  }else if (currentLevel.level === 4){
    loadLevel4();
  }else if (currentLevel.level === 5){
    loadLevel5();
  }else if (currentLevel.level === 6){
    loadLevel6();
  }else if (currentLevel.level === 7){
    loadLevel7();
  }
}

function levelCLear(){
    clearSFX.play();
    clearLevel();
    state = `paused`;
    push();
    fill(250,150,100);
    textAlign(CENTER);
    textSize(24);
    if(currentLevel.level <7){
      text(`level ` + currentLevel.level + ` clear \n CLICK for next level`,width/2,height/2);
      currentLevel.level +=1;
    }

    pop();

}
