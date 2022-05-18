import { Container, SimpleGrid, Heading, Text, VStack } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState, FC } from 'react';
import { motion } from 'framer-motion'

import Search from "../components/Search";
import MovieCard from "../components/Movies/MovieCard";
import LoadingMovieCards from '../components/Movies/LoadingMovieCards';
import { IMovies } from '../ts/interfaces/movies_interfaces'

import { PTransitionsFade } from '../components/PageAnimations/PageTransitions'


const SearchedMovies:FC = () => {
  const { initialFade, animateFade, exitFade} = PTransitionsFade

  const params = useParams()
  const [currentData, setCurrentData] = useState<null | IMovies[]>(null)
  const [error, setError] = useState<string | null>(null)

  const performOperations = () => {
		setCurrentData(null)
		setError(null)
    axios.get(`/.netlify/functions/get-movie-list?search=${params.searchTerm}`)
    .then(res => {
			res.data.Error ? setError(res.data.Error) : setCurrentData(res.data.Search)
    })
  }

  const toTop = () => {
    window.scrollTo(0, 0);
  }

	useEffect(() => {
    performOperations()
    toTop()
    // eslint-disable-next-line
  }, [params.searchTerm])

  return (
    <>
      <motion.div
        initial={initialFade}
        animate={animateFade}
        exit={exitFade}
      >
        <Search
          searched={true}
        />
        <Container maxW="5xl" py={2}>
          <Heading size="lg" py={4}>
            Search results for '{params.searchTerm}'
          </Heading>
          <SimpleGrid minChildWidth='150px' spacing='40px'>
            { currentData && error === null ? currentData.map((movie: IMovies) => {
                return (
                  <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
                    <MovieCard
                      imageSrc={movie.Poster}
                      title={movie.Title}
                      releaseDate={movie.Year}
                    />
                  </Link>
                )
              })
              : !currentData && error ? (
                <>
                  <VStack height="50vh" alignItems="center" justify="center" id="searchedMoviesError">
                    <Heading color="red.600" size="lg" py={2}>
                    Error
                    </Heading>
                    <Text>
                      {error}
                    </Text>
                  </VStack>
                </>
            ) : (
              <LoadingMovieCards />
            )}
          </SimpleGrid>
        </Container>
      </motion.div>
      
    </>
  )
}

export default SearchedMovies