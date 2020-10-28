class Ball {

  constructor(x,y){
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxspeed = 10;
    this.size = 40;
    this.active = true;
  }

  gravity(force){
    this.ay += force;
  }

  move(){
    this.vx += this.ax;
    this.vy += this.ay;

    this.vx = constrain(this.vx, -this.maxspeed, this.maxspeed);
    this.vy = constrain(this.vy, -this.maxspeed, this.maxspeed);

    this.x +=this.vx;
    this.y +=this.vy;

    if (this.y > windowHeight){
      this.active = false;
    }
  }

  bounce(paddle){
    if(this.x > paddle.x - paddle.width/2 &&
      this.x < paddle.x + paddle.width/2 &&
      this.y + this.size/2 > paddle.y - paddle.height/2 &&
      this.y - this.size/2 < paddle.y + paddle.height/2){

        //bounce
        let dx = this.x - paddle.x;
        this.vx = map(dx, - paddle.width/2,paddle.width/2,2,-2);

        this.vy = -this.vy;
        this.ay = 0;
    }
  }

  display(){
    push();
    stroke(0);
    fill(100);
    ellipse(this.x,this.y,this.size);
    pop();
  }

}
