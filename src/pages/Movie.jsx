import { useParams } from 'react-router-dom';
import { Container, Heading, Text, Image, Box, Flex, HStack } from '@chakra-ui/react'
import axios from 'axios'
import { useState, useEffect } from 'react'

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
            <Flex align="center" justify="space-between" columnGap="30px">
              { data ? (
                <>
                  <Image transformOrigin="center center" height="450px" width="300px" borderRadius={10} src={data.Poster} />
                  <Flex direction="column" align="flex-start" justify="center" columnGap="30px" rowGap="25px">
                    <Box>
                      <Heading size='xl'>
                        {data.Title} ({data.Year})
                      </Heading>
                      <Text fontSize='md'>
                        {data.Genre} - {data.Runtime} runtime
                      </Text>
                    </Box>
                    <HStack>
                      <Flex
                        align="center"
                        justify="center"
                        width="40px"
                        height="40px"
                        bg="black"
                        borderRadius="50%"
                        fontWeight="bold"
                      >
                        <Text color="white">
                          {data.Metascore}
                        </Text>
                      </Flex>
                      <Text fontWeight="bold">Metascore</Text>
                    </HStack>
                    <Box>
                      <Heading size='md' mb="10px">
                        Overview
                      </Heading>
                      <Text fontSize='md'>
                        {data.Plot}
                      </Text>
                    </Box>
                    <Box>
                      <Heading size='md' mb="10px">
                        Director(s)
                      </Heading>
                      <Text fontSize='md'>
                        {data.Director}
                      </Text>
                    </Box>
                    <Box>
                      <Heading size='md' mb="10px">
                        Actors
                      </Heading>
                      <Text fontSize='md'>
                        {data.Actors}
                      </Text>
                    </Box>
                  </Flex>
                </>
              ) : (
                <Heading>
                  Loading
                </Heading>
              )}
            </Flex>
          </Container>
        </Box>
      </Flex>
    </>
  )
}

export default Movie