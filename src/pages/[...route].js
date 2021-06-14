import { useRouter } from "next/router";
import PostPage from "../components/PostPage";
import ContentsPage from "../components/ContentsPage";

import { getMarkdown, getDirectoryTree, getAllMeta } from "../utils";

const RouteHandler = ({ post }) => {
  const router = useRouter();
  if (post.contentsMetaList) {
    return <ContentsPage post={post} query={router.query} />;
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
  const filteredPaths = paths.filter((x) => x.params.route[0] !== "index");
  return {
    paths: filteredPaths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { route } }) => {
  const post = getMarkdown(route.join("/"));
  post.meta.indexTag &&
    (post.contentsMetaList = getAllMeta(post.meta.indexTag));
  return {
    props: {
      post,
    },
  };
};
