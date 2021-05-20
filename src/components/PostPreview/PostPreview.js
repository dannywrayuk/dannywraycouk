import {
  Container,
  Title,
  Description,
  ReadMoreButton,
} from "./PostPreview.style";
import Link from "../Link";
import textStore from "../../textStore";

const { Contents: Text } = textStore;

const PostPreview = ({ data }) => (
  <Container>
    <Title>{data.title}</Title>
    <Description>{data.description}</Description>
    <ReadMoreButton>
      <Link href={data.route}>{Text.ReadMore}</Link>
    </ReadMoreButton>
  </Container>
);

export default PostPreview;
