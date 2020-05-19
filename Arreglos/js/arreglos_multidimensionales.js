'use strict'
//ARREGLOS MULTIDIMENSIONALES
var categorias = ["Accion", "Terror", "Comedia"];
var peliculas = ["Toy Story", "El Conjuro", "El Camino"];
var elemento;

var cine = [categorias, peliculas];

/*
//IMPRESION DEL ARRAY MULTIDIMENSIONAL COMPLETO
console.log(cine);

//IMPRESION DE ELEMENTOS ESPECIFICOS
console.log(cine[1][2]);
*/

//AÑADIR UN ELEMENTO A UN ARRAY
peliculas.push("Batman");

do{
    elemento = prompt("Introduce nombres de peliculas al arreglo \n Escribe SALIR al terminar.");
    

}while(elemento != "SALIR")

console.log(peliculas);