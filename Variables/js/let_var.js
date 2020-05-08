'use strict'

//PRUEBAS DE LET Y VAR

//Pruebas con Var
var numero = 40;
console.log(numero);//vale 40

if(true){
    var numero = 50;
    console.log(numero); //vale 50
}

console.log(numero); //vale 50

//Pruebas con Let
var texto = "Curso JS";
console.log(texto);// vale Curso JS

if(true){
    let texto = "Curso de JS modificado";
    console.log(texto); //Valor Curso JS modificado
}

console.log(texto); //valor Curso JS