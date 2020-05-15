'use strict'
//FUNCIONES, METODOS Y PROPIEDADES DE TEXTO
//TRANSFORMACION DE TEXTOS
var numero = 444;
var texto1 = "Hola como estas";
var texto2 = "Muy bien y tu";

var dato = numero.toString(); //CONVERSION DE NUMBER A STRING
console.log(typeof dato, dato);

dato = texto1.toUpperCase();//CONVERSION A MAYUSCULAS
console.log(typeof dato, dato);

dato =  texto2.toLowerCase();//CONVERSION A MINUSCULAS
console.log(typeof dato, dato);

//CALCULAR LONGITUD
var nombre = "EPALE";
var arreglo = ["hola", "epale", "hi"];
console.log(nombre.length);//IMPRIMIRA EL VALOR DE LA LONGITUD DE LA VARIABLE
console.log(arreglo.length);//IMPRIMIRA EL VALOR DE LA CANTIDAD DE ELEMENTOS DEL ARREGLO

//CONCATENAR, UNIR TEXTOS
var textoFinal = texto1 + texto2;//METODO TRADICIONAL
textoFinal = texto1.concat(" "+texto2);//USANDO EL METODO CONCAT, MAS EFICIENTE PARA BUCLES
