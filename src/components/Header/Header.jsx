import { Box, Container, HStack, Heading, Text } from '@chakra-ui/react'
import { Link } from "react-router-dom";

import './header.css'

const Header = () => {
  return (
    <>
      <div className="navSticky" id="nav">
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
      </div>
    </>
  )
}

export default Header