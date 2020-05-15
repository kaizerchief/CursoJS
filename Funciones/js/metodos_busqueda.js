'use strict'
//METODOS DE BUSQUEDA DE TEXTO
var texto = "Epale como estas mi amor, mi";

//BUSQUEDA DE PALABRAS, POR POSICION
var busqueda = texto.indexOf("estas");
console.log(busqueda);//IMPRIMIRA EL VALOR DE POSICION DONDE COMIENZA LA PALABRA BUSCADA

busqueda = texto.lastIndexOf("mi");
console.log(busqueda);//IMPRIMIRA EL VALOR DE POSICION DEL ULTIMO ELEMENTO QUE COINCIDA CON LA BUSQUEDA

busqueda = texto.search("estas");//METODO SIMILAR A INDEXOF, ES UN ALIAS.

busqueda = texto.match("estas");//DEVUELVE EL VALOR CON DATOS ESPECIFICOS, CON UN ARRAY.
console.log(busqueda);

busqueda = texto.substr(11,5);//EXTRAE UNA CANTIDAD DE CARACTERES 5 A PARTIR DE UN PUNTO 11
console.log(busqueda);

busqueda = texto.charAt(0);//EXTRAE EL CARACTER DE LA POSICION INDICADA
console.log(busqueda);

busqueda = texto.startsWith("Hola");//DEVUELVE UN VALOR BOOLEAN EN BASE A SI EL STRING COMIENZA CON LA BUSQUEDA.
console.log(busqueda);

busqueda = texto.endsWith("mi");//DEVUELVE UN VALOR BOOLEAN EN BASE A SI EL STRING TERMINA CON LA BUSQUEDA.
console.log(busqueda);

busqueda = texto.includes("amor");//DEVUELVE UN VALOR BOOLEAN EN BASE A SI EL STRING CONTIENE LA BUSQUEDA, ES CASESENSITIVE
console.log(busqueda);