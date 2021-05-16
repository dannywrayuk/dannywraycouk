import styled from "styled-components";
import { StandardHead } from "../Heads";
import ShrinkingLogo from "../ShrinkingLogo";
import Post from "../Post";
import PostBubble from "../PostBubble";

const PostContainer = styled.div`
  margin: 20px 15px 0px;
`;

const ContentsPage = ({ post }) => (
  <StandardHead>
    <ShrinkingLogo />
    <PostContainer>
      <Post meta={post.meta} content={post.content} />
      {post.contentsMetaList.map((data, id) => (
        <PostBubble
          key={id}
          title={data.title}
          date={data.date}
          description={data.description}
        />
      ))}
    </PostContainer>
  </StandardHead>
);

export default ContentsPage;
