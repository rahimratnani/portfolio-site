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
          py="3"
          boxShadow="base"
          justify="center"
          align="center"
          as="header"
          // w="100%"
        >
          <Navbar />
        </Flex>

        <Home />

        <Flex
          // mt={1}
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
