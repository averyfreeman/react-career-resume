import React from 'react';
import { Box, ChakraProvider, Grid, Text, VStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import theme from './styles/extendedTheme';
import Header from './components/Header';
import '@fontsource/abril-fatface/400.css';
import '@fontsource/adamina/400.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box maxW="8.5in" m={6}>
        <Text pos="absolute" left="0.5in">
          Color mode switcher (Light / Dark):
        </Text>
        <ColorModeSwitcher pos="absolute" top="-3" left="8.25in" />
      </Box>
      <Box maxW="8.5">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Header
              pos="absolute"
              top={10}
              left={10}
              w="100%"
              maxW="8.5in"
              border="3px solid black"
              borderRadius="md"
            />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
