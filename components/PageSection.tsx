import {Box, BoxProps} from '@chakra-ui/react'

interface PageSectionProps extends BoxProps {
  children: React.ReactNode
}

export default function PageSection({children, ...props}: PageSectionProps) {
  return (
    <Box as="div" max-w="w-screen" {...props}>
      {children}
    </Box>
  )
}
