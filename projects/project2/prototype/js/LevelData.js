//stores level data

"use strict"
  function clearLevel(){
    floor = [];
    player = [];
    flag = [];
    console.log(`${floor.length}`);
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
    

  }
