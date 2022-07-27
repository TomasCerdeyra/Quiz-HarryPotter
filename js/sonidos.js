//Sonidos

//Sonido error
const sonud = new Audio();
sonud.src = "./sound/error-fallo-1.mp3";
sonud.volume = 0.03;

//Sonido victoria
const sound2 = new Audio();
sound2.src = "./sound/mixkit-melodic-bonus-collect-1938.mp3";
sonud.volume = 0.03;

//Sonido Ambiental 1
const soundAmb = new Audio();
soundAmb.src = "./sound/vin-harry-potter.mp3";
soundAmb.loop = Infinity
soundAmb.volume = 0.05;


//Barra de sonido
const audio = document.getElementById("audio");
audio.addEventListener("change", () => {
    //pongo el volumen que el usuario ponga en la barra
    volumen(audio.value);

    sacarPonerButtonsSonido(displayB,displayN)
})

//icono volumen
const iconoAudio = document.getElementById("iconoAudio");
iconoAudio.style.display = "none";
iconoAudio.addEventListener("click", () => {
    //Cundo se clickee el volumen va a 0 y aparace el icono mute
    audio.value = 0;
    //pongo el volumen en 0
    volumen(0);

    iconoAudioMut.style.display = "block";
    iconoAudio.style.display = "none";
    sacarPonerButtonsSonido(displayN,displayB);
})

//icono mute
const iconoAudioMut = document.getElementById("iconoAudioMut")
iconoAudioMut.addEventListener("click", () => {
    //Cundo se clickee el mute arranca de nuevo la musica y aparace el icono de volumen
    soundAmb.play();
    audio.value = 0.1;
    //pongo el volumen que el usuario ponga en la barra
    volumen(audio.value)

    sacarPonerButtonsSonido(displayB,displayN);

    //saco el mensaje de volumen
    mensaje1.style.display= "none"
    harry2.style.display= "none"
})

//Funciones GLOBALES de sonidos
//subir o bajar volumen
function volumen(voumen) {
    sonud.volume = voumen;
    sound2.volume = voumen;
    soundAmb.volume = voumen;
    
}

function sacarPonerButtonsSonido(block,none) {
    iconoAudio.style.display = block;
    iconoAudioMut.style.display = none;
}