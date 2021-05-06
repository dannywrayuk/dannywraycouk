import styled from "styled-components";
import textStore from "../textStore";
import { StandardHead } from "../components/Heads";
import ShrinkingLogo from "../components/ShrinkingLogo";
import Greeting from "../components/Greeting";
import SocialLinks from "../components/SocialLinks";
import NavigationButton from "../components/NavigationButton";
import Post from "../components/Post";
import { getMarkdown } from "../utils";

const { Landing: Text } = textStore;

const MainContainer = styled.div`
  height: 70vh;
`;

const PostContainer = styled.div`
  margin: 0 15px;
`;

const StyledGreeting = styled(Greeting)`
  margin-top: 30vh;
`;

const StyledSocialLinks = styled(SocialLinks)`
  margin: 100px auto 0 auto;
  width: 70%;
`;

const SectionMarker = styled.div`
  color: ${({ theme }) => theme.colours.PRIMARY1};
  font-weight: bold;
  font-size: 18px;
`;

const Home = ({ featuredPost }) => {
  return (
    <StandardHead>
      <ShrinkingLogo />
      <NavigationButton />
      <MainContainer>
        <StyledGreeting />
        <StyledSocialLinks />
      </MainContainer>
      <PostContainer>
        <SectionMarker>{Text.FeaturedPost}</SectionMarker>
        <Post meta={featuredPost.meta} content={featuredPost.content} />
      </PostContainer>
    </StandardHead>
  );
};

export default Home;

export const getStaticProps = async () => {
  const featuredPost = getMarkdown("test");
  return {
    props: {
      featuredPost,
    },
  };
};
