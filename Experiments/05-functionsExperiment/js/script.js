/**************************************************
5 - functions
zidizidizidi

experiment with functions with parameter / return value
strings
**************************************************/

// setup()
//
// Description of setup() goes here.

let text1 = {
    string: "this is a string",
    x:250,
    y:0,
    vy:2
};

let state = `state1`;

let text2 ={
  string:'this is also "a string"'
} ;
let text3 = `here's a "template string!"`;

let hotCelsius;

function setup() {
  createCanvas(500,500);
      checkifHot();

      // let coldCelsius = toCelsius(10);
      // console.log(`10F or ${coldCelsius} is cold`);

}

// draw()
//
// Description of draw() goes here.
function draw() {

  background(120);

  if(state === `state1`){
      text1.y +=text1.vy;
      text(text1.string,text1.x,text1.y);
  }
  else if (state === `state2`){

      text1.y +=text1.vy;
      text(text2.string,text1.x,text1.y);
  }
  else if (state ===`state3`){
      text1.y +=text1.vy;
      text(text3,text1.x,text1.y);
  }

  if(text1.y > height){
    reset();
  }
}

function toCelsius(farenheit){
  let celsius = (farenheit - 32) * 5/9;
  return celsius;
}

function keyPressed(){
  if (state === `state1`){
    state =  `state2`;
      reset();
  }
  else if (state === `state2` ){
    state =  `state3`;
      reset();
  }
  else  if (state === `state3` ){
    state =  `state1`;
      reset();
  }
}

function reset(){
  text1.x = 250 ;
  text1.y = 0;
}

function checkifHot(){

  hotCelsius = toCelsius(100);

  console.log(`${hotCelsius}`);

  let isHot = temperatureIsHot();
  if(isHot){
    console.log('thats hot');
  }else{
    console.log(`not hot`);
  }
}

function temperatureIsHot(){

  if(hotCelsius > 33){
    return true;
  } else{
    return false;
  }
}
