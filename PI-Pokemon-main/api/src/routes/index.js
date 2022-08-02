const { Router } = require('express');
// Importar todos los routers;
const pokeRouter = require ('./PokeRoute.js');
const tipoRouter = require ('./TipoRoute.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokeRouter);
router.use('/types', tipoRouter);

module.exports = router;
