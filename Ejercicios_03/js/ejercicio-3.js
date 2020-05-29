'use strict'
window.addEventListener("load", function(){
    
    var formulario = document.querySelector("#formulario");

    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function(){
        console.log("BOTON PRESIONADO!");
        
        box_dashed.style.display = "block";

        var nombre = document.querySelector("#nombre").value; 
        var apellido = document.querySelector("#apellido").value;
        var edad = document.querySelector("#edad").value;

        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellido = document.querySelector("#p_apellido span");
        var p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellido.innerHTML = apellido;
        p_edad.innerHTML = edad;
    });
});