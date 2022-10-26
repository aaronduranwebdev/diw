var contadorZubats = 0,
  contadorGastlys = 0,
  contadorGrimers = 0;
var puntosZubat = 0,
  puntosGastly = 0,
  puntosGrimer = 0;
const mapaZubats = new Map();
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getClickPosition(e) {
  var xPosicion = e.clientX;
  var yPosicion = e.clientY;

  //console.log(xPosicion, yPosicion);
}

function dibujarZubat() {
  var posX = getRandomIntInclusive(0, 800),
    posY = getRandomIntInclusive(0, 600);
  var img = new Image();
  img.src = "img/gastly.png";
  contadorZubats++;
  img.id = "zubat" + contadorZubats;
  mapaZubats.set(img.id, [posX, posY]);
  ctx.drawImage(img, posX, posY, 50, 50);
  //console.log(img.id);
}
function matarBicho(e) {
  var xPosicion = e.clientX;
  var yPosicion = e.clientY;
  ctx.clearRect(xPosicion - 32, yPosicion - 32, 35,35);
  puntosZubat++;
  document.getElementById('puntos').innerHTML = puntosZubat;
}
function jugar() {
  dibujarZubat();
}
