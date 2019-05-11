//////////////////////////////////////////////
//          CONTENEDOR DE SURVIVORS         //
//////////////////////////////////////////////


// Guardamos nuestros elementos en variables

let miBotonSurvivors = document.getElementById('survivorsBtn');
const contenedorSurvivors = document.getElementById('survivorsContainer');


// Añadimos un evento el cual nos trae los datos y creamos el botón que contiene al grupo

miBotonSurvivors.addEventListener('click', () => {

    pedirTodosLosSurvivors(crearBotonesSurvivors);

})

function crearBotonesSurvivors (datos) {

    let arrayDeSurvivors = datos;

    for (let i = 0; i < arrayDeSurvivors.length; i++) {

        crearBotonSurvivors(arrayDeSurvivors[i].name, arrayDeSurvivors[i].image);

    }
}


// Creamos un div para cada survivor junto con el nombre y la imagen

function crearBotonSurvivors(nombreSurvivor, imagenSurvivor) {

    let divSurvivor = document.createElement('div');

    divSurvivor.setAttribute('class', "boton-survivor");

    let texto = document.createTextNode(nombreSurvivor);

    divSurvivor.appendChild(texto);
    contenedorSurvivors.appendChild(divSurvivor);

    let dirImgSurvivor = document.createElement('img');

    dirImgSurvivor.setAttribute('class', "imgSurvivor");
    dirImgSurvivor.setAttribute('src', imagenSurvivor);
    dirImgSurvivor.setAttribute('alt', nombreSurvivor);

    contenedorSurvivors.appendChild(dirImgSurvivor);

}


//////////////////////////////////////////////
//          CONTENEDOR DE KILLERS           //
//////////////////////////////////////////////


// Guardamos nuestros elementos en variables

let miBoton = document.getElementById('killersBtn');
const contenedorKillers = document.getElementById('killersContainer');


// Añadimos un evento el cual nos trae los datos y creamos el botón que contiene al grupo

miBoton.addEventListener('click', () => {

    pedirTodosLosKillers(crearBotonesKillers);

})

function crearBotonesKillers (datos) {

    let arrayDeKillers = datos;

    for (let i = 0; i < arrayDeKillers.length; i++) {

        crearBotonKiller(arrayDeKillers[i].name, arrayDeKillers[i].image);

    }
}


// Creamos un div para cada survivor junto con el nombre y la imagen

function crearBotonKiller(nombreKiller, imagenKiller) {

    let divKiller = document.createElement('div');

    divKiller.setAttribute('class', "boton-killer");

    let texto = document.createTextNode(nombreKiller);

    divKiller.appendChild(texto);
    contenedorKillers.appendChild(divKiller);

    let dirImgKiller = document.createElement('img');
    
    dirImgKiller.setAttribute('class', "imgKiller");
    dirImgKiller.setAttribute('src', imagenKiller);
    dirImgKiller.setAttribute('alt', nombreKiller);

    contenedorKillers.appendChild(dirImgKiller);

}