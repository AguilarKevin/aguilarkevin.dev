import {BoxProps, Flex, Text} from '@chakra-ui/react'
import PageSection from './PageSection'

interface DetailsSectionProps extends BoxProps {
  title: string
  description: string
}

export default function DetailsSection({
  title,
  description,
  ...props
}: DetailsSectionProps) {
  return (
    <PageSection
      textColor="brand.textLightGray"
      px={{base: 4, sm: 8, md: 10, lg: 12, xl: 16}}
      py="14"
    >
      <Flex
        borderColor="brand.textGray"
        borderBlockStartWidth="1px"
        borderBlockEndWidth="1px"
        py={{base: '8', sm: '14', md: '20', lg: '24', xl: '50'}}
        flexDir="column"
        justifyContent={{base: 'start', md: 'center'}}
        alignItems={{base: 'start', md: 'center'}}
      >
        <Text as="h1" textColor="brand.textGray" textTransform="uppercase">
          {title}
        </Text>
        <Flex justify="center" alignItems="center">
          <Text
            as="span"
            fontFamily="Open Sans"
            fontSize={{base: '2xl', md: '3xl'}}
            width={{md: '60%'}}
            textAlign={{md: 'center'}}
          >
            {description}
          </Text>
        </Flex>
      </Flex>
    </PageSection>
  )
}
