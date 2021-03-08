//let value = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if(mouseIsPressed){
  stroke(mouseX,mouseY,150);
  line(mouseX,mouseY, 85, 70);
  }
  else{
  fill(mouseX,mouseY,150);
  noStroke();
  circle(mouseX,mouseY,10);
  }
}

/*
function mouseClicked() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
*/