import textStore from "../../textStore";
import { TextContainer, Line } from "./Logo.style";

const { Logo: Text } = textStore;

const Logo = () => (
  <TextContainer>
    <Line>{Text.Line1}</Line>
    <Line>{Text.Line2}</Line>
    <Line>{Text.Line3}</Line>
  </TextContainer>
);

export default Logo;
