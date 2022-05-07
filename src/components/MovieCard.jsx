import { Box, VStack, Image, Text, Heading, Flex } from '@chakra-ui/react'

const MovieCard = () => {
  const testObject = {
    imageSrc: 'https://www.themoviedb.org/t/p/w220_and_h330_face/izIMqapegdEZj0YVDyFATPR8adh.jpg',
    rating: 81,
    title: 'Vikings: Valhalla',
    releaseDate: "Feb 25, 2022"
  }

  return (
    <>
      <Box maxWidth={40}>
        <VStack>
          <Image borderRadius={10} src={testObject.imageSrc}/>
          <VStack pl={2} pos="relative" align="flex-start" width="100%">
            <Flex top="-30px" pos="absolute" align="center" justify="center" width="40px" height="40px" bg="black" borderRadius="50%">
              <Text fontSize={14} fontWeight="bold" color="white">
                {testObject.rating}%
              </Text>
            </Flex>
            <Box pt={3}>
              <Heading size="sm">
                {testObject.title}
              </Heading>
              <Text fontSize="sm">
                {testObject.releaseDate}
              </Text>
            </Box>
          </VStack>
        </VStack>
      </Box>
    </>
  )
}

export default MovieCard