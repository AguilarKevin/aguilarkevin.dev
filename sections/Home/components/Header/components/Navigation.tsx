import {Button, Flex, HStack, Stack, StackDivider, Text} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function Navigation() {
  return (
    <>
      <Flex
        justifyContent="space-between"
        align="center"
        lineHeight={0.8}
        textTransform="uppercase"
        fontSize={{md: 'sm'}}
        letterSpacing="-0.01rem"
        textColor="brand.textGray"
        gridColumnGap={4}
        pt={8}
        px={20}
      >
        <Stack>
          <Text as="span">fullstack developer</Text>
          <Text as="span">From Nicaragua</Text>
        </Stack>

        <HStack
          divider={<StackDivider borderColor="gray.50" />}
          justifyContent="space-between"
          align="center"
          gap={6}
        >
          <Link href="#">
            <Text as="span" _hover={{textColor: 'brand.textLightGray'}}>
              About
            </Text>
          </Link>

          <Link href="#">
            <Text as="span" _hover={{textColor: 'brand.textLightGray'}}>
              My Blog
            </Text>
          </Link>

          <Link href="#">
            <Text as="span" _hover={{textColor: 'brand.textLightGray'}}>
              Projects
            </Text>
          </Link>
        </HStack>

        <Button
          variant="outline"
          borderRadius={18}
          role="group"
          _hover={{
            bgColor: 'brand.orange',
            borderColor: 'brand.orange',
          }}
        >
          <Text
            as="span"
            textColor="brand.textGray"
            textTransform="uppercase"
            fontSize="sm"
            fontWeight={300}
            _groupHover={{textColor: 'white'}}
          >
            Get in touch
          </Text>
        </Button>
      </Flex>
    </>
  )
}
