/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

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
function draw() {
  background(20);
  rectMode(CENTER);
  rect(mouseX, mouseY, 100, 100);
  //rect(width / 2, height / 2 ,100,100);
}