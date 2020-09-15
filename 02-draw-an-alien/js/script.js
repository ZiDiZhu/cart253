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
  ///hecc i didnt know its a before class activity so this is very rushed

  //pink backgroun! (i think its(R,B,G))
  createCanvas(640,480);
  background(255,120,140);
  noStroke();

  //body
  fill(20,255,255);
  ellipse(320,480,200,400);

  //head
  fill(20,200,70);
  ellipse(300,240,200,250);

  //HE HAS GLASSES
  stroke(0,0,0);
  strokeWeight(5);
  rectMode(CENTER);
  rect(230,220,70,30);
  rectMode(CENTER);
  rect(330,220,70,30);

}

// draw()
//
// Description of draw() goes here.
function draw() {

}
