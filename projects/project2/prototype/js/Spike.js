//a triangle
//kills player

let isTouchingPlayer = false;

class Spike{

  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = 50;
  }

  display(){

    push();
    imageMode(CENTER);
    image(spikeSprite,this.x,this.y);
    pop();
  }

  checkPlayerCollision(){

    for(let i = 0; i <player.length; i++){
      let d = dist(this.x,this.y,player[i].x,player[i].y);
      //using size/3 instead of /3 because there's some margin to the sprites
      if (d< this.size/3 + player[i].size/3){
        this.isTouchingPlayer = true;
        {break;}
      }else{
        this.isTouchingPlayer = false;
      }
    }

  }

}
