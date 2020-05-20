'use strict'
//EJERCICIOS DE ARRAYS
/*
1.- PIDA 6 NUMEROS POR PANTALLA Y LOS META EN UN ARRAY
2.- MOSTRAR EL ARRAY ENTERO (TODOS SUS ELEMENTOS) EN EL
CUERPO DE LA PANTALLA Y LA CONSOLA
3.- ORDENAR Y MOSTRAR EL ARRAY
4.- INVERTIR SU ORDEN Y MOSTRARLO
5.- MOSTRAR CUANTOS ELEMENTOS TIENE EL ARRAY
6.- HACER UNA BUSQUEDA DE UN VALOR INTRODUCIDO POR EL USUARIO
Y QUE NOS DIGA SI ESTA EN EL ARRAY Y NOS DIGA SU POSICION.
*/

//CREAMOS EL ARRAY Y LAS VARIABLES A USAR
var arreglo = [];
var i = 0;
var elemento;
var busqueda;

//LLENAMOS EL ARREGLO
do{
    elemento = parseInt(prompt("Ingrese el numero de la posicion "+i+" de 5"));
    if(isNaN(elemento) == false){
        arreglo[i] = elemento;
        i++;
    }else{
        alert("ERROR! Debe ingresar solo numeros, intente de nuevo.");
    }
}while(i < 6)

//MOSTRAMOS EL ARREGLO EL EN CUERPO DE LA PAGINA
document.write("EL ARREGLO INGRESADO ES: <br>");
for(i = 0 ; i < 6 ; i++){
    document.write(arreglo[i]+" - ");
}

//MOSTRAMOS EL ARREGLO EN LA CONSOLA.
console.log("EL ARREGLO INGRESADO ES:");
console.log(arreglo);

//ORDENAMOS EL ARREGLO Y LO MOSTRAMOS POR CONSOLA.
arreglo.sort();
console.log("El arreglo ordenado de menor a mayor es: "+arreglo);

//ORDENAMOS EL ARREGLO EN REVERSA Y LO MOSTRAMOS POR CONSOLA.
arreglo.reverse();
console.log("El arreglo ordenado de mayor a menor es: "+arreglo);

//MOSTRAMOS CUANTOS ELEMENTOS TIENE EL ARREGLO
console.log("El arreglo tiene "+arreglo.length+" elementos");

//PEDIMOS UN ELEMENTO Y LO BUSCAMOS DENTRO DEL ARRAY
elemento = parseInt(prompt("Ingrese el numero a buscar", 0));
busqueda = arreglo.find(numero => numero == elemento);
if(busqueda == elemento){
    busqueda = arreglo.findIndex(numero => numero == elemento);
    alert("El numero "+elemento+" esta en la posicion "+busqueda+" del arreglo");
}else{
    alert("No se encontró el numero dentro del arreglo.");
}