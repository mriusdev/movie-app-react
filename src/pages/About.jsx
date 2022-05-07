import { Container, Heading, Text, Box } from '@chakra-ui/react'

const About = () => {
  return (
    <>
      <Box height="100vh"> 
        <Container maxWidth="4xl">
          <Heading>
            This is the about page
          </Heading>
          <Text>
            This project was made with React, Redux Toolkit, React router and Chakra UI
          </Text>
        </Container>
      </Box>
      
    </>
  )
}

export default About