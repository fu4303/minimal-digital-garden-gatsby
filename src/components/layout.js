import React from "react";
import { Flex, Box } from "@chakra-ui/core";
import { Loader } from "@react-three/drei";

const Layout = ({ children }) => {
  return (
    <Box bgColor="brand.bg" h="100vh" w="100%">
      <Flex
        direction="column"
        maxW="1000px"
        m="0 auto"
        bgColor="brand.bg"
        p={3}
      >
      <Loader
        dataInterpolation={(p) => `Planting seeds....${p.toFixed(2)}% done`}
        innerStyles={{
          backgroundColor: '#ffffff'
        }}
        dataStyles={{color: '#1f2127'}}
      />
        {children}
      </Flex>
    </Box>
  );
};

export default Layout;
