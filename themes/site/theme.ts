import {extendTheme} from '@chakra-ui/react'
import foundations from './foundations/mod'
import * as components from './components/mod'
import styles from './styles'

const overrides = {
  components,
  ...foundations,
  styles,
}

export default extendTheme(overrides)
