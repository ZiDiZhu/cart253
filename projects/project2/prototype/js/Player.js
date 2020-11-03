class Player{

  constructor(x,y){
    this.x = x;
    this.y = y;
    this.vx = 7;
    this.vy = 0;
    this.jumpForce = 15;
    this.maxvy = 10;
    this.gravity = 1;
    this.size = 50;
    this.isGrounded = true;
    this.active = true;
  }


  display(){
    //temporarily testing as a circle, player sprite will be added later
    push();
    stroke(0);
    fill(200,50,50);
    ellipse(this.x,this.y,this.size);
    pop();
  }


  move(){
    //constrain player inside window
    this.x = constrain(this.x,25,775);
    this.y = constrain(this.y,25,575);

    //left/right arrow key to walk
    if(keyIsDown(LEFT_ARROW)){
      this.x -= this.vx;
    }else if(keyIsDown(RIGHT_ARROW)){
      this.x += this.vx;
    }
  }

  jump(){
      this.y -= this.vy;
      //check if player is on Floor
      //console.log(`${this.isGrounded}`);
      for (let i=0; i<floor.length; i++){
        let dy = this.y + this.size/2 - floor[i].y;
        if(dy ===0
          && this.x - this.size/2 <floor[i].x + floor[i].w
          && this.x + this.size/2 > floor[i].x){
          this.isGrounded = true;
          this.vy = 0;
          {break;}
        }else{
          this.isGrounded = false;
        }
      }
      //l-shift to jump
      if(this.isGrounded && keyIsDown(16)){
        this.vy = this.jumpForce;
      }
      if(!this.isGrounded){
        this.vy -=this.gravity;
      }
    }

    kill(){
      this.active = false;
    }

}
