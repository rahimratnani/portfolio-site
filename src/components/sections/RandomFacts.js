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
