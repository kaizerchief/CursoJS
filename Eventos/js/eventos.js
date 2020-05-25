'use strict'
//EVENTOS DEL RATON
//ONCLICK USANDO HTML - NO RECOMENDADO
var boton = document.querySelector("#boton");

function cambiarColor(){

    var bg = boton.style.background;
    if(bg == "green"){
        boton.style.background = "red";
    }else{
        boton.style.background = "green";
    }
    boton.style.padding ="10px";
    boton.style.border = "1px solid #ccc";
    return true;
}

//ADDEVENTLISTENER - RECOMENDADO
var boton1 = document.querySelector("#boton1");
boton1.addEventListener('click', function(){
    cambiarColor();
});

//MOUSE OVER
boton1.addEventListener('mouseover', function(){
    boton1.style.background = "#ccc";
});

//MOUSEOUT
boton1.addEventListener('mouseout', function(){
    boton1.style.background = "black";
});
