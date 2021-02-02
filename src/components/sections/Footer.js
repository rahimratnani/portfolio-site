import { Box, Divider, Flex, Spacer, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import SocialMedia from "../ui/SocialMedia";

const Footer = () => {
  return (
    <Flex
      as="footer"
      direction="column"
      align="center"
      justify="center"
      h="full"
      w={{ base: "90%", lg: "80%", xl: "1040px" }}
    >
      <Link
        to="/"
        _hover={{ textDecoration: "none", color: "primary" }}
        fontWeight="500"
        mb="1rem"
        as={RouterLink}
      >
        &copy; {new Date().getFullYear()} - Rahim Ratnani
      </Link>

      <SocialMedia direction="row" />
    </Flex>
  );
};

export default Footer;
