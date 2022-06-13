import {Box, ChakraProvider} from '@chakra-ui/react'
import {type ReactNode} from 'react'
import {Header, Footer} from './components/mod'

import theme from '../../themes/site/mod'
import {ErrorBoundary, OverlayManager} from '@components/mod'

interface SiteLayoutProps {
  children: ReactNode
}

export function SiteLayout({children}: SiteLayoutProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box as="main" minHeight="calc(100vh - 296px)">
        {children}
      </Box>
      <Footer />
      <ErrorBoundary FallbackComponent={() => null}>
        <OverlayManager />
      </ErrorBoundary>
    </ChakraProvider>
  )
}
