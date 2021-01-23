import { Box } from "@chakra-ui/react";
import logo from "./../../assets/logo.svg";

const Logo = () => {
  return (
    <Box h="40px" w="40px" as="div">
      <img src={logo} alt="" />
    </Box>
  );
};

export default Logo;
