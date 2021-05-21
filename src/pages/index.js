import styled from "styled-components";
import BlankPage from "../components/BlankPage";
import Greeting from "../components/Greeting";
import SocialLinks from "../components/SocialLinks";
import NavigationLinks from "../components/NavigationLinks";
import PostPreview from "../components/PostPreview";
import { getMetaList } from "../utils";
import Config from "../config";

const { Landing: Text } = Config.Text;

const StyledSocialLinks = styled(SocialLinks)`
  margin: 50px auto 0 auto;
`;

const SectionMarker = styled.div`
  color: ${({ theme }) => theme.colours.PRIMARY1};
  font-weight: bold;
  font-size: 20px;
  margin-top: 50px;
`;

const Home = ({ featuredPostsMeta }) => {
  return (
    <BlankPage showLogo showFooter applyMargin>
      <Greeting />
      <StyledSocialLinks />
      <NavigationLinks />
      <SectionMarker>{Text.FeaturedSection}</SectionMarker>
      {featuredPostsMeta.map((data, id) => (
        <PostPreview key={id} data={data} />
      ))}
    </BlankPage>
  );
};

export default Home;

export const getStaticProps = async () => {
  const featuredPosts = ["test", "thoughts/test2"];
  const featuredPostsMeta = getMetaList(
    featuredPosts.map((post) => `post/${post}.md`)
  );
  return {
    props: {
      featuredPostsMeta,
    },
  };
};
