import { Image } from "@chakra-ui/react";
import illustration from "./../../assets/illustration.svg";

const Illustration = (props) => {
  return (
    <Image {...props} src={illustration} alt="illustration of a programmer" />
  );
};

export default Illustration;
