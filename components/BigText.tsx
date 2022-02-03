import {Text, TextProps} from '@chakra-ui/react'

interface BigTextProps extends TextProps {
  children: React.ReactNode
}

export default function BigText({children, ...props}: BigTextProps) {
  return (
    <Text
      as="span"
      fontSize={{base: '10rem', sm: '12rem', md: '14rem', lg: '25rem'}}
      fontFamily="Bebas Neue"
      _hover={{textColor: '#AAAAAA'}}
      {...props}
    >
      {children}
    </Text>
  )
}
