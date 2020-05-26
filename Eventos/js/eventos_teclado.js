'use strict'
//EVENTO LOAD, PARA ASEGURARSE DE CARGAR EL SCRIPT UNA VEZ QUE LA PAGINA TERMINO DE CARGAR TODOS SUS ELEMENTOS
window.addEventListener('load', () => {
    //EVENTOS DE TECLADO
    var boton = document.querySelector("#boton");
    var input = document.querySelector("#campo_nombre");

    //FOCUS
    input.addEventListener('focus', function(){
        console.log("Estas dentro del input");
    });

    //BLUR
    input.addEventListener('blur', function(){
        console.log("Estas fuera del input");
    });

    //KEYDOWN
    input.addEventListener('keydown', function(){
        console.log("Estas pulsando la tecla ", String.fromCharCode(event.keyCode));
    });

    //KEYPRESS
    input.addEventListener('keypress', function(){
        console.log("Tecla Presionada ", String.fromCharCode(event.keyCode));
    });

    //KEYUP
    input.addEventListener('keyup', function(){
        console.log("Tecla soltada ", String.fromCharCode(event.keyCode));
    });

}); //end load