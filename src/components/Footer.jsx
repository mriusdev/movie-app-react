import { Heading, VStack, HStack, Flex, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClapperboard } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
      <Flex
        alignItems='center'
        justify="center"
        mt="10ch"
        py="4ch"
        bg="yellow.300"
        id="footer"
      >
        <Flex direction="column" align="center">
          <FontAwesomeIcon icon={faClapperboard} fontSize="3ch" color="#2C5282"/>
          <Heading color="blue.700" size='xl'>
            forumcinemas
          </Heading>
          <Text>
            An educational movie api website
          </Text>
          <VStack direction="column" align="center" mt="3ch">
            <Heading color="blue.700" size='md'>
              Socials
            </Heading>
            <HStack columnGap="3ch">
              <a href="https://github.com/mriusdev/movie-app-react">
                <FontAwesomeIcon style={{ cursor: 'pointer '}} icon={faGithub} fontSize="3ch" color="#2C5282"/>
              </a>
              <a href="https://www.linkedin.com/in/andrius-mintau%C4%8Dkis-99239a216/">
                <FontAwesomeIcon style={{ cursor: 'pointer '}} icon={faLinkedin} fontSize="3ch" color="#2C5282"/>
              </a>
            </HStack>
          </VStack>
        </Flex>
      </Flex>
    </>
  )
}

export default Footer