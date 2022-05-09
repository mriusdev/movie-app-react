import { useState } from 'react'
import { Box, Container, VStack, HStack, Heading, Input, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

const Search = ({searched}) => {
  const [searchTerm, setSearchTerm] = useState('')
  // eslint-disable-next-line
  const [inputErrors, setInputErrors] = useState(null)

  const navigate = useNavigate()

  const performOperations = () => {
    searchTerm !== '' ? navigate(`/search/${searchTerm}`) : setInputErrors(true)
  }

  return (
    <>
      <Box
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundImage="url('https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/hPea3Qy5Gd6z4kJLUruBbwAH8Rm.jpg')"
          id="search"
      >
        <Container
          maxW="5xl"
          py={
            searched ? '25px': '85px'
          }
        >
          <VStack
            w="100%"
            color="white"
            justify="space-between"
            rowGap={ searched ? '10px' : '30px'}
          >
            <Box w="100%" textAlign="left">
              { searched ? (
                <Heading size="lg">Search for another movie</Heading>
              ) : (
                <>
                  <Heading size="2xl">Welcome!</Heading>
                  <Heading size='lg'>Millions of movies, TV shows and people to discover. Explore now.</Heading>
                </>
              )}
            </Box>
            <HStack w="100%">
              <Input bg="white" color="black" placeholder='Search for any movie or tv show' onChange={(e) => setSearchTerm(e.target.value)}/>
              <Button isDisabled={searchTerm === '' && true} onClick={performOperations} bg='yellow.300' color="blue.700" size='md'>
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