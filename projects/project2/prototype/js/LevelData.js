//stores level data

"use strict"
  function clearLevel(){
    floor = [];
    player = [];
    flag = [];
    spike = [];
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

  function loadLevel3(){
    player[0] = new Player(50,555);
    player[1] = new Player(50,155);
    player[2] = new Player(750,375);

    //test room platforms-dowm
    floor[0] = new Floor(330,20,0,580);
    floor[1] = new Floor(300,20,500,580);

    //test room platforms-up
    floor[2] = new Floor(130,20,0,180);
    floor[3] = new Floor(400,20,200,180);
    floor[4] = new Floor(150,20,670,180);
    floor[5] = new Floor(800,5,0,180);

    //mid
    floor[6] = new Floor(800,5,0,400);
    floor[7] = new Floor(130,20,0,400);
    floor[8] = new Floor(400,20,200,400);
    floor[9] = new Floor(150,20,670,400);

    //test room spikes - down
    spike[0] = new Spike(330,600,410,600,370,550);
    spike[1] = new Spike(410,600,490,600,450,550);

    //test room spikes - up
    spike[2] = new Spike(130,200,200,200,165,150);

    //mid
    spike[3] = new Spike(600,400,670,400,635,350);
    spike[4] = new Spike(130,400,200,400,165,350);

    //test room - flag
    flag[0] = new Flag(750,155);
    flag[1] = new Flag(250,555);
    flag[2] = new Flag(250,375);
  }
