import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import {faBarsStaggered} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import NextLink from 'next/link'

export interface MobileNavigationProps {
  links: {name: string; href: string}[]
  currentPath: string
}

export function MobileNavigation({currentPath, links}: MobileNavigationProps) {
  const {isOpen, onToggle} = useDisclosure()

  return (
    <>
      <IconButton aria-label="mobile-navigation" onClick={onToggle}>
        <FontAwesomeIcon icon={faBarsStaggered} />
      </IconButton>
      <Drawer isOpen={isOpen} onClose={onToggle} size="full" placement="end">
        <DrawerOverlay />
        <DrawerContent backgroundColor="#282B38" textColor="white">
          <Flex padding="6" width="min-content">
            <DrawerCloseButton />
          </Flex>
          <DrawerBody height="100%">
            <Stack height="100%" justifyContent="end" padding="10">
              {links.map(({href, name}) => (
                <NextLink href={href} passHref key={name}>
                  <Link fontWeight="600" fontSize="4xl">
                    {name}
                  </Link>
                </NextLink>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
