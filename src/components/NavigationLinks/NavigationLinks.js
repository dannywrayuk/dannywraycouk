import Link from "../Link";
import Config from "../../config";
import { Container, TextBubble } from "./NavigationLinks.style";

const {
  Landing: { Navigation: Text },
} = Config.Text;

const NavigationLinks = () => (
  <Container>
    <TextBubble>
      <Link href={Text.Option1.Link}>{Text.Option1.Text}</Link>
    </TextBubble>
    <TextBubble>
      <Link href={Text.Option2.Link}>{Text.Option2.Text}</Link>
    </TextBubble>
    <TextBubble>
      <Link href={Text.Option3.Link}>{Text.Option3.Text}</Link>
    </TextBubble>
    <TextBubble>
      <Link href={Text.Option4.Link}>{Text.Option4.Text}</Link>
    </TextBubble>
  </Container>
);

export default NavigationLinks;
