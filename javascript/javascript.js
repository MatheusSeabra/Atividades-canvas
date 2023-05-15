const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const img = document.getElementById("GERALDO");

//quadrado
ctx.fillStyle = "pink";
ctx.fillRect(0, 180, 150, 150);
//retangulo
ctx.fillStyle = "#FF0000"
ctx.fillRect (0, 100, 150, 75);
//Circulo
ctx.beginPath();
ctx.arc(45, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
//Linha
ctx.moveTo(120, 75);
ctx.lineTo(150, 70);
ctx.stroke();
//linha curva
ctx.beginPath();
ctx.moveTo(100,100);
ctx.quadraticCurveTo(90,125,25,70);
ctx.quadraticCurveTo(65,100,50,100);
ctx.quadraticCurveTo(90,120,30,125);
ctx.quadraticCurveTo(100,120,65,100);
ctx.quadraticCurveTo(105,100,125,62.5);
ctx.quadraticCurveTo(125,25,75,25);
ctx.stroke();
//Triangulo
ctx.beginPath();
ctx.moveTo(150 ,75);
ctx.lineTo(100,75);
ctx.lineTo(100,25); 
ctx.fill();
//Imagem
ctx.drawImage(img, 10, 10);