import Link from "../Link";
import Config from "../../config";
import {
  Container,
  Title,
  Description,
  ReadMoreButton,
} from "./PostPreview.style";

const { Contents: Text } = Config.Text;

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
