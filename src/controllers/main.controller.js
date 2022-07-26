const path = require('path');
const mainService = require(path.join(__dirname+"/../../src/services/main.service.js"))

mainController = {}

mainController.getPokemon = async(req,res,next)=>{
    let pokemon = req.params.pokemon
    console.log(pokemon);
    let response = await mainService.getPokemon(pokemon)
    res.json({"pokemon" : response})
}



module.exports = mainController
