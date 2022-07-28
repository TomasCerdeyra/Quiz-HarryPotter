//variables
const harry = document.getElementById("harry");
const snitch = document.getElementById("snitch");
const mensaje1 = document.getElementById("mensaje1");
const harry2 = document.getElementById("harry2");
const dumbledore = document.getElementById("dumbledore");
const mensaje2 = document.getElementById("mensaje2");

//Primer animacion para harry1
let primerA = gsap.timeline({
    repeat: -1,
    delay: .5,
    defaults: {
        duration: 1.1,
        stagger: 0
    }
});

//segunda animacion para snith
let segundaA = gsap.timeline({
    repeat: -1,
    delay: .5,
    defaults: {
        duration: 1,
        stagger: 0
    }
});

//Movimientos de harry y snitch
function animacionAyB() {
    
    segundaA.to('.snitch', {
        y: -80,
        x: 80,
        rotation: -25,
    }
    );
    segundaA.to(".snitch", {
        rotation: 55,
        y: 80,
        x: 160,
    }
    );

    segundaA.to('.snitch', {
        y: -80,
        x: 240,
        rotation: -25,
    }
    );

    segundaA.to(".snitch", {
        rotation: 25,
        y: 80,
        x: 320,
    },
    );

    segundaA.to('.snitch', {
        y: -80,
        x: 400,
        rotation: -25,
    }
    );

    segundaA.to(".snitch", {
        rotation: 25,
        y: 80,
        x: 600,
    },
    );

    //animaciones de harry
    primerA.to('.harry', {
        y: -80,
        x: 80,
        rotation: -25,
    }
    );
    primerA.to(".harry", {
        rotation: 55,
        y: 80,
        x: 160,
    },
    );

    primerA.to('.harry', {
        y: -80,
        x: 240,
        rotation: -25,
    }
    );

    primerA.to(".harry", {
        rotation: 25,
        y: 80,
        x: 320,
    },
    );

    primerA.to('.harry', {
        y: -80,
        x: 400,
        rotation: -25,
    }
    );

    primerA.to(".harry", {
        rotation: 25,
        y: 80,
        x: 600,
    },
    );



}
//Movimieto de harry2 y mensaje 
function animacionCyD() {
    gsap.to('.harry2', {
        duration: 2,
        y: -400,
        x: 100,
        rotation: -25,
    }
    );
    gsap.to('.divAnimacion', {
        duration: 2,
        y: -400,
        x: 90,
    }
    );


    setTimeout(() => {
        mensaje1.style.display = ("block");
    }, 2000)
}

//Png dumbledore y mensaje
function animacionE(param) {
    dumbledore.style.display=(param);
    mensaje2.style.display=(param);
}