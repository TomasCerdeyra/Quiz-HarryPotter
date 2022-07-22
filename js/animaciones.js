//Primer animacion
let primerA = gsap.timeline({
    repeat: -1,
    delay:0,
    defaults:{
        duration:1,
        stagger: 0
    }
});

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

//segunda animacion


