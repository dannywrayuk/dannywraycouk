import { remarkPlugins, rehypePlugins } from "./plugins/mdPlugins.mjs";
import metadataMutator from "./script/addExtraMetadata.js";

export default {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: "custom",
    deviceSizes: [300, 600, 1200],
    imageSizes: [300],
  },
  env: {
    year: new Date(Date.now()).getFullYear(),
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  webpack: (config, options) => {
    config.resolve.fallback = { fs: false };
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: {
            remarkPlugins,
            rehypePlugins,
            providerImportSource: "@mdx-js/react",
            format: "mdx",
          },
        },
        {
          loader: "@dannywrayuk/md-layout-loader",
          options: {
            metadataMutator,
          },
        },
      ],
    });
    return config;
  },
};
