import {Flex, Text, TextProps} from '@chakra-ui/react'
import {v4 as uuidv4} from 'uuid'

interface BigTextProps extends TextProps {
  text: String
}

export default function BigText({text, ...props}: BigTextProps) {
  return (
    <Flex flexWrap="wrap">
      {text.split('').map((letter) => (
        <Text
          as="span"
          fontSize={{
            base: '10rem',
            sm: '10.5rem',
            md: '11.5rem',
            lg: '16rem',
            xl: '20rem',
            '2xl': '26rem',
          }}
          // lineHeight={{base: 0.8, sm: '', md: 0.78, lg: 0.75}}
          key={`letter-${uuidv4()}`}
          textColor="brand.textGray"
          fontFamily="Bebas Neue"
          transition="all 0.2s ease-in-out"
          _hover={{textColor: 'brand.textLightGray'}}
          {...props}
        >
          {letter}
        </Text>
      ))}
    </Flex>
  )
}
