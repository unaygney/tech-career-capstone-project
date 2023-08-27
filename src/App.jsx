import {Routes , Route } from 'react-router-dom'
// Pages
import HomePage from './pages/HomePage';
import TheaterPage from './pages/TheaterPage';
import CinemaPage from './pages/CinemaPage';
import ExhibitPage from './pages/ExhibitPage';
import ConcertPage from './pages/ConcertPage';

function App() {
 

  return (
<Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/theater' element={<TheaterPage/>} />
    <Route path='/cinema' element={<CinemaPage/>} />
    <Route path='/exhibit' element={<ExhibitPage/>} />
    <Route path='/concert' element={<ConcertPage/>} />
</Routes>
  );
}

export default App;
