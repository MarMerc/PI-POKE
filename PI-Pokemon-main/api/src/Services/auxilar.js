const { Router } = require('express');
const axios = require('axios');
const { Op } = require("sequelize");
const { Pokemon,Tipo } =require ('../db');
const {
    API_URL,API_URL_ID,API_URL_NAME,API_URL_TIPO
  } = process.env;

  //TEST DE FUNCIONAMIENTO
const testFunction = (req,res,next)=>{
    try {
      return res.send('Pokemon funcionando!');
    } catch (error) {
        next(error);
    };
  };

  //----------GET DE POKES DE DB + API ------------------
const getAllPoke = async(req,res,next)=>{
    try {
      const linksPokes=[];
      const pokesBD = await Pokemon.findAll();
      for(let i=1; i<=40; i++){
        linksPokes.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      };
      if(pokesBD||linksPokes.length){
        const datas = await Promise.all(linksPokes.map((link)=>axios.get(link)));
        const PokesApi = datas.map((elem)=>{
              return{
                  id: elem.data.id,
                  image: elem.data.sprites.front_shiny,
                  name: elem.data.name,
                  type: elem.data.types.map(t=>t.type.name),
                  hp: elem.data.stats[0].base_stat,
                  attack: elem.data.stats[1].base_stat,
                  defense: elem.data.stats[2].base_stat,
                  speed: elem.data.stats[5].base_stat,
                  height: elem.data.height,
                  weight: elem.data.weight
              }});
          let PokesTotal = [...pokesBD, ...PokesApi];
          return res.send(PokesTotal);          
      }else{
        return res.send('No hay Pokemones para mostrar!')
      }
    } catch (error) {
        next(error);
    }
};

//----POST DE UN NUEVO POKEMON A DB
 const postPoke = async(req,res,next)=>{

  const { name, hp, attack, defense,speed, height, weight, image, tipos} = req.body;
  if( !name || !hp || !attack || !defense || !speed || !height || !weight || !tipos){
      return res.status(404).send("Algunos campos necesitan ser llenados");
    }
  try {
      let pokeCreated = await Pokemon.create({
        name, hp, attack, defense, speed, height, weight, image
        });
        const tiposAll = await Tipo.findAll({
          where:{
            name: tipos
          }
        });
        pokeCreated.addTipo(tiposAll);
        res.status(200).send("se agrego el pokemon");
  } catch (error) {
      console.log(error);
      next(error);
    res.status(404).send('Error de Ingreso');
  }
 };

 //----GET DE API+DB CON RUTA POR ID----------------
 const getAllPokeId = async(req,res,next)=>{
  const id =req.params.id;
  try {
    const pokesBD = await Pokemon.findAll();

    if(id){
      if(id.length>5){
        let PokeIdBD= await Pokemon.findAll(p=>p.id == id);
        if(PokeIdBD){
          res.status(200).json(PokeIdBD);
        }else{
          res.status(404).send('Pokemon Inexistente!')
        }
      }else{
        const PokeId=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        PokeId = datas.map((elem)=>{
          return{
              id: elem.data.id,
              image: elem.data.sprites.other.home.front_default,
              name: elem.data.name,
              type: elem.data.types.map(t=>t.type.name),
              hp: elem.data.stats[0].base_stat,
              attack: elem.data.stats[1].base_stat,
              defense: elem.data.stats[2].base_stat,
              speed: elem.data.stats[5].base_stat,
              height: elem.data.height,
              weight: elem.data.weight
          }});
          return res.sen(PokeId)
      }
    }else{
        const getAll= getAllPoke();
        return res.status(200).json(getAll);      
    }
  } catch (error) {
      next(error);
  }
};

//----GET DE API+DB CON RUTA POR NAME---------------

  module.exports = {testFunction,getAllPoke,postPoke, getAllPokeId};
  