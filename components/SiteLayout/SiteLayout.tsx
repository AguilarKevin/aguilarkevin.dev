import { ReactNode } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../theme";

interface SiteLayoutProps {
  children: ReactNode;
}

function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <ChakraProvider theme={theme}>
      <main>{children}</main>
    </ChakraProvider>
  );
}

export default SiteLayout;
