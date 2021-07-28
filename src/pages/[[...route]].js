import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "../components/MDXComponents";
import {
  getDirectoryTree,
  getMarkdownContent,
  parseKatex,
  getAllMeta,
} from "../utils";
import constants from "../constants";

const RouteHandler = ({ source, frontMatter }) => (
  <MDXRemote {...source} {...frontMatter} components={MDXComponents} />
);

export default RouteHandler;

export const getStaticPaths = async () => {
  const files = getDirectoryTree();
  const paths = files.map((file) => {
    const [_, route] = file.match(/post\/([\w\/]+).md/);
    if (route === "index") return { params: { route: [] } };
    return { params: { route: route.split("/") } };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { route = "index" } }) => {
  if (Array.isArray(route)) route = route.join("/");
  const source = getMarkdownContent(route);
  const { content, data } = matter(source);
  data.metaList = data.indexTag ? getAllMeta(data.indexTag) : null;
  data.constants = constants;
  const withKatex = parseKatex(content);
  const mdxSource = await serialize(withKatex, {
    scope: data,
  });
  return { props: { source: mdxSource, frontMatter: data } };
};
