import React from 'react';
import Style from '../Styles/Details.module.css';
import {Link} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDetail,resetDetail } from '../Actions';


export default function Details(props) {

  const id=props.match.params.id;
  const dispatch= useDispatch();

  useEffect(()=>{
    dispatch(getDetail(id));
    return()=>{
      dispatch(resetDetail());
    }
  },[dispatch]);

  const detailPokemon = useSelector ((state)=>state.detail)

  return (
    <div className={Style.gral}>
      <div className={Style.container}>
          {
            (detailPokemon[0]||detailPokemon.name)?
              (  id.includes('-')?
              (<div>
                  <h1 className={Style.title}>{detailPokemon.name}</h1>
                  <div className={Style.columnas}>
                    <div className={Style.stadistic}>
                      <div className={Style.stadistic_horiz}>
                        <h4>Vida: </h4>
                        <h2>{detailPokemon[0]?.hp}</h2>
                      </div>
                      <div className={Style.stadistic_horiz}>
                        <h4>Ataque: </h4>
                        <h2>{detailPokemon[0]?.attack}</h2>
                      </div>
                      <div className={Style.stadistic_horiz}>
                        <h4>Defensa: </h4>
                        <h2>{detailPokemon[0]?.defense}</h2>
                      </div>
                      <div className={Style.stadistic_horiz}>
                        <h4>Velocidad: </h4>
                        <h2>{detailPokemon[0]?.speed}</h2>
                      </div>
                    </div>
                    <div className={Style.filas}>
                      <img src={detailPokemon[0]?.image} className={Style.imgPoke} alt='pokemon vista' width='400px' height='500px'/>
                      <h4 className={Style.tipos}>Tipo: </h4>
                      <h3>{detailPokemon[0]?.types.map(t=>t.name)}</h3>
                    </div>
                    <div className={Style.apariencia}>
                      <div className={Style.stadistic_horiz}>
                        <h4>Peso:</h4>
                        <h2>{detailPokemon[0]?.weight}</h2>
                      </div>
                      <div className={Style.stadistic_horiz}>
                        <h4>Altura:</h4>
                        <h2>{detailPokemon[0]?.height}</h2>
                      </div>
                    </div>
                  </div>
              </div>) 
              :(<div>
                  <h1 className={Style.title}>{detailPokemon.name}</h1>
                  <div className={Style.columnas}>
                    <div className={Style.stadistic}>
                      <div className={Style.stadistic_horiz}>
                        <h4>Vida: </h4>
                        <h2>{detailPokemon.hp}</h2>
                      </div>
                      <div className={Style.stadistic_horiz}>
                        <h4>Ataque: </h4>
                        <h2>{detailPokemon.attack}</h2>
                      </div>
                      <div className={Style.stadistic_horiz}>
                        <h4>Defensa: </h4>
                        <h2>{detailPokemon.defense}</h2>
                      </div>
                      <div className={Style.stadistic_horiz}>
                        <h4>Velocidad: </h4>
                        <h2>{detailPokemon.speed}</h2>
                      </div>
                    </div>
                    <div className={Style.filas}>
                      <img src={detailPokemon.image} className={Style.imgPoke} alt='pokemon vista' width='400px' height='500px'/>
                      <h4 className={Style.tipos}>Tipo: </h4>
                      <h3>{detailPokemon.type}</h3>
                    </div>
                    <div className={Style.apariencia}>
                      <div className={Style.stadistic_horiz}>
                        <h4>Peso:</h4>
                        <h2>{detailPokemon.weight}</h2>
                      </div>
                      <div className={Style.stadistic_horiz}>
                        <h4>Altura:</h4>
                        <h2>{detailPokemon.height}</h2>
                      </div>
                    </div>
                  </div>
              </div>))
              :(
                  <div className={Style.loading}>
                      <p>Loading ...</p>
                      {/* <img src='https://c.tenor.com/Hg2Mb_mQdhYAAAAi/pokemon-pokeball.gif' alt="" /> */}
                  </div>
                  )
          }
          <Link to='/home' className={Style.Link}>
              <button className={Style.btn}>Back</button>
          </Link>
      </div>      
    </div>
  );
};