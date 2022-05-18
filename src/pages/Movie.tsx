import { useParams } from 'react-router-dom';
import { Container,Box, Flex } from '@chakra-ui/react'
import axios from 'axios'
import { useState, useEffect, FC } from 'react'
import { motion } from 'framer-motion';

import SingleMovie from '../components/Movie/SingleMovie';
import LoadingSingleMovie from '../components/Movie/LoadingSingleMovie';
import { IMovie } from '../ts/interfaces/movie_interfaces'

import { PTransitionsFade } from '../components/PageAnimations/PageTransitions'

const Movie:FC = () => {
  const { initialFade, animateFade, exitFade} = PTransitionsFade

  const params = useParams()
  const [data, setData] = useState<null | IMovie>(null)

  const performOperations = () => {
    axios.get(`/.netlify/functions/get-single-movie?id=${params.searchId}`)
    .then(res => {
      setData(res.data)
    })
  }

  const toTop = () => {
    window.scrollTo(0, 0);
  }


  useEffect(() => {
    performOperations()
    toTop()
    // eslint-disable-next-line
  }, [params.searchId])

  return (
    <>
      <Flex
        as={motion.div}
        align="center"
        height="100vh"
        initial={initialFade}
        animate={animateFade}
        exit={exitFade}
      >
        <Box py="35px" width="100%">
          <Container
            maxWidth="5xl"
          >
            { data ? (
              <SingleMovie
                data={data}
              />
            ) : (
              <LoadingSingleMovie />
            )}
          </Container>
        </Box>
      </Flex>
    </>
  )
}

export default Movie