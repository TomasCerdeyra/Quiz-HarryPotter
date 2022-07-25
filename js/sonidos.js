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
    //Digo que cuando detecte un cambio en la barra, el 
    //volumen d los sonidos va a ser su value
    sonud.volume = audio.value;
    sound2.volume = audio.value;
    soundAmb.volume = audio.value;
})

//icono volumen
const iconoAudio = document.getElementById("iconoAudio");
iconoAudio.style.display = "none";
iconoAudio.addEventListener("click", () => {
    //Cundo se clickee el volumen va a 0 y aparace el icono mute
    audio.value = 0;
    sonud.volume = 0;
    sound2.volume = 0;
    soundAmb.volume = 0;
    iconoAudioMut.style.display = "block";
    iconoAudio.style.display = "none";
})

//icono mute
const iconoAudioMut = document.getElementById("iconoAudioMut")
iconoAudioMut.addEventListener("click", () => {
    //Cundo se clickee el mute arranca de nuevo la musica y aparace el icono de volumen
    soundAmb.play();
    audio.value = 0.1;
    sonud.volume = audio.value;
    sound2.volume = audio.value;
    soundAmb.volume = audio.value;

    iconoAudio.style.display = "block"
    iconoAudioMut.style.display = "none";

    //saco el mensaje de volumen
    mensaje1.style.display= "none"
    harry2.style.display= "none"
})