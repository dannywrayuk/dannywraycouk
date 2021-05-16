import { Container, CopyrightText } from "./Footer.style";
import textStore from "../../textStore";

const { Footer: Text } = textStore;

const Footer = () => (
  <Container>
    <CopyrightText>{Text.CopyrightText}</CopyrightText>
    <CopyrightText>{Text.Version}</CopyrightText>
  </Container>
);

export default Footer;
