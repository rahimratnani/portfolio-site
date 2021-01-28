import { Image } from "@chakra-ui/react";
import illustration from "./../../assets/illustration.svg";

const Illustration = () => {
  return (
    <Image
      boxSize="30rem"
      src={illustration}
      alt="illustration of a programmer"
    />
  );
};

export default Illustration;
