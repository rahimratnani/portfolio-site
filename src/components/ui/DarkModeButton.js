import { IconButton } from "@chakra-ui/react";
import DarkModeIcon from "./DarkModeIcon";

const hoverStyle = { color: "primary" };

const DarkModeButton = () => {
  return (
    <IconButton
      _hover={hoverStyle}
      mr={{ base: "3", lg: "0" }}
      bg="white"
      icon={<DarkModeIcon />}
    />
  );
};

export default DarkModeButton;
