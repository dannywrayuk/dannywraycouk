import { MDXProvider } from "@mdx-js/react";
import { getRouteLayout } from "@components/RouteLayout";
import { MDXComponents, withMDXStyles } from "@components/MDXComponents";
import { MetaTags } from "./Head";
import Head from "next/head";

const Mdx = ({ meta, children }) => {
  const Layout = withMDXStyles(getRouteLayout(meta.layout));
  return (
    <Layout data={meta}>
      <MetaTags meta={meta} />
      <MDXProvider components={MDXComponents}>{children}</MDXProvider>
    </Layout>
  );
};

export default Mdx;
