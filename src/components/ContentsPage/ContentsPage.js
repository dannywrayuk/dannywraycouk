import { useState } from "react";
import BlankPage from "../BlankPage";
import Post from "../Post";
import PostPreview from "../PostPreview";
import constants from "../../constants";
import textStore from "../../textStore";

import { SeeMoreButton } from "./ContentsPage.style";

const { Contents: Text } = textStore;

const ContentsPage = ({ post }) => {
  const [postCount, setPostCount] = useState(constants.MaxContentsItems);
  return (
    <BlankPage showLogo showFooter applyMargin>
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
    </BlankPage>
  );
};

export default ContentsPage;
