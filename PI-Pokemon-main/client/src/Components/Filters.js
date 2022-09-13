import React from 'react';
import Style from '../Styles/Filter.module.css';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { useState, useEffect } from 'react';
import {getAllPokemons,filterPokesByBd,sorterByName,sortAtk,filterMaxAtk} from '../Actions';


import { filterPokesByTypes } from '../Actions';

export default function Filters() {

    const dispatch= useDispatch();
    const type = useSelector((state)=>state.tipos);
    const [orden,setOrden] = useState(' ');
    const [currentPage,setCurrentPage]=useState(1);

    function handleFilterTypes(e){
        dispatch(filterPokesByTypes(e.target.value))
        setCurrentPage(1);
    }

    function handleFilterDB(e){
        dispatch(filterPokesByBd(e.target.value))
        setCurrentPage(1);
    }

    function handleSortAlph(e){
        e.preventDefault();
        dispatch(sorterByName(e.target.value));

        setOrden(`Ordenado ${e.target.value}`)
      }

      function handleSortAyk(e){
        e.preventDefault();
        dispatch(sortAtk(e.target.value));
      }

      function handleFilterAtk(e){
        dispatch(filterMaxAtk(e.target.value))
        setCurrentPage(1);
      }

  return (
    <div className={Style.selecVert}>
        <div className={Style.order}>
            <label>Alphab...</label>
            <select onChange={(e)=>handleSortAlph(e)} className={Style.orderAlph}>
            <option default onFocus value="DEFAULT">Order by ...</option>
                <option value='ascAlp' >A-Z</option>
                <option value='descAlp'>Z-A</option>
            </select>
        </div>   
        <div className={Style.order2}>
            <label>Attack...</label>
            <select onChange={e=>handleSortAyk(e)} className={Style.orderAttack}>
            <option default onFocus value='DEFAULT'>Order by ...</option>
                <option value='ascAtk' >MinToMax</option>
                <option value='descAtk'>MaxToMin</option>
            </select>
        </div> 
        <div className={Style.order3}>
            <label>Attack...</label>
            <select onChange={(e)=>handleFilterAtk(e)} className={Style.filterAtk}>
            <option default onFocus value="DEFAULT">Filter Attack by ...</option>
                <option value='all'>All</option>
                <option value='minAtk' >Min</option>
                <option value='maxAtk'>Max</option>
            </select>
        </div>  
        <div>
            <label>Types</label>
            <select onChange={e=>handleFilterTypes(e)}>
                <option default onFocus='DEFAULT'>Filter by...</option>
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
            <label>Origin</label>
            <select onChange={e=>handleFilterDB(e)}>
            <option default onFocus='DEFAULT'>Filter by...</option>
                <option value='all'>All</option>
                <option value='api'>De la Api</option>
                <option value='db'>De la DB</option>
            </select>
        </div> 
    </div>             
  )
}
