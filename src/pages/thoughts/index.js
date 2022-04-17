import styled from "@emotion/styled";
import { Layout } from "@components/Layout";
import { SubHeading, Column } from "@components/core";
import { getMetadataById, getMetadataByRoute } from "@utils/getMetadata";
import { TimelineEntry } from "@components/presentation/Timeline";

const Wrapper = styled(Column)({
  maxWidth: "700px",
  margin: "0 auto",
});

const Thoughts = ({ pinnedPosts, childPosts }) => (
  <Layout>
    <Wrapper>
      <SubHeading _css={{ margin: "60px 0" }}>thoughts</SubHeading>
      {pinnedPosts.map((data, id) => (
        <TimelineEntry key={data.route + id} data={data} type="pinned" />
      ))}
    </Wrapper>
    <Wrapper>
      {childPosts.map((data, id) => (
        <TimelineEntry key={data.route + id} data={data} />
      ))}
    </Wrapper>
  </Layout>
);

export default Thoughts;

export const getStaticProps = async () => ({
  props: {
    pinnedPosts: getMetadataById(["test1", "test2"]),
    childPosts: getMetadataByRoute("/thoughts/*"),
  },
});
