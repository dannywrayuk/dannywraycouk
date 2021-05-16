import { Container, CopyrightText } from "./Footer.style";
import textStore from "../../textStore";
import constants from "../../constants";

const { Footer: Text } = textStore;

const Footer = () => (
  <Container>
    <CopyrightText>{Text.CopyrightText}</CopyrightText>
    <CopyrightText>{constants.Version}</CopyrightText>
  </Container>
);

export default Footer;
