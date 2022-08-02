import React from 'react'
import { getAllPokemons,filterPokesByBd } from '../Actions';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Card from './Card.js';
import Paginated from './Paginated.js';
import Style from '../Styles/Cards.module.css';

export default function Cards() {
  
  const dispatch= useDispatch();
  const statePokes = useSelector((state)=>state.pokemons);
  const [orden,setOrden] = useState('');
  const [currentPage,setCurrentPage]=useState(1);
  const [pokemonsPerPage,setPokemonsPerPage]=useState(12);
  const indexOfLastPokemons = currentPage*pokemonsPerPage;
  const indexOfFirstPokemons = indexOfLastPokemons - pokemonsPerPage;
  const currentPokemons = statePokes.slice(indexOfFirstPokemons,indexOfLastPokemons);
  const paginado=(pageNumber)=>{
    setCurrentPage(pageNumber);
  }

  useEffect(()=>{
    if(statePokes.length === 0) 
    dispatch(getAllPokemons());
},[dispatch]);


  return (
    <div className={Style.paginated}>
        <div className={Style.pageList}>
          <Paginated 
            pokemonsPerPage = {pokemonsPerPage}
            statePokes={statePokes.length}
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
            }):(<h2>No Hay Nada!</h2>)
          }
      </div>      
    </div>

  )
}
