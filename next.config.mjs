import nextMdx from "@next/mdx";
import mdxWrapperPlugin from "./src/utils/mdxWrapperPlugin.mjs";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkFrontMatter from "remark-frontmatter";
import withShiki from "@stefanprobst/rehype-shiki";
import shiki from "shiki";
import rehypeImgSize from "rehype-img-size";

const highlighter = await shiki.getHighlighter({ theme: "dark-plus" });

const withMDX = nextMdx({
  extension: /\.mdx|\.md?$/,
  options: {
    remarkPlugins: [mdxWrapperPlugin, remarkMath, remarkGfm, remarkFrontMatter],
    rehypePlugins: [
      rehypeSlug,
      () => withShiki({ highlighter }),
      () => rehypeKatex({ strict: false }),
      () => rehypeImgSize({ dir: "public" }),
    ],
    providerImportSource: "@mdx-js/react",
  },
});

export default withMDX({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    year: new Date(Date.now()).getFullYear(),
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
