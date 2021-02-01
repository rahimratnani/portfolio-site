import customTheme from "./theme";
import { Box, Flex, ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "./components/sections/Navbar";
import SocialMedia from "./components/ui/SocialMedia";
import Home from "./components/pages/Home";
import Footer from "./components/sections/Footer";

const theme = extendTheme(customTheme);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Flex
          // position="fixed"
          position="sticky"
          top="0"
          py="3"
          boxShadow="base"
          justify="center"
          align="center"
          as="header"
          bg="white"
        >
          <Navbar />
        </Flex>

        <Home />

        <Flex
          mt={{ md: "8", lg: "0" }}
          boxShadow="inner"
          py="2rem"
          justify="center"
          align="center"
          bg="gray.100"
        >
          <Footer />
        </Flex>
      </div>
    </ChakraProvider>
  );
}

export default App;
