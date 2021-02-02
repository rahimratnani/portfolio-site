import { Flex } from "@chakra-ui/react";
import Hero from "../sections/Hero";

const Home = () => {
  return (
    <Flex w="100%" h="90vh" justify="center" as="main">
      <Hero />
    </Flex>
  );
};

export default Home;
