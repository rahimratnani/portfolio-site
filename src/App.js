import customTheme from "./theme";
import { Box, Flex, ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "./components/sections/Navbar";
import SocialMedia from "./components/ui/SocialMedia";
import Home from "./components/pages/Home";

const theme = extendTheme(customTheme);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Flex
          py="3"
          boxShadow="base"
          justify="center"
          align="center"
          as="header"
        >
          <Navbar />
        </Flex>
        <Home />
      </div>
    </ChakraProvider>
  );
}

export default App;
