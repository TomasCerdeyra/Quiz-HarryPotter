//Variables
//Aagarro el main donde voy a pintar el template
const main = document.querySelector(`.flex`);
//button para cambiar de card
const button = document.getElementById("button")

//llamo a la api
async function api() {
    const respuesta = await fetch(`http://hp-api.herokuapp.com/api/characters`);
    const data = await respuesta.json();

    const persona =  data[Math.floor(Math.random() * (0,30))];

    //objeto
    const Personajes = {
        img: persona.image,
        nombre: persona.name,
        actor: persona.actor,
        patronus: persona.patronus,
        casa: persona.house,
        nacimiento:persona.dateOfBirth
    }
    //paso EL objeto para pintar la card
    pintarCard(Personajes);
}


function pintarCard(personajes) {
    //agarro los elementos que esten adentro del template
    const template = document.getElementById("template").content;
    //Hago un clonn de template para no manipularlo directamente(buena prafctica tamb)
    const clone = template.cloneNode(true);
    //Se crea para el fragment para (efectivo para hacer loops e renderizados innecesarios)
    //para esto no es necesario pero es buena practic
    const fragment = document.createDocumentFragment();

    //Pongo la imagen de la api (casi siempre estan en los sprites)
    clone.querySelector(`.card-h1-img`).setAttribute("src", personajes.img);

    //h1
    clone.querySelector(`.card-h1-h1`).innerHTML = `${personajes.nombre}`;

    //pinto el p (poniendo el hp del pokemon);
    clone.querySelector(`.card-h1-p`).textContent = personajes.nacimiento ;

    //El query All me devuelve un array con todas sus coincidencias y si le pongo
    //el h2 al lado accede al h2 que este adentro de una etiqueta .footer-seguidores
    const elementos = clone.querySelectorAll(`.footer-seguidores h2`)

    elementos[0].innerText = personajes.patronus ;
    elementos[1].innerText = personajes.casa ;
    elementos[2].innerText = personajes.actor ;


    //Paso el clone al fragment y despues al main para que aparezca
    fragment.appendChild(clone);
    main.appendChild(fragment);
}

//para que apenas entre aparezca una carta
document.addEventListener("DOMContentLoaded", () => {
    //le paso random a la api para que elija uno aleatorio
    api();
    pintarCard();
})

//funcion para pretar un boton y poner una carta nueva
function nuevaCard() {
    button.addEventListener("click", () => {

        //limpio el main
        main. innerHTML = " ";
    
        //le paso las funciones para pintar una carta nueva
        api();
        pintarCard();
    })
}
nuevaCard();

