import { Container, SimpleGrid, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import Search from "../components/Search";
import MovieCard from "../components/Movies/MovieCard";

const Home = () => {
  const placeholderData = [
    {
			Title: "Moon Knight",
			Year: "2022",
			imdbID: "tt10234724",
			Type: "series",
			Poster: "https://m.media-amazon.com/images/M/MV5BNGM2ZjJmZDQtNTI5MS00ZTI0LTkyNjktM2RlYWY0YTY5MTYzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
		},
    {
			Title: "The Batman",
			Year: "2022",
			imdbID: "tt1877830",
			Type: "movie",
			Poster: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg"
		},
    {
			Title: "The Walking Dead",
			Year: "2010–2022",
			imdbID: "tt1520211",
			Type: "series",
			Poster: "https://m.media-amazon.com/images/M/MV5BZmU5NTcwNjktODIwMi00ZmZkLTk4ZWUtYzVjZWQ5ZTZjN2RlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
		},
    {
			Title: "Lucifer",
			Year: "2016–2021",
			imdbID: "tt4052886",
			Type: "series",
			Poster: "https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
		},
    {
			Title: "Halo",
			Year: "2022–",
			imdbID: "tt2934286",
			Type: "series",
			Poster: "https://m.media-amazon.com/images/M/MV5BYzhlOTkzZDMtNDYxYS00NTY2LWJjZDEtNjI3NmE3MTI2NGU2XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg"
		},
    {
			Title: "Peaky Blinders",
			Year: "2013–2022",
			imdbID: "tt2442560",
			Type: "series",
			Poster: "https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_SX300.jpg"
		}
  ]

  const toTop = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    toTop()
  }, [])

  return (
    <>
      <Search />
      <Container maxW="5xl" py={2} id="featured">
        <Heading size="lg" py={4}>
          What's popular
        </Heading>
        <SimpleGrid minChildWidth='150px' spacing='40px'>
          {
            placeholderData.map(movie => {
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

export default Home