'use strict'
//EJERCICIO 6
//HACER UN PROGRAMA QUE NOS DIGA SI UN NUMERO ES PAR O IMPAR
//1. Ventana prompt
//2. Que valide si el valor ingresado es numerico.
var numero;

do{
    numero = parseInt(prompt("Ingrese un numero", 0));
}while(isNaN(numero))

if(numero%2 == 0){
    console.log("El numero "+numero+" es par.");
}else{
    console.log("El numero "+numero+" es impar.");
}