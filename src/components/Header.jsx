import { Box, Container, HStack, Heading, Text } from '@chakra-ui/react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Box bg="yellow.300">
        <Container maxW="7xl" py={2}>
          <HStack color="blue.700" justify="space-between">
            <Heading>
              <Link to="/">forumcinemas</Link>
            </Heading>
            <Text fontWeight="medium">
              <Link to="/about">About</Link>
            </Text>
          </HStack>
        </Container>
      </Box>
    </>
  )
}

export default Header