window.onload = function () {
    let palabra = ['azul', 'amarillo', 'rojo', 'verde', 'turquesa', 'rosa', 'morado', 'malva', 'blanco', 'negro', 'maron', 'naranja', 'violeta', 'lila', 'beige'];
    // Array con 15 palabras diferentes
    let palabraSeleccionada = palabra[seleccionarPalabra()].toUpperCase();
    // Selecciona una palabra al azar del array
    console.log(palabraSeleccionada);
    // Imprime la palabra seleccionada en la consola
    crearBotones();
    // Llama a la función para crear los botones de letras
    let palabraAdivinar = palabraSeleccionada.split("");
    // Divide la palabra seleccionada en un array de letras individuales
    console.log(palabraAdivinar.length);
    // Imprime la longitud de la palabra (número de letras) en la consola
    crearCuadros(palabraAdivinar.length);
    // Llama a la función para crear cuadros en función de la longitud de la palabra
    comprobarLetraUser(palabraSeleccionada);
}

// Función para seleccionar una palabra al azar del array
function seleccionarPalabra() {
    let indiceSeleccionado = parseInt(Math.random() * 14);
    // Genera un índice aleatorio entre 0 y 14
    return indiceSeleccionado;
    // Devuelve el índice seleccionado
}

// Función para crear botones para cada letra y agregarlos al div
function crearBotones() {
    // Obtener el div donde se agregan los botones
    let divLetras = document.getElementById("divLetras");

    // Crear un array con todas las letras del alfabeto
    let letras = 'qwertyuiopasdfghjklñzxcvbnm'.split('');
    letras.forEach(function (letra, indice) {
        if (indice == 10 || indice == 20) {
            let salto = document.createElement("br");
            // Crea un elemento de salto de línea
            divLetras.appendChild(salto);
            // Agrega el salto de línea al div
        }
        var boton = document.createElement("button");
        // Crea un elemento botón
        boton.textContent = letra.toUpperCase();
        // Establece el texto del botón en mayúsculas
        boton.value = letra.toUpperCase();
        // Establece el valor del botón en mayúsculas
        boton.classList.add("boton");
        // Agrega la clase "boton" al botón
        boton.classList.add("boton-letra");
        // Agrega la clase "boton-letra" al botón
        divLetras.appendChild(boton);
        // Agrega el botón al div
        console.log(boton.value);
        // Imprime el valor del botón en la consola
    });
}

// Función para crear cuadros para cada letra de la palabra
function crearCuadros(longitud) {
    let letrasAdivinar = document.querySelector(".letras");
    // Obtiene el contenedor donde se mostrarán las letras
    for (let i = 0; i < longitud; i++) {
        letrasAdivinar.classList.add("letras");
        // Agrega la clase "letras" al contenedor (por si acaso no estaba ya)
        let unaLetra = document.createElement("span");
        // Crea un elemento span para cada letra
        unaLetra.setAttribute("id", String(i));
        // Agrega atributos
        unaLetra.classList.add("cuadros");
        letrasAdivinar.appendChild(unaLetra);
        // Agrega el span al contenedor
    }
}

function comprobarLetraUser(palabra) {
    let cuadroLetras = document.querySelectorAll(".cuadros");
    let letraUser = document.querySelectorAll(".boton-letra");
    let intentosRestantes = palabra.length; // Variable para contar las letras faltantes

    letraUser.forEach(function (elem) {
        elem.addEventListener("click", function () {
            if (intentosRestantes <= 0) {
                return; // Si no hay más intentos, no hacer nada
            }

            elem.disabled = true; // Bloquea el botón después de ser seleccionado
            let letraEncontrada = false;
            console.log(elem.value);
            console.log(palabra);
            for (let i = 0; i < palabra.length; i++) {
                if (palabra[i] == elem.value) {
                    console.log(i);
                    cuadroLetras[i].innerHTML = elem.value;
                    cuadroLetras[i].style.color = 'black'; // Marca la letra acertada en negro
                    letraEncontrada = true;
                    intentosRestantes--; // Decrementa la cuenta de letras faltantes
                }
            }
            if (letraEncontrada) {
                elem.style.backgroundColor = 'green'; // Marca el botón de la letra acertada en verde
            } else {
                elem.style.backgroundColor = 'red'; // Marca el botón de la letra fallida en rojo
            }

            if (intentosRestantes <= 0) {
                letraUser.forEach(function (boton) {
                    boton.disabled = true; // Deshabilita todos los botones
                });
                mostrarMarquesina("¡Felicidades! Has adivinado la palabra."); // Mostrar mensaje de éxito en marquesina
            }
        });
    });
}

function mostrarMarquesina(mensaje) {
    let marquesinaContainer = document.getElementById("marquesina-container");
    let marquesina = document.createElement("div");
    marquesina.classList.add("marquesina");
    marquesina.textContent = mensaje;
    marquesinaContainer.appendChild(marquesina);
}
