import { Container, SimpleGrid, Heading } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react';

import Search from "../components/Search";
import MovieCard from "../components/MovieCard";
import Footer from '../components/Footer';

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
  let params = useParams()

  useEffect(() => {
    performOperations()
		console.log(window.location.pathname);
  }, [params.searchTerm])

  const [currentData, setData] = useState([])
  

  const performOperations = () => {
    axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${params.searchTerm}`)
    .then(res => {
      setData(res.data.Search)
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
            {currentData.map((movie, index) => {
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
            }
        </SimpleGrid>
      </Container>
    </>
  )
}

export default SearchedMovies