import textStore from "../../textStore";
import { TextContainer } from "./Greeting.style";

const {
  Landing: { Greeting: Text },
} = textStore;

const Greeting = ({ className }) => (
  <TextContainer className={className}>
    <p>{Text.Line1}</p>
    <p>{Text.Line2}</p>
    <p>{Text.Line3}</p>
  </TextContainer>
);

export default Greeting;
