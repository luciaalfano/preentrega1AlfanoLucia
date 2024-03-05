let rol = prompt ("Ingresar usuario");

function saludar(nombre) {
    console.log("¡Bienvenido ${nombre} a la web!");}


let nombre = " ";
while (nombre) {
nombre = prompt("Ingrese su nombre completo");   
}

const esPersona = true;
const tieneCajaDeAhorro = true;

if (esPersona && tieneCajaDeAhorro) {
    // Puede ingresar
    saludar(nombre);
} else {
    // Se necesita identificación
    console.log("Se necesita identificación");
}