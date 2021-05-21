import { Container, CopyrightText } from "./Footer.style";
import Config from "../../config";

const { Footer: Text } = Config.Text;

const Footer = () => (
  <Container>
    <CopyrightText>{Text.CopyrightText}</CopyrightText>
    <CopyrightText>{Config.Version}</CopyrightText>
  </Container>
);

export default Footer;
