var points = new Array;

function setup() {
  var canvas = createCanvas(150, 150);

  // Move the canvas so it's inside our <div>.
  canvas.parent('p5js');

  //background(255, 0, 200);
  //noStroke();
  smooth(8);
  noStroke();
  fill('#586F7C');


  for(var i = 0; i < 3; i++){
    var angle = map(i, 0.0, 3.0, 0.0, TWO_PI);
    var size = 10;
    var vec = createVector(angle, size);
    vec = polarToCartesian(vec);
    vec.x+=width/2;
    vec.y+=height/2;
    points[i] = vec;
  }
}

function draw() {
  clear();
  for(var i = 0; i < points.length; i++){
    points[i].x += 1-random(2);
    points[i].y += 1-random(2);
  }

  for(var i = 0; i < 1; i++){
      triangle(points[i].x, points[i].y, points[i+1].x, points[i+1].y, points[i+2].y, points[i+2].y);
  }

}

function polarToCartesian(_in){
  var _out = createVector(0,0);
  _out.x = _in.y * cos(_in.x);
  _out.y = _in.y * sin(_in.x);
  return _out;
}
