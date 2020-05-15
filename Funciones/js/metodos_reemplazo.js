'use strict'
//METODOS DE REEMPLAZO DE TEXTO
var texto = "   Epale, mi amor";
console.log(texto);

var reemplazo = texto.replace("Epale", "Hola");//REEMPLAZA LA PALABRA BUSCADA POR LA DEFINIDA.
console.log(reemplazo);

reemplazo = texto.slice(7);//CORTA EL STRING HASTA LA POSICION INDICADA
console.log(reemplazo);

reemplazo = texto.split(" ");//DIVIDE LOS ELEMENTOS DE LA STRING Y LA CONVIERTE EN ARRAY
console.log(reemplazo);

reemplazo = texto.trim();//ELIMINA LOS ESPACIOS PREVIOS Y FINALES AL STRING.
console.log(reemplazo);

