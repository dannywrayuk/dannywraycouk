import nextMdx from "@next/mdx";
import mdxWrapperPlugin from "./src/utils/mdxWrapperPlugin.mjs";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

const withMDX = nextMdx({
  extension: /\.mdx|\.md?$/,
  options: {
    remarkPlugins: [mdxWrapperPlugin, remarkMath],
    rehypePlugins: [rehypeKatex],
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
