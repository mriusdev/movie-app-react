import { Container, Heading, Text, Flex, VStack, Box, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { PTransitionsFade } from '../components/PageAnimations/PageTransitions'

const About = () => {
  const { initialFade, animateFade, exitFade} = PTransitionsFade
  return (
    <>
      <Flex
        as={motion.div}
        align="center"
        height="100vh"
        initial={initialFade}
        animate={animateFade}
        exit={exitFade}
      >
        <Container maxWidth="4xl">
          <VStack align="flex-start" justify="center" spacing="0" rowGap="1ch">
            <Heading>
              About
            </Heading>
            <Box>
              <Text>
                This is an educational project that was made with React, React router and Chakra UI
              </Text>
              <Heading mt="1ch" size="md">
                API
              </Heading>
              <Text>
                It consumes the movie database API from <Link href='https://www.omdbapi.com/' color='blue.700' fontWeight="bold">omdbapi</Link>
              </Text>
            </Box>
          </VStack>
        </Container>
      </Flex>
    </>
  )
}

export default About