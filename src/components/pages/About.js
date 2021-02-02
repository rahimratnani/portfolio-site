import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import Photo from "../ui/Photo";

const About = () => {
  return (
    <Flex direction="row" w="100%" justify="center" as="main">
      {/* =================== */}

      <Flex
        className="container"
        borderColor="black"
        borderStyle="solid"
        border="1px"
        direction="column"
        w={{ base: "90%", lg: "80%", xl: "1040px" }}
        mt=""
        align="center"
      >
        <Heading fontWeight="700" fontSize={{ base: "5xl" }} as="h1">
          About Me
        </Heading>
        <Photo />
      </Flex>

      {/* =================== */}
    </Flex>
  );
};

export default About;
