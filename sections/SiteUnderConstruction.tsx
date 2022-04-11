import {Box, Flex, Heading, Stack, Text} from '@chakra-ui/react'
//@ts-ignore
import anime from 'animejs/lib/anime.es'
import {useEffect} from 'react'

export default function SiteUnderConstruction() {
  useEffect(() => {
    starryNight()
    shootingStars()
  })

  return (
    <Box position="relative">
      <svg id="sky">
        {[...Array(60)].map((x, y) => (
          <circle
            cx={getRandomX()}
            cy={getRandomY()}
            r={randomRadius()}
            stroke="none"
            strokeWidth="0"
            fill="white"
            key={y}
            className="star"
          />
        ))}
      </svg>
      <Box id="shootingstars">
        {[...Array(60)].map((x, y) => (
          <div
            key={y}
            className="wish"
            style={{
              left: `${getRandomY()}px`,
              top: `${getRandomX()}px`,
            }}
          />
        ))}
      </Box>
      <Flex
        position="absolute"
        justifyContent="center"
        inset="0"
        alignItems="center"
        h="100vh"
      >
        <Stack alignItems="center">
          <Heading
            textColor="white"
            as="h1"
            fontSize="4xl"
            fontWeight="400"
            fontFamily="Open sans"
          >
            Site Under Construction
          </Heading>
          <Text fontSize="sm" textColor="#ababab">
            Aguilarkevin © 2022
          </Text>
        </Stack>
      </Flex>
    </Box>
  )

  function starryNight() {
    anime({
      targets: ['#sky .star'],
      opacity: [
        {
          duration: 700,
          value: '0',
        },
        {
          duration: 700,
          value: '1',
        },
      ],
      easing: 'linear',
      loop: true,
      //@ts-ignore
      delay: (el, i) => 50 * i,
    })
  }
  function shootingStars() {
    anime({
      targets: ['#shootingstars .wish'],
      easing: 'linear',
      loop: true,
      //@ts-ignore
      delay: (el, i) => 1000 * i,
      opacity: [
        {
          duration: 700,
          value: '1',
        },
      ],
      width: [
        {
          value: '150px',
        },
        {
          value: '0px',
        },
      ],
      translateX: 350,
    })
  }

  function randomRadius() {
    return Math.random() * 0.7 + 0.6
  }
  function getRandomX() {
    return Math.floor(
      Math.random() *
        Math.floor(
          Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        )
    ).toString()
  }

  function getRandomY() {
    return Math.floor(
      Math.random() *
        Math.floor(
          Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 0
          )
        )
    ).toString()
  }
}
