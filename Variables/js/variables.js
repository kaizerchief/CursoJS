'use strict' //ACTIVACION DE MODO ESTRICTO

//INICIO DE VARIABLES
//SE PUEDE USAR LET Y VAR, LET ES NATIVO DE TYPESCRIPT Y VAR DE JAVASCRIPT
//LET CREA VARIABLES SOLO PARA EL BLOQUE DONDE ESTA CONTENIDO, MIENTRAS QUE VAR CREA VARIABLES GLOBALES Y LOCALES.
var pais = "Venezuela";
var continente = "Suramerica";
var antiguedad =  2020;
var pais_y_continente = pais + " " + continente;

//IMPRESION DE LOS VALORES DE LAS VARIABLES
console.log(pais, continente, antiguedad);
alert(pais_y_continente);

//MODIFICACION DE LAS VARIABLES
pais = "Chile";
antiguedad = 2017;

//IMPRESION DE LAS MODIFICACIONES
console.log(pais, antiguedad);