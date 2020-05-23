'use strict'

//DOM - DOCUMENT OBJECT MODEL

//CONSEGUIR ELEMENTOS CON UN ID CONCRETO
/*
function cambiaColor(color){
    caja.style.background = color;
}

var caja = document.getElementById("micaja"); //METODO TRADICIONAL
var caja2 = document.querySelector("#micaja"); //METODO CON QUERY SELECTOR

caja.innerHTML = "Este es el texto que cambie";
caja.style.background = "red";
caja.style.padding = "20px";
caja2.style.color = "White";

console.log(caja);
*/

//CONSEGUIR ELEMENTOS POR SU ETIQUETA
var todosLosDivs = document.getElementsByTagName('div');//CREA UN ARRAY CON TODOS LOS DIVS
var seccion = document.querySelector("#miseccion");//ASIGNO UNA SECTION HTML A LA VARIABLE
var contenido = todosLosDivs[2].textContent;//PARA SACAR DATA ESPECIFICA DEL ARRAY CREADO
var hr = document.createElement("hr");

var valor;
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == "string"){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);;
    }
};

seccion.append(hr);

console.log(contenido);

//CONSEGUIR ELEMENTOS POR SU CLASE
var divRojo = document.getElementsByClassName("rojo");
var divAmarillo = document.getElementsByClassName("amarillo");
/*
SE DEBE CAMBIAR UNO A UNO USANDO LA POSICION DEL DIV DENTRO DEL ARRAY, DADO QUE
UNA PROPIEDAD NO PUEDE SER ALTERADA EN TODOS SUS ELEMENTOS SIN USAR UN BUCLE.
*/
divRojo[0].style.background = "red";
divAmarillo[0].style.background = "yellow";

//QUERY SELECTOR
//EL QUERY SELECTO RECOGE UN SOLO VALOR, NO CREA ARRAYS
var id = document.querySelector("#encabezado");

