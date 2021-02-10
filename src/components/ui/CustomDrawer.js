import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import MenuButton from "./MenuButton";
import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";
import SocialMedia from "./SocialMedia";

const CustomDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <MenuButton drawerRef={btnRef} onClick={onOpen} />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton _hover={{ color: "primary" }} />
            <DrawerHeader p={8}>
              <Logo onClick={onClose} />
            </DrawerHeader>

            <DrawerBody px={8} pb={16}>
              <NavbarLinks
                justify="center"
                fontSize="1.25rem"
                spacing={4}
                onClick={onClose}
                direction="column"
                home={true}
                h="full"
              />
            </DrawerBody>

            <DrawerFooter justifyContent="flex-start" px={4} py={8}>
              <SocialMedia direction="row" />
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default CustomDrawer;
