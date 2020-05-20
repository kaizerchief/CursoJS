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
peliculas.push("Batman");//METODO DIRECTO

do{//CON UN BUCLE
    elemento = prompt("Introduce nombres de peliculas al arreglo \n Escribe SALIR al terminar.");
    if(elemento.toUpperCase() != "SALIR"){
        peliculas.push(elemento);
    }else{
        alert("Saliendo...");
    }

}while(elemento.toUpperCase() != "SALIR")

//ELEMINAR EL ULTIMO ELEMENTO INGRESADO
peliculas.pop();

//ELIMINAR UN ELEMENTO ESPECIFICO
var indice = peliculas.indexOf("El Conjuro");
if(indice > -1){
    peliculas.splice(indice, 1);
}

//CONVERTIR UN ARRAY A UN STRING
var peliculas_string = peliculas.join();

//CONVERTIR STRING A ARRAY
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

//ORDENAR UN ARRAY
console.log("Arreglo sin ordenar "+peliculas);
peliculas.sort();//ORDEN ALFABETICO
console.log("Arreglo ordenado alfabeticamente "+peliculas);
peliculas.reverse();//ORDEN INVERTIDO
console.log("Arreglo ordenado al reves "+peliculas);

//RECORRER ARRAY USANDO FOR IN
for(let indice in peliculas){
    console.log(indice+" - "+peliculas[indice]);
}

console.log(peliculas);
console.log(peliculas_string);
console.log(cadena_array);

//BUSCAR DENTRO DE UN ARRAY
var busqueda = peliculas.find(pelicula => pelicula == "Batman"); //USANDO UNA FUNCION DE FLECHA ES MUCHISIMO MAS EFICIENTE
//SE PUEDE USAR findIndex PARA DETERMINAR EL INDICE DE LA BUSQUEDA
console.log(busqueda);

//BUSQUEDA NUMERICA
var numeros = [10, 20, 30, 80, 7];
var busqueda2 = numeros.some(valor => valor < 10);//RETORNA UN VALOR BOOLEANO
console.log(busqueda2);//IMPRESION DEL VALOR BOOLEANO DE LA FUNCION DE FLECHA