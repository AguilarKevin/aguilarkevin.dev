import {Button, Flex, Stack, Text} from '@chakra-ui/react'
import React from 'react'

export default function Navigation() {
  return (
    <>
      <Flex
        justifyContent="space-between"
        lineHeight={0.8}
        textTransform="uppercase"
        fontSize={{md: 'sm'}}
        letterSpacing="-0.01rem"
        textColor="brand.textGray"
        gridColumnGap={4}
        pt={8}
        px={20}
        pb={12}
      >
        <Stack>
          <Text as="span">From</Text>
          <Text as="span">Nicaragua</Text>
        </Stack>

        <Stack>
          <Text as="span">fullstack developer</Text>
          <Text as="span">associated to Nerdify</Text>
        </Stack>

        <Text as="span">My Blog</Text>
        <Button
          variant="outline"
          borderRadius={18}
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
            _hover={{textColor: 'white'}}
          >
            Contact
          </Text>
        </Button>
      </Flex>
    </>
  )
}
