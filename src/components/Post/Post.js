import { Container, Title, RightJustify, Content } from "./Post.style";

const Post = ({ meta = {}, content }) => (
  <Container>
    {meta.title && <Title>{meta.title}</Title>}
    {meta.date && <RightJustify>{meta.date}</RightJustify>}
    {meta.description && <RightJustify>{meta.description}</RightJustify>}
    <Content dangerouslySetInnerHTML={{ __html: content }} />
  </Container>
);

export default Post;
