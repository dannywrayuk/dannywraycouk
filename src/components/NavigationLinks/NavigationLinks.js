import textStore from "../../textStore";
import { Container, TextBubble } from "./NavigationLinks.style";

const {
  Landing: { Navigation: Text },
} = textStore;

const NavigationLinks = () => (
  <Container>
    <TextBubble>{Text.Option1}</TextBubble>
    <TextBubble>{Text.Option2}</TextBubble>
    <TextBubble>{Text.Option3}</TextBubble>
    <TextBubble>{Text.Option4}</TextBubble>
  </Container>
);

export default NavigationLinks;
