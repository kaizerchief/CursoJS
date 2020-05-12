'use strict'
//EJERCICIO 3
//PEDIR DOS NUMEROS ENTEROS Y MOSTRAR TODOS LOS NUMEROS ENTEROS QUE EXISTEN ENTRE LOS DOS
var n1, n2; //DONDE  ALMACENAREMOOS LOS NUMEROS
var num1 = false , num2 = false;//DONDE DETERMINAREMOS SI SON VALORES NUMERICOS

//PEDIMOS LOS NUMEROS

while(num1 == false){
    n1 = parseInt(prompt("Ingrese el valor incial ", 0));
    if(isNaN(n1) == false){
        num1 = true;
    }else{
        alert("ERROR! Debe ser un valor numerico!");
    }              
}
while(num2 == false){
     n2 = parseInt(prompt("Ingrese el valor final ", 0));
    if(isNaN(n2) == false && n2 >= n1){//SE AGREGA UNA CONDICION PARA ASEGURAR QUE EL SEGUNDO VALOR SEA MAYOR AL PRIMERO.
         num2 = true;
     }else{
        alert("ERROR! Debe ser un valor numerico!");
    }
 }

console.log("El rango de "+n1 +" a "+n2 +" es:");
for(var i = (n1+1) ; i < n2 ;  i++){
    console.log(i);
}