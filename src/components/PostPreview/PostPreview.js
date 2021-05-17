import {
  Container,
  Title,
  Description,
  ReadMoreButton,
} from "./PostPreview.style";
import textStore from "../../textStore";

const { Contents: Text } = textStore;

const PostPreview = ({ title, date, description }) => (
  <Container>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <ReadMoreButton>{Text.ReadMore}</ReadMoreButton>
  </Container>
);

export default PostPreview;
