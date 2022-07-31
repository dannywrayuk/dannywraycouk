import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import withShiki from "@stefanprobst/rehype-shiki";
import shiki from "shiki";
import rehypeImgSize from "rehype-img-size";

export const remarkPlugins = [remarkMath, remarkGfm];

const highlighter = await shiki.getHighlighter({ theme: "dark-plus" });

export const rehypePlugins = [
  rehypeSlug,
  () => withShiki({ highlighter }),
  () => rehypeKatex({ strict: false }),
  () => rehypeImgSize({ dir: "public" }),
];
