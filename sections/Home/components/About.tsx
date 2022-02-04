import {Flex, Stack, Text} from '@chakra-ui/react'
import PageSection from 'components/PageSection'

export default function About() {
  return (
    <PageSection
      textColor="brand.textLightGray"
      px={{base: 4, sm: 8, md: 10, lg: 12, xl: 16}}
      py="14"
    >
      <Flex
        borderColor="brand.textGray"
        borderBlockStartWidth="1px"
        borderBlockEndWidth="1px"
        py={{base: '8', sm: '14', md: '20', lg: '24', xl: '50'}}
        flexDir="column"
        justifyContent={{base: 'start', md: 'center'}}
        alignItems={{base: 'start', md: 'center'}}
      >
        <Text as="h1" textColor="brand.textGray" textTransform="uppercase">
          About
        </Text>
        <Flex justify="center" alignItems="center">
          <Text
            as="span"
            fontFamily="Open Sans"
            fontSize={{base: '2xl', md: '3xl'}}
            width={{md: '60%'}}
            textAlign={{md: 'center'}}
          >
            I consider myself a resourceful developer who applies solutions with
            ingenuity. My focus is to create websites that feel modern and
            interactive. I love collaborating with brilliant people.
          </Text>
        </Flex>

        <Flex></Flex>
      </Flex>
    </PageSection>
  )
}
