//stores level data

"use strict"
  function clearLevel(){
    floor = [];
    player = [];
    flag = [];
    background(0);
  }


  function loadLevel1(){
    player[0] = new Player(50,555);
    player[1] = new Player(50,255);

    //test room platforms-dowm
    floor[0] = new Floor(330,20,0,580);
    floor[1] = new Floor(300,20,500,580);

    //test room platforms-up
    floor[2] = new Floor(130,20,0,280);
    floor[3] = new Floor(400,20,200,280);
    floor[4] = new Floor(150,20,670,280);
    floor[5] = new Floor(800,5,0,280);
    floor[6] = new Floor(800,5,0,580);

    //test room spikes - down
    spike[0] = new Spike(330,600,410,600,370,550);
    spike[1] = new Spike(410,600,490,600,450,550);

    //test room spikes - up
    spike[2] = new Spike(130,300,200,300,165,250);
    spike[3] = new Spike(600,300,670,300,635,250);

    //test room - flag
    flag[0] = new Flag(750,255);
    flag[1] = new Flag(750,555);
  }

  function loadLevel2(){

    player[0] = new Player(50,555);//leftDela
    player[1] = new Player(750,555);

    //dividing line
    floor[0] = new Floor(20,600,390,0); //CHANGE THIS INTO A WALL CLASS INSTEAD
    //bottom line
    floor[1] = new Floor(800,20,0,580);
    floor[2] = new Floor(170,20,130,480);
    floor[3] = new Floor(200,20,390,480);
    floor[4] = new Floor(110,20,0,380);
    floor[5] = new Floor(110,20,650,380);
    floor[6] = new Floor(400,20,200,280);

    spike[0] = new Spike(120,600,200,600,160,540);
    spike[1] = new Spike(570,600,650,600,610,540);
    spike[2] = new Spike(300,500,380,500,340,440);

    flag[0] = new Flag(240,255);
    flag[1] = new Flag(540,255);
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
    flag[2] = new Flag(50,375);
  }
