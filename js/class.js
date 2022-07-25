//VARIABLES
//Contador de preguntas correctas
const contenedorBotones = document.getElementById("opciones");
let contadorPuntos = 0;
//clase para las preguntas
class Preguntas {
    constructor(pregunta, opciones, verdadera) {
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.verdadera = verdadera;
    }

    //Con esete modulo se muestran las preguntas
    MostrarPregunta() {
        let PegarPregunta = document.getElementById('pregunta');
        PegarPregunta.innerText = this.pregunta;
    }

    //Con este modulo se muestran las opciones
    MostrarOpciones() {
        //Vacio el contenedor para pegar las nuevas opciones
        contenedorBotones.innerHTML = ' ';

        //Creo los botones
        const boton1 = document.createElement("button");
        boton1.className = "boton";
        boton1.innerText = this.opciones[0];

        const boton2 = document.createElement("button");
        boton2.className = "boton";
        boton2.innerText = this.opciones[1];

        const boton3 = document.createElement("button");
        boton3.className = "boton";
        boton3.innerText = this.opciones[2];

        const boton4 = document.createElement("button");
        boton4.className = "boton";
        boton4.innerText = this.opciones[3];

        //agrego los botones al contenedor
        contenedorBotones.append(boton1, boton2, boton3, boton4);

        //Hago los Eventos para cada botn
        boton1.addEventListener("click", () => {
            let opcionElegida1 = this.opciones[0];

            //Muestro boton para pasasr de pregutna
            botonSiguiente.style.display = ("block");

            //Saco el contador de preg
            contadorPreg.style.display = ("none");

            //Funciones
            //Declaro el modulo para pintar la opcion elegida
            this.PintarOpcionElegida(opcionElegida1, boton1, boton2, boton3, boton4);

            //Declaro el modulo para deshabilitar los botones
            this.deshabilitarBotones(boton1, boton2, boton3, boton4)

            //declaro el modulo por si es incorrecta
            this.alerta(opcionElegida1);

            //Le doy opacidad a los demas botones
            this.OpacityBotones(boton2, boton3, boton4);

            //Le paso la opcion elegida para ver si es correcta o no
            this.preguntaCorrecta(opcionElegida1);
        })

        boton2.addEventListener("click", () => {
            let opcionElegida2 = this.opciones[1];
            //Muestro boton para pasasr de pregutna
            botonSiguiente.style.display = ("block");

            //Saco el contador de preg
            contadorPreg.style.display = ("none");

            //Funciones
            //Declaro el modulo para pintar la opcion elegida
            this.PintarOpcionElegida(opcionElegida2, boton2, boton1, boton3, boton4);

            //Declaro el modulo para deshabilitar los botones
            this.deshabilitarBotones(boton1, boton2, boton3, boton4);

            //declaro la funcion por si es incorrecta
            this.alerta(opcionElegida2);

            //Le doy opacidad a los demas botones
            this.OpacityBotones(boton1, boton3, boton4);

            //Le paso el modulo elegida para ver si es correcta o no
            this.preguntaCorrecta(opcionElegida2)
        })

        boton3.addEventListener("click", () => {
            let opcionElegida3 = this.opciones[2];
            //Muestro boton para pasasr de pregutna
            botonSiguiente.style.display = ("block");

            //Saco el contador de preg
            contadorPreg.style.display = ("none");

            //Funciones
            //Declaro el modulo para pintar la opcion elegida
            this.PintarOpcionElegida(opcionElegida3, boton3, boton1, boton2, boton4);

            //Declaro el modulo para deshabilitar los botones
            this.deshabilitarBotones(boton1, boton2, boton3, boton4);

            //declaro la modulo por si es incorrecta
            this.alerta(opcionElegida3);

            //Le doy opacidad a los demas botones
            this.OpacityBotones(boton1, boton2, boton4);

            //Le paso la opcion elegida para ver si es correcta o no
            this.preguntaCorrecta(opcionElegida3)
        })

        boton4.addEventListener("click", () => {
            let opcionElegida4 = this.opciones[3];
            //Muestro boton para pasasr de pregutna
            botonSiguiente.style.display = ("block");

            //Saco el contador de preg
            contadorPreg.style.display = ("none");

            //Funciones
            //Declaro la modulo para pintar la opcion elegida
            this.PintarOpcionElegida(opcionElegida4, boton4, boton1, boton2, boton3);

            //Declaro el modulo para deshabilitar los botones
            this.deshabilitarBotones(boton1, boton2, boton3, boton4);

            //Declaro la modulo por si es incorrecta
            this.alerta(opcionElegida4);

            //Le doy opacidad a los demas botones
            this.OpacityBotones(boton1, boton2, boton3);

            //Le paso la opcion elegida para ver si es correcta o no
            this.preguntaCorrecta(opcionElegida4)
        });
    }
    //Modulo para dar mensaje de error 
    alerta(opcion) {
        if (opcion != this.verdadera) {
            Swal.fire({
                icon: "error",
                html: "<h3>La respuesta correcta es: </h3>" + this.verdadera,
                timer: 2400,
                confirmButtonText: "ok",
                //showConfirmButton: false,
                padding: ".2em",
                timerProgressBar: "true",
                width: "38em",
                heightAuto: false,
            });
            sonud.play();
        }
    }
    //Modulo para decire que cuando es correta pinte de verde y si no de rojo
    PintarOpcionElegida(opcion, boton) {
        if (opcion == this.verdadera) {
            boton.style.backgroundColor = "rgb(16 137 19)";
            sound2.play();
        } else {
            boton.style.backgroundColor = "rgb(185 23 14)";
        }
    }

    //Modulo para deshabilitar botones
    deshabilitarBotones(boton1, boton2, boton3, boton4) {

        boton1.disabled = true;
        boton2.disabled = true;
        boton3.disabled = true;
        boton4.disabled = true;
    }

    //Modulu para darle opacidad a los botones cuando sean clickeados
    OpacityBotones(boton1, boton2, boton3) {

        boton1.style.opacity = ".5";
        boton2.style.opacity = ".5";
        boton3.style.opacity = ".5";
    }

    //Con este modulo veo si la respuesta es la correcta y si es asi sumo uno al contador
    preguntaCorrecta(opcion) {
        if (opcion === this.verdadera) {
            contadorPuntos += 10;
        }
        //retorno el valor del contador
        return contadorPuntos;
    }
}


async function obtenerPreguntas() {
    const respuesta = await fetch("preguntas.json");
    const data = await respuesta.json();

    //pregutnas lv1
    const preg11 = new Preguntas(data.preg11.pregunta, data.preg11.opciones, data.preg11.verdadera);
    const preg12 = new Preguntas(data.preg12.pregunta, data.preg12.opciones, data.preg12.verdadera);
    const preg13 = new Preguntas(data.preg13.pregunta, data.preg13.opciones, data.preg13.verdadera);
    const preg14 = new Preguntas(data.preg14.pregunta, data.preg14.opciones, data.preg14.verdadera);
    const preg15 = new Preguntas(data.preg15.pregunta, data.preg15.opciones, data.preg15.verdadera);
    const preg16 = new Preguntas(data.preg16.pregunta, data.preg16.opciones, data.preg16.verdadera);
    //pregutnas lv2
    const preg21 = new Preguntas(data.preg21.pregunta, data.preg21.opciones, data.preg21.verdadera);
    const preg22 = new Preguntas(data.preg22.pregunta, data.preg22.opciones, data.preg22.verdadera);
    const preg23 = new Preguntas(data.preg23.pregunta, data.preg23.opciones, data.preg23.verdadera);
    const preg24 = new Preguntas(data.preg24.pregunta, data.preg24.opciones, data.preg24.verdadera);
    const preg25 = new Preguntas(data.preg25.pregunta, data.preg25.opciones, data.preg25.verdadera);
    const preg26 = new Preguntas(data.preg26.pregunta, data.preg26.opciones, data.preg26.verdadera);
    //pregutnas lv3
    const preg31 = new Preguntas(data.preg31.pregunta, data.preg31.opciones, data.preg31.verdadera);
    const preg32 = new Preguntas(data.preg32.pregunta, data.preg32.opciones, data.preg32.verdadera);
    const preg33 = new Preguntas(data.preg33.pregunta, data.preg33.opciones, data.preg33.verdadera);
    const preg34 = new Preguntas(data.preg34.pregunta, data.preg34.opciones, data.preg34.verdadera);
    const preg35 = new Preguntas(data.preg35.pregunta, data.preg35.opciones, data.preg35.verdadera);
    const preg36 = new Preguntas(data.preg36.pregunta, data.preg36.opciones, data.preg36.verdadera);
    const preg37 = new Preguntas(data.preg37.pregunta, data.preg37.opciones, data.preg37.verdadera);

    //Paso las pregutnas a las funciones 
    //nvel1
    botonLv1(preg11,preg12,preg13,preg14,preg15,preg16);
    //lv2
    botonLv2(preg21,preg22,preg23,preg24,preg25,preg26);
    //lv3
    botonLv3(preg31,preg32,preg33,preg34,preg35,preg36,preg37);
}
