import {Container} from '@chakra-ui/react'
import {AnimatedText} from './components/AnimatedText'

export default function Home() {
  return (
    <Container
      textColor="cyan.200"
      fontSize={{base: '4xl', lg: '8xl'}}
      fontWeight="800"
      lineHeight={1.5}
      paddingBlock="32"
      paddingInline={{base: '10', lg: '0'}}
      fontFamily="Poppins"
      marginInline="auto"
      maxWidth="container.2xl"
    >
      Hola — I&apos;m a Software Engineer who loves creating websites that feel{' '}
      <AnimatedText
        items={[
          {
            label: 'Modern',
            color: 'red.100',
          },
          {
            label: 'Interactive',
            color: 'orange.200',
          },
          {
            label: 'Sublime',
            color: 'pink.200',
          },
        ]}
      />
    </Container>
  )
}
