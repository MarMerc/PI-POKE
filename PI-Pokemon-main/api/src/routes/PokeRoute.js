const { Router } = require('express');
const { testFunction,getAllPoke,postPoke,getAllPokeId,getAllPokeName } = require('../Services/PokeServices.js');

const pokeRouter = Router();

pokeRouter.get('/',getAllPokeName);
pokeRouter.get('/:id',getAllPokeId);
pokeRouter.post('/post',postPoke);

module.exports = pokeRouter;