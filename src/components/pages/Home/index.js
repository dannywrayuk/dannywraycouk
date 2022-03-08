import { Layout } from "@components/Layout";
import { Landing } from "./sections/Landing";

export const Home = () => {
  return (
    <Layout>
      <Landing />
      <Wrapper>
        <SubHeading _css={{ margin: "60px 0" }}>thoughts</SubHeading>
        {pinnedPosts.map((data) => (
          <TimelineEntry data={data} type="pinned" />
        ))}
      </Wrapper>
      <Wrapper>
        {childPosts.map((data) => (
          <TimelineEntry data={data} />
        ))}
      </Wrapper>
    </Layout>
  );
};

export const getStaticProps = async () => ({
  props: {
    pinnedPosts: getMetadataArray([
      "src/pages/thoughts/test.js",
      "src/pages/thoughts/test.js",
    ]),
    childPosts: getMetadataFromDirectory("src/pages/thoughts"),
  },
});
