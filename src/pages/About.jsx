import { Container, Heading, Text, Flex, VStack, Box } from '@chakra-ui/react'

const About = () => {
  return (
    <>
      <Flex align="center" height={{base: '70vh', md: '60vh'}}>
        <Container maxWidth="4xl">
          <VStack align="flex-start" spacing="0" rowGap="1ch">
            <Heading>
              About
            </Heading>
            <Box>
              <Text>
                This project was made with React, React router and Chakra UI
              </Text>
              <Text mt="1ch">
                It consumes the movie database API from https://www.omdbapi.com/
              </Text>
            </Box>
          </VStack>
        </Container>
      </Flex>
    </>
  )
}

export default About