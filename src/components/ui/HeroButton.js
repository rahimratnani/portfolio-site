import { Link, Button, Icon } from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";

const HeroButton = (props) => {
  return (
    // <Link isExternal href="mailto:rahimratnani4@gmail.com">
    //   <Button
    //     {...props}
    //     _hover={{ backgroundColor: "#5BAB80" }}
    //     bg="primary"
    //     color="white"
    //     size="lg"
    //     px="30px"
    //     fontWeight="500"
    //     borderRadius="full"
    //     letterSpacing="0.5px"
    //     rightIcon={<Icon m="0 0 2px 8px" as={FaEnvelope} w={5} h={5} />}
    //   >
    //     Let's Talk
    //   </Button>
    // </Link>
    <Button
      {...props}
      href="mailto:rahimratnani4@gmail.com"
      as={Link}
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
      rightIcon={<Icon m="0 0 2px 8px" as={FaEnvelope} w={5} h={5} />}
    >
      Let's Talk
    </Button>
  );
};

export default HeroButton;
