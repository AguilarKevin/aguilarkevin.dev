import {useViewportScroll} from 'framer-motion'
import React from 'react'
import About from './components/About'
import Header from './components/Header/Header'
import Overview from './components/Overview'
import Skills from './components/Skills'

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
      <Skills />
    </>
  )
}

export default Home
