function pedirTodosLosKillers(callback) {
    let request = new XMLHttpRequest();

    request.onload = function () {
        let todosLosKillers = JSON.parse(request.responseText);

        callback(todosLosKillers);
    }

    request.open('GET', "/killers");
    request.send();
}