import { Box, VStack, Image, Text, Heading } from '@chakra-ui/react'
import { FC } from 'react'

interface Props {
  imageSrc: string,
  title: string,
  releaseDate: string
}

const MovieCard:FC<Props> = ({imageSrc, title, releaseDate}) => {
  return (
    <>
      <Box maxWidth={40} height="auto" overflow="hidden" borderRadius={10}>
        <VStack>
          <Image transformOrigin="center center" transition="all .2s ease-out" overflow="hidden" _hover={{ transform: 'scale(1.05, 1.05)', cursor: 'pointer' }} height="240px" borderRadius={10} src={imageSrc}/>
          <VStack pl={2} pos="relative" align="flex-start" width="100%">
            <Box pt={1} transition="all .2s ease-out">
              <Heading size="sm" _hover={{ cursor: 'pointer', color: 'rgb(44, 82, 130)' }}>
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