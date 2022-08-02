import React from 'react';
import Filters from './Filters.js';
import {Link} from 'react-router-dom';
import Style from '../Styles/Nav.module.css';

export default function NavBar() {
  return (
    <div className={Style.Nav}>

        <Filters />
        <Link to='/create'>
          <button className={Style.btn}>Nuevo</button>
        </Link>  
    </div>
  )
}
