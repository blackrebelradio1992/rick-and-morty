import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { Outlet, Link } from "react-router-dom";
import React from 'react';
// import WatchTheShow from './components/StatsCard';
import CharactersPage from './pages/CharactersPage';



function App() {
  const [favorites, setFavorites] = useState([])

  return (
    <>
        <h1>Rick and Morty</h1>
    <nav>
    <ul>
      <li>
        <Link to='/'>HomePage</Link>
      </li>
      <li>
        <Link to='AboutPage/'>About</Link>
      </li>
      <li>
        <Link to='characters/'>Characters</Link>
      </li>
      <li>
        <Link to='favorites/'>Favs</Link>
      </li>
    </ul>
    </nav>
    <div>
      {/* <WatchTheShow /> */}
      <Outlet context={{favorites, setFavorites}}/>
    </div>
    </>
  )
}

export default  App

