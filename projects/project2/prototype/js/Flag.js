//They are actually berries, not flags
//at each level, all of them need to be collected for the level to be complete

class Flag{

  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = 50;
  }

  display(){
    //berry sprite
    push();
    imageMode(CENTER);
    image(berrySprite,this.x,this.y);
    pop();
  }

}
