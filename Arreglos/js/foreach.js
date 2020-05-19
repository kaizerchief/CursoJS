'use strict'
//METODO FOREACH
var cosas = ["pan", "jugo", "cereal", "zapato"];

document.write("<h1>Arreglo de Cosas</h1>");
document.write("<ul>");

cosas.forEach((elemento, indice)=> {
    document.write("<li>"+indice+" - "+elemento+"</li>");
})

document.write("</ul>");