import React from 'react';
import { Box, Heading, HStack, Text } from '@chakra-ui/react';

const Header = props => {
  return (
    <div>
      <Box textAlign="center" fontSize="xl" {...props}>
        <Heading>Avery Freeman-Wheaton</Heading>
        <HStack fontSize="sm" align="top">
          <Text as="address" noOfLines="3" maxW="2in">
            1921 Olympia Ave NE Olympia, WA 98506 USA
          </Text>
          <Text as="tel" noOfLines="1" maxW="2in">
            +1 (510) 396-5509
          </Text>
        </HStack>
      </Box>
    </div>
  );
};

export default Header;
