//a triangle
//kills player

let isTouchingPlayer = false;

class Spike{

  constructor(x1,y1,x2,y2,x3,y3){
    this.x1 = x1;
    this.y1 = y2;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
  }

  display(){

    push();
    fill(255);
    noStroke();
    triangle(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3);
    pop();
  }

  checkPlayerCollision(){
    //check if the player is touching spike

    //dist between circle edge and 3 verticles of the triangle

    for(let i = 0; i < player.length; i++){
      let d1 = dist(player[1].x,player[1].y,this.x1,this.y1) - player[1].size/2;
      let d2 = dist(player[1].x,player[1].y,this.x2,this.y2) - player[1].size/2;
      let d3 = dist(player[1].x,player[1].y,this.x3,this.y3) - player[1].size/2;
      let d4 = dist(player[0].x,player[0].y,this.x1,this.y1) - player[i].size/2;
      let d5 = dist(player[0].x,player[0].y,this.x2,this.y2) - player[0].size/2;
      let d6 = dist(player[0].x,player[0].y,this.x3,this.y3) - player[0].size/2;

      if(d1>0 && d2>0 && d3>0 && d4>0 && d5>0 && d6>0){
        this.isTouchingPlayer = false;
      }else{
        this.isTouchingPlayer = true;
      }

    }

    //if player overlapses with any of the 3 verticles

    //console.log(`${isTouchingPlayer}`);

  }

}
