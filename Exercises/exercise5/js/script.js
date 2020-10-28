/**************************************************
Exercise 5
Zi Di

attempt at Object Oriented programming
a ball catching game, kind of rushed
**************************************************/
"use strict"

let gravityForce = 0.0025;

//a second avatar at player's control
let kid;

let paddle;

let balls = [];
let numBalls = 3;
let activeballCount = 3;

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

  if (state === `intro`){
    textSize(32);
    fill(100,200,100);
    textAlign(CENTER);
    text(`CATCH BALL`,windowWidth/2,windowHeight/2 - 200);
    textSize(24);
    fill(150,150,150);
    text(`Instruction: \n A / D to move the kid (which is a red ball) \n mouse to move paddle \n Space to make the kid catch the ball \n don't let the balls fall \n \n CLICK anywhere to START `,windowWidth/2,windowHeight/2);

    //click to start game
    if(mouseIsPressed){
      state = `game`;
    }
  }


  if (state === `game`){

    textSize(24);
    fill(150,150,150);
    text(`Score: ` + `${score}`,width/3, 100);
    text(`Lives: ` + `${paddleLife}`,width*2/3, 100);

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
          textSize(32);
          fill(100,200,100);
          textAlign(CENTER);
          text(`press SPACE!`,kid.x,kid.y -100);
          //press space to catch the ball
          if(keyIsDown(32)){
            score +=1;
            ball.active = false;
            activeballCount -=1;
          }
        }
      }
    }
  }
  if(score >= balls.legth){
    state = `win`;
    textSize(32);
    fill(100,200,100);
    textAlign(CENTER);
    text(`CONGRATS \n You caught all the balls! \n Refresh to Restart`,windowWidth/2,windowHeight/2 - 200);
  }


  if(paddleLife <=0 ||activeballCount===0 && paddleLife >0){
    state = `over`;
    textSize(32);
    fill(100,200,100);
    textAlign(CENTER);
    text(`Game Over \n You caught ${score} balls! \n Refresh to Restart`,windowWidth/2,windowHeight/2 - 200);
  }


}
