import { useState } from "react";
import { StandardHead } from "../Heads";
import ShrinkingLogo from "../ShrinkingLogo";
import Post from "../Post";
import PostPreview from "../PostPreview";
import Footer from "../Footer";
import { PostContainer, SeeMoreButton } from "./ContentsPage.style";
import constants from "../../constants";
import textStore from "../../textStore";

const { Contents: Text } = textStore;

const ContentsPage = ({ post }) => {
  const [postCount, setPostCount] = useState(constants.MaxContentsItems);
  return (
    <StandardHead>
      <ShrinkingLogo />
      <PostContainer>
        <Post meta={post.meta} content={post.content} />
        {post.contentsMetaList
          .filter((x, id) => id < postCount)
          .map((data, id) => (
            <PostPreview
              key={id}
              title={data.title}
              date={data.date}
              description={data.description}
            />
          ))}
        {postCount < post.contentsMetaList.length && (
          <SeeMoreButton onClick={() => setPostCount(postCount + 5)}>
            {Text.SeeMore}
          </SeeMoreButton>
        )}
      </PostContainer>
      <Footer />
    </StandardHead>
  );
};

export default ContentsPage;
