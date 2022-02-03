import {Box, Flex, Stack, Text} from '@chakra-ui/react'
import HeroText from 'components/HeroText'
import PageSection from 'components/PageSection'
import React from 'react'

export default function Overview() {
  return (
    <PageSection px={{base: 4, sm: 6, md: 8, lg: 12}}>
      <Stack
        textTransform="uppercase"
        lineHeight={0.9}
        letterSpacing={{base: '-0.4em', md: '-1em'}}
      >
        <Flex
          alignItems="center"
          gridColumnGap={8}
          gridRowGap={8}
          flexWrap="wrap"
        >
          <HeroText text="FULL" />
          <Box
            w={{base: '200px', lg: '300px'}}
            h={{base: '30px', lg: '50px'}}
            bg="brand.textGray"
          />
          <HeroText text="STACK" />
        </Flex>
        <Flex
          gridColumnGap={8}
          gridRowGap={8}
          justifyContent={{lg: 'space-between'}}
          alignItems={{base: 'end', xl: 'center'}}
          flexDir={{base: 'column', lg: 'row'}}
        >
          <HeroText text="DEVELOPER" />
          <Box
            as="div"
            letterSpacing="-0.01em"
            lineHeight={1.5}
            maxW={{base: '65%', md: '24%'}}
            py={6}
          >
            <Text
              as="span"
              textColor="#606060"
              fontSize={{base: 'xs', lg: 'sm'}}
              pr="2"
            >
              About
            </Text>{' '}
            <Text
              as="span"
              textTransform="initial"
              fontSize={{base: 'md', lg: 'xl'}}
              textColor="#BBBBBB"
            >
              I consider myself a developer who applies solutions with
              ingenuity. My focus is to create websites that feel modern and
              interactive. I love collaborating with brilliant people.
            </Text>
          </Box>
        </Flex>
      </Stack>
    </PageSection>
  )
}
