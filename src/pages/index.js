import styled from "styled-components";
import textStore from "../textStore";
import { StandardHead } from "../components/Heads";
import ShrinkingLogo from "../components/ShrinkingLogo";
import Greeting from "../components/Greeting";
import SocialLinks from "../components/SocialLinks";
import NavigationLinks from "../components/NavigationLinks";
import Post from "../components/Post";
import PostPreview from "../components/PostPreview";
import { getMetaList } from "../utils";
import Footer from "../components/Footer";

const { Landing: Text } = textStore;

const MainContainer = styled.div`
  margin: 200px 15px 0;
`;

const StyledSocialLinks = styled(SocialLinks)`
  margin: 50px auto 0 auto;
`;

const SectionMarker = styled.div`
  color: ${({ theme }) => theme.colours.PRIMARY1};
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  margin-top: 50px;
`;

const Home = ({ featuredPostsMeta }) => {
  return (
    <StandardHead>
      <ShrinkingLogo />
      <MainContainer>
        <Greeting />
        <StyledSocialLinks />
        <NavigationLinks />
        <SectionMarker>{Text.FeaturedSection}</SectionMarker>
        {featuredPostsMeta.map((data, id) => (
          <PostPreview
            key={id}
            title={data.title}
            date={data.date}
            description={data.description}
          />
        ))}
      </MainContainer>
      <Footer />
    </StandardHead>
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
