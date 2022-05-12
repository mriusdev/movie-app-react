import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'

import About from '../pages/About'
import Home from '../pages/Home'
import SearchedMovies from '../pages/SearchedMovies';
import Movie from '../pages/Movie'

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/search/:searchTerm" element={<SearchedMovies />}/>
          <Route path="/movie/:searchId" element={<Movie />}/>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default AnimatedRoutes