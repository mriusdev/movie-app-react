import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Flex } from '@chakra-ui/react'


import Header from "./components/Header/Header";
// import About from './pages/About'
// import Home from './pages/Home'
// import SearchedMovies from './pages/SearchedMovies';
// import Movie from './pages/Movie'
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';


function App() {
  return (
    <>
      <Router>
        <Flex direction="column" height="100vh" spacing="0">
          <Header />
          <AnimatedRoutes />
          <Footer />
        </Flex>
      </Router>
    </>
  );
}

export default App;
