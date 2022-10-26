function dibujaBalon(x, y) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dibujaPala();
  dibujaTexto();
  var pelota1 = new Image();
  pelota1.src = "img/balon.png";
  x1 += dx1;
  y1 += dy1;
  if (x1 + dx1 < -5 || x1 + dx1 > canvas.width - 45) {
    dx1 = -dx1;
  }
  if (y1 + dy1 < -5) {
    dy1 = -dy1;
  } else if (y1 + dy1 > canvas.height - 45) {
    //muertes++;
    //console.log(muertes);
    //document.querySelector('#info').innerHTML = 'Total de muertes: ' + muertes;
    x1 = Math.floor((Math.random() * 850) / 2);
    y1 = Math.floor(Math.random() * 50);
    
  } else if (
    y1 + dy1 > canvas.height - 65 &&
    x1 - 55 < palax &&
    palax < x1 + 55
  ) {
    dy1 = -dy1;
    contador++;
  }
  
  ctx.drawImage(pelota1, x1, y1, 50, 50);

  if (derpulsa && palax < canvas.width - palaw) {
    palax += 7;
  } else if (izqpulsa && palax > 0) {
    palax -= 7;
  }

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

function dibujaTexto() {
  ctx1.clearRect(0, 0, canvas.width, canvas.height);
  ctx1.fillStyle = 'blue';
  ctx1.font = '25px serif';
  ctx1.textAlign = 'center';
  ctx1.strokeText('Fifa 2000', 600, 30);
  ctx1.textAlign = 'left';
  ctx1.fillText("Aciertos: " + contador, 100, 30);
}
