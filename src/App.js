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
import AllSpeciesList from './views/AllSpeciesList';
import AllWandsList from './views/AllWandsList';
import Quiz from './components/Quiz';


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
      <Route path='/species' element={<AllSpeciesList />} />
      <Route path='/wands' element={<AllWandsList />} />
      <Route path='/quiz' element={<Quiz />} />
    </Routes>

    </div>
  );
}

export default App;
