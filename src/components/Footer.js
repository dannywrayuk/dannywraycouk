import { Flex } from "@chakra-ui/react";
import { Footer as FooterContent } from "./Content/Footer";

const Footer = ({ children }) => (
  <Flex minH="100vh" direction="column">
    <Flex direction="column" flexGrow={1}>
      {children}
    </Flex>
    <FooterContent />
  </Flex>
);

export default Footer;
