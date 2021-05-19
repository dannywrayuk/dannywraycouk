import textStore from "../../textStore";
import { TextContainer } from "./Greeting.style";

const {
  Landing: { Greeting: Text },
} = textStore;

const Greeting = ({ className }) => (
  <TextContainer className={className}>
    <div>{Text.Line1}</div>
    <div>{Text.Line2}</div>
  </TextContainer>
);

export default Greeting;
