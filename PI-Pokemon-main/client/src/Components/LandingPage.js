import React from 'react';
import {Link} from 'react-router-dom';
import Home from './Home.js';
import Style from '../Styles/LandingPage.module.css';

export default function LandingPage() {
  
  return (
    <div className={Style.container}>
      <img className={Style.Fondo} src='https://images6.alphacoders.com/479/thumbbig-479708.webp' alt='imgPresentacion' />
      <h1>Poke App</h1>
      <Link to='/home'>
        <button className={Style.btnWelcome}>Ingresar</button>
      </Link>
    </div>
  )
}
