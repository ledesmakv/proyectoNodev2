let fs = require("fs");
let path = require("path");

function getFilterKiller(paramType, succes){
    fs.readFile(path.join(__dirname, "../data/Killers.json"), function(err, data){
        if(err == undefined){
            let todosLosKillers = JSON.parse(data);

            let killersFiltrados = todosLosKillers.filter(obj =>{
                obj.type.filter(tipo => { tipo == paramType})
            })

            console.log(killersFiltrados);
            succes.send(killersFiltrados);
        }
    })
}

function getKillersFiltrados(req, res){
    if(!req.query.type){
        fs.readFile(path.join(__dirname, '../data/Killers.json'), (err, data) => {
            if (err == undefined) {
                let jsonKillers = JSON.parse(data);
                res.send(jsonKillers);
            }
        });
    }else{
        fs.readFile(path.join(__dirname, "../data/Killers.json"), function(err, data){

            if(err == undefined){
                let todosLosKillers = JSON.parse(data);
                let killersFiltrados = [];

                todosLosKillers.forEach( obj =>{
                    for(let i = 0 ; i < obj.type.length ; i++){
                        if(obj.type[i] == req.query.type){
                            console.log("el tipo de mi objeto es", obj.type);
                            killersFiltrados.push(obj);
                        }
                    }
                });
    
                let killersFiltradosFINAL = [];

                killersFiltrados.forEach( obj =>{
                    for(let i = 0 ; i < obj.filter.length ; i++){
                        if(obj.filter[i] == req.query.filter){
                            console.log("el tipo de mi objeto es", obj.filter);
                            killersFiltradosFINAL.push(obj);
                        }
                    }
                });


                //console.log("CON QUERY", todosLosKillers);
                res.send(killersFiltradosFINAL);
            }
        })
    }
    }




module.exports = {
    getFilterKiller: getFilterKiller,
    getKillersFiltrados: getKillersFiltrados
}