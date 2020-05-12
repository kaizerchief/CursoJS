'use strict'
//EJERCICIO 2
//UTILZANDO UN BUCLE, CALCULAR SUMA Y LA MEDIA DE LOS NUMEROS INTRODUCIDOS
//HASTA INTRODUCIR UN NUMERO NEGATIVO Y AHI MOSTRAR EL RESULTADO
var numero;
var esNumero = false;
var suma = 0;
var media;
var cantidad = 0;

//BUCLE QUE PIDE LOS NUMEROS
do{
    while(esNumero == false){//USAMOS UN BUCLE WHILE PARA SOLO PERMITIR EL INGRESO DE NUMEROS Y NO CARACTERES O SIMBOLOS.
        numero = parseInt(prompt("Ingresa un numero Cantidad: "+cantidad, 0));
        if(isNaN(numero) == false){
            esNumero = true;
        }
    }
    if(numero >= 0){//FILTRO PARA NO CONTAR EL NUMERO NEGATIVO EN EL CALCULO FINAL.
        suma += numero;
        cantidad++;
    }
    esNumero = false;//RETORNAMOS EL VALOR A FALSE PARA PODER REPETIR EL CICLO
}while(numero >= 0)

//CALCULAMOS LA MEDIA
media = suma / cantidad;

//MOSTRAMOS EL RESULTADO FINAL
console.log("La suma de los numeros ingresados es: "+suma);
console.log("La media de los numero es: "+media);
console.log("La cantidad de numeros ingresados fue: "+cantidad);
console.log("El numero negativo ingresado fue: "+numero);

