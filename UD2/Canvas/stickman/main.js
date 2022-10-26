function circulo(color, relleno, ancho, x, y, radio, semiarco = 0) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.fillStyle = relleno;
  ctx.lineWidth = ancho;
  if (semiarco == 0) {
    ctx.arc(x, y, radio, 0, 2 * Math.PI);
  } else {
    ctx.arc(x, y, radio, 0, Math.PI);
  }
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}
function linea(x, y, posX, posY, ancho, color) {
  ctx.beginPath();
  ctx.lineWidth = ancho;
  ctx.strokeStyle = color;
  ctx.moveTo(x, y);
  ctx.lineTo(posX, posY);
  ctx.stroke();
  ctx.closePath();
}
function dibujarStickman() {
  circulo("white", "white", 1, 100, 50, 30);
  circulo("#c00", "", 3, 100, 50, 20, 1);
  circulo("", "red", 3, 90, 45, 3);
  circulo("", "red", 3, 110, 45, 3);
  // Tronco
  linea(canvas.width / 2, 80, canvas.width / 2, canvas.height - 80, 6, "white");
  // Brazos
  linea(canvas.width / 2, 90, canvas.width / 2 - 30, canvas.height / 2 - 10, 6, 'white');
  linea(canvas.width / 2, 90, canvas.width / 2 + 30, canvas.height / 2 - 10, 6, 'white');
  // Piernas
  linea(canvas.width / 2, canvas.height - 80, canvas.width / 2 - 30, canvas.height / 2 + 130, 6, 'white');
  linea(canvas.width / 2, canvas.height - 80, canvas.width / 2 + 30, canvas.height / 2 + 130, 6, 'white');
}

