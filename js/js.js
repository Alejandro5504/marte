function alerta() {

    alert("Star Citizen es un ambicioso MMORPG espacial en desarrollo que combina simulación de vuelo, combate, comercio, exploración y vida en un universo persistente y detallado. Los jugadores pueden pilotar naves, formar alianzas, enfrentarse en batallas o vivir como ciudadanos del cosmos en una experiencia multijugador masiva. Programado por Alejandro.");

} 

function terminar() {

self.close();

} 

function cambiarImagen() {

let astroSeleccionado = document.getElementById("astros").value;
console.log(astroSeleccionado);
document.getElementById("imagenQueCambia").src=astroSeleccionado;

}