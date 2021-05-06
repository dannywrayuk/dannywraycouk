import styled from "styled-components";
import { StandardHead } from "../Heads";
import Post from "../Post";

const PostContainer = styled.div`
  margin: 0 15px;
`;

const PostPage = ({ post }) => (
  <StandardHead>
    <PostContainer>
      <Post meta={post.meta} content={post.content} />
    </PostContainer>
  </StandardHead>
);

export default PostPage;
