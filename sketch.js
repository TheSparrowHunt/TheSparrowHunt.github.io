numOptions = 1;
sketchChoice = Math.floor(Math.random()*numOptions);
console.log(sketchChoice);
switch(sketchChoice){
  case 0:
    presetupZero();
  break;
  case 1:
    presetupOne();
  break;
  default:
    presetupZero();
}

function setup() {
  var canvas = createCanvas(128, 128);

  // Move the canvas so it's inside our <div>.
  canvas.parent('p5js');

  smooth(8);

  switch(sketchChoice){
    case 0:
      setupZero();
    break;
    case 1:
      setupOne();
    break;
    default:
      setupZero();
  }
}

function draw() {
  clear();
  switch(sketchChoice){
    case 0:
      drawZero();
    break;
    case 1:
      drawOne();
    break;
    default:
      drawZero();
  }
}

//SKETCH ZERO
function presetupZero(){
  points = new Array;
  numPoints = 200;
}


function setupZero(){
  stroke('#E9F1F7');
  strokeWeight(5);
  fill('#E9F1F7');

  points = recalculatePoints(numPoints);
}

function drawZero(){
  points = recalculatePoints(numPoints);
  for(var i = 0; i < numPoints; i++){
    push();
      translate(width/2, height/2);
      //rotate((frameCount/100.0));
      line(points[i].x, points[i].y, points[(i+1)%numPoints].x, points[(i+1)%numPoints].y)
      line(0.0, 0.0, points[i].x, points[i].y);
    pop();
  }
}

//FUCNTIONS MADE FOR SKETCH ZERO
function recalculatePoints(_size){
  var tempArray = new Array;
  for(var i = 0; i < _size; i++){
    var angle = map(i, 0.0, float(_size), 0.0, TWO_PI);
    var variance = 10*cos(10*(i/_size)*TWO_PI - frameCount/10.0);
    //variance *= step(variance, 0);
    var size = 50+variance;
    size *= sin((i/_size)*2*TWO_PI);
    var vec = createVector(angle, size);
    vec = polarToCartesian(vec);
    tempArray[i] = vec;
  }
  return tempArray;
}

function polarToCartesian(_in){
  var _out = createVector(0,0);
  _out.x = _in.y * cos(_in.x);
  _out.y = _in.y * sin(_in.x);
  return _out;
}

function step(_variable, threshold){
  if(_variable >= threshold){
    return 1.0;
  }
  return 0.0;
}

//SKETCH ONE
function presetupOne(){

}

function setupOne(){
  stroke('#E9F1F7');
  strokeWeight(5);
  fill('#E9F1F7');
}

function drawOne(){
  rect(0,0,width,height);
}
