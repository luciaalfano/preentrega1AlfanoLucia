let nombre = prompt("Ingrese su nombre completo");
let edad = prompt("Ingrese su edad")

if (edad >= 18) {
    alert("¡Bienvenido!")
  
} 
while (edad<=18){
    alert("Usted no posee permisos para ingresar");
    console.log ("Menor de edad")
    {}

let ingresoMensual = Number(prompt("Por favor, indique su ingreso mensual neto"));
let ingresoAnual = Number(prompt("Por favor, indique sus ingresos anuales"));

function sumar (ingresoMensual, ingresoAnual) {
    return ingresoMensual + ingresoAnual;
}

let resultado = sumar;

console.log(resultado)

while(ingresoMensual >= 500000){
    alert("Usted tiene una cuenta Gold!");
    console.log("Usuario válido GOLD")
    break;
    }

while(ingresoAnual >= 800000){
    alert("Usted tiene una cuenta Platinum!");
    console.log("Usuario válido Platinum")
    break;
    }

if(ingresoMensual < 500000){
    alert("Usted posee una cuenta basica");
    console.log("Usuario valido BASICO")

} else{
    alert("Error")
}
    
