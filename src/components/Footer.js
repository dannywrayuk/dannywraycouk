import { Flex } from "@chakra-ui/react";
import FooterContent from "./FooterContent";

const Footer = ({ children }) => (
  <Flex minH="100vh" flexDirection="column">
    <Flex flexGrow={1}>{children}</Flex>
    <FooterContent />
  </Flex>
);

export default Footer;
