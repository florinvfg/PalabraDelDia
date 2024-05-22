window.onload=function (){
    let palabra=['azul','amarillo','rojo','verde','turquesa','rosa','morado','malva','blanco','negro','maron','naranja','violeta','lila','beige'];
    let palabraSeleccionada=palabra[seleccionarPalabra()];
    console.log(palabraSeleccionada);
    crearBotones();
   let palabraAdivinar= palabraSeleccionada.split("");//se crea un array de letras de la palabra a adivinar
    console.log(palabraAdivinar.length);//conocemos cuantas letras tiene la palabra
crearCuadros(palabraAdivinar.length);


}
//funciones o metodos
function seleccionarPalabra(){
    let indiceSeleccionado=parseInt(Math.random()*14);
    return indiceSeleccionado;
}


// Función para crear botones para cada letra y agregarlos al div
function crearBotones() {
    // Obtener el div donde se agregan los botones
    let divLetras = document.getElementById("divLetras");

// Crear un array con todas las letras del alfabeto
    let letras = 'qwertyuiopasdfghjklñzxcvbnm'.split('');
    letras.forEach(function (letra,indice) {
        if (indice==10 || indice==20){
            let salto=document.createElement("br");
            divLetras.appendChild(salto);
        }
        var boton = document.createElement("button");
        boton.textContent = letra.toUpperCase(); // Convertir en mayúscula
        boton.value = letra.toUpperCase(); // Agregar el valor de la letra
        boton.classList.add("boton"); // Agregar la clase boton
        boton.classList.add("boton-letra"); // Agregar boton-letra
        divLetras.appendChild(boton); // Agregar el botón al div
        console.log(boton.value); // Imprimir el valor del botón en la consola

    });
}
function crearCuadros(longitud){
    let letrasAdivinar=document.querySelector(".letras");
    for (let i = 0; i < longitud; i++) {
        letrasAdivinar.classList.add("letras");

        let unaLetra=document.createElement("span");
        letrasAdivinar.appendChild(unaLetra);

    }

}