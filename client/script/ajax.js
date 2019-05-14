// Traeme todos los killers
function pedirTodosLosKillers(callback) {
  let request = new XMLHttpRequest();

  request.onload = () => {
    let todosLosKillers = JSON.parse(request.responseText);
    callback(todosLosKillers);
  };

  request.open("GET", "/killers");
  request.send();
}

// Traeme todos los survivors
function pedirTodosLosSurvivors(callback) {
  let request = new XMLHttpRequest();

  request.onload = () => {
    let todosLosSurvivors = JSON.parse(request.responseText);
    callback(todosLosSurvivors);
  };

  request.open("GET", "/survivors");
  request.send();
}

// Traeme todos los items
function pedirTodosLosItems(callback) {
  // siempre me olvido qué hace esta wea (Proporciona una forma fácil de obtener información de una URL sin tener que recargar la página completa)
  // mucho muy importante ! ! ! 💩
  // https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest
  let request = new XMLHttpRequest();
  // NEW -> OOP Object Oriented Programming - POO 💩
  // http://localhost:3000/items --> {...}
  // http://localhost:3000/ --> <html> ... </html>
  request.onload = () => {
    let todosLosItems = JSON.parse(request.responseText);
    callback(todosLosItems);
  };

  request.open("GET", "/items");
  request.send();
}

// Traeme todos los offerings
function pedirTodosLosOfferings(callback) {
  let request = new XMLHttpRequest();

  request.onload = () => {
    let todosLosOfferings = JSON.parse(request.responseText);
    callback(todosLosOfferings);
  };

  request.open("GET", "/shared-offerings");
  request.send();
}

// Quiz - quick pick? :v
function pedirKillersFiltrados(type, callback) {
  let request = new XMLHttpRequest();

  request.onload = () => {
    let killersParseados = JSON.parse(request.responseText);
    callback(killersParseados)
  };

  request.open("GET", "/killers?type=" + type);
  request.send();
}

// 