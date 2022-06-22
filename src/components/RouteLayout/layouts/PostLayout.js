import { Flex, Heading, Text } from "@components/core";
import { Layout } from "@components/Layout";
import styled from "@emotion/styled";
import { mq } from "@utils/breakpoints";

const TitleWrapper = styled(Flex)({
  [mq.sm]: {
    textAlign: "center",
  },
});

export const PostLayout = ({
  children,
  data: { title, abstract, tags, hideTags, dateString, hideDate },
  className,
}) => (
  <Layout>
    <TitleWrapper my={60} column rg={30}>
      {!hideDate && dateString && (
        <Text color="var(--color-fg-link)">{dateString}</Text>
      )}
      <Heading fontSize="2.25rem">{title}</Heading>
      {!hideTags && tags && (
        <Text color="var(--color-fg-link)">{tags.join(", ")}</Text>
      )}
      {abstract && (
        <Heading
          as="h2"
          size="md"
          weight="normal"
          color="var(--color-fg-muted)"
        >
          {abstract}
        </Heading>
      )}
    </TitleWrapper>
    <Flex column rg="10px" className={className}>
      {children}
    </Flex>
  </Layout>
);
