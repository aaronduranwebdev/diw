function dibujaBalon(x, y) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dibujaPala();
  var pelota1 = new Image();
  pelota1.src = "img/balon.png";
  /*var pelota2 = new Image();
  pelota2.src = "img/balon.png";*/
  x1 += dx1;
  y1 += dy1;
  //x2 += dx2;
  //y2 += dy2;
  if (x1 + dx1 < -5 || x1 + dx1 > canvas.width - 45) {
    dx1 = -dx1;
  }
  //if (y1 + dy1 < -5 || y1 + dy1 > canvas.height - 45) {
  if (y1 + dy1 < -5) {
    dy1 = -dy1;
  } else if (y1 + dy1 > canvas.height - 45) {
    muertes++;
    console.log(muertes);
    document.querySelector("#info").innerHTML = "Total de muertes: " + muertes;
    x1 = Math.floor((Math.random() * 850) / 2);
    y1 = Math.floor(Math.random() * 50);
  } else if (
    y1 + dy1 > canvas.height - 65 &&
    x1 - 55 < palax &&
    palax < x1 + 55
  ) {
    dy1 = -dy1;
  }
  /*if (x2 + dx2 < -5 || x2 + dx2 > canvas.width - 45) {
    dx2 = -dx2;
  }
  if (y2 + dy2 < -5 || y2 + dy2 > canvas.height - 45) {
    dy2 = -dy2;
  }
  cx = x1 - x2;
  cy = y1 - y2;
  if (Math.abs(cx)< 40 && Math.abs(cy) < 40){
    dx1 = -dx1;
    dy1 = -dy1;
    dx2 = -dx2;
    dy2 = -dy2;
  }*/
  ctx.drawImage(pelota1, x1, y1, 50, 50);
  // Movimiento de pala
  if (derpulsa && palax < canvas.width - palaw) {
    palax += 7;
  } else if (izqpulsa && palax > 0) {
    palax -= 7;
  }
  //ctx.drawImage(pelota2, x2, y2, 50, 50);
}
function dibujaPala() {
  ctx.beginPath();
  ctx.rect(palax, canvas.height - 20, palaw, palah);
  ctx.fillStyle = "#4123DD";
  ctx.fill();
  ctx.closePath();
}
function keyDownHandler(e) {
  if (e.keyCode == 39) {
    derpulsa = true;
  } else if (e.keyCode == 37) {
    izqpulsa = true;
  }
}
function keyUpHandler(e) {
  if (e.keyCode == 39) {
    derpulsa = false;
  } else if (e.keyCode == 37) {
    izqpulsa = false;
  }
}
