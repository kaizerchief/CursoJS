'use strict'
//EJERCICIO 5
//MOSTRAR TODOS LOS NUMEROS DIVISORES DE UN NUMERO INGRESADO POR EL USUARIO
var numero;
var esNumero = false;

while(esNumero == false){
    numero = parseInt(prompt("Ingrese el numero a calcular", 1));
    if(isNaN(numero) == false){
        esNumero = true;
    }else{
        alert("Error! debe ser un valor numerico.");
    }
}

console.log("Los Divisores de "+numero+" son:");
for(var i = 1 ; i <= numero ; i++){
    if(numero%i == 0){
        console.log(i);
    }
}