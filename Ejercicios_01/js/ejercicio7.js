'use strict'
//EJERCICIO 7
//MOSTRAR LA TABLA DE MULTIPLICAR DE UN NUMERO INTRODUCIDO POR PANTALLA.
var numero;

do{
    numero = parseInt(prompt("Ingrese el numero a calcular", 1));
}while(isNaN(numero))

console.log("La tabla de multiplicar del "+numero+" es:");
for(var i = 1 ; i <= 10 ; i++){
    console.log(i+"x"+numero+" = "+(i*numero));
}