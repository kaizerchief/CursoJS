'use strict'

//PROGRAMA QUE PIDA DOS NUMEROS Y NOS DIGA CUAL ES MAYOR, EL MENOR Y SI SON IGUALES
var numero1;
var numero2;
var mensaje = "";

numero1 = parseInt(prompt("Introduce el primer numero", 0));
numero2 = parseInt(prompt("Introduce el segundo numero", 0));

console.log("Ingresaste los siguientes numeros "+numero1+" "+numero2+" Ahora vamosa compararlos");

//COMENZAMOS A COMPARAR
if(numero1 == numero2){
    mensaje = "Los numeros ingresados son iguales.";
}else if(numero1 > numero2){
    mensaje = "El numero1 ("+numero1+") es mayor que el numero2 ("+numero2+").";
}else{
    mensaje = "El numero2 ("+numero2+") es mayor que el numero1 ("+numero1+").";
}

console.log("El resultado de la comparacion es:");
console.log(mensaje);