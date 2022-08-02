const { Router } = require('express');
const axios = require('axios');
const { Op } = require("sequelize");
const { Pokemon,Type } =require ('../db');
const {
    API_URL,API_URL_ID,API_URL_NAME,API_URL_TIPO
  } = process.env;

  //TEST DE FUNCIONAMIENTO
const testFunction = (req,res,next)=>{
    try {
      return res.send('Tipos funcionando!');
    } catch (error) {
        next(error);
    };
  };

  //-----Cargar Tabla con datos traidos de la Api
  const getAllTipos = async (req,res,next)=>{
    try {
      const Datas = await axios.get(API_URL_TIPO);

      const TiposApi = Datas.data.results.map((elem)=>elem.name).flat();
      for (let i=0; i<TiposApi.length; i++){
        await Type.findOrCreate( {where: {name: TiposApi[i]}});
      };
      const TiposAll = await Type.findAll();
      res.send(TiposAll);  
    } catch (error) {
      console.log(error);
    }
  }

  module.exports = {testFunction,getAllTipos};