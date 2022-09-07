// Old Code //

/*
import { Box, Heading, List, ListItem, ListIcon, Link } from "@chakra-ui/react";
import CaretIcon from "../ui/CaretIcon";

const RandomFacts = () => {
  return (
    <Box as="section" px={2} w="full" textAlign="center">
      <Heading as="h2">Random Facts</Heading>

      <List fontSize="1.1rem" mt="2rem" textAlign="left" spacing={3}>


        <ListItem>
          <ListIcon as={CaretIcon} />
          I'm addicted to my Kindle
        </ListItem>


        <ListItem>
          <ListIcon as={CaretIcon} />I like stoic philosophy
        </ListItem>


        <ListItem>
          <ListIcon as={CaretIcon} />I prefer{" "}
          <Link
            color="primary"
            isExternal
            href="https://www.reddit.com/user/rahim_ratnani"
          >
            Reddit
          </Link>{" "}
          over other social media
        </ListItem>


        <ListItem>
          <ListIcon as={CaretIcon} />
          My favorite genres are sci-fi and fantasy
        </ListItem>


        <ListItem>
          <ListIcon as={CaretIcon} />I like writing full words when chatting
        </ListItem>


      </List>
    </Box>
  );
};

export default RandomFacts;
*/

// New Code //

import { Box, Heading, List, ListItem, ListIcon, Link } from '@chakra-ui/react';
import CustomHr from './../ui/CustomHr';
import { FaCaretRight } from 'react-icons/fa';

const RandomFacts = (props) => {
  return (
    <Box {...props} px={2} as="section" w="full" textAlign="left">
      <Heading mb="5px" fontSize="1.8rem" fontWeight="800" as="h2">
        Random Facts
      </Heading>

      <CustomHr mb="1.5rem" w="100%" />

      <List fontSize="1.1rem" mt="2rem" textAlign="left" spacing={3}>
        <ListItem>
          <ListIcon color="primary" mb="2px" as={FaCaretRight} />
          I'm addicted to my Kindle
        </ListItem>

        <ListItem>
          <ListIcon color="primary" mb="2px" as={FaCaretRight} />I prefer Reddit
          over other social media
        </ListItem>

        <ListItem>
          <ListIcon color="primary" mb="2px" as={FaCaretRight} />
          My favorite genres are sci-fi and fantasy
        </ListItem>

        <ListItem>
          <ListIcon color="primary" mb="2px" as={FaCaretRight} />I like stoic
          philosophy
        </ListItem>

        <ListItem>
          <ListIcon color="primary" mb="2px" as={FaCaretRight} />I like writing
          full words when chatting
        </ListItem>
      </List>
    </Box>
  );
};

export default RandomFacts;
