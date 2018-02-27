var hora;
var horamapeado;
var minuto;
var minutomapeado;
var segundo;
var segundomapeado;
var X = 30;
var Y = 30;

function setup() {
  createCanvas(480, 100);
  background (148, 12, 103);
  angleMode(DEGREES);

		
}

function draw() {
  background (148, 12, 103);
  hora = hour();
  minuto = minute();
  segundo = second();
  fill ( 255, 196, 225)
  rect (60, 53, X, Y);
  rect (90, 53, X, Y);
  rect (120,53, X, Y);
  rect (150, 53, X, Y);
  rect (180, 53, X, Y);
  rect (210, 53, X, Y);
  rect (240, 53, X, Y);
  rect (270, 53, X, Y);
  rect (300, 53, X, Y);
  rect (330, 53, X, Y);
  rect (360, 53, X, Y);
 
  
  textStyle(BOLD);
  textSize(15);
  fill(255, 255, 255);
  text('Day: whatever',340, 30);
  text('Month: Blink',190, 30);
  text('Year: 2018',50, 30);
  textSize(50);
  text('(',30, 80);
  text(')',405, 80);
  textSize(20);
  text('5',425, 50);
  push();
  fill(255, 238, 225);
  minutomapeado = map(minuto, 0, 59, 70, 380); 
  stroke (0, 0, 0);
  ellipse (minutomapeado, 68, 20, 20);
  pop();
  
  push();
  segundomapeado = map(segundo, 0, 59, 70, 380); 
  stroke (0, 0, 0);
  ellipse (segundomapeado, 68, 20, 20);
  pop();
  
  push();
  fill(255, 143, 200);
  horamapeado = map(hora, 0, 11, 70, 380); 
  stroke (0, 0, 0);
  ellipse (horamapeado, 68, 20, 20);
  pop();
}