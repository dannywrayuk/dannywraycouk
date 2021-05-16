import {
  Container,
  Title,
  Description,
  ReadMoreButton,
} from "./PostPreview.style";
const PostPreview = ({ title, date, description }) => (
  <Container>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <ReadMoreButton>Read More</ReadMoreButton>
  </Container>
);

export default PostPreview;
