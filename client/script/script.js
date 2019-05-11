//////////////////////////////////////////////
//          CONTENEDOR DE SURVIVORS         //
//////////////////////////////////////////////


let miBotonSurvivors = document.getElementById('survivorsBtn');
const contenedorSurvivors = document.getElementById('survivorsContainer');


//////////////////////////////////////////////
//          CONTENEDOR DE KILLERS           //
//////////////////////////////////////////////


let miBoton = document.getElementById('killersBtn');
const contenedorKillers = document.getElementById('killersContainer');

miBoton.addEventListener('click', function () {
    pedirTodosLosKillers(crearBotones);
})

function crearBotones (datos) {
    let arrayDeKillers = datos;

    for (let i = 0; i < arrayDeKillers.length; i++) {
        crearBoton(arrayDeKillers[i].name, arrayDeKillers[i].image);
    }
}

function crearBoton(nombreKiller, imagenKiller) {
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