//the platform for the players to walk on

class Floor{

  constructor(w,h,x,y){
    this.w = w;//width
    this.h = h;//height
    this.x = x;
    this.y = y;
  }

  
  display(){

    push();
    fill(120,180,20);
    noStroke();
    rectMode(CORNER);
    rect(this.x,this.y,this.w,this.h);
    pop();

  }

}
