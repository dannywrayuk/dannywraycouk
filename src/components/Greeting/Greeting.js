import textStore from "../../textStore";
import { TextContainer, Line } from "./Greeting.style";

const {
  Landing: { Greeting: Text },
} = textStore;

const Greeting = ({ className }) => (
  <TextContainer className={className}>
    <Line>{Text.Line1}</Line>
    <Line>{Text.Line2}</Line>
  </TextContainer>
);

export default Greeting;
