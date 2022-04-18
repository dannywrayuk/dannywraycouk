import { MDXRemote } from "next-mdx-remote";
import { MdxComponents } from "@components/MdxComponents";
import { getRouteLayout } from "@components/RouteLayout";
import { getMarkdownAsProps } from "@utils/getMarkdown";
import { asRoute, getFilePaths } from "@utils/getFilePaths";

const RouteHandler = ({ source, frontMatter }) => {
  const Layout = getRouteLayout(frontMatter.layout);
  return (
    <Layout data={frontMatter}>
      <MDXRemote {...source} {...frontMatter} components={MdxComponents} />
    </Layout>
  );
};

export default RouteHandler;

export const getStaticPaths = async () => ({
  paths: getFilePaths()
    .map(asRoute)
    .map((route) => ({ params: { route: route.substring(1).split("/") } })),
  fallback: false,
});

export const getStaticProps = async ({ params: { route } }) => ({
  props: await getMarkdownAsProps(route),
});
