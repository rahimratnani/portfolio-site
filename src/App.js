import customTheme from "./theme";
import { Flex, ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "./components/sections/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Footer from "./components/sections/Footer";
import About from "./components/pages/About";

const theme = extendTheme(customTheme);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Flex
          zIndex="docked"
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

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>

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
