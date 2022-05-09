import { useParams } from 'react-router-dom';
import { Container,Box, Flex } from '@chakra-ui/react'
import axios from 'axios'
import { useState, useEffect } from 'react'

import SingleMovie from '../components/Movie/SingleMovie';
import LoadingSingleMovie from '../components/Movie/LoadingSingleMovie';

const Movie = () => {
  const params = useParams()
  const [data, setData] = useState(null)

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
  }, [params.searchId])

  return (
    <>
      <Flex align="center" height="100vh">
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