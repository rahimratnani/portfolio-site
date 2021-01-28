import { Icon, IconButton, Link, Stack } from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialMedia = (props) => {
  const style = {
    color: "gray.700",
    hoverColor: "primary",
  };

  return (
    <Stack {...props}>
      <IconButton
        color={style.color}
        _hover={{ color: style.hoverColor }}
        href="mailto:rahimratnani4@gmail.com"
        size="lg"
        variant="link"
        as={Link}
        icon={<Icon boxSize={6} as={FaEnvelope} />}
      />
      <IconButton
        color={style.color}
        _hover={{ color: style.hoverColor }}
        href="https://github.com/rahimratnani"
        isExternal
        size="lg"
        variant="link"
        as={Link}
        icon={<Icon boxSize={6} as={FaGithub} />}
      />
      <IconButton
        color={style.color}
        _hover={{ color: style.hoverColor }}
        href="https://www.linkedin.com/in/rahim-ratnani"
        isExternal
        size="lg"
        variant="link"
        as={Link}
        icon={<Icon boxSize={6} as={FaLinkedin} />}
      />
      <IconButton
        color={style.color}
        _hover={{ color: style.hoverColor }}
        href="https://twitter.com/rahim_ratnani"
        isExternal
        size="lg"
        variant="link"
        as={Link}
        icon={<Icon boxSize={6} as={FaTwitter} />}
      />
    </Stack>
  );
};

export default SocialMedia;
