import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import Introduction from "../sections/Introduction";
import Photo from "../ui/Photo";

const About = () => {
  const [clipboardValue, setcClipboardValue] = useState(
    "rahimratnani4@gmail.com"
  );
  const { hasCopied, onCopy } = useClipboard(clipboardValue);
  const toast = useToast();

  const handleCopyAndToast = () => {
    onCopy();
    toast({
      title: "Email copied.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "bottom-left",
    });
  };

  return (
    <Flex direction="row" w="100%" justify="center" as="main">
      {/* =================== */}

      <Flex
        className="container"
        // borderColor="black"
        // borderStyle="solid"
        // border="1px"
        direction="column"
        w={{ base: "90%", lg: "80%", xl: "1040px" }}
        mt=""
        align="center"
      >
        <Heading mt="3rem" fontWeight="700" fontSize={{ base: "4xl" }} as="h1">
          About Me
        </Heading>
        <Photo mt="1.5rem" />

        <Introduction onClick={handleCopyAndToast} />
      </Flex>

      {/* =================== */}
    </Flex>
  );
};

export default About;
