import { Skeleton, SkeletonCircle, SkeletonText, Box, Flex, HStack } from '@chakra-ui/react'

const LoadingSingleMovie = () => {
  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        columnGap={{ base: '', md: '30px'}}
        direction={{ base: 'column', md: 'row'}}
        rowGap={{ base: '2ch', md: ''}}
      >
        <Skeleton
          height={{ base: '20ch', md: '450px' }}
          width={{ base: '100%', md: '300px'}}
          borderRadius={10}
        />
        <Flex
          direction="column"
          align="flex-start"
          justify="center"
          columnGap="30px"
          rowGap="25px"
          width={{base: '100%', md: '65%'}}
        >
          <Box width="100%">
            <SkeletonText
              mt='4'
              noOfLines={2}
              spacing='4'
              height="20px"
            />
            <SkeletonText
              mt='4'
              noOfLines={2}
              spacing='4'
            />
          </Box>
          <HStack width="100%">
            <SkeletonCircle size='10' />
            <SkeletonText
              noOfLines={1}
              spacing="4"
            />
          </HStack>
          <Box width="100%">
            <SkeletonText
              noOfLines={4}
            />
          </Box>
          <Box width="100%">
            <SkeletonText
              noOfLines={2}
            />
          </Box>
          <Box width="100%">
            <SkeletonText
              noOfLines={2}
            />
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default LoadingSingleMovie