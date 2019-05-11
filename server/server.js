const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

// las cosas que el cliente pida, bodyParser las transforma en un JSON
app.use(bodyParser.json());

// hacemos que nuestra carpeta client tenga sus recursos estáticos, de otra forma no cargaría los cambios realizados etc
app.use(express.static(path.join(__dirname, '../client')));

// le indicamos la ruta raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/html/index.html'));
})

// indico ruta del archivo a parsear, el parámetro 'data' hace referencia al archivo JSON
app.get('/items', (req, res) => {
    fs.readFile(path.join(__dirname, '../data/Items.json'), (err, data) => {
        if (err == undefined) {
            let jsonItems = JSON.parse(data);
            res.send(jsonItems);
        }
    })
})

app.get('/killer-addons', (req, res) => {
    fs.readFile(path.join(__dirname, '../data/KillerAddons.json'), (err, data) => {
        if (err == undefined) {
            let jsonKillerAddons = JSON.parse(data);
            res.send(jsonKillerAddons);
        }
    })
})

app.get('/killer-offerings', (req, res) => {
    fs.readFile(path.join(__dirname, '../data/KillerOfferings.json'), (err, data) => {
        if (err == undefined) {
            let jsonKillerOfferings = JSON.parse(data);
            res.send(jsonKillerOfferings);
        }
    })
})

app.get('/killer-perks', (req, res) => {
    fs.readFile(path.join(__dirname, '../data/KillerPerks.json'), (err, data) => {
        if (err == undefined) {
            let jsonKillerPerks = JSON.parse(data);
            res.send(jsonKillerPerks);
        }
    })
})

app.get('/killers', (req, res) => {
    fs.readFile(path.join(__dirname, '../data/Killers.json'), (err, data) => {
        if (err == undefined) {
            let jsonKillers = JSON.parse(data);
            res.send(jsonKillers);
        }
    });
})

app.get('/powers', (req, res) => {
    fs.readFile(path.join(__dirname, '../data/Powers.json'), (err, data) => {
        if (err == undefined) {
            let jsonPowers = JSON.parse(data);
            res.send(jsonPowers);
        }
    })
})

app.get('/shared-offerings', (req, res) => {
    fs.readFile(path.join(__dirname, '../data/SharedOfferings.json'), (err, data) => {
        if (err == undefined) {
            let jsonSharedOfferings = JSON.parse(data);
            res.send(jsonSharedOfferings);
        }
    })
})

app.get('/survivor-addons', (req, res) => {
    fs.readFile(path.join(__dirname, '../data/SurvivorAddons.json'), (err, data) => {
        if (err == undefined) {
            let jsonSurvivorAddons = JSON.parse(data);
            res.send(jsonSurvivorAddons);
        }
    })
})

app.get('/survivor-offerings', (req, res) => {
    fs.readFile(path.join(__dirname, '../data/SurvivorOfferings.json'), (err, data) => {
        if (err == undefined) {
            let jsonSurvivorOfferings = JSON.parse(data);
            res.send(jsonSurvivorOfferings);
        }
    })
})

app.get('/survivor-perks', (req, res) => {
    fs.readFile(path.join(__dirname, '../data/SurvivorPerks.json'), (err, data) => {
        if (err == undefined) {
            let jsonSurvivorPerks = JSON.parse(data);
            res.send(jsonSurvivorPerks);
        }
    })
})

app.get('/survivors', (req, res) => {
    fs.readFile(path.join(__dirname, '../data/survivors.json'), (err, data) => {
        if (err == undefined) {
            let jsonSurvivors = JSON.parse(data);
            res.send(jsonSurvivors);
        }
    })
})

// escuchamos el puerto
app.listen(3000, () => {
    console.log('Escuchando puerto 3000');
})