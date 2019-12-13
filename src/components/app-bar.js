import React from "react";
import {
  Box, Flex, Image, Text,
} from "@chakra-ui/core";
export default () => {
  window.localStorage.setItem('darkMode', false);
  return (
    <Flex
      bg="#253047"
      width='100%'
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <Image
          src="favicon.png"
          size={34}
          pl={2}
        />
        <Text pl={3} color="white">
          Invygo Last Mile
          </Text>
      </Flex>
      <Box>
      </Box>
    </Flex>
  );
}