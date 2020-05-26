'use strict'
//TIMERS
window.addEventListener("load", function(){
    var boton = document.querySelector("#boton");
    /*
    var tiempo = setInterval(function(){
        console.log("Set Interval ejecutado");
        if(boton.style.background == "green"){
            boton.style.background = "red";
            boton.style.fontSize = "50px";;
        }else{
            boton.style.background = "green";
            boton.style.fontSize = "25px";
        }
    }, 3000); //DE ULTIMO SE COLOCA EL TIEMPO CON EL QUE SE EJECUTARA AL SETINTERVAL

    */
   //SETTIMEOUT - SE EJECUTA UNA SOLA VEZ
   var tiempo = setTimeout(function(){
    console.log("Set TimeOut ejecutado");
    if(boton.style.background == "green"){
        boton.style.background = "red";
        boton.style.fontSize = "50px";;
    }else{
        boton.style.background = "green";
        boton.style.fontSize = "25px";
    }
}, 3000);
});