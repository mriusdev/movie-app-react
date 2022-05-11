import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Flex } from '@chakra-ui/react'


import Header from "./components/Header/Header";
import About from './pages/About'
import Home from './pages/Home'
import SearchedMovies from './pages/SearchedMovies';
import Movie from './pages/Movie'
import Footer from './components/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Flex direction="column" height="100vh" spacing="0">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/search/:searchTerm" element={<SearchedMovies />}/>
            <Route path="/movie/:searchId" element={<Movie />}/>
          </Routes>
          <Footer />
        </Flex>
      </BrowserRouter>
    </>
  );
}

export default App;
