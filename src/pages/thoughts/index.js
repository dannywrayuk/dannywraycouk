import { Layout } from "@components/Layout";
import { Heading, Flex } from "@components/core";
import { getMetadataById, getMetadataByRoute } from "@utils/getMetadata";
import { Mapper } from "@components/Mapper";
import { TimelineEntry } from "@components/presentation/Timeline";

const Thoughts = ({ pinnedPosts, childPosts }) => (
  <Layout>
    <Flex center>
      <Heading mt={60}>thoughts</Heading>
    </Flex>
    <Flex column>
      <Mapper Component={TimelineEntry} data={pinnedPosts} type="pinned" />{" "}
    </Flex>
    <Flex column>
      <Mapper Component={TimelineEntry} data={childPosts} />
    </Flex>
  </Layout>
);

export default Thoughts;

export const getStaticProps = async () => ({
  props: {
    pinnedPosts: getMetadataById(["design-system", "features"]),
    childPosts: getMetadataByRoute("**/*"),
  },
});
