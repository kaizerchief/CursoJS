'use strict'
//AMBITO DE LAS VARIABLES

function holaMundo(texto){
    var hola_mundo = "Texto dentro de funcion"; //VARIABLE LOCAL
    console.log(texto);
    console.log(numero.toString());//ACCEDIENDO A UNA VARIABLE GLOBAL DESDE DENTRO DE UNA FUNCION Y EL METODO TOSTRING CONVIERTE EL VALOR A STRING
}

var nuumero = 12;
var texto = "Hola mundo, soy una variable global"; //VARIABLE GLOBAL
holaMundo(texto);
console.log(hola_mundo);//DARA ERROR YA QUE LA VARIABLE ES LOCAL DE LA FUNCION Y POR ENDE NO ACCESIBLE.