import { MDXProvider } from "@mdx-js/react";
import { getRouteLayout } from "@components/RouteLayout";
import { MDXComponents, withMDXStyles } from "@components/MDXComponents";
import { MetaTags } from "./Head";
import Head from "next/head";

const Mdx = ({ meta, children }) => {
  const Layout = withMDXStyles(getRouteLayout(meta.layout));
  return (
    <Layout data={meta}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.13.3/dist/katex.min.css"
          integrity="sha384-ThssJ7YtjywV52Gj4JE/1SQEDoMEckXyhkFVwaf4nDSm5OBlXeedVYjuuUd0Yua+"
          crossOrigin="anonymous"
        />
      </Head>
      <MetaTags meta={meta} />
      <MDXProvider components={MDXComponents}>{children}</MDXProvider>
    </Layout>
  );
};

export default Mdx;
