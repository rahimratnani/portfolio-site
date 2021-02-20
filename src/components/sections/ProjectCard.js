import {
  Box,
  Link,
  Image,
  Text,
  Flex,
  Heading,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { FaGithub, FaLaptop } from "react-icons/fa";

const ProjectCard = (props) => {
  const { project } = props;

  return (
    <Flex
      mb={{ base: "3rem", lg: "5rem" }}
      justify="space-between"
      align="flex-start"
      as="section"
      w={{ sm: "80%", md: "80%", lg: "100%", xl: "95%" }}
      direction={{ base: "column", lg: "row" }}
    >
      <Image
        mr={{ base: "0", lg: "2rem" }}
        mb={{ base: "1rem", md: "1.5rem", lg: "0" }}
        w={{ base: "full", lg: "450px" }}
        src={project.img}
        alt=""
      />

      <Box mt={{ sm: "0", lg: "-3px" }} width="full" h="full" textAlign="left">
        <Heading mb="1rem" fontWeight="700" fontSize="3xl" as="h2">
          {project.title}
        </Heading>

        <Text mb="0.5rem">
          <Text fontWeight="700" as="span">
            Built with:
          </Text>{" "}
          {project.builtWith}
        </Text>

        <Text>{project.description}</Text>

        <ButtonGroup mt="1rem" variant="outline" spacing="6">
          <Button
            href={project.live}
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
            borderColor="primary"
            rightIcon={<FaLaptop />}
            borderRadius="full"
          >
            Live
          </Button>
          <Button
            href={project.code}
            isExternal
            as={Link}
            _hover={{
              color: "white",
              bg: "gray.700",
              textDecoration: "none",
            }}
            _active={{ color: "white", bg: "gray.700" }}
            color="gray.700"
            borderColor="gray.700"
            size="md"
            borderWidth="2px"
            rightIcon={<FaGithub />}
            borderRadius="full"
          >
            Code
          </Button>
        </ButtonGroup>
      </Box>
    </Flex>
  );
};

export default ProjectCard;
