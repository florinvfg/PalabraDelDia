window.onload=function (){
    let palabra=['azul','amarillo','rojo','rosa','verde','turquesa','morado','malva','blanco','negro','marron','naranja','violeta','lila','beige'];
    let palabraSeleccionada=palabra[seleccionarPalabra()].toUpperCase();
    console.log(palabraSeleccionada);
    crearBotones();
    let palabraAdivinar=palabraSeleccionada.split("");//se crea un array de letras de la palabra a adivinar
    console.log(palabraAdivinar.length); //conocemos cuantas letras tiene la palabra
    crearCuadros(palabraAdivinar.length);
    comprobarLetraUser(palabraSeleccionada);
}

//funciones o metodos
function seleccionarPalabra(){
    let indiceSeleccionado=parseInt(Math.random()*14);
    return indiceSeleccionado;
}
function crearBotones() {
    let divLetras = document.getElementById("divLetras");
    // Crear un array con todas las letras del alfabeto
    let letras = 'qwertyuiopasdfghjklñzxcvbnm'.split('');

    letras.forEach(function(letra,indice) {
        if (indice==10 || indice==20){
           let salto= document.createElement("br");
            divLetras.appendChild(salto);
        }
        var boton = document.createElement("button");
        boton.textContent = letra.toUpperCase(); // Convertir la letra a mayúscula
        boton.value=letra.toUpperCase(); // Agregar el valor de la letra
        boton.classList.add("boton"); // Agregar la clase "boton"
        boton.classList.add("boton-letra"); // Agregar la clase "boton-letra"
        divLetras.appendChild(boton);
    });
}

function crearCuadros(longitud){
    let letrasAdivinar=document.querySelector(".letras");
    for (let i = 0; i < longitud; i++) {
        letrasAdivinar.classList.add("letras");
        let unaLetra=document.createElement("span");
        //Agregar atributo id con el valor i
        unaLetra.setAttribute("id",String(i));
      /**/
        unaLetra.classList.add("cuadros");
        letrasAdivinar.appendChild(unaLetra);
    }
}

function comprobarLetraUser(palabra){
    /**/
    let contadorUserC=0;
    let contadorUser=6;
    let cuadrosLetras=document.querySelectorAll(".cuadros")
    /**/
    let letraUser=document.querySelectorAll(".boton-letra");
    let ahorcado=document.querySelector(".ahorcado");
    letraUser.forEach(function (elem){
        elem.addEventListener("click",function (){
            correcta=false;
            console.log(elem.value);
            console.log(palabra);
            for (let i = 0; i < palabra.length; i++) {
                if(palabra[i]==elem.value){
                    console.log(i)
                    cuadrosLetras[i].innerHTML=elem.value;
                    /*Bloquear y colorear el teclado con las letras seleccionadas por el usuario*/
                    correcta=true;
                    elem.disabled=true;
                    /*Comprobar que el usuario adivino la palabra*/
                    ++contadorUserC;
                    if (contadorUserC==palabra.length){
                        letraUser.forEach(function (e){
                            e.disabled=true;

                        })
                            ganador();
                            mostrarBotonesPartida();
                    }
                }
            }
            if(correcta){
                elem.style.backgroundColor="darkgreen";
                elem.style.color="azure";
            }else{
                elem.style.backgroundColor="darkred";
                elem.style.color="azure";
                --contadorUser;

                ahorcado.src="views/img/"+contadorUser+".png";
                if (contadorUser==0){
                    letraUser.forEach(function (e) {
                        e.disabled = true;
                        mostrarBotonesPartida();

                    });
                }
            }
            document.querySelector(".contador").innerHTML=`Te quedan ${contadorUser} Intentos`;

        })
    })
}
function mostrarBotonesPartida(){
    let partida=document.querySelector(".nuevaP");
    let salir=document.querySelector(".salir");
    partida.style.visibility="visible";
    salir.style.visibility="visible";
    partida.addEventListener("click",function (){
        window.location.reload();
    })
    salir.addEventListener("click",function (){
        window.close();
    })
}