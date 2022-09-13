import React from 'react';
import {Link} from 'react-router-dom';
import Home from './Home.js';
import Style from '../Styles/LandingPage.module.css';

export default function LandingPage() {
  
  return (
    <div className={Style.container}>
      <div>
        <Link to='/home'>
          <img className={Style.Fondo} src='https://i.pinimg.com/originals/9e/39/23/9e3923825ba4a4fa967858f980b8460f.png' alt='imgPresentacion' />
        </Link>        
      </div>
    </div>
  )
}

