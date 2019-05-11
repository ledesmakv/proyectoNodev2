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