import { MDXProvider } from "@mdx-js/react";
import { getRouteLayout } from "@components/RouteLayout";
import { MdxComponents } from "@components/MdxComponents";

const Mdx = ({ meta, children }) => {
  const Layout = getRouteLayout(meta.layout);
  return (
    <Layout data={meta}>
      <MDXProvider components={MdxComponents}>{children}</MDXProvider>
    </Layout>
  );
};

export default Mdx;
