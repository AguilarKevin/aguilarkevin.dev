import {ReactNode} from 'react'

import {Box, ChakraProvider} from '@chakra-ui/react'
import theme from '../../theme'

interface SiteLayoutProps {
  children: ReactNode
}

function SiteLayout({children}: SiteLayoutProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box
        as="div"
        bg="linear-gradient(to bottom, #090401 50%,#4B1D06 100%);"
        minH="h-screen"
        h="max-content"
      >
        {children}
      </Box>
    </ChakraProvider>
  )
}

export default SiteLayout
