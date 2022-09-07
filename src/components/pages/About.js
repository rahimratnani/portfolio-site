import React, { useEffect, useState } from 'react';
import { Flex, Heading, useClipboard, useToast, Text } from '@chakra-ui/react';
import Introduction from '../sections/Introduction';
import Photo from '../ui/Photo';
import RandomFacts from '../sections/RandomFacts';
import Skills from '../sections/Skills';
import Footer from '../sections/Footer';
import skills from './../../assets/skills/skillsData';

const About = () => {
  const [clipboardValue, setcClipboardValue] = useState(
    'rahimratnani4@gmail.com'
  );
  const { hasCopied, onCopy } = useClipboard(clipboardValue);
  const toast = useToast();

  const handleCopyAndToast = () => {
    onCopy();
    toast({
      title: 'Email copied.',
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'bottom-left',
    });
  };

  useEffect(() => {
    document.title = 'About Rahim Ratnani';
  }, []);

  return (
    <>
      <Flex mb="4rem" direction="row" w="100%" justify="center" as="main">
        <Flex
          className="container"
          direction="column"
          w={{ base: '90%', lg: '80%', xl: '1040px' }}
          align="center"
        >
          <Heading
            mt="2rem"
            fontWeight="900"
            fontSize={{ base: '4xl' }}
            as="h1"
          >
            About{' '}
            <Text color="primary" as="span">
              Me
            </Text>
          </Heading>

          <Photo mt="1.5rem" />

          <Introduction onClick={handleCopyAndToast} />

          <Skills skills={skills} mt="4rem" />

          <RandomFacts mt="1.5rem" />
        </Flex>
      </Flex>

      <Footer />
    </>
  );
};

export default About;
