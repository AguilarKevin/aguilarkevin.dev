import {Box, Button, Flex, HStack, Stack, Text} from '@chakra-ui/react'
import BigText from 'components/BigText'
import MotionBox from 'components/MotionBox'
import PageSection from 'components/PageSection'
import {useViewportScroll} from 'framer-motion'
import React from 'react'

function Home() {
  const {scrollYProgress} = useViewportScroll()

  scrollYProgress.onChange((progress) => {
    console.log(progress)
  })
  return (
    <>
      <PageSection textColor="brand.textGray" p={{base: 4, lg: 16}}>
        <Flex
          justifyContent="space-between"
          lineHeight={0.8}
          textTransform="uppercase"
          fontSize="xs"
          letterSpacing="-0.01rem"
          gridColumnGap={4}
          pb={12}
        >
          <Stack minW="35%">
            <Text as="span">From</Text>
            <Text as="span">Nicaragua</Text>
          </Stack>
          <Flex
            justifyContent="space-between"
            flexDir={{base: 'column', md: 'row'}}
            flex="1"
            gridRowGap={6}
          >
            <Stack>
              <Text as="span">fullstack developer</Text>
              <Text as="span">associated to Nerdify</Text>
            </Stack>

            <Text as="span">My Blog</Text>
            <Button
              variant="outline"
              borderRadius={18}
              _hover={{
                bgColor: 'brand.orange',
                borderColor: 'brand.orange',
              }}
            >
              <Text
                as="span"
                textColor="brand.textGray"
                textTransform="uppercase"
                fontSize="sm"
                fontWeight={300}
                _hover={{textColor: 'white'}}
              >
                Contact
              </Text>
            </Button>
          </Flex>
        </Flex>
        <Stack
          textTransform="uppercase"
          lineHeight={0.9}
          letterSpacing={{base: '-0.4em', md: '-0.9em'}}
        >
          <Flex
            alignItems="center"
            gridColumnGap={2}
            gridRowGap={8}
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Flex>
              {'FULL'.split('').map((letter) => {
                return <BigText lineHeight={0.9}>{letter}</BigText>
              })}
            </Flex>
            <Box w={{base: '200px', lg: '340px'}} h="4vh" bg="brand.textGray" />
            <Flex>
              {'STACK'.split('').map((letter) => {
                return <BigText>{letter}</BigText>
              })}
            </Flex>
          </Flex>
          <Flex
            flexWrap="wrap"
            gridColumnGap={3}
            gridRowGap={8}
            justifyContent="space-between"
          >
            <Flex flexWrap="wrap">
              {'DEVELOPER'.split('').map((letter) => {
                return <BigText>{letter}</BigText>
              })}
            </Flex>
            <Box
              as="div"
              letterSpacing="-0.01em"
              lineHeight={1.3}
              maxW={{base: 'w-screen', md: '24%'}}
              py={6}
            >
              <Text as="span" textColor="#606060" fontSize="sm" pr="4">
                About
              </Text>{' '}
              <Text as="span" textTransform="initial" fontSize="xl">
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
