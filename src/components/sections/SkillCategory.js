import { Box, Heading, Image, HStack, Tooltip, Text } from "@chakra-ui/react";

const SkillCategory = (props) => {
  const { categoryName, category } = props;
  return (
    <Box mb={{ base: "2rem", md: "3rem", lg: "2.5rem" }}>
      <Heading mb="0.8rem" fontSize="1.2rem" as="h4">
        {categoryName}
      </Heading>

      <HStack spacing="0" shouldWrapChildren wrap="wrap">
        {/* ======================= */}

        {category.map((skill) => {
          return (
            <Tooltip
              key={skill.name}
              bg="rgba(0,0,0,0.85)"
              color="white"
              label={skill.name}
              aria-label="A tooltip"
              placement="top"
            >
              <Box
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

        {/* ======================= */}
      </HStack>
    </Box>
  );
};

export default SkillCategory;
