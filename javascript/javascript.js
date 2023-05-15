const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const img = document.getElementById("GERALDO");
//retangulo
ctx.fillStyle = "#FF0000"
ctx.fillRect (225, 0, 150, 75);
//Circulo
ctx.beginPath();
ctx.arc(300, 135, 50, 0, 2 * Math.PI);
ctx.stroke();

//Linha
ctx.moveTo(370, 220);
ctx.lineTo(225, 220);
ctx.stroke();



//linha curva
ctx.beginPath();
ctx.moveTo(370,280);
ctx.quadraticCurveTo(390,340,270,280);
ctx.stroke();




//Imagem
ctx.moveTo(10, 10);
ctx.drawImage(img, 5, 5);