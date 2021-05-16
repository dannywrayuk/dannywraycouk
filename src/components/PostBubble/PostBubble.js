import { Container, Title, Date, Description } from "./PostBubble.style";

const PostBubble = ({ title, date, description }) => (
  <Container>
    <Date>{date}</Date>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Container>
);

export default PostBubble;
