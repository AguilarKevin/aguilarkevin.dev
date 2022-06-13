import {Container, Flex, Hide, Show, Spacer, Text} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import {useRouter} from 'next/router'
import type {MobileNavigationProps, NavigationProps} from './components/mod'

const Navigation = dynamic<NavigationProps>(
  () => import('./components/Navigation').then((mod) => mod.Navigation),
  {ssr: false}
)

const MobileNavigation = dynamic<MobileNavigationProps>(
  () =>
    import('./components/MobileNavigation').then((mod) => mod.MobileNavigation),
  {
    ssr: false,
  }
)

const SocialLinks = dynamic<{}>(
  () => import('../SocialLinks/SocialLinks').then((mod) => mod.SocialLinks),
  {
    ssr: false,
  }
)

const navLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

export default function Header() {
  const router = useRouter()

  return (
    <Container
      as={Flex}
      justifyContent="space-between"
      marginInline="auto"
      maxWidth="container.2xl"
      paddingBlock="8"
      paddingInline="4"
      textColor="white"
    >
      <Text fontWeight="extrabold" fontSize="2xl" letterSpacing="tighter">
        AguilarKevin &nbsp;&nbsp;&nbsp; 🚀
      </Text>
      <Show above="lg">
        <Navigation currentPath={router.asPath} links={navLinks} />
        <SocialLinks />
      </Show>
      <Hide above="md">
        <Spacer />
        <MobileNavigation currentPath={router.asPath} links={navLinks} />
      </Hide>
    </Container>
  )
}
