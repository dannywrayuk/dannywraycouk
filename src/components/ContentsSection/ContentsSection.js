import { useState } from "react";
import PostPreview from "../PostPreview";
import Config from "../../config";

import { SeeMoreButton } from "./ContentsSection.style";

const { Contents: Text } = Config.Text;

const ContentsSection = ({ metaList }) => {
  const [postCount, setPostCount] = useState(Config.MaxContentsItems);
  if (metaList.length !== undefined) {
    return (
      <>
        {metaList
          .filter((x, id) => id < postCount)
          .map((data, id) => (
            <PostPreview key={id} data={data} />
          ))}
        {postCount < metaList.length && (
          <SeeMoreButton onClick={() => setPostCount(postCount + 5)}>
            {Text.SeeMore}
          </SeeMoreButton>
        )}
      </>
    );
  }
  return null;
};

export default ContentsSection;
