import { Box, Text, Flex, Heading } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Flex mb="2rem" direction="row" w="100%" justify="center" as="main">
      <Flex
        className="container"
        direction="column"
        w={{ base: "90%", lg: "80%", xl: "1040px" }}
        align="center"
      >
        <Heading mt="2rem" fontWeight="900" fontSize={{ base: "4xl" }} as="h1">
          My{" "}
          <Text color="primary" as="span">
            Projects
          </Text>
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Projects;
