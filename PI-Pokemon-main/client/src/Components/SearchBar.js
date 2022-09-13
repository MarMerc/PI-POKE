import React from 'react';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getNamepoke } from '../Actions';
import Style from '../Styles/SearchBar.module.css';

export default function SearchBar() {

const dispatch = useDispatch();
const [name,setName] = useState('');
const pokemons = useSelector((state)=>state.pokemons);

function handleImputChange(e){
  e.preventDefault()
  setName(e.target.value)
  console.log(name)
}

function handleSubmit(e){
  e.preventDefault()
  if(name){
    dispatch(getNamepoke(name))
    if(pokemons.includes(name)){
      alert('Pokemon inexistente!')
    }
  }else{
    alert('Inrese un Poke Existente...')
  }
  setName('');
}

  return (
    <div className={Style.group}>
      <svg className={Style.icon} aria-hidden="true" viewBox="0 0 24 24"/>
      <input placeholder="Search" type="search" className={Style.input}  
            onChange={(e)=>handleImputChange(e)}
      />
      <button type='submit' onClick={(e)=>handleSubmit(e)}>Buscar</button>
    </div>
)
}