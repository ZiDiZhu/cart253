/**************************************************
Template p5 project
Pippin Barr

experiment with functions with parameter / return value
**************************************************/

// setup()
//
// Description of setup() goes here.

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

  background(0);

}

function toCelsius(farenheit){
  let celsius = (farenheit - 32) * 5/9;
  return celsius;
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
