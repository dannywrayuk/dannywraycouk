import { Container, Title, Date, Content } from "./Post.style";

const Post = ({ meta, content }) => (
  <Container>
    <Title>{meta.title}</Title>
    {meta.date && <Date>{meta.date}</Date>}
    {meta.description && <Date>{meta.description}</Date>}
    <Content dangerouslySetInnerHTML={{ __html: content }} />
  </Container>
);

export default Post;
