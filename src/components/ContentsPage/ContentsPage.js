import { StandardHead } from "../Heads";
import ShrinkingLogo from "../ShrinkingLogo";
import Post from "../Post";
import PostPreview from "../PostPreview";
import Footer from "../Footer";
import { PostContainer } from "./ContentsPage.style";

const ContentsPage = ({ post }) => (
  <StandardHead>
    <ShrinkingLogo />
    <PostContainer>
      <Post meta={post.meta} content={post.content} />
      {post.contentsMetaList.map((data, id) => (
        <PostPreview
          key={id}
          title={data.title}
          date={data.date}
          description={data.description}
        />
      ))}
    </PostContainer>
    <Footer />
  </StandardHead>
);

export default ContentsPage;
