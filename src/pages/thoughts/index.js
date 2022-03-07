import styled from "@emotion/styled";
import { Layout } from "@components/Layout";
import { TempPinnedList } from "@components/temp/TempPinnedList";
import {
  SubHeading,
  Column,
  SubSubHeading,
  Text,
  Link,
} from "@components/core";
import { TempPostList } from "@components/temp/TempPostList";
import { getMetadata } from "@utils/getMetadata";
import { TimelineItem } from "@components/presentation/TimelineItem";

const Wrapper = styled(Column)({
  maxWidth: "700px",
  margin: "0 auto",
});

const Thoughts = ({ meta }) => (
  <Layout>
    <Wrapper>
      <SubHeading _css={{ margin: "60px 0" }}>thoughts</SubHeading>
      {meta.map((post) => (
        <TimelineItem key={post.id} label={post.date}>
          <Link href={post.id}>
            <SubSubHeading>{post.title}</SubSubHeading>
          </Link>
          <Text>{post.blurb}</Text>
        </TimelineItem>
      ))}
    </Wrapper>
    <TempPinnedList />
    <TempPostList />
  </Layout>
);

export default Thoughts;

export const getStaticProps = async () => ({
  props: {
    meta: getMetadata("src/pages/thoughts"),
  },
});
