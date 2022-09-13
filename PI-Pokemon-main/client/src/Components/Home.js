import React, { useState } from 'react';
import NavBar from './NavBar.js';
import Header from './Header.js';
import Cards from './Cards.js';
import Style from '../Styles/Home.module.css';
import { getAllPokemons,filterPokesByBd } from '../Actions';
import { useSelector } from 'react-redux';

export default function Home() {

  const {pokemons} = useSelector((state)=>state);
  
  const [currentPage,setCurrentPage]=useState(1);
  const [pokemonsPerPage,setPokemonsPerPage]=useState(12);
  const indexOfLastPokemons = currentPage*pokemonsPerPage;
  const indexOfFirstPokemons = indexOfLastPokemons - pokemonsPerPage;
  const currentPokemons = pokemons.slice(indexOfFirstPokemons,indexOfLastPokemons);
  
  const paginado=(pageNumber)=>{
    setCurrentPage(pageNumber);
    console.log(setCurrentPage)
  }

  return (
    <div className={Style.container}>
      <Header />
      <div className={Style.cont2}>
        <NavBar />
        <Cards 
          currentPage={currentPage}
          currentPokemons={currentPokemons}
          pokemonsPerPage={pokemonsPerPage}
          setPokemonsPerPage={setPokemonsPerPage}
          paginado={paginado}
          pokemons={pokemons}
        />
      </div>
    </div>
  )
}
