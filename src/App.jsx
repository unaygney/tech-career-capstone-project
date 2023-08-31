import {Routes , Route } from 'react-router-dom'
// Pages
import HomePage from './pages/Home/HomePage';
import TheaterPage from './pages/Theater/TheaterPage';
import CinemaPage from './pages/Cinema/CinemaPage';
import ExhibitPage from './pages/Exhibit/ExhibitPage';
import ConcertPage from './pages/Concert/ConcertPage';
import DetailEvent from './pages/Detail-Event/DetailEvent';
function App() {
 

  return (
<Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/theater' element={<TheaterPage/>} />
    <Route path='/cinema' element={<CinemaPage/>} />
    <Route path='/exhibit' element={<ExhibitPage/>} />
    <Route path='/concert' element={<ConcertPage/>} />
    <Route path='/*' element={<HomePage/>} />
    <Route path='/event/:id' element={<DetailEvent/>} />
</Routes>
  );
}

export default App;
