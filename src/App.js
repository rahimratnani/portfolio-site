import customTheme from "./theme";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "./components/sections/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import ScrollToTop from "./components/util/ScrollToTop";

const theme = extendTheme(customTheme);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ScrollToTop>
        <div>
          <Navbar />

          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/projects">
              <Projects />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </ScrollToTop>
    </ChakraProvider>
  );
}

export default App;
