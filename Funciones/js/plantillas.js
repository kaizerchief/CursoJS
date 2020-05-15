'use strict'
//PLANTILLAS DE TEXTO
var nombre = prompt("Introduce tu nombre");
var apellido = prompt("Introduce tu apellido");
var texto = "Mi nombre es: "+nombre+" y mis apellidos son "+apellido;//METODO TRADICIONAL
console.log(texto);

//PLANTILLA DE TEXTO A DOCUMENT.WRITE
texto = `
    <h1>Hola que tal</h1>
    <h3>Mi Nombre es: ${nombre}</h3>
    <h3>Mi Apellido es: ${apellido}</h3>
`;

document.write(texto);