let fs = require("fs");
let path = require("path");

function getFilterKiller(paramType, success){
    fs.readFile(path.join(__dirname, "../data/Killers.json"), function(err, data){
        if(err == undefined){
            let todosLosKillers = JSON.parse(data);

            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
            let killersFiltrados = todosLosKillers.filter(killer => killer.type.includes(paramType))

            console.log(killersFiltrados);
            success(killersFiltrados);
        }
    })
}

// filter = for / forEach (programación funcional)

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