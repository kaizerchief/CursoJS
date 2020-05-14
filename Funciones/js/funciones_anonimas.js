'use strict'
//FUNCIONES ANONIMAS
//ES UNA FUNCION SIN NOMBRE Y SE ALMACENA EN UNA VARIABLE
var pelicula = function(nombre){
    return "La pelicula es: "+nombre;
}
console.log(pelicula("Batman"));

//CALLBACK DE FUNCIONES
function sumame(n1, n2, sumaYmuestra, sumaPorDos){
    var sumar = n1 + n2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5, 7, function(dato){ //ASI SE INTEGRA LA FUNCION ANONIMA A OTRA FUNCION HACIENDO CALLBACK
    console.log("La suma es: "+dato);
},
dato => { //ASI SE HACE UNA FUNCION DE FLECHA
    console.log("La suma por dos es: "+(dato*2));
})