const { Router } = require('express');
const {testFunction,getAllTipos}=require('../Services/TipoServices.js');

const tipoRouter = Router();

//tipoRouter.get('/',testFunction);
tipoRouter.get('/',getAllTipos);

module.exports = tipoRouter;