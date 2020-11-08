//transports player to next level

let player1OnFlag = false;
let player2OnFlag = false;

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

  checkCollision(){
    let d1 = dist(player[0].x, player[0].y, this.x, this.y) - player[0].size/2 - this.size/2;
    let d2 = dist(player[1].x, player[1].y, this.x, this.y) - player[1].size/2 - this.size/2;

    if(d1 <=0){
      player1OnFlag = true;
    }
    if(d2 <=0){
      player2OnFlag = true;
    }
  }
}
