'use strict'
//PARAMETROS EN FUNCIONES
var n1, n2;
n1 = 3;
n2 = 3;
/*
function calculadora(n1, n2){//LOS PARAMETROS SE INSERTAN EN LOS PARENTESIS DE LA FUNCION
    var suma = n1 + n2;
    var resta = n1 - n2;
    var multi = n1 * n2;
    var div = n1 / n2;

    return suma;
}

console.log(calculadora(n1, n2)); 

//PARAMETROS OPCIONALES
function calculadora(n1, n2, mostrar = false) {
    if(mostrar == false){
        console.log(n1+n2);
        console.log("me imprimo");
    }else{
        console.log(n1*n2);
        console.log("ya no me imprimo.")
    }
  }

  calculadora(n1, n2);
  calculadora(2, 2, true);
*/
//FUNCIONES DENTRO DE OTRAS
function porConsola(n1, n2){
    console.log(n1+n2);
}

function porAlert(n1, n2){
    alert(n1+n2);
}

function principal(opcion){
    if(opcion == 1){
        porConsola(n1, n2);
    }else if(opcion == 2){
        porAlert(n1, n2);
    }else{
        console.log("ERROR!, opcion incorrecta");
    }
}

principal(2);
