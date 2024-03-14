let nombre = prompt("Ingrese su nombre completo");
let edad = prompt("Ingrese su edad");

if (edad >= 18) {
    alert("¡Bienvenido!");
} else {
    do {
        alert("Usted no posee permisos para ingresar");
        console.log("Menor de edad");
        edad = prompt("Ingrese su edad"); // Solicita nuevamente la edad hasta que sea mayor o igual a 18
    } while (edad < 18);
}

let ingresoMensual = Number(prompt("Por favor, indique su ingreso mensual neto"));
if (ingresoMensual >= 500000) {
    alert("Usted tiene una cuenta Gold!");
    console.log("Usuario válido GOLD");
} else if (ingresoMensual >= 300000) {
    alert("Usted tiene una cuenta Platinum!");
    console.log("Usuario válido Platinum");
} else {
    alert("Usted posee una cuenta básica");
    console.log("Usuario válido BÁSICO");
}