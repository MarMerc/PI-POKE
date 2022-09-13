const axios = require('axios');
const { Op } = require("sequelize");
const { Pokemon,Type } =require ('../db');
const {
    API_URL,API_URL_ID,API_URL_NAME,API_URL_TIPO,IMG_DEFAULT
  } = process.env;

  //TEST DE FUNCIONAMIENTO
const testFunction = (req,res,next)=>{
    try {
      return res.send('Pokemon funcionando!');
    } catch (error) {
        next(error);
    };
  };

  //----------GET DE POKES DE DB + API Otra version------------------
  const getAllPoke = async(req,res,next)=>{
    try {
      const linksPokes=[];
      const pokesBD = await Pokemon.findAll({
        include: {
          model: Type,
          attributes: ["name"],
          through: { attributes: [] },
        },
      });
      const pokesBDfinal=pokesBD.map(elem=>{
        return{
          id: elem.id,
          image: elem.image,
          name: elem.name,
          types: elem.types.map(t=>t.name),
          hp: elem.hp,
          attack: elem.attack,
          defense: elem.defense,
          speed: elem.speed,
          height: elem.height,
          weight: elem.weight
        }
      })

      console.log(pokesBDfinal)

      for(let i=1; i<=40; i++){
        linksPokes.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      };
      if(pokesBDfinal.length||linksPokes.length){
        const datas = await Promise.all(linksPokes.map((link)=>axios.get(link)));
        const PokesApi = datas.map((elem)=>{
              return{
                  id: elem.data.id,
                  image: elem.data.sprites.other.home.front_shiny,
                  name: elem.data.name,
                  types: elem.data.types.map(t=>t.type.name),
                  hp: elem.data.stats[0].base_stat,
                  attack: elem.data.stats[1].base_stat,
                  defense: elem.data.stats[2].base_stat,
                  speed: elem.data.stats[5].base_stat,
                  height: elem.data.height,
                  weight: elem.data.weight
              }});
          let PokesTotal = [...PokesApi,...pokesBDfinal,];
          
          return (PokesTotal);          
      }else{
        return res.send('No hay Pokemones para mostrar!')
      }       
    } catch (error) {
        console.log(error);
    }
};
 

//------POST DE POKEMONS-----------------
const postPoke = async(req,res,next)=>{

  var { name, hp, attack, defense,speed, height, weight, image, type} = req.body;

  if(!image) {image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxBXIXwPfPiXIHuiTfpSoZKC8eFm9AKXaxvw&usqp=CAU'}

  if( !name || !hp || !attack || !defense || !speed || !height || !weight || !type){
      return res.status(404).send("Algunos campos necesitan ser llenados");
    }
  try {
      let pokeCreated = await Pokemon.create({
        name, hp, attack, defense, speed, height, weight, image
        });
        const tiposAll = await Type.findAll({
          where:{
            name: type
          }
        });
        pokeCreated.addType(tiposAll);
        return res.status(200).send(pokeCreated);
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
    if(!id.includes('-')){
      const pokeId= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return res.send({
        id: pokeId.data.id,
        image: pokeId.data.sprites.other.home.front_shiny,
        name: pokeId.data.name,
        type: pokeId.data.types.map(t=>t.type.name),
        hp: pokeId.data.stats[0].base_stat,
        attack: pokeId.data.stats[1].base_stat,
        defense: pokeId.data.stats[2].base_stat,
        speed: pokeId.data.stats[5].base_stat,
        height: pokeId.data.height,
        weight: pokeId.data.weight
      });
    }else{
      const pokesBD = await Pokemon.findAll({include:Type});
      const pokeBDId= await pokesBD.filter(p=>p.id===id);
      return res.send(pokeBDId);
    }
  } catch (error) {
      next(error);
  }
};

//----GET DE API+DB CON RUTA POR NAME---------------
const getAllPokeName = async(req,res,next)=>{
  const pokesTotal = await getAllPoke();
  const {name} = req.query;
  
  if(name){
    try {
      let poke= await pokesTotal.filter(p=>p.name.toLowerCase().includes(name.toLowerCase()));

      return res.send(poke);
    } catch (error) {
      console.log(error);
    }
  }else{
      try {
        res.send(pokesTotal);
      } catch (error) {
        console.log(error);
      }
    }
  };
  


   module.exports = {testFunction,getAllPoke,postPoke, getAllPokeId,getAllPokeName};