'use strict'
//OPERADORES
//+ - * / %
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 - numero2;
alert("El resultado de la operación es "+operacion);

//TIPOS DE DATOS
var numero_entero = 44;
var cadena_texto = "Hola que tal";
var booleano = true; //PUEDE SER TRUE, FALSE, 1 Y 0

//CONVERSION DE DATOS
var numero_falso = "33";
//SE  PUEDE USAR parseInt/parseFloat/Number() para convertir una variable string a number
console.log((Number(numero_falso));;
//SE PUEDE USAR String() para convertir de number a string

//DETERMINAR EL TIPO DE DATO DE UNA VARIABLE USANDO TYPEOF
console.log(typeof numero_falso);