import axios from 'axios'
import { useState } from 'react'
import { Box, Container, VStack, HStack, Heading, Input, Button } from '@chakra-ui/react'



const Search = () => {
  
  const [searchTerm, setSearchTerm] = useState('')

  const performOperations = async () => {
    axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchTerm}`)
    .then(res => {
      console.log(res);
    })
  }

  return (
    <>
      <Box
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundImage="url('https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/hPea3Qy5Gd6z4kJLUruBbwAH8Rm.jpg')"
      >
        <Container
          maxW="5xl"
          py="85px"
          
        >
          <VStack w="100%" color="white" justify="space-between" rowGap="30px">
            <Box w="100%" textAlign="left">
              <Heading>Welcome!</Heading>
              <Heading size='md'>Millions of movies, TV shows and people to discover. Explore now.</Heading>
            </Box>
            <HStack w="100%">
              <Input bg="white" color="black" placeholder='Search for any movie or tv show' onChange={(e) => setSearchTerm(e.target.value)}/>
              <Button onClick={performOperations} colorScheme='teal' size='sm'>
                Search
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </>
  )
}

export default Search