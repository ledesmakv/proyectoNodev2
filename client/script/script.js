// BOTONES QUE ANIMAN LA BARRA DE NAVEGACIÓN

function openTab(evt, tabName) {
    // Declaro las variables
    var i, tabcontent, tablinks;

    // Selecciono todos los elementos con la clase 'button' y los escondo
    tabcontent = document.getElementsByClassName("buttonContent");

    for (i = 0; i < tabcontent.length; i++) {

        tabcontent[i].style.display = "none";

    }

    // Selecciono todos los elem. con la clase 'buttonLink' y los muestro
    tablinks = document.getElementsByClassName("buttonLink");

    for (i = 0; i < tablinks.length; i++) {

        tablinks[i].className = tablinks[i].className.replace(" active", "");

    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// BOTONES QUE SE DESPLIEGAN




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

    // Se crea el div o tarjeta de cada personaje
    let divSurvivor = document.createElement('div');
    divSurvivor.setAttribute('class', "boton-survivor");

    // Se crea el div con el nombre
    let divNombreDeSurvivor = document.createElement('div');
    divNombreDeSurvivor.setAttribute('class', "nombre-de-survivor");
    let texto = document.createTextNode(nombreSurvivor);

    // Metemos el texto dentro del div
    divNombreDeSurvivor.appendChild(texto);
    divSurvivor.appendChild(divNombreDeSurvivor);
    contenedorSurvivors.appendChild(divSurvivor);

    // Creamos la imagen para cada survivor
    let dirImgSurvivor = document.createElement('img');

    // Le asignamos una clase a cada una
    dirImgSurvivor.setAttribute('class', "imgSurvivor");
    dirImgSurvivor.setAttribute('src', imagenSurvivor);
    dirImgSurvivor.setAttribute('alt', nombreSurvivor);

    // Metemos las imágenes en nuestro contenedor
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

    // Se crea el div
    let divKiller = document.createElement('div');
    divKiller.setAttribute('class', "boton-killer");

    // Se crea el div con el
    let divNombreDeKiller = document.createElement('div');
    divNombreDeKiller.setAttribute('class', "nombre-de-killer");
    let texto = document.createTextNode(nombreKiller);

    //Metemos el texto dentro del div
    divKiller.appendChild(texto);
    contenedorKillers.appendChild(divKiller);

    // Creamos una imagen para cada killer
    let dirImgKiller = document.createElement('img');
    
    // Le asignamos una clase a la misma
    dirImgKiller.setAttribute('class', "imgKiller");
    dirImgKiller.setAttribute('src', imagenKiller);
    dirImgKiller.setAttribute('alt', nombreKiller);

    // Metemos las imágenes en nuestro container
    contenedorKillers.appendChild(dirImgKiller);

}


//////////////////////////////////
//          QUICK PICK          //
//////////////////////////////////

const pickBtn = document.getElementById('quick-pick-btn');

pickBtn.addEventListener('click', () => {
    console.log('working :v');
})