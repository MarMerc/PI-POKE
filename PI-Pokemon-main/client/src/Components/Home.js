import React from 'react';
import NavBar from './NavBar.js';
import Header from './Header.js';
import Cards from './Cards.js';
import Style from '../Styles/Home.module.css';

export default function Home() {

  return (
    <div className={Style.container}>
      <Header />
      <div className={Style.cont2}>
        <NavBar />
        <Cards />
      </div>
    </div>
  )
}
