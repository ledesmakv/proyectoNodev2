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

// FUNCIÓN PARA LOS BOTONES QUE SE DESPLIEGAN (ACORDEON)

// Guardamos nuestros botones en una variable
var acc = document.getElementsByClassName("boton-desplegable");
var i;

// Iteramos
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function expandirBoton() {
    /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var textoDesplegable = this.nextElementSibling;

    if (textoDesplegable.style.display === "block") {
      textoDesplegable.style.display = "none";
    } else {
      textoDesplegable.style.display = "block";
    }
  });
}

//////////////////////////////////////////////
//          CONTENEDOR DE SURVIVORS         //
//////////////////////////////////////////////

// Guardamos nuestros elementos en variables
// REFERENCIAS
let miBotonSurvivors = document.getElementById("survivorsBtn");
const contenedorSurvivors = document.getElementById("survivorsContainer");

// Añadimos un evento el cual nos trae los datos y creamos el botón que contiene al grupo
// EVENT
miBotonSurvivors.addEventListener("click", () => {
  pedirTodosLosSurvivors(crearBotonesSurvivors);
});

// DOM Manipulation = Recibo datos y los meto en el HTML
function crearBotonesSurvivors(datos) {
  let arrayDeSurvivors = datos;
  survivorsContainer.innerHTML = "";

  for (let i = 0; i < arrayDeSurvivors.length; i++) {
    crearBotonSurvivors(arrayDeSurvivors[i].name, arrayDeSurvivors[i].image);
  }
}

// Creamos un div para cada survivor junto con el nombre y la imagen
// DOM Manipulation = Recibo datos y los meto en el HTML
function crearBotonSurvivors(nombreSurvivor, imagenSurvivor) {
  // Se crea el div o tarjeta de cada personaje
  let divSurvivor = document.createElement("div");
  divSurvivor.setAttribute("class", "boton-survivor");

  // Se crea el div con el nombre
  let divNombreDeSurvivor = document.createElement("div");
  divNombreDeSurvivor.setAttribute("class", "nombre-de-survivor");
  let texto = document.createTextNode(nombreSurvivor);

  // Metemos el texto dentro del div
  divNombreDeSurvivor.appendChild(texto);
  divSurvivor.appendChild(divNombreDeSurvivor);
  contenedorSurvivors.appendChild(divSurvivor);

  // Creamos la imagen para cada survivor
  let dirImgSurvivor = document.createElement("img");

  // Le asignamos una clase a cada una
  dirImgSurvivor.setAttribute("class", "imgSurvivor");
  dirImgSurvivor.setAttribute("src", imagenSurvivor);
  dirImgSurvivor.setAttribute("alt", nombreSurvivor);

  // Metemos las imágenes en nuestro contenedor
  contenedorSurvivors.appendChild(dirImgSurvivor);
}

//////////////////////////////////////////////
//          CONTENEDOR DE KILLERS           //
//////////////////////////////////////////////

// Guardamos nuestros elementos en variables

let miBotonKillers = document.getElementById("killersBtn");
const contenedorKillers = document.getElementById("killersContainer");

// Añadimos un evento el cual nos trae los datos y creamos el botón que contiene al grupo
// Events = Todo lo relacionado a listeners, eventos, hooks y demas

miBotonKillers.addEventListener("click", () => {
  pedirTodosLosKillers(crearBotonesKillers);
});

// DOM Manipulation = Recibo datos y los meto en el HTML
function crearBotonesKillers(datos) {
  let arrayDeKillers = datos;
  killersContainer.innerHTML = "";

  for (let i = 0; i < arrayDeKillers.length; i++) {
    personajeKiller(arrayDeKillers[i].name, arrayDeKillers[i].image);
  }
}

// DOM Manipulation = Recibo datos y los meto en el HTML
// Creamos un div para cada survivor junto con el nombre y la imagen

function personajeKiller(nombreKiller, imagenKiller) {
  // Se crea el div
  let divKiller = document.createElement("div");
  divKiller.setAttribute("class", "boton-killer");

  // Se crea el div con el
  let divNombreDeKiller = document.createElement("div");
  divNombreDeKiller.setAttribute("class", "nombre-de-killer");
  let texto = document.createTextNode(nombreKiller);

  //Metemos el texto dentro del div
  divKiller.appendChild(texto);
  contenedorKillers.appendChild(divKiller);

  // Creamos una imagen para cada killer
  let dirImgKiller = document.createElement("img");

  // Le asignamos una clase a la misma
  dirImgKiller.setAttribute("class", "imgKiller");
  dirImgKiller.setAttribute("src", imagenKiller);
  dirImgKiller.setAttribute("alt", nombreKiller);

  // Metemos las imágenes en nuestro container
  contenedorKillers.appendChild(dirImgKiller);
}

//////////////////////////////////////////////
//          CONTENEDOR DE ITEMS             //
//////////////////////////////////////////////

// Guardamos nuestros elementos en variables

let miBotonItems = document.getElementById("itemsBtn");
const contenedorItems = document.getElementById("itemsContainer");

// Añadimos un evento el cual nos trae los datos y creamos el botón que contiene al grupo
// Events = Todo lo relacionado a listeners, eventos, hooks y demas
miBotonItems.addEventListener("click", () => {
  pedirTodosLosItems(crearBotonesItems);
});

// DOM Manipulation = Recibo datos y los meto en el HTML
function crearBotonesItems(datos) {
  let arrayDeItems = datos;
  itemsContainer.innerHTML = "";

  for (let i = 0; i < arrayDeItems.length; i++) {
    cajaItem(arrayDeItems[i].name, arrayDeItems[i].image);
  }
}

// DOM Manipulation = Recibo datos y los meto en el HTML
// Creamos un div para cada survivor junto con el nombre y la imagen

// I wanna see every move

function cajaItem(nombreItem, imagenItem) {
  // Se crea el div
  let divItem = document.createElement("div");
  divItem.setAttribute("class", "boton-item");

  // Se crea el div con el
  let divNombreDeItem = document.createElement("div");
  divNombreDeItem.setAttribute("class", "nombre-de-item");
  let texto = document.createTextNode(nombreItem);

  //Metemos el texto dentro del div
  divItem.appendChild(texto);
  contenedorItems.appendChild(divItem);

  // Creamos una imagen para cada killer
  let dirImgItem = document.createElement("img");

  // Le asignamos una clase a la misma
  dirImgItem.setAttribute("class", "imgItem");
  dirImgItem.setAttribute("src", imagenItem);
  dirImgItem.setAttribute("alt", nombreItem);

  // Metemos las imágenes en nuestro container
  contenedorItems.appendChild(dirImgItem);
}

//////////////////////////////////////////////
//          CONTENEDOR DE OFFERINGS         //
//////////////////////////////////////////////

// Guardamos nuestros elementos en variables

let miBotonOffering = document.getElementById("offeringsBtn");
const contenedorOffering = document.getElementById("offeringsContainer");

// Añadimos un evento el cual nos trae los datos y creamos el botón que contiene al grupo
// Events = Todo lo relacionado a listeners, eventos, hooks y demas
miBotonOffering.addEventListener("click", () => {
  pedirTodosLosOfferings(crearBotonesOfferings);
});

// DOM Manipulation = Recibo datos y los meto en el HTML
function crearBotonesOfferings(datos) {
  let arrayDeOfferings = datos;
  offeringsContainer.innerHTML = "";

  for (let i = 0; i < arrayDeOfferings.length; i++) {
    cajaOffering(arrayDeOfferings[i].name, arrayDeOfferings[i].image);
  }
}

// DOM Manipulation = Recibo datos y los meto en el HTML
// Creamos un div para cada survivor junto con el nombre y la imagen

function cajaOffering(nombreOffering, imagenOffering) {
  // Se crea el div
  let divOffering = document.createElement("div");
  divOffering.setAttribute("class", "boton-offering");

  // Se crea el div con el
  let divNombreDeOffering = document.createElement("div");
  divNombreDeOffering.setAttribute("class", "nombre-de-offering");
  let texto = document.createTextNode(nombreOffering);

  //Metemos el texto dentro del div
  divOffering.appendChild(texto);
  contenedorOffering.appendChild(divOffering);

  // Creamos una imagen para cada killer
  let dirImgOffering = document.createElement("img");

  // Le asignamos una clase a la misma
  dirImgOffering.setAttribute("class", "imgItem");
  dirImgOffering.setAttribute("src", imagenOffering);
  dirImgOffering.setAttribute("alt", nombreOffering);

  // Metemos las imágenes en nuestro container
  contenedorOffering.appendChild(dirImgOffering);
}

// //////////////////////////////////
// //          QUICK PICK          //
// //////////////////////////////////

const trapButton = document.getElementById('trap-killers-filter')
const stealthButton = document.getElementById('stealth-killers-filter')
const knockdownButton = document.getElementById('knockdown-killers-filter')
const mobilityButton = document.getElementById('mobility-killers-filter')
const throwerButton = document.getElementById('thrower-killers-filter')

const contenedorDeResultadoFilter = document.getElementById('resultado-tipo-killers')

trapButton.addEventListener('click', () => {
  pedirKillersFiltrados('TRAP', crearCajitasDelFiltro)
})

stealthButton.addEventListener('click', () => {
  pedirKillersFiltrados('STEALTH', crearCajitasDelFiltro)
})

knockdownButton.addEventListener('click', () => {
  pedirKillersFiltrados('KNOCKDOWN', crearCajitasDelFiltro)
})

mobilityButton.addEventListener('click', () => {
  pedirKillersFiltrados('MOBILITY', crearCajitasDelFiltro)
})

throwerButton.addEventListener('click', () => {
  pedirKillersFiltrados('THROWER', crearCajitasDelFiltro)
})

function crearCajitasDelFiltro(datos) {
  console.log(datos)
  // let arrayDeItems = datos;
  // itemsContainer.innerHTML = "";

  // for (let i = 0; i < arrayDeItems.length; i++) {
  //   cajaItem(arrayDeItems[i].name, arrayDeItems[i].image);
  // }
}