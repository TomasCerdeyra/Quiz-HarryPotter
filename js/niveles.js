//VARIABLES
//guardo el strign block y none para pasarle a la funcion sacarPonerBotones
const displayB= "block";
const displayN= "none";
//Botones para los niveles
const botNivel1 = document.getElementById("nivel1");
const botNivel2 = document.getElementById("nivel2");
const botNivel3 = document.getElementById("nivel3");
//p de cada mejor puntaje
const puntaje1 = document.getElementById("puntaje1");
const puntaje2 = document.getElementById("puntaje2");
const puntaje3 = document.getElementById("puntaje3");
//h2 de las preguntas
let mostrasPregunta = document.getElementById("pregunta");
//Boton para pasar de pregunta
const botonSiguiente = document.getElementById("botSiguiente");
//p que muestra puntos al finalizar un nivel
const primerP = document.getElementById("PrimerPuntaje");
//P para mostrar la pregunta que va
const contadorPreg = document.getElementById("contadorPreg");
//Puntajes maximos
let puntajeMax1 = -1000;
let puntajeMax2 = -1000;
let puntajeMax3 = -1000;
const preguntasLv1 = 6;
const preguntasLv2 = 6;
const preguntasLv3 = 7;


//-------------------------------EMPIEZA NIVEL 1---------------------------//

//funncion para elegir el primer nivel
function botonLv1() {
    botNivel1.addEventListener("click", () => {
        //inicializo la funcion que me muestra el inicio del juego
        MostrarPaginaInicioNivel();

        //Muestro la primer pregutna con la pirmeras opciones
        preg1.MostrarPregunta();
        preg1.MostrarOpciones();

        contadorPreg.innerText= "Pregunta 1 de "+preguntasLv1;

        //incicializo la funcion del nivel1 
        nivel1();
    });
}

//Funcion para iniciar juego del nivel1
function nivel1() {
    //variable click para controlas las preguntas que va
    let click = 0;
    let contadorDepregunta = 1;

    botonSiguiente.addEventListener("click", () => {
        click++;
        contadorDepregunta++;

        //Saco boton
        botonSiguiente.style.display = ("none");

        //pongo el contador de preguntas
        contadorPreg.style.display = ("block");

        //Muestro la pregunta que va
        contadorPreg.innerText = "Pregunta "+contadorDepregunta +" de: "+preguntasLv1;

        //Muestro las preguntas
        if (click == 1) { preg2.MostrarPregunta(); preg2.MostrarOpciones(); }
        if (click == 2) { preg3.MostrarPregunta(); preg3.MostrarOpciones(); }
        if (click == 3) { preg4.MostrarPregunta(); preg4.MostrarOpciones(); }
        if (click == 4) { preg5.MostrarPregunta(); preg5.MostrarOpciones(); }
        if (click == 5) { preg6.MostrarPregunta(); preg6.MostrarOpciones(); }

        
        nivel1Terminado(click);
    });
}

//Funcion para mostrar el resultado del nivel1 terminado  
function nivel1Terminado(click) {
    if (click == 6) {
        mostrarPaginaResultados();

        //Creo el mensaje para mostrar los puntos que hizo
        primerP.innerText = " Tu puntaje fue de " + preg6.preguntaCorrecta();
        click = 0;

        //inicializo la funcion para guardar el puntaje en el locaL Storage
        guardarPuntaje1();

        //inicializo la funcion para que aparezca un nuevo voton para volver a jugar
        BotonVolver();
    }
}

//funcio para guardar el puntaje max del nivel3 en local storage
function guardarPuntaje1() {
    //guardo en locarStore el puntaje
    localStorage.setItem("Puntaje",  preg6.preguntaCorrecta());

    //agarro el ultimo puntaje guardado y lo guardo
    let puntajeLocal = parseInt(localStorage.getItem("Puntaje"));

    // digo que si pntLocal es mayor que pntMax e guarde el valor de local en el de max
    if (puntajeLocal >  puntajeMax1) {puntajeMax1 = puntajeLocal};

    //inicializo funcion  mostrarmax pasandole el parametro puntajemax
    puntaje1.innerText ="Tu mayor puntaje nivel Basico: "+puntajeMax1+" pts"
}
//-------------------------------TERMINA NIVEL 1----------------------------//


//-------------------------------EMPIEZA NIVEL 2----------------------------//

//funncion para elegir el segundo nivel
function botonLv2() {
    botNivel2.addEventListener("click", () => {

        //inicializo la funcion que me muestra el inicio del juego
        MostrarPaginaInicioNivel();

        //Muestro la primer pregutna con la pirmeras opciones
        preg7.MostrarPregunta();
        preg7.MostrarOpciones();

        contadorPreg.innerText= "Pregunta 1 de "+preguntasLv2;

        //incicializo la funcion del nivel1 
        nivel2();
    });
}

//Funcion para iniciae juego del nivel2
function nivel2() {
    //variable click para controlas las preguntas que va
    let click = 0;
    let contadorDepregunta = 1;

    botonSiguiente.addEventListener("click", () => {
        click++;
        contadorDepregunta++;

        //Saco boton
        botonSiguiente.style.display = ("none");

        //pongo el contador de preguntas
        contadorPreg.style.display = ("block");

        //Muestro la pregunta que va
        contadorPreg.innerText = "Pregunta "+contadorDepregunta +" de: "+preguntasLv2;

        //Muestro las preguntas
        if (click == 1) { preg8.MostrarPregunta(); preg8.MostrarOpciones(); }
        if (click == 2) { preg9.MostrarPregunta(); preg9.MostrarOpciones(); }
        if (click == 3) { preg10.MostrarPregunta(); preg10.MostrarOpciones(); }
        if (click == 4) { preg11.MostrarPregunta(); preg11.MostrarOpciones(); }
        if (click == 5) { preg12.MostrarPregunta(); preg12.MostrarOpciones(); }

        nivel2Terminado(click);
    });
}

//Funcion para mostrar el resultado del nivel2 terminado  
function nivel2Terminado(click) {
    if (click == 6) {
        mostrarPaginaResultados();

        //Creo el mensaje para mostrar los puntos que hizo
        primerP.innerText = " Tu puntaje fue de " + preg12.preguntaCorrecta();
        click = 0;

        //inicializo la funcion para guardar el puntaje en el locaL Storage
        guardarPuntaje2();

        //inicializo la funcion para que aparezca un nuevo voton para volver a jugar
        BotonVolver();
    }
}

//funcio para guardar el puntaje max del nivel2 en local storage
function guardarPuntaje2() {
    //guardo en locarStore el puntaje
    localStorage.setItem("Puntaje",  preg12.preguntaCorrecta());

    //agarro el ultimo puntaje guardado y lo guardo
    let puntajeLocal = parseInt(localStorage.getItem("Puntaje"));

    // digo que si pntLocal es mayor que pntMax e guarde el valor de local en el de max
    if (puntajeLocal >  puntajeMax2) {puntajeMax2 = puntajeLocal};

    //inicializo funcion  mostrarmax pasandole el parametro puntajemax
    puntaje2.innerText ="Tu mayor puntaje nivel Intermedio: "+puntajeMax2+" pts"
}

//-------------------------------TERMINA NIVEL 2-----------------------//


//-------------------------------EMPIEZA NIVEL 3----------------------------//

//funncion para elegir el tercer nivel
function botonLv3() {
    botNivel3.addEventListener("click", () => {

        //inicializo la funcion que me muestra el inicio del juego
        MostrarPaginaInicioNivel();

        //Muestro la primer pregutna con la pirmeras opciones
        preg13.MostrarPregunta();
        preg13.MostrarOpciones();

        contadorPreg.innerText= "Pregunta 1 de "+preguntasLv3;

        //incicializo la funcion del nivel1 
        nivel3();
    });
}

//Funcion para iniciae juego del nivel3
function nivel3() {
    //variable click para controlas las preguntas que va
    let click = 0;
    let contadorDepregunta = 1;

    botonSiguiente.addEventListener("click", () => {
        click++;
        contadorDepregunta++;

        //saco boton
        botonSiguiente.style.display = ("none");

        //pongo el contador de preguntas
        contadorPreg.style.display = ("block");

        //Muestro la pregunta que va
        contadorPreg.innerText = "Pregunta "+contadorDepregunta +" de: "+preguntasLv3;

        //Muestro las preguntas
        if (click == 1) { preg14.MostrarPregunta(); preg14.MostrarOpciones(); }
        if (click == 2) { preg15.MostrarPregunta(); preg15.MostrarOpciones(); }
        if (click == 3) { preg16.MostrarPregunta(); preg16.MostrarOpciones(); }
        if (click == 4) { preg17.MostrarPregunta(); preg17.MostrarOpciones(); }
        if (click == 5) { preg18.MostrarPregunta(); preg18.MostrarOpciones(); }
        if (click == 6) { preg19.MostrarPregunta(); preg19.MostrarOpciones(); }

        nivel3Terminado(click);
    });
}

//Funcion para mostrar el resultado del nivel3 terminado 
function nivel3Terminado(click) {
    if (click == 7) {
        mostrarPaginaResultados();

        //Creo el mensaje para mostrar los puntos que hizo
        primerP.innerText = " Tu puntaje fue de " + preg19.preguntaCorrecta();
        click = 0;

        //inicializo la funcion para guardar el puntaje en el locaL Storage
        guardarPuntaje3();

        //inicializo la funcion para que aparezca un nuevo voton para volver a jugar
        BotonVolver();
    }
}

//funcio para guardar el puntaje max del nivel3 en local storage
function guardarPuntaje3() {
    //guardo en locarStore el puntaje
    localStorage.setItem("Puntaje",  preg19.preguntaCorrecta());

    //agarro el ultimo puntaje guardado y lo guardo
    let puntajeLocal = parseInt(localStorage.getItem("Puntaje"));

    // digo que si pntLocal es mayor que pntMax e guarde el valor de local en el de max
    if (puntajeLocal >  puntajeMax3) {puntajeMax3 = puntajeLocal};

    //inicializo funcion  mostrarmax pasandole el parametro puntajemax
    puntaje3.innerText ="Tu mayor puntaje nivel Experto: "+puntajeMax3+" pts"
}


//-------------------------------TERMINA NIVEL 3----------------------------//


//Funcion para sacar las preguntas y opciones y mmostrar el resultado del juego
function mostrarPaginaResultados() {

    h1.innerText = "Nivel terminado";

    //pongo el contador de preguntas
    contadorPreg.style.display = ("none");

    //saco la pregunta
    mostrasPregunta.style.display = ("none");

    //saco los botones de opciones
    let contenedorB = document.getElementById("opciones");
    contenedorB.innerText = " ";

    //saco el botonSiguiente
    botonSiguiente.style.display = "none";

}

//Funcion para poner las preguntas, opciones y sacar los puntajes maximos
function MostrarPaginaInicioNivel() {
    //Digo que aparezla el h2 cuanod cliccke
    mostrasPregunta.style.display = ("block");

    //borrar los p (muestra puntaje max) y los  botones (muestran los niveles)
    sacarPonerBotones(displayN);

    //mostrar el contador
    contadorPreg.style.display = ("block")
    //botonSiguiente.style.display = ("block");


}