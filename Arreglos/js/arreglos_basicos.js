'use strict'
//ARRAYS, ARREGLOS, MATRICES
var nombres = ["Juan", "Pedro", "Jose"];

console.log(nombres);//IMPRESION DE TODO EL ARRAY
console.log(nombres[2]);//IMPRESION DE ELEMENTO ESPECIFICO POR SU POSICION

//PROPIEDADES DE ARRAYS
//LONGITUD
var posicion = parseInt(prompt("Que elemento deseas ver? ", 0));
if(posicion >= nombres.length){
    alert("Numero excede la longitud del arreglo, es "+nombres.length);
}else{
    alert("El nombre correspondiente a la posicion "+posicion+" del arreglo es "+nombres[posicion]);
}

//IMPRESION DE CADA ELEMENTO USANDO UN BUCLE
document.write("<h1>Nombres</h1>");
document.write("<ul>");

for(var i = 0 ; i < nombres.length ; i++){
    document.write("<li>"+nombres[i]+"</li>");
}

document.write("</ul>");