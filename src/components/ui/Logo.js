import { Box } from "@chakra-ui/react";
import logo from "./../../assets/logo.svg";
import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <Box {...props} h="40px" w="40px" as="div">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </Box>
  );
};

export default Logo;
