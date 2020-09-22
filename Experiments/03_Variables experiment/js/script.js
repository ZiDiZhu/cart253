/**************************************************
Experiments!
zidi

numbers bad variables good
- whats the easiest way to declare 2 variables at the same time? like (x,y)
> let circle
**************************************************/
let bgShade = 20;
let circleSize = 100;
let circle = {
  x:100 ,
  y:200,
  size:circleSize,
  speed:1,
  fill:0
}

// setup()
//
// Description of setup() goes here.
function setup()
{
  createCanvas(500,500);
  //createCanvas(windowWidth, windowHeight);
}

// draw()
//
// Description of draw() goes here.
function draw()
{
  background(bgShade);
  //rectMode(CENTER);
  //rect(mouseX, mouseY, 100, 100);
  //rect(width / 2, height / 2 ,100,100);

  //2 ways 2 write a console
  //console.log("hello");
  //console.log(`string`${value});

  let randomNo = random();
  circle.x += circle.speed;
  circle.fill = map(circle.x,0,width,0,255)
  //map(var,value1,value2,value3,value4)
  //this converts the var from a number between v1 and v2 to a number between v3 and v4
  fill(circle.fill);
  ellipse(circle.x,circle.y,circle.size);
  //console.log(randomNo);

}
