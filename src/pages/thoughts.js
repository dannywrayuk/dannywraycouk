import { Layout } from "@components/Layout";
import { Heading, Flex } from "@components/core";
import { getMetadataById, getMetadataByRoute } from "@utils/getMetadata";
import { Mapper } from "@components/Mapper";
import { TimelineEntry } from "@components/presentation/Timeline";
import { MetaTags } from "@components/Head";

const meta = {
  title: "Thoughts",
  abstract: "Kinda like a blog.",
};

const Thoughts = ({ pinnedPosts, childPosts }) => (
  <Layout>
    <MetaTags meta={meta} />
    <Heading mt={60} center>
      Featured
    </Heading>
    <Flex column>
      <Mapper Component={TimelineEntry} data={pinnedPosts} type="pinned" />{" "}
    </Flex>
    <Heading mt={60} center>
      Most Recent
    </Heading>
    <Flex column>
      <Mapper Component={TimelineEntry} data={childPosts} />
    </Flex>
  </Layout>
);

export default Thoughts;

export const getStaticProps = async () => ({
  props: {
    pinnedPosts: getMetadataById(["welcome"]),
    childPosts: getMetadataByRoute("/thoughts/*"),
  },
});
