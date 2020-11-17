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
    imageMode(CENTER);
    image(berrySprite,this.x,this.y);
    pop();
  }

}
