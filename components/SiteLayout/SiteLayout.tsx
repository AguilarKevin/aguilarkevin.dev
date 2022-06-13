import {Box, ChakraProvider} from '@chakra-ui/react'
import {type ReactNode} from 'react'
import {Header, Footer} from './components/mod'

import theme from '../../themes/site/mod'

interface SiteLayoutProps {
  children: ReactNode
}

export function SiteLayout({children}: SiteLayoutProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box width="100%">
        <Header />
        {children}
        <Footer />
      </Box>
    </ChakraProvider>
  )
}
