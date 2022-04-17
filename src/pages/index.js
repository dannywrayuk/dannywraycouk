import styled from "@emotion/styled";
import { Column, SubHeading } from "@components/core";
import { Layout } from "@components/Layout";
import { Landing } from "@components/presentation/Landing";
import { TimelineEntry } from "@components/presentation/Timeline";
import { getMetadataById, getMetadataByRoute } from "@utils/getMetadata";

const Wrapper = styled(Column)({
  maxWidth: "700px",
  margin: "0 auto",
  width: "100%",
});

const Home = ({ pinnedPosts, childPosts }) => {
  return (
    <Layout>
      <Landing />
      <Wrapper>
        <SubHeading _css={{ margin: "60px 0" }}>Highlights</SubHeading>
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
};

export default Home;

export const getStaticProps = async () => ({
  props: {
    pinnedPosts: getMetadataById(["test1", "test2"]),
    childPosts: getMetadataByRoute("**/*"),
  },
});
