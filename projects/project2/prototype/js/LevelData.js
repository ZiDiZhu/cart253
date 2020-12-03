//stores level data

"use strict"
  function clearLevel(){
    titleImg.remove();
    floor = [];
    player = [];
    flag = [];
    spike = [];
  }

  function loadLevel0(){
    player[0] = new Player(50,455);

    floor[0] = new Floor(800,20,0,480);

    spike[0] = new Spike(400,455);//down

    flag[0] = new Flag(750,455);
  }

  function loadLevel1(){
    player[0] = new Player(50,555);
    player[1] = new Player(50,255);

    //level 1 floors
    floor[0] = new Floor(800,20,0,580);//down
    floor[1] = new Floor(800,20,0,280);//up

    //test room spikes - down
    spike[0] = new Spike(200,555);//down
    spike[1] = new Spike(600,555);//down
    spike[2] = new Spike(400,255);//up

    //test room - flag
    flag[0] = new Flag(750,255);
    flag[1] = new Flag(500,555);
  }

  function loadLevel2(){


    player[0] = new Player(250,455);//left
    player[1] = new Player(570,455);//right

    //level 2 floors
    floor[0] = new Floor(800,20,0,580);//bottom floor
    floor[1] = new Floor(120,20,200,480);//tier1
    floor[2] = new Floor(120,20,500,480);//tier1
    floor[3] = new Floor(120,20,0,380);//tier2
    floor[4] = new Floor(120,20,680,380);//tier2
    floor[5] = new Floor(120,20,200,280);//tier3
    floor[6] = new Floor(120,20,500,280);//tier3
    floor[7] = new Floor(120,20,0,180);//tier4
    floor[8] = new Floor(120,20,680,180);//tier4


    //level 2 spikes on the bottom
    let next = 0;
    for(let i = 0; i <15 ; i++){
      next +=50;
      spike[i] = new Spike(next,555);
    }

    flag[0] = new Flag(400,375);//tier1
    flag[1] = new Flag(100,355);//tier2
    flag[2] = new Flag(300,255);//tier3
    flag[3] = new Flag(770,155);//tier4
  }

//level 3: watch your steps
  function loadLevel3(){

    player[0] = new Player(50,555);
    player[1] = new Player(50,155);
    player[2] = new Player(750,375);

    //platforms-dowm
    floor[0] = new Floor(800,20,0,580);

    //platforms-up
    floor[1] = new Floor(600,20,350,180);
    floor[2] = new Floor(250,20,0,180);

    //mid
    floor[3] = new Floor(80,20,720,400);
    floor[4] = new Floor(630,20,0,400);

    //spikes - down
    spike[0] = new Spike(500,555);
    spike[1] = new Spike(550,555);
    spike[2] = new Spike(600,555);
    spike[3] = new Spike(450,555);
    spike[4] = new Spike(800,555);

    //test room spikes - up
    spike[5] = new Spike(650,155);

    //mid spikes
    spike[6] = new Spike(220,375);

    //test room - flag
    flag[0] = new Flag(100,300);//up
    flag[1] = new Flag(680,555);//down
    flag[2] = new Flag(500,375);//mid
    flag[3] = new Flag(380,155);//mid
  }

  function loadLevel4(){
    player[0] = new Player(150,395);
    player[1] = new Player(150,335);
    floor[0] = new Floor(800,20,0,350);

    flag[0] = new Flag(400,325);
  }
