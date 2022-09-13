import React from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import Style from '../Styles/Card.module.css';

export default function Card({id,name,image,types,attack}) {

  return (
        <div className={Style.card}  >
          <div className={Style.Name}key={id}>
          
            <h3>{name}</h3>
           
          </div>
          <div>
            <Link to={`/pokemons/${id}`}>
              <img src={image} className={Style.imgPoke} alt='not found' width='130px' height='130px'/>
            </Link>
          </div>
          <div className={Style.tipos}>
            {types.map(t=>' *'+t+' ')}
          </div>
          <div className={Style.attack}>
            <h6>Attack: </h6><h4>{attack}</h4>
          </div>
        </div>         
  );
};