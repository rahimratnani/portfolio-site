import { Flex } from "@chakra-ui/react";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";

const Home = () => {
  return (
    <>
      <Flex w="100%" h="90vh" justify="center" as="main">
        <Hero />
      </Flex>

      <Footer />
    </>
  );
};

export default Home;
