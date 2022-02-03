import {Flex, Text, TextProps} from '@chakra-ui/react'

interface BigTextProps extends TextProps {
  text: String
}

export default function BigText({text, ...props}: BigTextProps) {
  return (
    <Flex flexWrap="wrap">
      {text.split('').map((letter) => (
        <Text
          as="span"
          fontSize={{base: '10rem', sm: '11rem', md: '12rem', lg: '22rem'}}
          textColor="brand.textGray"
          fontFamily="Bebas Neue"
          transition="all 0.2s ease-in-out"
          _hover={{textColor: '#AAAAAA'}}
          {...props}
        >
          {letter}
        </Text>
      ))}
    </Flex>
  )
}
