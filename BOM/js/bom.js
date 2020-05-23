'use strict' 
//BROWSER OBJECT MODEL

//DATOS SOBRE EL BROWSER
function getBOM(){
    console.log("La resolución interna del browser es: "+window.innerWidth+"x"+window.innerHeight);
    console.log("La resolución de la pantalla es: "+screen.width+"x"+screen.height);
    console.log("La url actual es: "+window.location.href);
}

getBOM();

//REDERIGIR A URL
function redirect(url){
    alert("vamos a google!");
    window.location.href = url;
}

//redirect("https://google.com");

//ABRIR NUEVAS PESTAÑAS
function pestana(){
    alert("Abrire una pestaña nueva!");
    window.open("https://google.com"); 
}

pestana();