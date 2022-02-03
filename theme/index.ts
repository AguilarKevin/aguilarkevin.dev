import { extendTheme } from "@chakra-ui/react";

import components from "./components";
import foundations from "./foundations";
// import layerStyles from './layerStyles'
// import styles from './styles'
// import textStyles from './textStyles'

const overrides = {
  components,
  ...foundations
  // layerStyles,
  // styles,
  // textStyles,
};

export default extendTheme(overrides);
