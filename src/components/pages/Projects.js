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
// import weatherImg from "./../../assets/projects/weather-app.png";
import { FaGithub, FaLaptop } from "react-icons/fa";
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

        {/* <Flex
          mb={{ base: "3rem", lg: "5rem" }}
          justify="space-between"
          align="center"
          as="section"
          w={{ base: "80%", lg: "100%", xl: "95%" }}
          direction={{ base: "column", lg: "row" }}
        >
          <Image
            mr={{ base: "0", lg: "2rem" }}
            mb={{ base: "1rem", md: "1.5rem", lg: "0" }}
            h={{ base: "216px", md: "300px", lg: "280px" }}
            w={{ base: "full", lg: "450px" }}
            src={weatherImg}
            alt=""
          />

          <Box width="full" h="full" textAlign="left">
            <Heading mb="1rem" fontWeight="700" fontSize="3xl" as="h2">
              Weather App
            </Heading>

            <Text mb="0.5rem">
              <Text fontWeight="700" as="span">
                Built with:
              </Text>{" "}
              HTML, CSS, JavaScript
            </Text>

            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolore, delectus. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolore, delectus.
            </Text>

            <ButtonGroup mt="1rem" variant="outline" spacing="6">
              <Button
                href="https://rahimratnani.github.io/weather-app/"
                isExternal
                as={Link}
                _hover={{
                  color: "white",
                  bg: "primary",
                  textDecoration: "none",
                }}
                _active={{ color: "white", bg: "primary" }}
                // _focus={{ color: "white", bg: "primary" }}
                borderWidth="2px"
                color="primary"
                borderColor="primary"
                rightIcon={<FaLaptop />}
                borderRadius="full"
              >
                Live
              </Button>
              <Button
                href="https://github.com/rahimratnani/weather-app"
                isExternal
                as={Link}
                _hover={{
                  color: "white",
                  bg: "gray.700",
                  textDecoration: "none",
                }}
                _active={{ color: "white", bg: "gray.700" }}
                // _focus={{ color: "white", bg: "gray.700" }}
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
        </Flex> */}

        {/* ======================== */}

        {data.map((project, index) => {
          return (
            <Flex
              mb={{ base: "3rem", lg: "5rem" }}
              justify="space-between"
              align="center"
              as="section"
              // w={{ base: "80%", lg: "100%", xl: "95%" }}
              w={{ sm: "80%", md: "80%", xl: "95%" }}
              direction={{ base: "column", lg: "row" }}
              key={`${project.title + index}`}
            >
              <Image
                mr={{ base: "0", lg: "2rem" }}
                mb={{ base: "1rem", md: "1.5rem", lg: "0" }}
                h={{ base: "216px", md: "300px", lg: "280px" }}
                w={{ base: "full", lg: "450px" }}
                src={project.img}
                alt=""
              />

              <Box width="full" h="full" textAlign="left">
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
        })}

        {/* ============================= */}

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
