import {Flex, Link} from '@chakra-ui/react'
import NextLink from 'next/link'

export interface NavigationProps {
  links: {name: string; href: string}[]
  currentPath: string
}

export function Navigation({currentPath, links}: NavigationProps) {
  return (
    <Flex gap="10">
      {links.map(({href, name}) => (
        <NextLink href={href} passHref key={name}>
          <Link
            fontWeight="800"
            fontSize="md"
            textTransform="uppercase"
            lineHeight={2.5}
            borderBlockEnd={currentPath === href ? 'solid 2px' : 'none'}
            position="relative"
            sx={
              currentPath !== href
                ? {
                    '&:before': {
                      content: '""',
                      background: 'white',
                      display: 'block',
                      position: 'absolute',
                      bottom: '-3px',
                      left: 0,
                      width: 0,
                      height: '3px',
                      transition: 'all 0.3s ease-in-out',
                    },
                    '&:hover': {
                      backgroundPosition: 0,
                    },
                    '&:hover::before': {
                      width: '100%',
                    },
                  }
                : {}
            }
          >
            {name}
          </Link>
        </NextLink>
      ))}
    </Flex>
  )
}
