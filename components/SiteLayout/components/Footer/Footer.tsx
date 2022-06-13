import {Container, Flex, Stack, Text} from '@chakra-ui/react'
import {SocialLinks} from '../SocialLinks/SocialLinks'

export default function Footer() {
  return (
    <Container
      as={Flex}
      alignItems="center"
      justifyContent="space-between"
      marginInline="auto"
      maxWidth="container.xl"
      paddingBlock="10"
      textColor="white"
    >
      <Stack fontWeight="500" letterSpacing="tight" spacing="1">
        <Text>Kevin Aguilar From Managua, Nicaragua.</Text>
        <Text>© 2022 Kevin Aguilar. All rights reserved</Text>
      </Stack>

      <SocialLinks />
    </Container>
  )
}
