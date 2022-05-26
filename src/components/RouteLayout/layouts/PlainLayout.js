import { Flex } from "@components/core";
import { Layout } from "@components/Layout";

export const PlainLayout = ({ children, className }) => (
  <Layout>
    <Flex column className={className}>
      {children}
    </Flex>
  </Layout>
);
