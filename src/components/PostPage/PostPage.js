import Post from "../Post";
import BlankPage from "../BlankPage";

const PostPage = ({ post }) => (
  <BlankPage showLogo showFooter applyMargin>
    <Post meta={post.meta} content={post.content} />
  </BlankPage>
);

export default PostPage;
