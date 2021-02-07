import { Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const HeroButton = (props) => {
  return (
    <Button
      {...props}
      to="/about"
      as={RouterLink}
      _hover={{ backgroundColor: "#5BAB80", textDecoration: "none" }}
      _active={{ backgroundColor: "#5BAB80" }}
      _focus={{ boxShadow: "none" }}
      bg="primary"
      color="white"
      size="lg"
      px="30px"
      fontWeight="500"
      borderRadius="full"
      letterSpacing="0.5px"
      rightIcon={<FaUser size="0.9rem" />}
    >
      Know More
    </Button>
  );
};

export default HeroButton;
