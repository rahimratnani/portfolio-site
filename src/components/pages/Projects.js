import { Link, Text, Flex, Heading, Button } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import ProjectCard from "../sections/ProjectCard";
import data from "./../../assets/projects/data";

const Projects = () => {
  return (
    <Flex direction="row" w="100%" justify="center" as="main">
      <Flex
        className="container"
        direction="column"
        w={{ base: "90%", lg: "80%", xl: "1040px" }}
        align="center"
      >
        <Heading my="2rem" fontWeight="900" fontSize={{ base: "4xl" }} as="h1">
          My{" "}
          <Text color="primary" as="span">
            Projects
          </Text>
        </Heading>

        {/* ====== */}

        <ProjectCard data={data} />

        {/* ====== */}

        <Button
          href="https://github.com/rahimratnani"
          mb="2rem"
          mt={{ base: "4rem", lg: "0" }}
          size="lg"
          isExternal
          as={Link}
          _hover={{
            color: "white",
            bg: "primary",
            textDecoration: "none",
          }}
          _active={{ color: "white", bg: "primary" }}
          borderWidth="2px"
          color="primary"
          bg="white"
          borderColor="primary"
          rightIcon={<FaGithub />}
          borderRadius="full"
        >
          See All
        </Button>
      </Flex>
    </Flex>
  );
};

export default Projects;
