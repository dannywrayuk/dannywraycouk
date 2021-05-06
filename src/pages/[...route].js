import PostPage from "../components/PostPage";
import ContentsPage from "../components/ContentsPage";

import { getMarkdown, getDirectoryTree, getMetaList } from "../utils";

const RouteHandler = ({ post }) => {
  if (post.contentsMetaList) {
    return <ContentsPage post={post} />;
  } else {
    return <PostPage post={post} />;
  }
};

export default RouteHandler;

export const getStaticPaths = async () => {
  const files = getDirectoryTree();
  const paths = files.map((file) => {
    const [_, route] = file.match(/post\/([\w\/]+).md/);
    return { params: { route: route.split("/") } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { route } }) => {
  const post = getMarkdown(route.join("/"));
  post.meta.indexTag &&
    (post.contentsMetaList = getMetaList(post.meta.indexTag));
  return {
    props: {
      post,
    },
  };
};
