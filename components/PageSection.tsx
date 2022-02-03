import { Box } from "@chakra-ui/react";

interface PageSectionProps {
  children: React.ReactNode;
}

export default function PageSection({ children }: PageSectionProps) {
  return <Box as="div">{children}</Box>;
}
