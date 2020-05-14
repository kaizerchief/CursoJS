'use strict'
//PARAMETROS REST Y SPREAD
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){//PARAMETRO REST CON ... AL FINAL
    console.log("Fruta 1: "+fruta1);
    console.log("Fruta 2: "+fruta2);
    console.log(resto_de_frutas);//PARAMETRO REST
}

listadoFrutas("Naranja", "Manzana", "Coco", "Pera", "Melon");

//SPREAD
var frutas = ["Naranja", "Manzana"]; //DECLARAMOS UN ARRAY PARA EL SPREAD

listadoFrutas(...frutas);//INTEGRACION DE PARAMETRO SPREAD