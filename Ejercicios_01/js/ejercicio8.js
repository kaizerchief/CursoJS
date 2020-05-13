'use strict'
//EJERCICIO 8
//HACER UNA CALLCULADORA
//-PIDA DOS NUMEROS POR PANTALLA
//-QUE VALIDE QUE SEAN NUMEROS
//-MOSTRAR EN EL CUERPO DE LA PAGINA, EN UNA ALERTA Y POR CONSOLA
//LOS RESULTADOS DE SUMAR, RESTAR, MULTIPLICAR Y DIVIDIR LOS DOS NUMEROS.
var n1, n2;
var suma, resta, div, multi;

//PEDIMOS LOS DOS NUMEROS Y VALIDAMOS QUUE SEAN NUMEROS
do{
    n1 = parseInt(prompt("Ingrese el primer numero", 1));
}while(isNaN(n1))
do{
    n2 = parseInt(prompt("Ingrese el segundo numero", 1));
}while(isNaN(n2))

//CALCULANDO DE UNA VEZ LOS RESULTADOS
suma = n1 + n2;
resta = n1 - n2;
div = n1 / n2;
multi = n1 * n2;

//MOSTRANDO LOS RESULTADOS EN EL CUERPO DE LA PAGINA
document.write("<h2>Los resultados de los numeros "+n1+" y "+n2+" son:</h2> <br>");
document.write(n1+"+"+n2+" = "+suma+"<br>");
document.write(n1+"-"+n2+" = "+resta+"<br>");
document.write(n1+"x"+n2+" = "+multi+"<br>");
document.write(n1+"/"+n2+" = "+div+"<br>");

//MOSTRANDO LOS RESULTADOS EN UN ALERT
alert("Los resultados de los numeros "+n1+" y "+n2+" son:\n"+n1+"+"+n2+" = "+suma+"\n"+n1+"-"+n2+" = "+resta+"\n"+n1+"x"+n2+" = "+multi+"\n"+n1+"/"+n2+" = "+div);

//MOSTRANDO LOS RESULTADO POR CONSOLA
console.log("Los resultados de los numeros "+n1+" y "+n2+" son:");
console.log(n1+"+"+n2+" = "+suma);
console.log(n1+"-"+n2+" = "+resta);
console.log(n1+"x"+n2+" = "+multi);
console.log(n1+"/"+n2+" = "+div);