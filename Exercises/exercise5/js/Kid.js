class Kid{

  constructor(x,y){
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.size = 50;
  }

  move(){
    if(keyIsDown(65)){
      this.x -= this.speed;
    }
    if(keyIsDown(68)){
      this.x +=this.speed;
    }

  }

  display(){
    push();
    stroke(0);
    fill(200,50,50);
    ellipse(this.x,this.y,this.size);
    pop();
  }
}
