import React from 'react';
import './App.css';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import AllCharacters from './components/AllCharacters';


function App() {

  return (
    <div>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/characters' element={<AllCharacters />} />
    </Routes>
    </div>
  );
}

export default App;
