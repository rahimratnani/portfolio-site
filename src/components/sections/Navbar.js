import { Box, Flex, Spacer } from "@chakra-ui/react";
import DarkModeButton from "../ui/DarkModeButton";

import Logo from "../ui/Logo";
import MenuButton from "../ui/MenuButton";
import NavbarLinks from "../ui/NavbarLinks";

const Navbar = () => {
  return (
    <Flex
      // justify="space-between"
      align="center"
      as="nav"
      direction="row"
      h="full"
      w={{ base: "90%", lg: "80%", xl: "1040px" }}
    >
      <Logo />
      <Spacer />
      <NavbarLinks />
      <DarkModeButton />
      <MenuButton />
    </Flex>
  );
};

export default Navbar;
