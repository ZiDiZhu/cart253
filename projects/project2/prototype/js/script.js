/**************************************************
Go to the Flag
Zidi Zhu

A basic platformer prototype
**************************************************/

"use strict"

let state = `testRoom`;

let player;

let spike = [];
let bullet= [];
let floor = [];

function setup() {

  createCanvas (800,600);

  player = new Player(375,555);

  floor[0] = new Floor(300,20,150,580);
}

function draw() {

  if(state = `testRoom`){
    background(0);
    player.display();
    player.move();
    player.jump();

    floor[0].display();
  }

}
