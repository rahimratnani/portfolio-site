import { IconButton } from "@chakra-ui/react";
import MenuIcon from "./MenuIcon";

const MenuButton = () => {
  return (
    <IconButton
      display={{ base: "block", lg: "none" }}
      bg="white"
      icon={<MenuIcon />}
    />
  );
};

export default MenuButton;
