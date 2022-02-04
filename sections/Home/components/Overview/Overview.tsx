import {Box, Flex, Stack, Text} from '@chakra-ui/react'
import HeroText from 'components/HeroText'
import PageSection from 'components/PageSection'

export default function Overview() {
  return (
    <PageSection px={{base: 4, sm: 8, md: 10, lg: 12, xl: 16}}>
      <Stack
        textTransform="uppercase"
        lineHeight={0.8}
        letterSpacing={{
          base: '-0.35em',
          sm: '-0.4em',
          md: '-0.6em',
          lg: '-0.8em',
        }}
      >
        <Flex
          alignItems={{lg: 'center'}}
          justifyContent={{lg: 'space-between'}}
          gridColumnGap={{base: 1, lg: 4}}
          gridRowGap={{base: 4, lg: 4}}
          flexDir={{base: 'column', lg: 'row'}}
          flexWrap="wrap"
        >
          <HeroText text="FULL" />
          <Box
            w={{base: '200px', md: '220px', lg: '290px'}}
            h={{base: '30px', lg: '50px'}}
            mb={{base: 3.5, lg: 0}}
            bg="brand.textGray"
          />
          <HeroText text="STACK" />
        </Flex>
        <Flex
          gridColumnGap={{base: 1, lg: 8}}
          flexDir={{base: 'column', lg: 'row'}}
          justifyContent={{base: 'unset', md: 'space-between'}}
        >
          <HeroText text="DEVELOPER" />
          <Box
            as="div"
            letterSpacing="-0.01em"
            lineHeight={1.4}
            maxW={{base: '70%', sm: '60%', md: '42%', lg: '22%', xl: '18%'}}
            alignSelf={{base: 'end', lg: 'start'}}
            py={6}
          >
            <Text
              as="span"
              textColor="#606060"
              fontSize={{base: 'xs', lg: 'sm'}}
              pr="2"
            >
              About
            </Text>{' '}
            <Text
              as="span"
              textTransform="initial"
              fontSize={{base: 'md', lg: 'md'}}
              textColor="#BBBBBB"
            >
              I'm kevin Aguilar, a 20 year old Fullstack developer based in
              Nicaragua.
              <br />
              <br />I consider myself a resourceful developer who applies
              solutions with ingenuity. My focus is to create websites that feel
              modern and interactive. I love collaborating with brilliant
              people.
            </Text>
          </Box>
        </Flex>
      </Stack>
    </PageSection>
  )
}
