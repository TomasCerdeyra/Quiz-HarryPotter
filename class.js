//VARIABLES
//Contador de preguntas correctas
const contenedorBotones = document.getElementById("opciones");
let contadorPuntos = 0;
//clase para las preguntas
class Preguntas{
    constructor(pregunta,opciones,verdadera){
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.verdadera = verdadera;
    }

    //Con esete modulo se muestran las preguntas
    MostrarPregunta(){
        let PegarPregunta = document.getElementById('pregunta');
        PegarPregunta.innerText = this.pregunta;
    }

    //Con este modulo se muestran las opciones
    MostrarOpciones() {
        //Vacio el contenedor para pegar las nuevas opciones
        contenedorBotones.innerHTML = ' ';
        
        //Creo los botones
        const boton1 = document.createElement("button");
        boton1.className ="boton";
        boton1.innerText = this.opciones[0];

        const boton2 = document.createElement("button");
        boton2.className ="boton";
        boton2.innerText = this.opciones[1];

        const boton3 = document.createElement("button");
        boton3.className ="boton";
        boton3.innerText = this.opciones[2];

        const boton4 = document.createElement("button");
        boton4.className ="boton";
        boton4.innerText = this.opciones[3];

        //agrego los botones al contenedor
        contenedorBotones.append(boton1, boton2, boton3, boton4);

        //Hago los Eventos para cada botn
        boton1.addEventListener("click", ()=>{
            let opcionElegida1 = this.opciones[0];

            //Muestro boton para pasasr de pregutna
            botonSiguiente.style.display = ("block");

            //Saco el contador de preg
            contadorPreg.style.display = ("none");


            //Funciones
            //Declaro el modulo para pintar la opcion elegida
            this.PintarOpcionElegida(opcionElegida1, boton1);

            //Declaro el modulo para deshabilitar los botones
            this.deshabilitarBotones(boton1, boton2, boton3, boton4)

            //declaro el modulo por si es incorrecta
            this.alerta(opcionElegida1);

            //Le doy opacidad a los demas botones
            this.OpacityBotones(boton2, boton3, boton4);

            //Le paso la opcion elegida para ver si es correcta o no
            this.preguntaCorrecta(opcionElegida1);
        })

        boton2.addEventListener("click", ()=>{
            let opcionElegida2 = this.opciones[1];
            //Muestro boton para pasasr de pregutna
            botonSiguiente.style.display = ("block");

            //Saco el contador de preg
            contadorPreg.style.display = ("none");

            //Funciones
             //Declaro el modulo para pintar la opcion elegida
            this.PintarOpcionElegida(opcionElegida2, boton2);

            //Declaro el modulo para deshabilitar los botones
            this.deshabilitarBotones(boton1, boton2, boton3, boton4);

            //declaro la funcion por si es incorrecta
            this.alerta(opcionElegida2);

            //Le doy opacidad a los demas botones
            this.OpacityBotones(boton1, boton3, boton4);

            //Le paso el modulo elegida para ver si es correcta o no
            this.preguntaCorrecta(opcionElegida2)
        })

        boton3.addEventListener("click", ()=>{
            let opcionElegida3 = this.opciones[2];
            //Muestro boton para pasasr de pregutna
            botonSiguiente.style.display = ("block");

            //Saco el contador de preg
            contadorPreg.style.display = ("none");

            //Funciones
            //Declaro el modulo para pintar la opcion elegida
            this.PintarOpcionElegida(opcionElegida3, boton3);
            
            //Declaro el modulo para deshabilitar los botones
            this.deshabilitarBotones(boton1, boton2, boton3, boton4);

            //declaro la modulo por si es incorrecta
            this.alerta(opcionElegida3);

            //Le doy opacidad a los demas botones
            this.OpacityBotones(boton1, boton2, boton4);
            
            //Le paso la opcion elegida para ver si es correcta o no
            this.preguntaCorrecta(opcionElegida3)
        })

        boton4.addEventListener("click", ()=>{
            let opcionElegida4 = this.opciones[3];
            //Muestro boton para pasasr de pregutna
            botonSiguiente.style.display = ("block");

            //Saco el contador de preg
            contadorPreg.style.display = ("none");
            
            //Funciones
            //Declaro la modulo para pintar la opcion elegida
            this.PintarOpcionElegida(opcionElegida4, boton4);

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
    alerta(opcion){
        if (opcion != this.verdadera) {
            Swal.fire({
                icon:"error",
                html: "<h3>La respuesta correcta es: </h3>" +this.verdadera,
                timer:2400,
                confirmButtonText:"ok",
                //showConfirmButton: false,
                padding:".2em",
                timerProgressBar:"true",
                width:"38em",
                heightAuto:false,
            });
        }
    }
    //Modulo para decire que cuando es correta pinte de verde y si no de rojo
    PintarOpcionElegida(opcion, boton){
        if(opcion == this.verdadera){
            boton.style.backgroundColor= "rgb(16 137 19)";
        }else{
            boton.style.backgroundColor= "rgb(185 23 14)"
        }
    }

    //Modulo para deshabilitar botones
    deshabilitarBotones(boton1, boton2, boton3, boton4){

        boton1.disabled= true;
        boton2.disabled= true;
        boton3.disabled= true;
        boton4.disabled= true;
    }

    //Modulu para darle opacidad a los botones cuando sean clickeados
    OpacityBotones(boton1, boton2, boton3){

        boton1.style.opacity= ".5";
        boton2.style.opacity= ".5";
        boton3.style.opacity= ".5";
    }

    //Con este modulo veo si la respuesta es la correcta y si es asi sumo uno al contador
    preguntaCorrecta(opcion) {
        console.log(opcion);
        if (opcion === this.verdadera) {
            contadorPuntos++;
            console.log(contadorPuntos);
        }
        //retorno el valor del contador
        return contadorPuntos;
        
    }
}

//Preguntas del nivel 1 = 6 
const preg1 = new Preguntas("¿Como se llama el personaje principal?", ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"], "Harry Potter");
const preg2 = new Preguntas("¿A que casa pertenece Hermione Granger en Hogwarts ?", ["Ravenclaw", "Slytherin", "Gryffindor", "Hufflepuff"], "Gryffindor");
const preg3 = new Preguntas("¿Quienes son los mejores amigos de Harry Potter?", ["Ron y Hermione", "Ron y Draco", "Hagrid y dobby", "Dumbledore y Snape"], "Ron y Hermione");
const preg4  = new Preguntas("¿Cual es el apodo que los magos tenemen nombrar?",["Dubledore","Snape","Voldemort", "Malfoy"], "Voldemort");
const preg5  = new Preguntas("¿Como se llama la mascota de Harry?",["Buckbeak","Trevor","Pigwidgeon", "Hedwing"], "Hedwing");
const preg6  = new Preguntas("¿Quien es el rival de Harry en su colegio?",["Ron Weasley","Draco Malfoy","neville longbottom", "luna lovegood"], "Draco Malfoy");

//Preguntas del nivel 2 = 6
const preg7 = new Preguntas("¿Cuantos hijos tuvieron Arthur y Molly Weasley?", ["4 (Cuatro)", "8 (Ocho)", "7 (Siete)", "5 (Cinco)"], "7 (Siete)");
const preg8 = new Preguntas("¿Cual es la principal funcion de la piedra filosofal?", ["Tranformar metal en oro", "Alargar la vida", "Revivir a una persona", "Disparar hechizos"], "Alargar la vida");
const preg9 = new Preguntas("¿Con que hechizo se habren las cerraduras?", ["Confundo", "Levicorpus", "Alohomora", "Reducto"], "Alohomora");
const preg10 = new Preguntas("¿Como se llama la mascota de Neville Longbotto?", ["Trevor", "Hedwing", "Crookshanks", "dobby"], "Trevor");
const preg11 = new Preguntas("¿Que puesto ocupa harry en el equipo quidditch?", ["Golpeador", "Buscador", "Guardián", "Cazador"], "Buscador");
const preg12 = new Preguntas("¿En que animal se puede tranformal Sirius Black?", ["Lobo", "Gato", "Oso", "El que desee"], "Lobo");


//Preguntas del nivel 2 = 7
const preg13 = new Preguntas("¿Como podes identificar a un Mortifago?", ["Varita diferente", "Marca tenebrosa", "Vestimenta", "Serpieente de mascota"], "Marca tenebrosa");
const preg14 = new Preguntas("¿Cuantas reliquias de la mueste existen?", ["3 (Tres)", "5 (Cinco)", "7 (Siete)", "2 (Dos)"], "3 (Tres)");
const preg15 = new Preguntas("¿Quien le da un Giraltiempo a Hermione?", ["Peter Pettigrew", "Luna lovegood", "Albus Dumbledore", "Minerva McGonagall"], "McGonagall");
const preg16 = new Preguntas("¿Con que Hechizo se espanta a un Dementor?", ["Expecto Patronum", "Avada Kedavra", "Muffliato", "Petrificus Totalus"], "Expecto Patronum");
const preg17 = new Preguntas("¿Cuantos Maleficios imperdonables hay?", ["5 (Cinco)", "2 (Dos)", "1 (Uno)", "3 (Tres)"], "3 (Tres)");
const preg18 = new Preguntas("¿Qué elemento comparten las varitas de Harry y Voldemort?", ["Fibra de corazón de dragón.", "Pelo de unicornio", "Pluma de fénix", "Cuerno de Basilisco"], "Pluma de fénix");
const preg19 = new Preguntas("¿Que hace el Hechizo imperios?", ["Hace que la victima levite", "Hace que la victima cumpla oredenes", "Lanza fuego", "Te hace invisible"], "Hace que la victima cumpla oredenes");
