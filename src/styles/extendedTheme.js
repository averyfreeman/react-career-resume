import {
  extendTheme,
  // theme,
} from '@chakra-ui/react';
import '@fontsource/abril-fatface'
import '@fontsource/adamina'

const theme = extendTheme({
  fonts: {
    heading: "Abril Fatface",
    body: "Adamina"
  }
})

export default theme;