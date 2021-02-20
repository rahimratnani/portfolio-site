// Old Code //
/*

import {
  Box,
  Link,
  Heading,
  Text,
  Tooltip,
  Button,
  Center,
} from "@chakra-ui/react";
import SocialMedia from "../ui/SocialMedia";

const Introduction = (props) => {
  const { onClick } = props;
  return (
    <Box px={2} mt="1.5rem" w="full" textAlign="left" as="section">
      <Heading mb={4} fontWeight="500" fontSize="2xl" as="h2">
        Hi, I'm Rahim Ratnani.
      </Heading>

      <Text mb={4} fontSize="1.1rem">
        I'm a self-taught front-end developer based in India. I enjoy
        transforming complex problems into simple and intuitive solutions. I
        love to explore and learn new things. Currently, most of my endeavors
        are in JavaScript and React.js.
      </Text>

      <Text mb={4} fontSize="1.1rem">
        Aside from that, I'm also an avid{" "}
        <Link
          color="primary"
          isExternal
          href="https://www.goodreads.com/rahim_ratnani"
        >
          reader
        </Link>
        . When I'm not coding, you'll probably find me reading something on my
        Kindle or tinkering with my computer.
      </Text>

      <Text mb={4} fontSize="1.1rem">
        As someone with a keen interest in tech and a knack for problem-solving,
        web development was an obvious path.
      </Text>

      <Text fontSize="1.1rem">
        Let's get in touch. Write me at{" "}
        <Tooltip
          bg="rgba(0,0,0,0.8)"
          color="white"
          label="Click to copy email address."
          aria-label="A tooltip"
          placement="top"
        >
          <Button onClick={onClick} color="primary" variant="link">
            rahimratnani4@gmail.com
          </Button>
        </Tooltip>
      </Text>

      <Center mt="4rem">
        <SocialMedia direction="row" />
      </Center>
    </Box>
  );
};

export default Introduction;

*/

// New Code //

import { Box, Link, Heading, Text, Tooltip, Button } from "@chakra-ui/react";
import SocialMedia from "../ui/SocialMedia";

const Introduction = (props) => {
  const { onClick } = props;
  return (
    <Box px={2} mt="1.5rem" w="full" textAlign="left" as="section">
      <Heading mb={4} fontWeight="500" fontSize="2xl" as="h2">
        Hi, I'm Rahim Ratnani.
      </Heading>

      <Text mb={4} fontSize="1.1rem">
        I'm a self-taught front-end developer based in India. I enjoy
        transforming complex problems into simple and intuitive solutions. I
        love to explore and learn new things. Currently, most of my endeavors
        are in JavaScript and React.js.
      </Text>

      <Text mb={4} fontSize="1.1rem">
        Aside from that, I'm also an avid{" "}
        <Link
          color="primary"
          isExternal
          href="https://www.goodreads.com/rahim_ratnani"
        >
          reader
        </Link>
        . When I'm not coding, you'll probably find me reading something on my
        Kindle or tinkering with my computer.
      </Text>

      <Text mb={4} fontSize="1.1rem">
        As someone with a keen interest in tech and a knack for problem-solving,
        web development was an obvious path.
      </Text>

      <Text fontSize="1.1rem">
        Let's get in touch. Write me at{" "}
        <Tooltip
          bg="rgba(0,0,0,0.8)"
          color="white"
          label="Click to copy email address."
          aria-label="A tooltip"
          placement="top"
        >
          <Button onClick={onClick} color="primary" variant="link">
            rahimratnani4@gmail.com
          </Button>
        </Tooltip>
      </Text>

      <SocialMedia ml="-10px" mt="2rem" direction="row" />
    </Box>
  );
};

export default Introduction;
