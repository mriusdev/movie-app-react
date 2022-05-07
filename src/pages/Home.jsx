import { Container, SimpleGrid } from '@chakra-ui/react'

import Search from "../components/Search";
import MovieCard from "../components/MovieCard";

const Home = () => {
  return (
    <>
      <Search />
      <Container maxW="5xl" py={2}>
        <SimpleGrid minChildWidth='150px' spacing='40px'>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </SimpleGrid>
      </Container>
    </>
  )
}

export default Home