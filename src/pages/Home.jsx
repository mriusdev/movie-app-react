import { Container, SimpleGrid, Heading } from '@chakra-ui/react'

import Search from "../components/Search";
import MovieCard from "../components/Movies/MovieCard";
import Footer from '../components/Footer';

const Home = () => {
  const placeholder = [
    {
      imageSrc: 'https://www.themoviedb.org/t/p/w220_and_h330_face/izIMqapegdEZj0YVDyFATPR8adh.jpg',
      title: 'Vikings: Valhalla',
      releaseDate: "Feb 25, 2022"
    },
    {
      imageSrc: 'https://www.themoviedb.org/t/p/w220_and_h330_face/izIMqapegdEZj0YVDyFATPR8adh.jpg',
      title: 'Vikings: Valhalla',
      releaseDate: "Feb 25, 2022"
    },
    {
      imageSrc: 'https://www.themoviedb.org/t/p/w220_and_h330_face/izIMqapegdEZj0YVDyFATPR8adh.jpg',
      title: 'Vikings: Valhalla',
      releaseDate: "Feb 25, 2022"
    },
    {
      imageSrc: 'https://www.themoviedb.org/t/p/w220_and_h330_face/izIMqapegdEZj0YVDyFATPR8adh.jpg',
      title: 'Vikings: Valhalla',
      releaseDate: "Feb 25, 2022"
    },
    {
      imageSrc: 'https://www.themoviedb.org/t/p/w220_and_h330_face/izIMqapegdEZj0YVDyFATPR8adh.jpg',
      title: 'Vikings: Valhalla',
      releaseDate: "Feb 25, 2022"
    },
    {
      imageSrc: 'https://www.themoviedb.org/t/p/w220_and_h330_face/izIMqapegdEZj0YVDyFATPR8adh.jpg',
      title: 'Vikings: Valhalla',
      releaseDate: "Feb 25, 2022"
    },
  ]

  return (
    <>
      <Search />
      <Container maxW="5xl" py={2} id="featured">
        <Heading size="lg" py={4}>
          What's popular
        </Heading>
        <SimpleGrid minChildWidth='150px' spacing='40px'>
          {
            placeholder.map((movie, index) => {
              return (
                <MovieCard
                  key={index}
                  imageSrc={movie.imageSrc}
                  title={movie.title}
                  releaseDate={movie.releaseDate}
                />
              )
            })
          }
        </SimpleGrid>
      </Container>
    </>
  )
}

export default Home