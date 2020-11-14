//transports player to next level

class Flag{

  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = 50;
  }

  display(){
    //placeholder circles
    push();
    fill(255,255,0);
    stroke(0);
    ellipse(this.x,this.y,this.size);
    pop();
  }

}
