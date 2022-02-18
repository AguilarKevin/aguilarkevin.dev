import {Box, Flex, Stack, Text} from '@chakra-ui/react'
import HeroText from 'components/HeroText'
import PageSection from 'components/PageSection'

export default function Overview() {
  return (
    <PageSection
      px={{base: 4, sm: 8, md: 10, lg: 12, xl: 16}}
      minH="h-screen"
      d="flex"
      alignItems="center"
      pt="8"
    >
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
            w={{base: '210px', md: '240px', lg: '300px'}}
            h={{base: '20px', lg: '40px'}}
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
            lineHeight={1.6}
            w={{base: '70%', sm: '60%', md: '42%', lg: '22%', xl: '18%'}}
            alignSelf={{base: 'end', lg: 'start'}}
            py={6}
          >
            <Text
              as="span"
              textColor="#606060"
              fontSize={{base: 'xs', lg: 'sm'}}
              pr="2"
            >
              Quick Overview
            </Text>{' '}
            <Text
              as="span"
              textTransform="initial"
              fontSize={{base: 'lg', lg: 'xl'}}
              textColor="brand.textLightGray"
            >
              I&apos;m kevin Aguilar, a 20 year old Fullstack developer based in
              Nicaragua focused on building modern and interactive apps.
            </Text>
          </Box>
        </Flex>
      </Stack>
    </PageSection>
  )
}
