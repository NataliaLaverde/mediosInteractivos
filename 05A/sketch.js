var hora;
var horamapeado;
var minuto;
var minutomapeado;
var segundo;
var segundomapeado;



function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

}

function draw() {
  background(148, 12, 103);
  hora = hour();
  minuto = minute();
  segundo = second();
  textStyle(BOLD);
  textSize(30);
  fill(255, 255, 255);
  text(hora, 85, 380);
  text(':', 150, 380);
  text(minuto, 185, 380);
  text(':', 250, 380);
  text(segundo, 285, 380);


  fill(56, 5, 39);
  push();
  stroke(255, 255, 255);
  ellipse(200, 200, 280, 280);
  pop();
  push();
  segundomapeado = map(segundo, 0, 59, 0, 359);
  translate(height / 2, width / 2);
  rotate(segundomapeado);
  stroke(255, 255, 255);
  line(0, 0, 0, -90);
  pop();

  push();
  minutomapeado = map(minuto, 0, 59, 0, 359);
  translate(height / 2, width / 2);
  rotate(minutomapeado);
  stroke(255, 255, 255);
  line(0, 0, 0, -100);
  pop();


  push();
  horamapeado = map(hora, 0, 11, 0, 359);
  translate(height / 2, width / 2);
  rotate(horamapeado);
  stroke(255, 255, 255);
  line(0, 0, 0, -110);
  pop();
   stroke(255, 255, 255);
ellipse(0, 0, 10, 10);
}