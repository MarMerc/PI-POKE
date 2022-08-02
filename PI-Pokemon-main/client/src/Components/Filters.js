import React from 'react';
import Style from '../Styles/Filter.module.css';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { useState, useEffect } from 'react';
import {getAllPokemons,filterPokesByBd,sorterByName,sortAtk} from '../Actions';


import { filterPokesByTypes } from '../Actions';

export default function Filters() {

    const dispatch= useDispatch();
    const [orden,setOrden] = useState(' ');
    const [currentPage,setCurrentPage]=useState(1);

    function handleFilterTypes(e){
        dispatch(filterPokesByTypes(e.target.value))
    }

    function handleFilterDB(e){
        dispatch(filterPokesByBd(e.target.value))
    }

    function handleSortAlph(e){
        e.preventDefault();
        dispatch(sorterByName(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
      }

      function handleSortAyk(e){
        e.preventDefault();
        dispatch(sortAtk(e.target.value));
      }

  return (
    <div className={Style.selecVert}>
        <div className={Style.order}>
            <select onChange={(e)=>handleSortAlph(e)} className={Style.orderAlph}>
                {/* <option disabled onFocus>Order Alph...</option> */}
                <option value='ascAlp' >Asc</option>
                <option value='descAlp'>Desc</option>
            </select>
        </div>   
        <div className={Style.order2}>
            <select onChange={e=>handleSortAyk(e)} className={Style.orderAttack}>
                {/* <option disabled onFocus='true'>Order Atk...</option> */}
                <option value='ascAtk' >Asc</option>
                <option value='descAtk'>Desc</option>
            </select>
        </div> 
        <div>
            <select onChange={e=>handleFilterTypes(e)}>
                {/* <option disabled onFocus='true'>Order by types...</option> */}
                <option value='all'>All</option>
                <option value='normal' >Normal</option>
                <option value='fighting'>Fighting</option>
                <option value='flying'>Flying</option>
                <option value='poison'>Poison</option>
                <option value='ground'>Ground</option>
                <option value='rock'>Rock</option>
                <option value='bug'>Bug</option>
                <option value='ghost'>Ghost</option>
                <option value='steel'>Steel</option>
                <option value='fire'>Fire</option>
                <option value='water'>Water</option>
                <option value='grass'>Grass</option>
                <option value='electric'>Electric</option>
                <option value='psychic'>Psychic</option>
                <option value='ice'>Ice</option>
                <option value='dragon'>Dragon</option>
                <option value='dark'>Dark</option>
                <option value='fairy'>Fairy</option>
                <option value='unknown'>Unknown</option>
                <option value='Shadow'>Shadow</option>
            </select>
        </div> 
        <div>
            <select onChange={e=>handleFilterDB(e)}>
                {/* <option disabled onFocus='true'>Origin...</option> */}
                <option value='all'>All</option>
                <option value='api'>De la Api</option>
                <option value='db'>De la DB</option>
            </select>
        </div> 
    </div>             
  )
}
