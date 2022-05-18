import { Box, Container, HStack, Heading, Text, Flex } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClapperboard } from '@fortawesome/free-solid-svg-icons'

import './header.css'

const Header = () => {
  return (
    <>
      <div className="navSticky" id="nav">
        <Box bg="yellow.300">
          <Container maxW="7xl" py={3}>
            <HStack color="blue.700" justify="space-between">
              <Link to="/">
                <Flex align="center" justify="center" columnGap="0.5ch">
                  <FontAwesomeIcon icon={faClapperboard} fontSize="3ch" color="#2C5282"/>
                  <Heading size="md">
                    forumcinemas
                  </Heading>
                </Flex>
              </Link>
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