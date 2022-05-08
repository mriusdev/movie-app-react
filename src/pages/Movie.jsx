import { useParams } from 'react-router-dom';
import { Container, Heading, Text, Image, Box, Flex, HStack } from '@chakra-ui/react'
import axios from 'axios'
import { useState, useEffect } from 'react'

import SingleMovie from '../components/Movie/SingleMovie';
import LoadingSingleMovie from '../components/Movie/LoadingSingleMovie';

const Movie = () => {
  const params = useParams()
  // placeholder data. This needs to get converted to redux code
  const [data, setData] = useState(null)

  useEffect(() => {
    performOperations()
  }, [params.searchId])


  const performOperations = () => {
    axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${params.searchId}`)
    .then(res => {
      console.log(res);
      setData(res.data)
    })
  }

  return (
    <>
      <Flex align="center" height="100vh">
        <Box py="35px" bg="yellow.300" width="100%">
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