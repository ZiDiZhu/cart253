//the platform for the player to walk on

class Floor{

  constructor(w,h,x,y){
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
  }

  display(){

    push();
    fill(120);
    noStroke();
    rectMode(CORNER);
    rect(this.x,this.y,this.w,this.h);
    pop();

  }

}
