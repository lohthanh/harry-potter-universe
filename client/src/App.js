import React from 'react';
import './App.css';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import AllCharacters from './components/AllCharacters';
import Quiz from './components/Quiz';
// import Dashboard from './views/Dashboard';


function App() {

  return (
    <div>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/characters' element={<AllCharacters />} />
      <Route path='/quiz' element={ <Quiz /> } />
      {/* <Route path='/dashboard' element={ <Dashboard /> } /> */}
    </Routes>
    </div>
  );
}

export default App;
