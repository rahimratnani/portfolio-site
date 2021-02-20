import {
  Box,
  List,
  ListItem,
  Heading,
  SimpleGrid,
  Image,
  Flex,
  Wrap,
  HStack,
  Square,
  Tooltip,
  Text,
} from "@chakra-ui/react";
import CustomHr from "./../ui/CustomHr";
import js from "./../../assets/skills/javascript.svg";
import html from "./../../assets/skills/html5.svg";
import css from "./../../assets/skills/css3.svg";
import skills from "../../assets/skills/skillsData";

const SkillCategory = (props) => {
  const { categoryName, category } = props;
  return (
    <Box mb={{ base: "2rem", md: "3rem", lg: "2.5rem" }}>
      <Heading mb="0.8rem" fontSize="1.2rem" as="h4">
        {categoryName}
      </Heading>

      <HStack spacing="0" shouldWrapChildren wrap="wrap">
        {/* <Tooltip
          bg="rgba(0,0,0,0.8)"
          color="white"
          label="javascript"
          aria-label="A tooltip"
          placement="top"
        >
          <Box textAlign="center">
            <Image src={js} boxSize="50px" mx="auto" />

            <Text
              display={{ base: "block", lg: "none" }}
              fontSize="0.9rem"
              color="gray.600"
              fontWeight="500"
              mt="3px"
            >
              javascript
            </Text>
          </Box>
        </Tooltip>

        <Tooltip
          bg="rgba(0,0,0,0.8)"
          color="white"
          label="html"
          aria-label="A tooltip"
          placement="top"
        >
          <Box textAlign="center">
            <Image mx="auto" src={html} boxSize="50px" />

            <Text
              display={{ base: "block", lg: "none" }}
              fontSize="0.9rem"
              color="gray.600"
              fontWeight="500"
              mt="3px"
            >
              html
            </Text>
          </Box mb='1rem'>
        </Tooltip>

        <Tooltip
          bg="rgba(0,0,0,0.8)"
          color="white"
          label="css"
          aria-label="A tooltip"
          placement="top"
        >
          <Box textAlign="center">
            <Image mx="auto" src={css} boxSize="50px" />

            <Text
              display={{ base: "block", lg: "none" }}
              fontSize="0.9rem"
              color="gray.600"
              fontWeight="500"
              mt="3px"
            >
              css
            </Text>
          </Box>
        </Tooltip> */}

        {/* {category.map((skill) => {
          return (
            <Tooltip
              key={skill.name}
              bg="rgba(0,0,0,0.8)"
              color="white"
              label={skill.name}
              aria-label="A tooltip"
              placement="top"
            >
              <Box
                h="90px"
                w="90px"
                mb={{ base: "0.5rem", md: "0" }}
                textAlign="center"
              >
                <Image mx="auto" src={skill.img} boxSize="50px" />

                <Text
                  display={{ base: "block", lg: "none" }}
                  fontSize="0.9rem"
                  color="gray.600"
                  fontWeight="500"
                  mt="3px"
                >
                  {skill.name}
                </Text>
              </Box>
            </Tooltip>
          );
        })} */}

        {/* ======================= */}

        {category.map((skill) => {
          return (
            <Tooltip
              key={skill.name}
              bg="rgba(0,0,0,0.8)"
              color="white"
              label={skill.name}
              aria-label="A tooltip"
              placement="top"
            >
              <Box
                // h={{ base: "90px", lg: "50px" }}
                // w={{ base: "90px", lg: "50px" }}
                mb={{ base: "1rem", md: "0" }}
                mr={{ base: "2rem" }}
                textAlign="center"
              >
                <Image mx="auto" src={skill.img} boxSize="50px" />

                <Text
                  display={{ base: "block", lg: "none" }}
                  fontSize="0.9rem"
                  color="gray.600"
                  fontWeight="500"
                  mt="3px"
                >
                  {skill.name}
                </Text>
              </Box>
            </Tooltip>
          );
        })}

        {/* ================================ */}
      </HStack>
    </Box>
  );
};

export default SkillCategory;
