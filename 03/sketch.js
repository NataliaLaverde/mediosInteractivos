var posX=20;
var posY=10;
var an= 10;
var al= 10;
var rojo= 20;
var dir=1;
var limite1;
var limite2;
var azul=0;
function setup() { 
  createCanvas(850, 550);
	 background(220, 210, 30);
limite1=width/4;
  limite2= map(250,0, height, 0, width);
} 

function draw() { 
  frameRate(5) ;
	background(150, 210, posX);
	fill (rojo, 1, 200);
 rect (posX, 200, 50, 30);
	
	rojo=rojo+1;
	
	fill (rojo, 200, 200);
	ellipse (100, posY, 30, 30);
	posY=posY+2;
  rojo=rojo+2;
	
		fill (rojo, 100, 100);
	rect (50, 300,an, al);
	an=an+1;
  al=al+1;
  
 if(posX < limite1){
		posX = posX+5*dir;
	}
	if(posX >= limite1 && posX < limite2){
		posX = posX+1*dir;
	}
	if(posX >= limite2){
		posX = posX+3*dir;
	}
  
  
  if( posX>width-30 || posX<0){ 
    dir=-dir
    
  }
   
  if( posX<0){ 
    dir=1
    
  }
  
  if( posY> 550){
    posY=0
    
  }
  
  if( an> 100){ 
    an=0
    
  }
  if(frameCount<70){
	saveCanvas("miFlipbook" + frameCount, 'jpg');
  }

}


