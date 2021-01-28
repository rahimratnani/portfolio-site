import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import HeroButton from "../ui/HeroButton";

import Illustration from "../ui/Illustration";

const Hero = () => {
  return (
    <Flex
      as="section"
      h="full"
      w={{ base: "90%", lg: "80%", xl: "1040px" }}
      justify="space-between"
      align="center"
    >
      <Box>
        <Heading
          letterSpacing="1px"
          fontSize="3xl"
          fontWeight="400"
          as="h2"
          mb={3}
        >
          Hi There !
        </Heading>
        {/* <Heading lineHeight="1.3" letterSpacing="1px" fontSize="5xl" as="h2">
          I'm{" "}
          <Text color="primary" as="span">
            Rahim Ratnani
          </Text>
        </Heading>
        <Heading
          lineHeight="1.3"
          letterSpacing="1px"
          fontSize="4xl"
          fontWeight="700"
          as="h2"
        >
          An Aspiring Web Developer.
        </Heading> */}
        <Heading
          // mt="5px"
          fontWeight="700"
          letterSpacing="1px"
          fontSize="2.5rem"
          as="h2"
          lineHeight="1.2"
        >
          I'm{" "}
          <Text color="primary" as="span">
            Rahim Ratnani
          </Text>
          <br />
          An Aspiring Web Developer.
        </Heading>
        <HeroButton mt={6} />
      </Box>

      <Illustration />
    </Flex>
  );
};

export default Hero;
