function degradado() {
  var grad = ctx.createLinearGradient(0, 0, 0, 555);
  grad.addColorStop(0, "white");
  grad.addColorStop(1, "red");
  ctx.fillStyle = grad;
  ctx.fillRect(6, 6, 790, 590);
  ctx.stroke();
  ctx.fillStyle = "black";
  ctx.rect(0, 0, 800, 600);
  ctx.stroke();
}

function linea() {
  ctx.beginPath();
  ctx.lineWidth = 50;
  ctx.strokeStyle = "blue";
  ctx.moveTo(0, 0);
  ctx.lineTo(800, 600);
  ctx.stroke();
  ctx.closePath();
}

function circulo(color, relleno, ancho, x, y, radio) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.fillStyle = relleno;
  ctx.lineWidth = ancho;
  ctx.arc(x, y, radio, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function prohibido(color1, color2, radio){
  ctx.beginPath();
  ctx.fillStyle = color1;
  ctx.arc(400, 500, radio, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 20;
  ctx.strokeStyle = 'white';
  ctx.rect(350, 490,100, 20);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function triangulo(){
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'black';
  ctx.moveTo(400, 225);

  ctx.lineTo(350, 350);
  ctx.lineTo(450, 350);
  ctx.lineTo(400, 225);
  ctx.stroke();

  ctx.closePath();
}