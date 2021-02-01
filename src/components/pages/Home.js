import { Flex } from "@chakra-ui/react";
import Hero from "../sections/Hero";

const Home = () => {
  return (
    <Flex
      // position="relative"
      // top="200px"
      mt="64px"
      w="100%"
      h="90vh"
      justify="center"
      as="main"
    >
      <Hero />
    </Flex>
  );
};

export default Home;
