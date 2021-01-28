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
  Text,
  Link,
  Stack,
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
              {/* <Link href="/" onClick={onClose} variant="link">
                Logo
              </Link> */}
              <Logo onClick={onClose} />
            </DrawerHeader>

            <DrawerBody
              //   as={Stack}
              //   fontSize="lg"
              //   justify="center"
              px={8}
              pb={16}
            >
              <NavbarLinks
                justify="center"
                fontSize="lg"
                spacing={4}
                onClick={onClose}
                direction="column"
                home={true}
                h="full"
              />
              {/* <Link onClick={onClose}>Home</Link>
              <Link onClick={onClose}>About</Link>
              <Link onClick={onClose}>Projects</Link>
              <Link onClick={onClose}>Resume</Link> */}
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
