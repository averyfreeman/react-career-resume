import { extendTheme } from '@chakra-ui/react';
import '@fontsource/abril-fatface';
import '@fontsource/adamina';
import '@fontsource/alata';

const theme = extendTheme({
  fonts: {
    heading: 'Abril Fatface',
    body: 'Alata',
  },
});

export default theme;
