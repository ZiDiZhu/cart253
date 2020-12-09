class Player{

  //player behaviours

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

  //white bunny sprite
  display1(){
    push();
    imageMode(CENTER);
    image(player1Sprite,this.x,this.y);
    pop();
  }

  //gray bunny sprite
  display2(){
    //display the regular bunny sprite
    push();
    imageMode(CENTER);
    image(player2Sprite,this.x,this.y);
    pop();
  }

  // upside-down whilte bunny sprite
  display3(){
    push();
    imageMode(CENTER);
    image(player1Sprite_flipped,this.x,this.y);
    pop();
  }

  // upside-down gray bunny sprite
  display4(){
    push();
    imageMode(CENTER);
    image(player2Sprite_flipped,this.x,this.y);
    pop();
  }

  //regular movement
  move1(){
    //constrain player inside window
    this.x = constrain(this.x,25,775);
    this.y = constrain(this.y,25,575);

    //left/right arrow key to walk (or A D)
    if(keyIsDown(LEFT_ARROW)|| keyIsDown(65)){
      this.x -= this.vx;
    }else if(keyIsDown(RIGHT_ARROW)||keyIsDown(68)){
      this.x += this.vx;
    }
  }

  //mirrored (vertical)movement
  move2(){
    //constrain player inside window
    this.x = constrain(this.x,25,775);
    this.y = constrain(this.y,25,575);

    //left/right arrow key to walk
    if(keyIsDown(LEFT_ARROW)|| keyIsDown(65)){
      this.x += this.vx;
    }else if(keyIsDown(RIGHT_ARROW)||keyIsDown(68)){
      this.x -= this.vx;
    }
  }


  //regular jump
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
      if(this.isGrounded){
        if(keyIsDown(16)||keyIsDown(32)){
          this.vy = this.jumpForce;
          jumpSFX.play();
        }
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
      if(this.isGrounded){
        if(keyIsDown(16)||keyIsDown(32)){
          this.vy = - this.jumpForce;
          jumpSFX.play();
        }
      }
      if(!this.isGrounded){
        this.vy +=this.gravity;
      }
    }

//checks if the player can collect the berry
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
