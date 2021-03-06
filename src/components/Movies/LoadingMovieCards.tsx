import { Skeleton, SimpleGrid, SkeletonText, Box } from '@chakra-ui/react'

const LoadingMovieCards = () => {

  const placeholders: number[] = [1,2,3,4,5,6,7]

  return (
    <>
      <SimpleGrid minChildWidth='150px' spacing='40px' id="loadingMovieCards">
        { placeholders.map((item: number, index: number) => {
          return (
            <Box key={index} width="150px">
              <Skeleton height="240px" borderRadius={10} />
              <SkeletonText pl={2} mt='4' noOfLines={2} spacing='2' width="60%"/>
            </Box>
          )
        })}
      </SimpleGrid>
    </>
  )
}

export default LoadingMovieCards