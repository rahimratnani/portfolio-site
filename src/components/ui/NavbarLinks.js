import { HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

const NavbarLinks = () => {
  return (
    <HStack
      mr="2rem"
      display={{ base: "none", lg: "block" }}
      fontSize="1.1rem"
      spacing="2rem"
    >
      <Link as={RouterLink} to="/about">
        About
      </Link>
      <Link as={RouterLink} to="/projects">
        Projects
      </Link>
      <Link as={RouterLink} to="/resume">
        Resume
      </Link>
    </HStack>
  );
};

export default NavbarLinks;
