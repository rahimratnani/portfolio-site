// Old Code //

/*
import { Box, List, ListItem, Heading, SimpleGrid } from "@chakra-ui/react";
import CustomHr from "./../ui/CustomHr";

const Skills = (props) => {
  const { skills } = props;

  const modifiedSkills = [];

  for (let title in skills) {
    let skill = (
      <Box key={title} textAlign="center">
        <Heading fontSize="lg" as="h3">
          {title}
        </Heading>

        <CustomHr mx="auto" w="2rem" mt={1} />

        <List mt={3} fontSize="1.1rem" textAlign="center" spacing={1}>
          {skills[title].map((s, i) => {
            return <ListItem key={i}>{s}</ListItem>;
          })}
        </List>
      </Box>
    );

    modifiedSkills.push(skill);
  }

  return (
    <Box px={2} as="section" w="full" textAlign="center">
      <Heading mb="2rem" as="h2">
        My Skills
      </Heading>

      <SimpleGrid
        maxWidth="90%"
        mx="auto"
        columns={{ base: 1, md: 3 }}
        spacingX={{ base: 10, md: 15 }}
        spacingY={10}
      >
        {modifiedSkills}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
*/

import { Box, Heading } from "@chakra-ui/react";
import CustomHr from "./../ui/CustomHr";
import SkillCategory from "./SkillCategory";

const Skills = (props) => {
  const { skills, ...rest } = props;

  const skillsArray = [];

  for (let category in skills) {
    skillsArray.push(
      <SkillCategory
        key={category}
        category={skills[category]}
        categoryName={category}
      />
    );
  }

  return (
    <Box {...rest} px={2} as="section" w="full" textAlign="left">
      <Heading mb="5px" fontSize="1.8rem" fontWeight="800" as="h2">
        My Skills
      </Heading>

      <CustomHr mb="1.5rem" w="100%" />

      {skillsArray}
    </Box>
  );
};

export default Skills;
