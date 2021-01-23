import customTheme from "./theme";
import { Box, Flex, ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "./components/sections/Navbar";

const theme = extendTheme(customTheme);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Flex
          py="3"
          boxShadow="base"
          justify="center"
          align="center"
          // h="90px"
          // border="1px"
          // borderColor="black"
          // borderStyle="solid"
          as="header"
        >
          <Navbar />
        </Flex>
      </div>
    </ChakraProvider>
  );
}

export default App;
