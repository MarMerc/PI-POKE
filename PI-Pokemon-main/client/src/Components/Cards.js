import React from 'react'
import { getAllPokemons,filterPokesByBd } from '../Actions';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Card from './Card.js';
import Paginated from './Paginated.js';
import Style from '../Styles/Cards.module.css';

export default function Cards({currentPokemons,pokemonsPerPage,setPokemonsPerPage,paginado,pokemons,currentPage,pageNumber}) {
  
  const dispatch= useDispatch();

  useEffect(()=>{
    if(pokemons.length===0){
    dispatch(getAllPokemons())};
},[dispatch]);

  return (
    <div className={Style.paginated}>
        <div className={Style.pageList}>
          <Paginated 
            pokemonsPerPage = {pokemonsPerPage}
            statePokes={pokemons.length}
            paginado={paginado}
          />      
      </div>
      <div className={Style.containerCards}>
        {
          currentPokemons[0]? currentPokemons.map(p=>{
            return(
              <div key={p.id}>
                
                  <Card 
                    id={p.id}
                    name={p.name}
                    image={p.image}
                    types={p.types}   
                    attack={p.attack}
                  />
                
              </div>
              )
            }):(        
              <div className="loading">
                <p>Loading...</p>
                <img src='https://c.tenor.com/Hg2Mb_mQdhYAAAAi/pokemon-pokeball.gif' alt="" />
              </div>)
          }
      </div>      
    </div>
  )
}
