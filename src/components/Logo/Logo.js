import textStore from "../../textStore";
import { TextContainer } from "./Logo.style";

const { Logo: Text } = textStore;

const Logo = () => (
  <TextContainer>
    <p>{Text.Line1}</p>
    <p>{Text.Line2}</p>
    <p>{Text.Line3}</p>
  </TextContainer>
);

export default Logo;
