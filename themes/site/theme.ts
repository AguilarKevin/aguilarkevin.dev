import {extendTheme} from '@chakra-ui/react'
import foundations from './foundations/mod'
import * as components from './components/mod'

const overrides = {
  components,
  ...foundations,
}

export default extendTheme(overrides)
