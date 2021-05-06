import styled from "styled-components";
import { StandardHead } from "../Heads";
import ShrinkingLogo from "../ShrinkingLogo";
import Post from "../Post";

const PostContainer = styled.div`
  margin: 20px 15px 0px;
`;

const Test = styled.div`
  color: white;
`;

const ContentsPage = ({ post }) => (
  <StandardHead>
    <ShrinkingLogo />
    <PostContainer>
      <Post meta={post.meta} content={post.content} />
      {post.contentsMetaList.map((data, id) => (
        <Test key={id}>{data.title}</Test>
      ))}
    </PostContainer>
  </StandardHead>
);

export default ContentsPage;
