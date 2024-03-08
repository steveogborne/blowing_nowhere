var points = [];
var rmax = 190;
var rinc = 10;
var ainc = 10;

// Circumference = 2PI*r
// ainc = 2*PI * circumference / spacing

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  // Create points

  for (let r = rinc; r <= rmax; r += rinc){
    ainc = floor(360 * rinc / (2 * PI * r));
    for (let a = 0; a < 360; a+=ainc){
      dot = createVector(r*cos(a), r*sin(a));
      points.push(dot);
    }
  }
}

function draw() {
  background(0);
  frameRate(10);
  // Translate origin to centre of screen
  translate(width/2, height/2);

  // Draw style
  ellipseMode(CENTER);
  colorMode(HSB);
  strokeWeight(1);
  noFill();

  // Draw points
  for (p of points) {
    colorMode(HSB);
    stroke(random(0,255));
    ellipse(p.x, p.y, 5, 5);
  }

  //noLoop();
}
