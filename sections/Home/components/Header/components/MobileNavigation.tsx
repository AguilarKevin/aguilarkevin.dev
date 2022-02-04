import {Button, Flex, Stack, Text} from '@chakra-ui/react'

export default function MobileNavigation() {
  return (
    <>
      <Flex
        justifyContent="space-around"
        lineHeight={0.8}
        textTransform="uppercase"
        fontSize="xs"
        letterSpacing="-0.01rem"
        gridColumnGap={4}
        textColor="brand.textGray"
        pt={8}
        px={4}
      >
        <Stack>
          <Text as="span">From</Text>
          <Text as="span">Nicaragua</Text>
        </Stack>

        <Stack spacing={4}>
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
              Get in touch
            </Text>
          </Button>
        </Stack>
      </Flex>
    </>
  )
}
