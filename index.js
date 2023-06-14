var NumeroRandom1 = Math.floor(Math.random() * 6) +1;
var NumeroRandom2 = Math.floor(Math.random() * 6) +1;

var imagenes1 = "images/dice" + NumeroRandom1 +".png";
var imagenes2 = "images/dice" + NumeroRandom2 +".png";

document.querySelector(".dice .img1").setAttribute("src", imagenes1);
document.querySelector(".dice .img2").setAttribute("src", imagenes2);

if (NumeroRandom1 > NumeroRandom2){
    document.querySelector("h1").textContent = "¡ Ganó el jugador 1 !";

} else if (NumeroRandom2 > NumeroRandom1){
    document.querySelector("h1").textContent = "¡ Ganó el jugador 2 !";

} else{
    document.querySelector("h1").textContent = "¡ Empate !";
}