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


  display1(){
    //display the regular bunny sprite
    push();
    imageMode(CENTER);
    image(player1Sprite,this.x,this.y);
    pop();
  }

  display2(){
    //display the regular bunny sprite
    push();
    imageMode(CENTER);
    image(player2Sprite,this.x,this.y);
    pop();
  }

  display3(){
    //display the regular bunny sprite
    push();
    imageMode(CENTER);
    image(player1Sprite_flipped,this.x,this.y);
    pop();
  }

  display4(){
    //display the regular bunny sprite
    push();
    imageMode(CENTER);
    image(player2Sprite_flipped,this.x,this.y);
    pop();
  }

  move1(){
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

  //mirrored (vertical)movement
  move2(){
    //constrain player inside window
    this.x = constrain(this.x,25,775);
    this.y = constrain(this.y,25,575);

    //left/right arrow key to walk
    if(keyIsDown(LEFT_ARROW)){
      this.x += this.vx;
    }else if(keyIsDown(RIGHT_ARROW)){
      this.x -= this.vx;
    }
  }

  jump(){
      this.y -= this.vy;
      //check if player is on Floor
      //console.log(`${this.isGrounded}`);
      for (let i=0; i<floor.length; i++){
        let dy = this.y + this.size/2 - floor[i].y;
        if (dy > 0 &&
        dy < floor[i].h &&
        this.x - this.size / 2 < floor[i].x + floor[i].w &&
        this.x + this.size / 2 > floor[i].x) {
        this.isGrounded = true;
        this.y = floor[i].y - this.size / 2;
        this.vy = 0;
        break;
      }else{
          this.isGrounded = false;
        }
      }
      //l-shift to jump
      if(this.isGrounded && keyIsDown(16)){
        this.vy = this.jumpForce;
        jumpSFX.play();
      }
      if(!this.isGrounded){
        this.vy -=this.gravity;
      }
    }

//reverse-gravity jump
  jump2(){
    this.y -= this.vy;
    for (let i=0; i<floor.length; i++){
      let dy = this.y - this.size/2 - floor[i].y - floor[i].h;
      if (dy < 0 &&
      dy > - floor[i].h &&
      this.x - this.size / 2 < floor[i].x + floor[i].w &&
      this.x + this.size / 2 > floor[i].x){
        this.isGrounded = true;
        this.y = floor[i].y + this.size/2 + floor[i].h;
        this.vy = 0;
        break;
      }else{
          this.isGrounded = false;
        }
      }
      if(this.isGrounded && keyIsDown(16)){
        this.vy = -this.jumpForce;
      }
      if(!this.isGrounded){
        this.vy +=this.gravity;
      }
    }

  checkFlagCollision(){
    for (let i = 0; i < flag.length; i ++){
      let d1 = dist(flag[i].x, flag[i].y, this.x, this.y) - flag[i].size/2 - this.size/2;
      if(d1 <=0){
        flag.splice(i,1);
        collectedSFX.play();
      }
    }
  }

  kill(){
    this.active = false;
  }

  revive(){
    this.active = true;

    //prevent falling from spawning
    this.vy = 0;
  }

}
