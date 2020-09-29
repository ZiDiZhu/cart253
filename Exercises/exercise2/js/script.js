/**************************************************
-4- covid 19 simulator!!!!!!
Zidi

learned dist(), noloop(),
**************************************************/

let covid19 = {
  x:0,
  y:250,
  size:100,
  vx:0,
  vy:0,
  speed:12,
  fill:{
    r:255,
    g:0,
    b:0
  }
}

let user = {
  x:250,
  y:250,
  fill:255,
  size:100
}

let clownImg;

let maxStatic = 80;

function preload(){
  clownImg = loadImage("assets/images/clown.png")
}

function setup() {

createCanvas(windowWidth,windowHeight);

covid19.y = random(0,height);
covid19.vx = covid19.speed;

}


function draw() {

  background(0);

  //static dots
  push()
  for(let i = 0; i <maxStatic;i++){
    let x = random(0,width);
    let y = random(0,height);
    stroke(255);
    point(x,y);
  }
  pop()

  //covid19 movement
  covid19.x += covid19.vx;
  covid19.y += covid19.vy;

  if (covid19.x > width){
    covid19.x = 0;
    covid19.y = random(0,height);
  }

  //user movement
  user.x = mouseX;
  user.y = mouseY;

  //check for catching covid19
  let d = dist(user.x, user.y, covid19.x, covid19.y);
  let d2 = dist(user.x, user.y, covid19.x, height - covid19.y);
  if (d < covid19.size/2 + user.size/2 || d2 < covid19.size/2 + user.size/2 ){
    noLoop();
  }


  //fill(covid19.fill.r,covid19.fill.g,covid19.fill.b);
  //ellipse(covid19.x, covid19.y, covid19.size);
    imageMode(CENTER);
    image(clownImg,covid19.x,covid19.y,100,100);

        imageMode(CENTER);
        image(clownImg,covid19.x,height - covid19.y,100,100);

  fill(user.fill);
  ellipse(user.x, user.y, user.size);

}
