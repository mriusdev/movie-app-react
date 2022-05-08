import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Header from "./components/Header/Header";
import About from './pages/About'
import Home from './pages/Home'
import SearchedMovies from './pages/SearchedMovies';
import Movie from './pages/Movie'
import Search from './components/Search';
import Footer from './components/Footer';


function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/search/:searchTerm" element={<SearchedMovies />}/>
          <Route path="/movie/:searchId" element={<Movie />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
