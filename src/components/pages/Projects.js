import { Flex } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Flex mb="2rem" direction="row" w="100%" justify="center" as="main">
      <Flex
        className="container"
        direction="column"
        w={{ base: "90%", lg: "80%", xl: "1040px" }}
        align="center"
      ></Flex>
    </Flex>
  );
};

export default Projects;
