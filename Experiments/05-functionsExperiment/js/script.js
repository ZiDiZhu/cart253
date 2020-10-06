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
    string: "'this' is a \"string\"",
    x:250,
    y:250

};
let text2 = 'this is also "a string"';
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

  textAlign(CENTER,CENTER);
  textSize(64);
  textStyle(ITALIC);
  fill(120,77,0);
  text(text1.string,text1.x,text1.y);
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
