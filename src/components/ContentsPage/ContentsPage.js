import { StandardHead } from "../Heads";
import ShrinkingLogo from "../ShrinkingLogo";
import Post from "../Post";
import PostPreview from "../PostPreview";
import PostBubble from "../PostBubble";
import Footer from "../Footer";
import { PostContainer, SeeAllButton } from "./ContentsPage.style";
import constants from "../../constants";
import textStore from "../../textStore";

const { Contents: Text } = textStore;

const ContentsPage = ({ post, query }) => {
  let postFilter = () => true;
  let PostItem = PostPreview;
  let maxItems = constants.MaxContentsItems;
  if (query.view === "all") {
    PostItem = PostBubble;
    maxItems = 100;
  } else {
    postFilter = (x, id) => id < constants.MaxContentsItems;
  }
  return (
    <StandardHead>
      <ShrinkingLogo />
      <PostContainer>
        <Post meta={post.meta} content={post.content} />
        {post.contentsMetaList.filter(postFilter).map((data, id) => (
          <PostItem
            key={id}
            title={data.title}
            date={data.date}
            description={data.description}
          />
        ))}
        {maxItems < post.contentsMetaList.length && (
          <SeeAllButton>{Text.SeeAll}</SeeAllButton>
        )}
      </PostContainer>
      <Footer />
    </StandardHead>
  );
};

export default ContentsPage;
