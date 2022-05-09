import { Container, SimpleGrid, Heading, Text, VStack } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react';

import Search from "../components/Search";
import MovieCard from "../components/Movies/MovieCard";
import LoadingMovieCards from '../components/Movies/LoadingMovieCards';


const SearchedMovies = () => {
  const params = useParams()
  const [currentData, setData] = useState(null)
  const [error, setError] = useState(null)

  const performOperations = () => {
		setData(null)
		setError(null)
    axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${params.searchTerm}`)
    .then(res => {
			console.log(res);
			res.data.Error ? setError(res.data.Error) : setData(res.data.Search)
    })
  }

	useEffect(() => {
    performOperations()
  }, [params.searchTerm])

  return (
    <>
      <Search
				searched={true}
			/>
      <Container maxW="5xl" py={2}>
        <Heading size="lg" py={4}>
          Search results for '{params.searchTerm}'
        </Heading>
        <SimpleGrid minChildWidth='150px' spacing='40px'>
            { currentData && error === null ? currentData.map(movie => {
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
    </>
  )
}

export default SearchedMovies