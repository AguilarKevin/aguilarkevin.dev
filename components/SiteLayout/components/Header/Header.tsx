import {Container, Flex, Text} from '@chakra-ui/react'
import {SocialLinks} from '../SocialLinks/SocialLinks'

export default function Header() {
  return (
    <Container
      as={Flex}
      justifyContent="space-around"
      marginInline="auto"
      maxWidth="container.xl"
      paddingBlock="6"
      textColor="white"
    >
      <Text fontWeight="extrabold" fontSize="2xl" letterSpacing="tighter">
        AguilarKevin
      </Text>
      <Flex></Flex>
      <SocialLinks />
    </Container>
  )
}
