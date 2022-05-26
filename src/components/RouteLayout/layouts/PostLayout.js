import { Flex, Heading, Hr, Text } from "@components/core";
import { Layout, LayoutCore, SectionSpacing } from "@components/Layout";

export const PostLayout = ({
  children,
  data: { title, abstract },
  className,
}) => (
  <Layout>
    <Flex column>
      <Heading mt={60}>{title}</Heading>
      <Text>{abstract}</Text>
      <Hr />
    </Flex>
    <Flex column rg="10px" className={className}>
      {children}
    </Flex>
  </Layout>
);
