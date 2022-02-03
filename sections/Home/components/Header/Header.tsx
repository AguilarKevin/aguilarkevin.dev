import {Hide, Show} from '@chakra-ui/react'
import React from 'react'
import MobileNavigation from './components/MobileNavigation'
import Navigation from './components/Navigation'

export default function Header() {
  return (
    <>
      <Show above="md">
        <Navigation />
      </Show>
      <Hide above="md">
        <MobileNavigation />
      </Hide>
    </>
  )
}
