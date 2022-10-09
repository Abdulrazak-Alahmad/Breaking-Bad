import React from 'react';
import Home from './component/Home';
import Favourites from './component/Favourites';
import CharacterDetails from './component/characters/characterDetails/CharacterDetails';
import { FavouritesContextProvider } from './context/ContextFavourite'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CharacterQoutes from './component/characterQuotes/CharacterQuotes';
function App() {
  return (
    <Router>
      <FavouritesContextProvider>
        <Routes>
          <Route path='/' element={<Home title='Characters' />} />
          <Route path='/favourites' element={<Favourites title='Favourites' />} />
          <Route path='/api/characters/:characterId' element={<CharacterDetails />} />
          <Route path='/api/characterQuotes/:autho' element={<CharacterQoutes />} />
        </Routes>
      </FavouritesContextProvider>
    </Router>

  );
}

export default App;