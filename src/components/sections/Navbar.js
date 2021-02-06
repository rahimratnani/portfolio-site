import { Box, Flex, Spacer } from "@chakra-ui/react";
import CustomDrawer from "../ui/CustomDrawer";
import DarkModeButton from "../ui/DarkModeButton";

import Logo from "../ui/Logo";
import NavbarLinks from "../ui/NavbarLinks";

const Navbar = () => {
  return (
    <Flex
      align="center"
      as="nav"
      direction="row"
      h="full"
      w={{ base: "90%", lg: "80%", xl: "1040px" }}
    >
      <Logo />
      <Spacer />
      <NavbarLinks
        // mr="2rem"
        display={{ base: "none", lg: "block" }}
        fontSize="1.1rem"
        spacing="2rem"
        direction="row"
        home={false}
      />
      {/* <DarkModeButton /> */}
      <CustomDrawer />
    </Flex>
  );
};

export default Navbar;
