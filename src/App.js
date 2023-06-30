import React from 'react';
import './App.css';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import AllCharactersList from './views/AllCharactersList'
import AllMoviesList from './views/AllMoviesList';
import AllBooksList from './views/AllBooksList';
import AllHousesList from './views/AllHousesList';
import AllSpellsList from './views/AllSpellsList';
import AllPotionsList from './views/AllPotionsList';
import Quiz from './components/Quiz';
import OneMovie from './views/OneMovie';


function App() {

  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/characters' element={<AllCharactersList />} />
      <Route path='/movies' element={<AllMoviesList />} />
      <Route path='/books' element={<AllBooksList />} />
      <Route path='/houses' element={<AllHousesList />} />
      <Route path='/spells' element={<AllSpellsList />} />
      <Route path='/potions' element={<AllPotionsList />} />
      <Route path='/quiz' element={<Quiz />} />
      <Route path='/movies/:id' element={<OneMovie />} />
    </Routes>

    </div>
  );
}

export default App;
