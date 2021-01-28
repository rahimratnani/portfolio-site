import { IconButton } from "@chakra-ui/react";
import MenuIcon from "./MenuIcon";

const hoverStyle = { color: "primary" };

const MenuButton = (props) => {
  const { drawerRef, ...rest } = props;
  return (
    <IconButton
      _hover={hoverStyle}
      display={{ base: "block", lg: "none" }}
      bg="white"
      icon={<MenuIcon />}
      {...rest}
      ref={drawerRef}
    />
  );
};

export default MenuButton;
