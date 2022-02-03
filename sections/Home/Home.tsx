import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

function Home() {
  return (
    <Box
      w="full"
      h="h-screen"
      d="flex"
      alignItems={{ base: "center", lg: "flex-end" }}
      justifyContent={{ base: "center", lg: "flex-start" }}
    >
      <Stack p={{ base: 0, lg: 10 }} spacing={{ base: 0, md: 2 }}>
        <Text
          as="h1"
          textColor="brand.textGray"
          fontSize={{ base: "xl", sm: "3xl", md: "8xl" }}
          fontWeight={900}
          lineHeight={0.8}
          textTransform="uppercase"
          transition="all 0.3s ease-in-out"
          _hover={{
            textColor: "brand.orange"
          }}
        >
          AguilarKevin.dev
        </Text>
        <Text
          as="h3"
          fontSize={{ base: "xs", lg: "xl" }}
          fontWeight={400}
          textColor="brand.textGray"
          textTransform="uppercase"
        >
          Site under construction
        </Text>
      </Stack>
    </Box>
  );
}

export default Home;
