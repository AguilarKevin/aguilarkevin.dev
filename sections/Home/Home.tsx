import {Box, Button, Flex, HStack, Stack, Text} from '@chakra-ui/react'
import BigText from 'components/BigText'
import MotionBox from 'components/MotionBox'
import PageSection from 'components/PageSection'
import {useViewportScroll} from 'framer-motion'
import React from 'react'
import Header from './components/Header/Header'

function Home() {
  const {scrollYProgress} = useViewportScroll()

  scrollYProgress.onChange((progress) => {
    console.log(progress)
  })
  return (
    <>
      <Header />
      <PageSection textColor="brand.textGray" p={{base: 4, lg: 16}}>
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
            <Flex>
              {'FRONT'.split('').map((letter) => {
                return <BigText lineHeight={0.9}>{letter}</BigText>
              })}
            </Flex>
            <Box w={{base: '200px', lg: '340px'}} h="4vh" bg="brand.textGray" />
            <Flex>
              {'END'.split('').map((letter) => {
                return <BigText>{letter}</BigText>
              })}
            </Flex>
          </Flex>
          <Flex
            flexWrap="wrap"
            gridColumnGap={8}
            gridRowGap={8}
            justifyContent="end"
          >
            <Flex flexWrap="wrap">
              {'DEVELOPER'.split('').map((letter) => {
                return <BigText>{letter}</BigText>
              })}
            </Flex>
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
    </>
  )
}

export default Home
