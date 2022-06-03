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
      <Heading mt={60} as="h2" center>
        Highlights
      </Heading>
      <Flex column>
        <Mapper Component={TimelineEntry} data={pinnedPosts} type="pinned" />
      </Flex>
      <Heading mt={60} as="h2" center>
        Most Recent
      </Heading>
      <Flex column>
        <Mapper Component={TimelineEntry} data={childPosts} />
      </Flex>
    </Layout>
  );
};

export default Home;

export const getStaticProps = () => ({
  props: {
    pinnedPosts: getMetadataById(["welcome", "this_site"]),
    childPosts: getMetadataByRoute("/+(thoughts|projects)/*"),
  },
});
