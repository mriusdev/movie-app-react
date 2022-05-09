import { Heading, Text, Image, Box, Flex, HStack } from '@chakra-ui/react'

const SingleMovie = ({data}) => {
  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        columnGap={{ base: '', md: '30px'}}
        direction={{ base: 'column', md: 'row'}}
        rowGap={{ base: '2ch', md: ''}}
      >
        <Image
          objectFit='cover'
          objectPosition="center center"
          height={{ base: '20ch', md: '450px' }}
          width={{ base: '100%', md: '300px'}}
          borderRadius={10}
          src={data.Poster}
        />
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
      </Flex>
    </>
  )
}

export default SingleMovie