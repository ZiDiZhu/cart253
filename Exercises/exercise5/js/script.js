/**************************************************
Exercise 5
Zi Di

attempt at Object Oriented programming
**************************************************/
"use strict"

let gravityForce = 0.0025;

//a second avatar at player's control
let kid;

let paddle;

let balls = [];
let numBalls = 3;

let platform = {
  x:0,
  y:0,
  w:0,
  h:5,
}

let state = `intro`;

let paddleLife = 3;
let score = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);

  paddle = new Paddle(300,20);

  for(let i = 0 ; i < numBalls; i++){
    let x = random(0,width);
    let y = random(-400,-100);
    let ball = new Ball(x,y);
    balls.push(ball);
  }

//set a platform across screen
  platform.w =windowWidth;
  platform.x = windowWidth/2;
  platform.y = windowHeight - 100;

//spawn kid at the center of platform
  kid = new Kid(windowWidth/2,platform.y-platform.h/2-25);
}

function draw() {
  background(0);

  if (state === `intro`){

    //click to start game
    if(mouseIsPressed){
      state = `game`;
    }
  }


  if (state === `game`){

    //draw platform
    push();
    fill(150);
    rectMode(CENTER);
    rect(platform.x, platform.y,platform.w,platform.h);
    pop();

    //spawn paddle
    paddle.move();
    paddle.display();

    //spawn kid
    kid.move();
    kid.display();

    //spawn balls
    for (let i = 0; i < balls.length; i++){
      let ball = balls[i];
      if (ball.active){
        ball.gravity(gravityForce);
        ball.move();
        ball.bounce(paddle);
        ball.display();

        //checks distance between the ball and the kid
        let dd = dist(kid.x,kid.y,ball.x,ball.y);
        if(dd <= ball.size/2 + kid.size/2){
          if(keyIsDown(32)){
            score++;
          }
        }
      }
    }

    if(score >=1){
      state = `win`;
    }


    if(paddleLife <=0){
      state = `over`;
    }

  }


}
