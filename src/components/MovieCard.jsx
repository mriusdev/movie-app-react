import { Box, VStack, Image, Text, Heading, Flex } from '@chakra-ui/react'

const MovieCard = ({imageSrc, title, releaseDate}) => {
  return (
    <>
      <Box maxWidth={40} height="auto" overflow="hidden" borderRadius={10}>
        <VStack>
          <Image transformOrigin="center center" transition="all .2s ease-out" overflow="hidden" _hover={{ transform: 'scale(1.05, 1.05)', cursor: 'pointer' }} height="240px" borderRadius={10} src={imageSrc}/>
          <VStack pl={2} pos="relative" align="flex-start" width="100%">
            <Box pt={1} transition="all .2s ease-out" _hover={{ cursor: 'pointer', color: 'rgb(44, 82, 130)' }}>
              <Heading size="sm">
                {title}
              </Heading>
              <Text fontSize="sm">
                {releaseDate}
              </Text>
            </Box>
          </VStack>
        </VStack>
      </Box>
    </>
  )
}

export default MovieCard