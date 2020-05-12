'use strict'
//EJERCICIO 1
//PROGRAMA QUE PIDA DOS NUMEROS Y NOS DIGA CUAL ES MAYOR, EL MENOR Y SI SON IGUALES
//ADICIONALMENTE HACER QUE SOLO PERMITA EL INGRESO DE NUMEROS 
//SOLO NUMEROS Y MAYORES A 0
var numero1;
var numero2;
var mensaje = "";

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){ //LA FUNCION isNaN DEVUELVE UN VALOR TRUE SI EL VALOR NO ES NUMERICO, POR LO CUAL SE PIDE DE NUEVO.
    numero1 = parseInt(prompt("Introduce el primer numero", 0));
    numero2 = parseInt(prompt("Introduce el segundo numero", 0));
}

console.log("Ingresaste los siguientes numeros "+numero1+" "+numero2+" Ahora vamos a compararlos");

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