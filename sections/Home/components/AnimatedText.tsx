import {Text} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import {useEffect, useState} from 'react'

interface AnimatedTextProps {
  items: {label: string; color: string}[]
}

export function AnimatedText({items}: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex >= items.length - 1 ? 0 : currentIndex + 1)
    }, 2500)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <Text as="span">
      {items.map(({label, color}, index) => (
        <Text
          key={index}
          as={motion.span}
          display="inline-block"
          textColor={color}
          hidden={index !== currentIndex}
          animate={{
            opacity: index !== currentIndex ? 0 : 1,
            transition: {
              duration: 1,
              ease: 'easeInOut',
            },
          }}
        >
          {label}
        </Text>
      ))}
    </Text>
  )
}
