import React, { useState } from "react";
import { Flex, Heading, useClipboard, useToast, Text } from "@chakra-ui/react";
import Introduction from "../sections/Introduction";
import Photo from "../ui/Photo";
import RandomFacts from "../sections/RandomFacts";
import CustomHr from "../ui/CustomHr";
import Skills from "../sections/Skills";

const About = () => {
  const [clipboardValue, setcClipboardValue] = useState(
    "rahimratnani4@gmail.com"
  );
  const { hasCopied, onCopy } = useClipboard(clipboardValue);
  const toast = useToast();
  const skills = {
    Technologies: ["React.js", "Node.js", "Chakra UI", "Bulma CSS", "Sass"],
    Languages: ["JavaScript", "HTML", "CSS"],
    "Other Tools": [
      "Linux CLI",
      "Git",
      "Webpack",
      "Visual Studio Code",
      "NPM",
      "Vim",
    ],
  };

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
    <Flex mb="2rem" direction="row" w="100%" justify="center" as="main">
      <Flex
        className="container"
        direction="column"
        w={{ base: "90%", lg: "80%", xl: "1040px" }}
        align="center"
      >
        <Heading mt="2rem" fontWeight="900" fontSize={{ base: "4xl" }} as="h1">
          About{" "}
          <Text color="primary" as="span">
            Me
          </Text>
        </Heading>
        <Photo mt="1.5rem" />

        <Introduction onClick={handleCopyAndToast} />

        <CustomHr w={{ base: "60%" }} my="2rem" />

        <RandomFacts />

        <CustomHr w={{ base: "60%" }} my="2rem" />

        <Skills skills={skills} />
      </Flex>
    </Flex>
  );
};

export default About;
