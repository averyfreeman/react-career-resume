import React from 'react';
import { Box, Heading, HStack, Text } from '@chakra-ui/react';

const Header = props => {
  return (
    <div>
      <Box textAlign="center" {...props}>
        <Heading>Avery Freeman-Wheaton</Heading>
        <HStack fontSize="sm" align="top">
          <Box as="address" noOfLines="3" p={1} w="2.6in" align="center">
            <Text align="right">1921 Olympia Ave NE</Text>
            <Text align="right">Olympia, WA 98506</Text>
          </Box>
          <Box as="tel" noOfLines="2" p={1} w="2.6in" align="center">
            <Text align="center">+1 (510) 396-5509</Text>
            <Text align="center">+1 (415) 690-0364</Text>
          </Box>
          <Box as="email" noOfLines="2" p={1} w="2.6in" align="center">
            <Text align="left">contact@averyfreeman.com</Text>
            <Text align="left">averyfreeman@gmail.com</Text>
          </Box>
          {/* <Box as="address" noOfLines="3" w="2in">
            averyfreeman.com develmonk.com pleasevote.xyz
          </Text> */}
        </HStack>
      </Box>
    </div>
  );
};

export default Header;
