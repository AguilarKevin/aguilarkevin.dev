import {Flex, Icon, Link} from '@chakra-ui/react'
import {
  faDev,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {socialLinks} from 'constants/social-links'

export function SocialLinks() {
  return (
    <Flex gap="6">
      <Link href={socialLinks.github} isExternal>
        <Icon
          boxSize="5"
          transition="all 0.2s ease-in-out"
          _hover={{
            color: 'cyan.500',
          }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </Icon>
      </Link>
      <Link href={socialLinks.linkedin} isExternal>
        <Icon
          boxSize="5"
          transition="all 0.2s ease-in-out"
          _hover={{
            color: 'cyan.500',
          }}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Icon>
      </Link>

      <Link href={socialLinks.twitter} isExternal>
        <Icon
          boxSize="5"
          transition="all 0.2s ease-in-out"
          _hover={{
            color: 'cyan.500',
          }}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </Icon>
      </Link>

      <Link href={socialLinks.devto} isExternal>
        <Icon
          boxSize="5"
          transition="all 0.2s ease-in-out"
          _hover={{
            color: 'cyan.500',
          }}
        >
          <FontAwesomeIcon icon={faDev} />
        </Icon>
      </Link>
    </Flex>
  )
}
