/**************************************************
Looking for love
Zi Di Zhu

find love among strings that are not love
**************************************************/

let love = {
  string:`love`,
  x:0,
  y:0
};

let notlove1 = {
  string:`Ioue`,
  x:0,
  y:0
};

let notlove2 = {
  string:`lava`,
  x:0,
  y:0
};

let notlove3 = {
  string:`live`,
  x:0,
  y:0
};

let state = `opening`;//game, win,lose

function setup() {

  createCanvas(500,500);
  randomize();
}

function draw() {
  background(120);
  textAlign(CENTER,CENTER);

//start game from opening screen
  if (state === `opening`){
    text(`instruction: find love and catch it`, 250,200);
    text(`CLICK to play`, 250,250);

    if(mouseIsPressed){
    state = `game`;
    }
  }

//game
  if(state ===`game`){
    setupGame();
    text(`SPACE to reshuffle`,70,10);
    checkIfLove();
  }

  //space to shuffle
  if(keyIsDown(32)){
    randomize();
    }

  if(state === `win`){
    text(`congratulations you've found love!`,250,250);

    text(`SPACE to try again`,70,10);
    if(keyIsDown(32)){
      state = `game`;
      randomize();
    }

  }

  if(state === `lose`){

    text(`OH no that wasn't love!`,250,250);

    text(`SPACE to try again`,70,10);
    if(keyIsDown(32)){
      state = `game`;
      randomize();
    }
  }

}

function setupGame(){

      love.x += random(-3,3);
      love.y += random(-3,3);
      notlove1.x += random(-3,3);
      notlove1.y += random(-3,3);
      notlove2.x += random(-3,3);
      notlove2.y += random(-3,3);
      notlove3.x += random(-3,3);
      notlove3.y += random(-3,3);

      text(love.string,love.x,love.y);
      text(notlove1.string, notlove1.x,notlove1.y);
      text(notlove2.string, notlove2.x,notlove2.y);
      text(notlove3.string, notlove2.x,notlove1.y);
}

function randomize(){


        love.x = random (20,480);
        love.y = random (20,480);

        notlove1.x = random (20,480);
        notlove1.y = random (20,480);

        notlove2.x = random (20,480);
        notlove2.y = random (20,480);

        notlove3.x = random (20,480);
        notlove3.y = random (20,480);
}

function checkIfLove(){
  if (mouseIsPressed && dist(mouseX,mouseY,love.x,love.y) < 15){
    state = `win`;
    console.log(`win`);
  }else if (mouseIsPressed && dist(mouseX,mouseY,notlove1.x,notlove1.y) < 15){
    state = `lose`;
    console.log(`lose`);
  }else if (mouseIsPressed && dist(mouseX,mouseY,notlove2.x,notlove2.y) < 15){
    state = `lose`;
    console.log(`lose`);
  }else if (mouseIsPressed && dist(mouseX,mouseY,notlove3.x,notlove3.y) < 25){
    state = `lose`;
    console.log(`lose`);
    //this one doesn't work, why??
  }
}
