import { Flex, Heading } from "@components/core";
import { Layout } from "@components/Layout";
import { Mapper } from "@components/Mapper";
import { MetaTags } from "@components/Head";
import { Landing } from "@components/presentation/Landing";
import { TimelineEntry } from "@components/presentation/Timeline";
import { getMetadataById, getMetadataByRoute } from "@utils/getMetadata";

const Home = ({ pinnedPosts, childPosts }) => {
  return (
    <Layout>
      <MetaTags />
      <Landing />
      <Flex center>
        <Heading mt={60} as="h2">
          Highlights
        </Heading>
      </Flex>
      <Flex column>
        <Mapper Component={TimelineEntry} data={pinnedPosts} type="pinned" />
      </Flex>
      <Flex column>
        <Mapper Component={TimelineEntry} data={childPosts} />
      </Flex>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => ({
  props: {
    pinnedPosts: getMetadataById(["design-system", "features"]),
    childPosts: getMetadataByRoute("**/*"),
  },
});
