import React from 'react';
import Home from './component/Home';
import Favourites from './component/Favourites';
import CharacterDetails from './component/characters/characterDetails/CharacterDetails';
import { ContextProvider } from './context/Context'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CharacterQoutes from './component/characterQuotes/CharacterQuotes';
import './App.css'
function App() {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route path='/' element={<Home title='Characters' />} />
          <Route path='/favourites' element={<Favourites />} />
          <Route path='/api/characters/:characterId' element={<CharacterDetails />} />
          <Route path='/api/characterQuotes/:autho' element={<CharacterQoutes />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;