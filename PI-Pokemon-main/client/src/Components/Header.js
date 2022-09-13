import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllPokemons,filterPokesByBd} from '../Actions';
import Style from '../Styles/Header.module.css';
import Search from './SearchBar.js';

export default function Header() {

  const dispatch= useDispatch();

  function handleClickReset(e){
    e.preventDefault();
    dispatch(getAllPokemons());
  };

  return (
    <div className={Style.headerContainer}>
      <div className={Style.btnera}>
        <button className={Style.btn} onClick={e=>{handleClickReset(e)}}>Resetear</button>
      </div>
      <img src='https://i.pinimg.com/originals/9e/39/23/9e3923825ba4a4fa967858f980b8460f.png' width='400px' height='200px' alt='logo' />
      <Search />
    </div>
  )
}