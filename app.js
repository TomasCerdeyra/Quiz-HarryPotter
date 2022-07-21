
//VARIABLES
//footer contenedor
const footer = document.getElementById("Footer");
//h1 titulo
let h1 = document.getElementById("h1");
//creo el boton volver para poder elegir volver a jugar
const botonVolver = document.createElement("button");

//agarro al boton y al parrafo de la introduccion
const botIntro = document.getElementById("BotonIntro");
const intro = document.getElementById("intro");

//Funcion para mostrar la introduccion y iniciar el juego
function introduccion() {
    sacarPonerBotones(displayN);
    botIntro.addEventListener("click", ()=>{
        sacarPonerBotones(displayB);
        botIntro.remove();
        intro.remove();

    })
}
//funcion para volver a la pantalla inicial del juego(menu)
function BotonVolver() {
    botonVolver.innerText= "Volver a Jugar";
    botonVolver.className="botonSiguiente";
    botonVolver.style.display ="block";

    footer.append(botonVolver);

    botonVolver.addEventListener("click", ()=>{

        //Pongo el titulo original
        h1.innerText = "¿Caunto sabes de Harry Potter?";

        //saco el mensaje del puntaje
        primerP.innerText= " ";

        //pongo los botones de los niveles y los puntajes maximos
        sacarPonerBotones(displayB);

        //saco el voton
        botonVolver.style.display= "none";

        //le paso la funcion para que se haga un bucle por si el usuario quiere jugar el mismo nivel
        botonLv1();
        botonLv2();
        botonLv3();

        //Pongo al contador de puntos en 0 para un nuevo juego
        contadorPuntos = 0;
        opcionElegida = " ";
    })
}

//funcion para sacar o poner los botones
function sacarPonerBotones(param) {
    //pongo los botones de los niveles
    botNivel1.style.display = (param);
    botNivel2.style.display = (param);
    botNivel3.style.display = (param);

     //le digo que cuando haga clcik me ponga los p
    puntaje1.style.display = (param);
    puntaje2.style.display = (param);
    puntaje3.style.display = (param);
    
}

//funcion main
function main() {
    introduccion()
    //inicializo la funcion de los niveles
    botonLv1(); 
    botonLv2();
    botonLv3();
}
main();





















