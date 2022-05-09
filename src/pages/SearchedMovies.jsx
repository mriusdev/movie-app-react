import { Container, SimpleGrid, Heading, Text, VStack } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react';

import Search from "../components/Search";
import MovieCard from "../components/Movies/MovieCard";
import Footer from '../components/Footer';
import LoadingMovieCards from '../components/Movies/LoadingMovieCards';

// movies will get shown by router's params
const SearchedMovies = () => {
  // const search = [
  //   {
	// 		"Title": "Batman Begins",
	// 		"Year": "2005",
	// 		"imdbID": "tt0372784",
	// 		"Type": "movie",
	// 		"Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
	// 	},
	// 	{
	// 		"Title": "Batman v Superman: Dawn of Justice",
	// 		"Year": "2016",
	// 		"imdbID": "tt2975590",
	// 		"Type": "movie",
	// 		"Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
	// 	},
	// 	{
	// 		"Title": "Batman",
	// 		"Year": "1989",
	// 		"imdbID": "tt0096895",
	// 		"Type": "movie",
	// 		"Poster": "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"
	// 	},
	// 	{
	// 		"Title": "The Batman",
	// 		"Year": "2022",
	// 		"imdbID": "tt1877830",
	// 		"Type": "movie",
	// 		"Poster": "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg"
	// 	},
	// 	{
	// 		"Title": "Batman Returns",
	// 		"Year": "1992",
	// 		"imdbID": "tt0103776",
	// 		"Type": "movie",
	// 		"Poster": "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"
	// 	},
	// 	{
	// 		"Title": "Batman & Robin",
	// 		"Year": "1997",
	// 		"imdbID": "tt0118688",
	// 		"Type": "movie",
	// 		"Poster": "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"
	// 	},
	// 	{
	// 		"Title": "Batman Forever",
	// 		"Year": "1995",
	// 		"imdbID": "tt0112462",
	// 		"Type": "movie",
	// 		"Poster": "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
	// 	},
	// 	{
	// 		"Title": "The Lego Batman Movie",
	// 		"Year": "2017",
	// 		"imdbID": "tt4116284",
	// 		"Type": "movie",
	// 		"Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
	// 	},
	// 	{
	// 		"Title": "Batman: The Animated Series",
	// 		"Year": "1992–1995",
	// 		"imdbID": "tt0103359",
	// 		"Type": "series",
	// 		"Poster": "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"
	// 	},
  // ]
  const params = useParams()
  const [currentData, setData] = useState(null)
  const [error, setError] = useState(null)


  useEffect(() => {
    performOperations()
		console.log(window.location.pathname);
  }, [params.searchTerm])

  

  const performOperations = () => {
		setData(null)
		setError(null)
    axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${params.searchTerm}`)
    .then(res => {
			console.log(res);
			res.data.Error ? setError(res.data.Error) : setData(res.data.Search)
    })
  }

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
            { currentData && error === null ? currentData.map((movie, index) => {
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