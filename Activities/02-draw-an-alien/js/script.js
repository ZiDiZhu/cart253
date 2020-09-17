/**************************************************
drawing an ALIEN !!!!!! or somthing like that
ZI DI ZHU

notes and questions:
- need a spell checker in ATOM!! i don't know how to install one that works
- ctrl shift J to view console on browser
- https://p5js.org/reference/
- how do i disable autocomplete when im commenting
- you don't NEED to end a line with ";" apparently??code still works
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup()
{
  //background(R,G,B);
  createCanvas(600,400);
  background(200,110,100);
  noStroke();

//ellipse(posx,posy,width,height)


//body
  fill(30,200,30);
  rect(150,250,100,200);

//grenn hat
  fill(30,200,30);
  ellipse(200,220,180,180);

//face
  fill(200,200,130);
  ellipse(200,240,120,100);

//facial features
//EYES
fill(255);
rect(160, 220, 30, 30);
fill(10);
rect(160, 220, 20, 20);

fill(255);
rect(220, 220, 30, 30);
fill(10);
rect(220, 220, 20, 20);

//mouth
fill(150,30,30);
arc(200, 260, 40, 40, 0, PI, OPEN);

//ears/antennas
//quad(x1, y1, x2, y2, x3, y3, x4, y4)
//aaaaaaaaaaaaahhhhh
//how do i mirror/flip a shape ???
fill(30,200,30);
quad(130,170,80,120,80,50,120,100);
quad(250,170,280,120,280,50,250,100);
//i need a grid nect time

}

// draw()
//
// Description of draw() goes here.
function draw()
{
  //what does this dooooo
  //doe this animate?
}
