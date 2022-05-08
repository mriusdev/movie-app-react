import { Heading, VStack, Input, Flex, Button } from '@chakra-ui/react'

const Footer = () => {
  return (
    <>
      <Flex
        alignItems='center'
        justify="center"
        mt="150px"
        py="100px"
        bg="yellow.300"
      >
        <VStack>
          <Heading color="blue.700" size='xl'>
            CONTACT ME HERE
          </Heading>
          <Input bg="white" color="blue.700" w={300} placeholder='Your email' size='md' />
          <Button w={200} colorScheme='teal' size='md'>
            Send
          </Button>
        </VStack>
      </Flex>
    </>
  )
}

export default Footer