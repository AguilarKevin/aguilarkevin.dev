import "../styles/tailwind.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <DefaultSeo
        title="AguilarKevin"
        twitter={{
          cardType: "summary_large_image",
          handle: "@_aguilarkevin_",
          site: "@_aguilarkevin_"
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
