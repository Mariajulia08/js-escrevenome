let cor;

let posicaoHorizontal;

let posicaoVertical;


function setup() {
  
  
  createCanvas(400, 400);
  background(color(100, 0, 0));
  cor = "color(random(0, 225), random(0, 225), randow(0, 225))";
  posicaoHorizontal = 200;
  posicaoVertical = 200;
  }

function draw() {
  stroke("blue");
  fill("#2196F3");

  // console.log(mouseIsPressed)

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}