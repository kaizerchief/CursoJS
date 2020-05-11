'use strict'

var nombre = "Pepito Perez";
var edad = 40;

//CONDICIONAL IF
if(edad > 18 && edad < 30){
    console.log(nombre +" es mayor de edad pero menor de 30 años.");
}else{
    console.log(nombre  +" es menor de edad.");
}

//CONDICIONAL SWITCH
var imprime = "";

switch(edad)   {
    case 18:
         imprime = "Acabas de cumplir la mayoria de edad";
    break;
    case 25:
        imprime = "Ya eres un adulto.";
    break;
    case 40:
        imprime = "Tienes la crisis de los 40";
    break;
    case 70:
        imprime = "Ya eres un anciano.";
    break;
    default:
        imprime = "Tu edad es neutral";
    break;        
}
console.log(imprime);