//stores level data
//creates player, floor, spikes and berries for each level

"use strict"

//deletes everything in the  floor, player, spikes, berries from each level when the level is complete
  function clearLevel(){
    titleImg.remove();
    floor = [];
    player = [];
    flag = [];
    spike = [];
  }

  function loadLevel0(){

    currentLevel.title = 'INTRO';
    player[0] = new Player(50,455);

    floor[0] = new Floor(800,20,0,480);

    spike[0] = new Spike(400,455);//down

    flag[0] = new Flag(750,455);
  }

  function loadLevel1(){
    currentLevel.title = 'TWIN';
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
    currentLevel.title = 'OTHER TWIN';

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

    currentLevel.title = 'THREE';

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

    currentLevel.title = 'REFLECTION';

    player[0] = new Player(80,395);//reversed
    player[1] = new Player(80,335);//normal
    floor[0] = new Floor(800,20,0,350);
    floor[1] = new Floor(400,20,580,250);

    flag[0] = new Flag(750,395);
    flag[1] = new Flag(620,225);

    spike[0] = new Spike(350,395);//down
    spike[1] = new Spike(200,325);//up\
    spike[2] = new Spike(690,225);//up
    spike[3] = new Spike(690,175);//up
    spike[4] = new Spike(690,125);//up
    spike[5] = new Spike(690,75);//up
    spike[6] = new Spike(690,25);//up
  }

  function loadLevel5(){

    currentLevel.title = 'STEPS';
    player[0] = new Player(430,275);
    player[1] = new Player(430,345);

    floor[0] = new Floor(180,20,340,300);//center
    floor[1] = new Floor(220,20,0,300);//L
    floor[2] = new Floor(200,20,600,350);//r-down
    floor[3] = new Floor(350,20,0,50);//l-up-

    //spikeroll_up
    let next = 0;
    for(let i = 0; i <15 ; i++){
      next +=50;
      spike[i] = new Spike(next,575);
    }
    //spikeRoll_down
    let next2 = 0;
    for(let i = 15; i <30 ; i++){
      next2 +=50;
      spike[i] = new Spike(next2,25);
    }
    spike[30] = new Spike(110,275);//l
    spike[31] = new Spike(30,345);//l

    flag[0] = new Flag(700,325);//r-down-up
    flag[1] = new Flag(760,395);//r-down-down
    flag[2] = new Flag(30,95);//r-up-up
  }

  function loadLevel6(){
    currentLevel.title = 'PARTY';
    player[0] = new Player(300,300);
    player[1] = new Player(350,300);
    player[2] = new Player(600,300);
    player[3] = new Player(650,150);
    player[4] = new Player(30,405);

    floor[0] = new Floor(600,20,80,325);
    floor[1] = new Floor(300,20,500,170);
    floor[2] = new Floor(200,20,600,405);
    floor[3] = new Floor(800,20,0,580);
    floor[4] = new Floor(150,20,350,475);
    floor[5] = new Floor(80,20,0,420);

    spike[0] = new Spike(775,380);
    spike[1] = new Spike(480,300);
    spike[2] = new Spike(775,145);
    spike[3] = new Spike(170,300);

    flag[0] = new Flag(100,300);
    flag[1] = new Flag(650,380);
    flag[2] = new Flag(420,450);
  }

  function loadLevel7(){
    currentLevel.title = 'THX 4 PLAYING';
    let next = -50;
    for(let i = 0; i <5 ; i++){
      next +=150;
      player[i] = new Player(next,575);
    }
    let next2 = -50;
    for(let i = 5; i <10 ; i++){
      next2 +=150;
      player[i] = new Player(next2,125);
    }
  }
