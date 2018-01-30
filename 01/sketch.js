function setup() { 
  createCanvas(450, 600);
} 

function draw() { 
  background(255, 253, 238); //Fondo de la imagen
	strokeWeight (0.5); //Grosor de linea elipse
	fill (163, 163, 171) //Color de la elipse
	ellipse (43, 200, 85, 85); //elipse
 	
	strokeWeight (0.2); //grosor de linea triangulo p
	
	fill (255, 239, 245); // Color de triangulo rosa
	beginShape (); //triangulo rosa
	vertex (160, 50);
	vertex (40, 600);
	vertex (295, 600);
	vertex (160, 50);
	endShape (); // Triangulo rosa
	
	fill (255, 239,50); //Color triangulo amarillo
	beginShape (); //triangulo amarillo
	vertex (245, 170);
	vertex (175, 272);
	vertex (295, 270);
	vertex (245, 170);
	endShape (); // Triangulo amarillo
	
	strokeWeight (6); //grosor de lineas
	line (160, 50, 40, 600); // linea
	line (160, 50, 295, 600); // linea
	strokeWeight (3); // grosor de linea
	line (0,280,380, 550); //linea
	strokeWeight (2.5); // grosor de linea
	line (0, 380, 380, 550); // linea
	
	fill (124, 155, 150,100); // color de circulo verde
	strokeWeight (0); // sin borde 
	ellipse ( 160, 550, 90, 90) // circulo verde
	
	strokeWeight (1.5); // grosor de circulo rosa
	fill (255, 239, 245); // color circulo rosa
	ellipse (160, 550, 60, 60); // circulo rosa
	
	fill (255, 253, 238); //Color arco
  arc(430, 170, 80, 80, TWO_PI, TWO_PI); // Arco
	
	strokeWeight (3); // grosor de linea 
	line (400, 0, 400, 395); // linea 
	line (410, 0, 410, 395); // linea
	
	strokeWeight (2); // grosor de linea
	line (360, 90, 435, 89); //linea
	line (362, 95, 433, 94); // linea
	
  strokeWeight (1.6); // grosor de linea
	line (362, 360, 435, 358); // linea
	line (363, 365, 435, 363); // linea
	line (364, 370, 435, 368); // linea
	
	strokeWeight (3); // grosor de linea 
	fill (255, 253, 238); //color circulo 
	ellipse (315,315, 85, 85); // circulo
	
	strokeWeight (0.4); // grosor de la linea
	fill (255, 253, 238); // Color de circulo 
	ellipse (315,315, 80, 80); //Circulo
	
	strokeWeight (0.4); // grosor de la linea
	fill (255, 253, 238); // color del circulo
	ellipse (315,315, 77, 77);// circulo
	
  strokeWeight (0.4); // grosor de la linea
	fill (255, 253, 238); //color del circulo 
	ellipse (315,315, 74, 74);	 // circulo
	
	strokeWeight (0.4); // Grosor de la linea
	fill (255, 253, 238); // color del circulo
	ellipse (315,315, 70, 70); // Circulo
	
	strokeWeight (0.4); // grosor de la linea
	fill (255, 253, 238); // color del circulo
	ellipse (315,315, 68, 68); // circulo
	
  fill (75, 89, 171); // Color circulo azul
	strokeWeight (0.4); // grosor de la linea
	ellipse (315, 315, 60, 60); // circulo azul
	
	strokeWeight (0.4)
  fill (241, 120,154); //Color rectangulo fucsia
	beginShape (); // Rectangulo fucsia
	vertex (450, 510);
	vertex (410, 510);
	vertex (410, 600);
	vertex (450, 600);
	endShape (); // Rectangulo fucsia
	
	strokeWeight (3.5); //grosor de linea 
	line (435, 571, 410, 600); //linea
	strokeWeight (2); //grosor de linea
	line (450, 582, 435, 600); // linea
	
}
