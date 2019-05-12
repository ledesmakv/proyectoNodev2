function pedirTodosLosKillers(callback) {
    let request = new XMLHttpRequest();

    request.onload = () => {
        let todosLosKillers = JSON.parse(request.responseText);

        callback(todosLosKillers);
    }

    request.open('GET', "/killers");
    request.send();
}


function pedirTodosLosSurvivors(callback) {
    let request = new XMLHttpRequest();

    request.onload = () => {
        let todosLosSurvivors = JSON.parse(request.responseText);

        callback(todosLosSurvivors);
    }

    request.open('GET', "/survivors");
    request.send();
}

function pedirKillersFiltrados(type, filter, callback) {
    let request = new XMLHttpRequest();

    request.onload = () => {
        let killersParseados = JSON.parse(request.responseText);

        console.log(killersParseados);
    }

    request.open('GET', '/killers?type=' + type + '&filter=' + filter);
    request.send();
}