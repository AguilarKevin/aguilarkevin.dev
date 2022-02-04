import {Box, Button, Flex, HStack, Stack, Text} from '@chakra-ui/react'
import BigText from 'components/HeroText'
import MotionBox from 'components/MotionBox'
import PageSection from 'components/PageSection'
import {useViewportScroll} from 'framer-motion'
import React from 'react'
import About from './components/About'
import Header from './components/Header/Header'
import Overview from './components/Overview'

function Home() {
  const {scrollYProgress} = useViewportScroll()

  scrollYProgress.onChange((progress) => {
    console.log(progress)
  })
  return (
    <>
      <Header />
      <Overview />
      <About />
    </>
  )
}

export default Home
