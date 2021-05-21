import { useState } from "react";
import BlankPage from "../BlankPage";
import Post from "../Post";
import PostPreview from "../PostPreview";
import Config from "../../config";

import { SeeMoreButton } from "./ContentsPage.style";

const { Contents: Text } = Config.Text;

const ContentsPage = ({ post }) => {
  const [postCount, setPostCount] = useState(Config.MaxContentsItems);
  return (
    <BlankPage showLogo showFooter applyMargin>
      <Post meta={post.meta} content={post.content} />
      {post.contentsMetaList
        .filter((x, id) => id < postCount)
        .map((data, id) => (
          <PostPreview key={id} data={data} />
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
